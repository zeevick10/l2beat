import type { Env } from '@l2beat/backend-tools'
import { type ChainConfig, ProjectService } from '@l2beat/config'
import type { UnixTime } from '@l2beat/shared-pure'
import type { Config } from './Config'
import { getChainConfig } from './chain/getChainConfig'
import { FeatureFlags } from './FeatureFlags'
import { getActivityConfig } from './features/activity'
import { getDaTrackingConfig } from './features/da'
import { getDaBeatConfig } from './features/dabeat'
import { getTrackedTxsConfig } from './features/trackedTxs'
import { getTvsConfig } from './features/tvs'
import { getUpdateMonitorConfig } from './features/updateMonitor'
import { getVerifiersConfig } from './features/verifiers'
import { getGitCommitHash } from './getGitCommitHash'

interface MakeConfigOptions {
  name: string
  isLocal?: boolean
  minTimestampOverride?: UnixTime
}

export async function makeConfig(
  env: Env,
  { name, isLocal, minTimestampOverride }: MakeConfigOptions,
): Promise<Config> {
  const ps = new ProjectService()

  const flags = new FeatureFlags(
    env.string('FEATURES', isLocal ? '' : '*'),
  ).append('status')

  const chains = (await ps.getProjects({ select: ['chainConfig'] })).map(
    (p) => p.chainConfig,
  )
  const isReadonly = env.boolean(
    'READONLY',
    // if we connect locally to production db, we want to be readonly!
    isLocal && !env.string('LOCAL_DB_URL').includes('localhost'),
  )

  return {
    name,
    isReadonly,
    clock: {
      minBlockTimestamp:
        minTimestampOverride ?? getEthereumMinTimestamp(chains),
      safeTimeOffsetSeconds: 60 * 60,
      hourlyCutoffDays: 7,
      sixHourlyCutoffDays: 90,
    },
    database: isLocal
      ? {
          connection: {
            connectionString: env.string('LOCAL_DB_URL'),
            application_name: 'BE-LOCAL',
            ssl: !env.string('LOCAL_DB_URL').includes('localhost')
              ? { rejectUnauthorized: false }
              : undefined,
          },
          freshStart: env.boolean('FRESH_START', false),
          enableQueryLogging: env.boolean('ENABLE_QUERY_LOGGING', false),
          connectionPoolSize: {
            // defaults used by knex
            min: 2,
            max: 10,
          },
          isReadonly,
        }
      : {
          freshStart: false,
          enableQueryLogging: env.boolean('ENABLE_QUERY_LOGGING', false),
          connection: {
            connectionString: env.string('DATABASE_URL'),
            application_name: env.string('DATABASE_APP_NAME', 'BE-PROD'),
            ssl: { rejectUnauthorized: false },
          },
          connectionPoolSize: {
            // our heroku plan allows us for up to 400 open connections
            min: 20,
            max: env.integer('DATABASE_MAX_POOL_SIZE', 200),
          },
          isReadonly,
        },
    coingeckoApiKey: env.string('COINGECKO_API_KEY'),
    api: {
      port: env.integer('PORT', isLocal ? 3001 : undefined),
      cache: {
        tvs: flags.isEnabled('cache', 'tvs'),
        liveness: flags.isEnabled('cache', 'liveness'),
        verifiers: flags.isEnabled('cache', 'verifiers'),
      },
    },
    health: {
      releasedAt: env.optionalString('HEROKU_RELEASE_CREATED_AT'),
      startedAt: new Date().toISOString(),
      commitSha: env.string('HEROKU_SLUG_COMMIT', getGitCommitHash()),
    },
    metricsAuth: isLocal
      ? false
      : {
          user: env.string('METRICS_AUTH_USER'),
          pass: env.string('METRICS_AUTH_PASS'),
        },
    tvs:
      flags.isEnabled('tvs') &&
      (await getTvsConfig(
        ps,
        flags,
        env.optionalInteger('TVS_SINCE_TIMESTAMP'),
      )),
    trackedTxsConfig:
      flags.isEnabled('tracked-txs') &&
      (await getTrackedTxsConfig(ps, env, flags)),
    activity:
      flags.isEnabled('activity') && (await getActivityConfig(ps, env, flags)),
    verifiers: flags.isEnabled('verifiers') && (await getVerifiersConfig(ps)),
    lzOAppsEnabled: flags.isEnabled('lzOApps'),
    statusEnabled: flags.isEnabled('status'),
    updateMonitor:
      flags.isEnabled('updateMonitor') &&
      getUpdateMonitorConfig(env, flags, chains, isLocal),
    implementationChangeReporterEnabled: flags.isEnabled(
      'implementationChangeReporter',
    ),
    flatSourceModuleEnabled: flags.isEnabled('flatSourcesModule'),
    chains: chains.map((x) => ({ name: x.name, chainId: x.chainId })),
    daBeat: flags.isEnabled('da-beat') && (await getDaBeatConfig(ps, env)),
    chainConfig: await getChainConfig(ps, env),
    beaconApi: {
      url: env.optionalString(['ETHEREUM_BEACON_API_URL']),
      callsPerMinute: env.integer(
        ['ETHEREUM_BEACON_API_CALLS_PER_MINUTE'],
        600,
      ),
      timeout: env.integer(['ETHEREUM_BEACON_API_TIMEOUT'], 10000),
    },
    da: flags.isEnabled('da') && (await getDaTrackingConfig(ps, env)),
    shared: flags.isEnabled('shared') && {
      ethereumWsUrl: env.string(['ETHEREUM_WS_URL']),
    },
    discord: {
      anomaliesWebhookUrl: env.optionalString('ANOMALIES_DISCORD_WEBHOOK_URL'),
      anomaliesMinDuration: env.integer(
        'ANOMALIES_MIN_DURATION',
        60 * 60, // 1 hour
      ),
    },
    // Must be last
    flags: flags.getResolved(),
  }
}

function getEthereumMinTimestamp(chains: ChainConfig[]) {
  const minBlockTimestamp = chains.find(
    (c) => c.name === 'ethereum',
  )?.sinceTimestamp
  if (!minBlockTimestamp) {
    throw new Error('Missing minBlockTimestamp for ethereum')
  }
  return minBlockTimestamp
}
