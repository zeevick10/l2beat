Generated with discovered.json: 0x5b6346a8ea0720df42f49abe826ed6501334406b

# Diff at Mon, 28 Jul 2025 06:07:38 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@8e540d8d4e2ea097e63a067c52194d1bf06f9b4a block: 22823842
- current block number: 23015750

## Description

ms member added.

## Watched changes

```diff
    contract EigenLayerRewardsInitiatorMultisig (0x178eeeA9E0928dA2153A1d7951FBe30CF8371b8A) {
    +++ description: None
      values.$members.0:
+        "eth:0xc201C95e809292c6ad242F4bbD8B342AD06571FB"
      values.multisigThreshold:
-        "3 of 5 (60%)"
+        "3 of 6 (50%)"
    }
```

Generated with discovered.json: 0xfb4596b9bb5c3943a91023214543137831d1612a

# Diff at Mon, 14 Jul 2025 12:45:00 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@9f4300dad2f3d080cd56fa311d4a848556c74e72 block: 22823842
- current block number: 22823842

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 22823842 (main branch discovery), not current.

```diff
    contract EigenDAOperationsMultisig (0x002721B4790d97dC140a049936aA710152Ba92D5) {
    +++ description: None
      address:
-        "0x002721B4790d97dC140a049936aA710152Ba92D5"
+        "eth:0x002721B4790d97dC140a049936aA710152Ba92D5"
      values.$implementation:
-        "0x41675C099F32341bf84BFc5382aF534df5C7461a"
+        "eth:0x41675C099F32341bf84BFc5382aF534df5C7461a"
      values.$members.0:
-        "0xA3e302a6Ea0cf79B8580d94e92Eb5514292daacE"
+        "eth:0xA3e302a6Ea0cf79B8580d94e92Eb5514292daacE"
      values.$members.1:
-        "0x4985238672d91Baed43dF1B2431F67bc332A1753"
+        "eth:0x4985238672d91Baed43dF1B2431F67bc332A1753"
      values.$members.2:
-        "0x1b6cC4C0670bBA2B992b82Cb8E76B286D63264c6"
+        "eth:0x1b6cC4C0670bBA2B992b82Cb8E76B286D63264c6"
      values.$members.3:
-        "0x403F4d4958409480502CdC78a54cE1B67263C17a"
+        "eth:0x403F4d4958409480502CdC78a54cE1B67263C17a"
      values.$members.4:
-        "0x891bbCfEF0C7504218b3156Cd0795cA5C8c7d489"
+        "eth:0x891bbCfEF0C7504218b3156Cd0795cA5C8c7d489"
      values.$members.5:
-        "0x3f64654ec71d806F8d91AF285A6c34Df818E3aC3"
+        "eth:0x3f64654ec71d806F8d91AF285A6c34Df818E3aC3"
      values.$members.6:
-        "0x5D9A6573206e5205702E4caD87DC61f4C2a1Ad04"
+        "eth:0x5D9A6573206e5205702E4caD87DC61f4C2a1Ad04"
      implementationNames.0x002721B4790d97dC140a049936aA710152Ba92D5:
-        "SafeProxy"
      implementationNames.0x41675C099F32341bf84BFc5382aF534df5C7461a:
-        "Safe"
      implementationNames.eth:0x002721B4790d97dC140a049936aA710152Ba92D5:
+        "SafeProxy"
      implementationNames.eth:0x41675C099F32341bf84BFc5382aF534df5C7461a:
+        "Safe"
    }
```

```diff
    contract StakeRegistry (0x006124Ae7976137266feeBFb3F4D2BE4C073139D) {
    +++ description: Keeps track of the total stake of each operator.
      address:
-        "0x006124Ae7976137266feeBFb3F4D2BE4C073139D"
+        "eth:0x006124Ae7976137266feeBFb3F4D2BE4C073139D"
      values.$admin:
-        "0x8247EF5705d3345516286B72bFE6D690197C2E99"
+        "eth:0x8247EF5705d3345516286B72bFE6D690197C2E99"
      values.$implementation:
-        "0x1C468cf7089D263c2f53e2579b329B16aBc4dd96"
+        "eth:0x1C468cf7089D263c2f53e2579b329B16aBc4dd96"
      values.$pastUpgrades.0.2.0:
-        "0x1f96861fEFa1065a5A96F20Deb6D8DC3ff48F7f9"
+        "eth:0x1f96861fEFa1065a5A96F20Deb6D8DC3ff48F7f9"
      values.$pastUpgrades.1.2.0:
-        "0x1C468cf7089D263c2f53e2579b329B16aBc4dd96"
+        "eth:0x1C468cf7089D263c2f53e2579b329B16aBc4dd96"
      values.delegation:
-        "0x39053D51B77DC0d36036Fc1fCc8Cb819df8Ef37A"
+        "eth:0x39053D51B77DC0d36036Fc1fCc8Cb819df8Ef37A"
+++ description: The strategies for the first quorum (ETH).
      values.quorumStrategies.0.0:
-        "0xbeaC0eeEeeeeEEeEeEEEEeeEEeEeeeEeeEEBEaC0"
+        "eth:0xbeaC0eeEeeeeEEeEeEEEEeeEEeEeeeEeeEEBEaC0"
+++ description: The strategies for the first quorum (ETH).
      values.quorumStrategies.0.1:
-        "0x93c4b944D05dfe6df7645A86cd2206016c51564D"
+        "eth:0x93c4b944D05dfe6df7645A86cd2206016c51564D"
+++ description: The strategies for the first quorum (ETH).
      values.quorumStrategies.0.2:
-        "0x1BeE69b7dFFfA4E2d53C2a2Df135C388AD25dCD2"
+        "eth:0x1BeE69b7dFFfA4E2d53C2a2Df135C388AD25dCD2"
+++ description: The strategies for the first quorum (ETH).
      values.quorumStrategies.0.3:
-        "0x54945180dB7943c0ed0FEE7EdaB2Bd24620256bc"
+        "eth:0x54945180dB7943c0ed0FEE7EdaB2Bd24620256bc"
+++ description: The strategies for the first quorum (ETH).
      values.quorumStrategies.0.4:
-        "0x9d7eD45EE2E8FC5482fa2428f15C971e6369011d"
+        "eth:0x9d7eD45EE2E8FC5482fa2428f15C971e6369011d"
+++ description: The strategies for the first quorum (ETH).
      values.quorumStrategies.0.5:
-        "0x13760F50a9d7377e4F20CB8CF9e4c26586c658ff"
+        "eth:0x13760F50a9d7377e4F20CB8CF9e4c26586c658ff"
+++ description: The strategies for the first quorum (ETH).
      values.quorumStrategies.0.6:
-        "0xa4C637e0F704745D182e4D38cAb7E7485321d059"
+        "eth:0xa4C637e0F704745D182e4D38cAb7E7485321d059"
+++ description: The strategies for the first quorum (ETH).
      values.quorumStrategies.0.7:
-        "0x57ba429517c3473B6d34CA9aCd56c0e735b94c02"
+        "eth:0x57ba429517c3473B6d34CA9aCd56c0e735b94c02"
+++ description: The strategies for the first quorum (ETH).
      values.quorumStrategies.0.8:
-        "0x0Fe4F44beE93503346A3Ac9EE5A26b130a5796d6"
+        "eth:0x0Fe4F44beE93503346A3Ac9EE5A26b130a5796d6"
+++ description: The strategies for the first quorum (ETH).
      values.quorumStrategies.0.9:
-        "0x7CA911E83dabf90C90dD3De5411a10F1A6112184"
+        "eth:0x7CA911E83dabf90C90dD3De5411a10F1A6112184"
+++ description: The strategies for the first quorum (ETH).
      values.quorumStrategies.0.10:
-        "0x8CA7A5d6f3acd3A7A8bC468a8CD0FB14B6BD28b6"
+        "eth:0x8CA7A5d6f3acd3A7A8bC468a8CD0FB14B6BD28b6"
+++ description: The strategies for the first quorum (ETH).
      values.quorumStrategies.0.11:
-        "0xAe60d8180437b5C34bB956822ac2710972584473"
+        "eth:0xAe60d8180437b5C34bB956822ac2710972584473"
+++ description: The strategies for the first quorum (ETH).
      values.quorumStrategies.0.12:
-        "0x298aFB19A105D59E74658C4C334Ff360BadE6dd2"
+        "eth:0x298aFB19A105D59E74658C4C334Ff360BadE6dd2"
+++ description: The strategies for the first quorum (ETH).
      values.quorumStrategies.1.0:
-        "0xaCB55C530Acdb2849e6d4f36992Cd8c9D50ED8F7"
+        "eth:0xaCB55C530Acdb2849e6d4f36992Cd8c9D50ED8F7"
+++ description: The strategies for the first quorum (ETH).
      values.quorumStrategies.2.0:
-        "0x6075546538c3eFbD607ea6aFC24149fCcFb2edF4"
+        "eth:0x6075546538c3eFbD607ea6aFC24149fCcFb2edF4"
      values.registryCoordinator:
-        "0x0BAAc79acD45A023E19345c352d8a7a83C4e5656"
+        "eth:0x0BAAc79acD45A023E19345c352d8a7a83C4e5656"
      implementationNames.0x006124Ae7976137266feeBFb3F4D2BE4C073139D:
-        "TransparentUpgradeableProxy"
      implementationNames.0x1C468cf7089D263c2f53e2579b329B16aBc4dd96:
-        "StakeRegistry"
      implementationNames.eth:0x006124Ae7976137266feeBFb3F4D2BE4C073139D:
+        "TransparentUpgradeableProxy"
      implementationNames.eth:0x1C468cf7089D263c2f53e2579b329B16aBc4dd96:
+        "StakeRegistry"
    }
```

```diff
    contract BLSApkRegistry (0x00A5Fd09F6CeE6AE9C8b0E5e33287F7c82880505) {
    +++ description: Keeps track of the BLS public keys of each operator and the quorum aggregated keys.
      address:
-        "0x00A5Fd09F6CeE6AE9C8b0E5e33287F7c82880505"
+        "eth:0x00A5Fd09F6CeE6AE9C8b0E5e33287F7c82880505"
      values.$admin:
-        "0x8247EF5705d3345516286B72bFE6D690197C2E99"
+        "eth:0x8247EF5705d3345516286B72bFE6D690197C2E99"
      values.$implementation:
-        "0x5d0B9cE2e277Daf508528E9f6Bf6314E79e4eD2b"
+        "eth:0x5d0B9cE2e277Daf508528E9f6Bf6314E79e4eD2b"
      values.$pastUpgrades.0.2.0:
-        "0x1f96861fEFa1065a5A96F20Deb6D8DC3ff48F7f9"
+        "eth:0x1f96861fEFa1065a5A96F20Deb6D8DC3ff48F7f9"
      values.$pastUpgrades.1.2.0:
-        "0x5d0B9cE2e277Daf508528E9f6Bf6314E79e4eD2b"
+        "eth:0x5d0B9cE2e277Daf508528E9f6Bf6314E79e4eD2b"
      values.registryCoordinator:
-        "0x0BAAc79acD45A023E19345c352d8a7a83C4e5656"
+        "eth:0x0BAAc79acD45A023E19345c352d8a7a83C4e5656"
      implementationNames.0x00A5Fd09F6CeE6AE9C8b0E5e33287F7c82880505:
-        "TransparentUpgradeableProxy"
      implementationNames.0x5d0B9cE2e277Daf508528E9f6Bf6314E79e4eD2b:
-        "BLSApkRegistry"
      implementationNames.eth:0x00A5Fd09F6CeE6AE9C8b0E5e33287F7c82880505:
+        "TransparentUpgradeableProxy"
      implementationNames.eth:0x5d0B9cE2e277Daf508528E9f6Bf6314E79e4eD2b:
+        "BLSApkRegistry"
    }
```

```diff
    contract RegistryCoordinator (0x0BAAc79acD45A023E19345c352d8a7a83C4e5656) {
    +++ description: Operators register here with an AVS: The coordinator has three registries: 1) a `StakeRegistry` that keeps track of operators' stakes, 2) a `BLSApkRegistry` that keeps track of operators' BLS public keys and aggregate BLS public keys for each quorum, 3) an `IndexRegistry` that keeps track of an ordered list of operators for each quorum.
      address:
-        "0x0BAAc79acD45A023E19345c352d8a7a83C4e5656"
+        "eth:0x0BAAc79acD45A023E19345c352d8a7a83C4e5656"
      values.$admin:
-        "0x8247EF5705d3345516286B72bFE6D690197C2E99"
+        "eth:0x8247EF5705d3345516286B72bFE6D690197C2E99"
      values.$implementation:
-        "0x2088435ABcB1234A9427B755931C9064C93a2595"
+        "eth:0x2088435ABcB1234A9427B755931C9064C93a2595"
      values.$pastUpgrades.0.2.0:
-        "0x1f96861fEFa1065a5A96F20Deb6D8DC3ff48F7f9"
+        "eth:0x1f96861fEFa1065a5A96F20Deb6D8DC3ff48F7f9"
      values.$pastUpgrades.1.2.0:
-        "0xd3e09a0c2A9A6FDf5E92aE65D3CC090A4dF8EECF"
+        "eth:0xd3e09a0c2A9A6FDf5E92aE65D3CC090A4dF8EECF"
      values.$pastUpgrades.2.2.0:
-        "0xdcabf0bE991d4609096CCe316df08d091356E03F"
+        "eth:0xdcabf0bE991d4609096CCe316df08d091356E03F"
      values.$pastUpgrades.3.2.0:
-        "0x2088435ABcB1234A9427B755931C9064C93a2595"
+        "eth:0x2088435ABcB1234A9427B755931C9064C93a2595"
      values.blsApkRegistry:
-        "0x00A5Fd09F6CeE6AE9C8b0E5e33287F7c82880505"
+        "eth:0x00A5Fd09F6CeE6AE9C8b0E5e33287F7c82880505"
      values.churnApprover:
-        "0xe0550117Cb066D3b330eBd764B0d75D3BA378734"
+        "eth:0xe0550117Cb066D3b330eBd764B0d75D3BA378734"
      values.ejector:
-        "0x130d8EA0052B45554e4C99079B84df292149Bd5E"
+        "eth:0x130d8EA0052B45554e4C99079B84df292149Bd5E"
      values.indexRegistry:
-        "0xBd35a7a1CDeF403a6a99e4E8BA0974D198455030"
+        "eth:0xBd35a7a1CDeF403a6a99e4E8BA0974D198455030"
      values.owner:
-        "0x002721B4790d97dC140a049936aA710152Ba92D5"
+        "eth:0x002721B4790d97dC140a049936aA710152Ba92D5"
      values.pauserRegistry:
-        "0x0c431C66F4dE941d089625E5B423D00707977060"
+        "eth:0x0c431C66F4dE941d089625E5B423D00707977060"
      values.registries.0:
-        "0x006124Ae7976137266feeBFb3F4D2BE4C073139D"
+        "eth:0x006124Ae7976137266feeBFb3F4D2BE4C073139D"
      values.registries.1:
-        "0x00A5Fd09F6CeE6AE9C8b0E5e33287F7c82880505"
+        "eth:0x00A5Fd09F6CeE6AE9C8b0E5e33287F7c82880505"
      values.registries.2:
-        "0xBd35a7a1CDeF403a6a99e4E8BA0974D198455030"
+        "eth:0xBd35a7a1CDeF403a6a99e4E8BA0974D198455030"
      values.serviceManager:
-        "0x870679E138bCdf293b7Ff14dD44b70FC97e12fc0"
+        "eth:0x870679E138bCdf293b7Ff14dD44b70FC97e12fc0"
      values.socketRegistry:
-        "0x5a3eD432f2De9645940333e4474bBAAB8cf64cf2"
+        "eth:0x5a3eD432f2De9645940333e4474bBAAB8cf64cf2"
      values.stakeRegistry:
-        "0x006124Ae7976137266feeBFb3F4D2BE4C073139D"
+        "eth:0x006124Ae7976137266feeBFb3F4D2BE4C073139D"
      implementationNames.0x0BAAc79acD45A023E19345c352d8a7a83C4e5656:
-        "TransparentUpgradeableProxy"
      implementationNames.0x2088435ABcB1234A9427B755931C9064C93a2595:
-        "RegistryCoordinator"
      implementationNames.eth:0x0BAAc79acD45A023E19345c352d8a7a83C4e5656:
+        "TransparentUpgradeableProxy"
      implementationNames.eth:0x2088435ABcB1234A9427B755931C9064C93a2595:
+        "RegistryCoordinator"
    }
```

```diff
    contract PauserRegistry (0x0c431C66F4dE941d089625E5B423D00707977060) {
    +++ description: Defines and stores pauser and unpauser roles for EigenDA contracts.
      address:
-        "0x0c431C66F4dE941d089625E5B423D00707977060"
+        "eth:0x0c431C66F4dE941d089625E5B423D00707977060"
      values.pausers.0:
-        "0xBE1685C81aA44FF9FB319dD389addd9374383e90"
+        "eth:0xBE1685C81aA44FF9FB319dD389addd9374383e90"
      values.pausers.1:
-        "0x5050389572f2d220ad927CcbeA0D406831012390"
+        "eth:0x5050389572f2d220ad927CcbeA0D406831012390"
      values.pausers.2:
-        "0x369e6F597e22EaB55fFb173C6d9cD234BD699111"
+        "eth:0x369e6F597e22EaB55fFb173C6d9cD234BD699111"
      values.unpauser:
-        "0x369e6F597e22EaB55fFb173C6d9cD234BD699111"
+        "eth:0x369e6F597e22EaB55fFb173C6d9cD234BD699111"
      implementationNames.0x0c431C66F4dE941d089625E5B423D00707977060:
-        "PauserRegistry"
      implementationNames.eth:0x0c431C66F4dE941d089625E5B423D00707977060:
+        "PauserRegistry"
    }
```

```diff
    contract EjectionManager (0x130d8EA0052B45554e4C99079B84df292149Bd5E) {
    +++ description: Contract used for ejection of operators from the RegistryCoordinator for violating the Service Legal Agreement (SLA).
      address:
-        "0x130d8EA0052B45554e4C99079B84df292149Bd5E"
+        "eth:0x130d8EA0052B45554e4C99079B84df292149Bd5E"
      values.$admin:
-        "0x8247EF5705d3345516286B72bFE6D690197C2E99"
+        "eth:0x8247EF5705d3345516286B72bFE6D690197C2E99"
      values.$implementation:
-        "0xC125fECDDabFe13f29EB287Bb8551892AEE7C98A"
+        "eth:0xC125fECDDabFe13f29EB287Bb8551892AEE7C98A"
      values.$pastUpgrades.0.2.0:
-        "0x1f96861fEFa1065a5A96F20Deb6D8DC3ff48F7f9"
+        "eth:0x1f96861fEFa1065a5A96F20Deb6D8DC3ff48F7f9"
      values.$pastUpgrades.1.2.0:
-        "0x1A27AC48D40F70213Ae6ec64f66852e0A1a0E6fa"
+        "eth:0x1A27AC48D40F70213Ae6ec64f66852e0A1a0E6fa"
      values.$pastUpgrades.2.2.0:
-        "0x33A517608999DF5CEfFa2b2EbA88B4461c26Af6f"
+        "eth:0x33A517608999DF5CEfFa2b2EbA88B4461c26Af6f"
      values.$pastUpgrades.3.2.0:
-        "0xC125fECDDabFe13f29EB287Bb8551892AEE7C98A"
+        "eth:0xC125fECDDabFe13f29EB287Bb8551892AEE7C98A"
      values.ejectors.0:
-        "0xD2Ee81Cf07B12140C793FcE5B26313CDd9d78eA8"
+        "eth:0xD2Ee81Cf07B12140C793FcE5B26313CDd9d78eA8"
      values.ejectors.1:
-        "0x8642473a123FE33b0aaE90bD8604eA1029417236"
+        "eth:0x8642473a123FE33b0aaE90bD8604eA1029417236"
      values.ejectors.2:
-        "0x338477FfaF63c04AC06048787f910671eC914B34"
+        "eth:0x338477FfaF63c04AC06048787f910671eC914B34"
      values.owner:
-        "0x002721B4790d97dC140a049936aA710152Ba92D5"
+        "eth:0x002721B4790d97dC140a049936aA710152Ba92D5"
      values.registryCoordinator:
-        "0x0BAAc79acD45A023E19345c352d8a7a83C4e5656"
+        "eth:0x0BAAc79acD45A023E19345c352d8a7a83C4e5656"
      values.stakeRegistry:
-        "0x006124Ae7976137266feeBFb3F4D2BE4C073139D"
+        "eth:0x006124Ae7976137266feeBFb3F4D2BE4C073139D"
      implementationNames.0x130d8EA0052B45554e4C99079B84df292149Bd5E:
-        "TransparentUpgradeableProxy"
      implementationNames.0xC125fECDDabFe13f29EB287Bb8551892AEE7C98A:
-        "EjectionManager"
      implementationNames.eth:0x130d8EA0052B45554e4C99079B84df292149Bd5E:
+        "TransparentUpgradeableProxy"
      implementationNames.eth:0xC125fECDDabFe13f29EB287Bb8551892AEE7C98A:
+        "EjectionManager"
    }
```

```diff
    contract EigenLayerRewardsInitiatorMultisig (0x178eeeA9E0928dA2153A1d7951FBe30CF8371b8A) {
    +++ description: None
      address:
-        "0x178eeeA9E0928dA2153A1d7951FBe30CF8371b8A"
+        "eth:0x178eeeA9E0928dA2153A1d7951FBe30CF8371b8A"
      values.$implementation:
-        "0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552"
+        "eth:0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552"
      values.$members.0:
-        "0x55688D9211bC00BA573A1e0672e5de050818a360"
+        "eth:0x55688D9211bC00BA573A1e0672e5de050818a360"
      values.$members.1:
-        "0x68bbBD6c18B0bc1B563489A13a398345E9da23d0"
+        "eth:0x68bbBD6c18B0bc1B563489A13a398345E9da23d0"
      values.$members.2:
-        "0x2bBA03bA38D90634e6afD8C23C16ca01651bc493"
+        "eth:0x2bBA03bA38D90634e6afD8C23C16ca01651bc493"
      values.$members.3:
-        "0xf20eD26be203f09B8F0Cb3265E74BB6AD24408b4"
+        "eth:0xf20eD26be203f09B8F0Cb3265E74BB6AD24408b4"
      values.$members.4:
-        "0xca3E83c0e41A1f27b9f832F4fcE22e79Cffecfc7"
+        "eth:0xca3E83c0e41A1f27b9f832F4fcE22e79Cffecfc7"
      implementationNames.0x178eeeA9E0928dA2153A1d7951FBe30CF8371b8A:
-        "GnosisSafeProxy"
      implementationNames.0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552:
-        "GnosisSafe"
      implementationNames.eth:0x178eeeA9E0928dA2153A1d7951FBe30CF8371b8A:
+        "GnosisSafeProxy"
      implementationNames.eth:0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552:
+        "GnosisSafe"
    }
```

```diff
    EOA  (0x1b6cC4C0670bBA2B992b82Cb8E76B286D63264c6) {
    +++ description: None
      address:
-        "0x1b6cC4C0670bBA2B992b82Cb8E76B286D63264c6"
+        "eth:0x1b6cC4C0670bBA2B992b82Cb8E76B286D63264c6"
    }
```

```diff
    EOA  (0x2bBA03bA38D90634e6afD8C23C16ca01651bc493) {
    +++ description: None
      address:
-        "0x2bBA03bA38D90634e6afD8C23C16ca01651bc493"
+        "eth:0x2bBA03bA38D90634e6afD8C23C16ca01651bc493"
    }
```

```diff
    contract EigenDA Multisig (0x338477FfaF63c04AC06048787f910671eC914B34) {
    +++ description: None
      address:
-        "0x338477FfaF63c04AC06048787f910671eC914B34"
+        "eth:0x338477FfaF63c04AC06048787f910671eC914B34"
      values.$implementation:
-        "0x41675C099F32341bf84BFc5382aF534df5C7461a"
+        "eth:0x41675C099F32341bf84BFc5382aF534df5C7461a"
      values.$members.0:
-        "0x9308319e3988843f36BC6682Ffa571525E56a125"
+        "eth:0x9308319e3988843f36BC6682Ffa571525E56a125"
      values.$members.1:
-        "0x5262498E7D4fbbb08425b2a06D91157acDC50aDA"
+        "eth:0x5262498E7D4fbbb08425b2a06D91157acDC50aDA"
      values.$members.2:
-        "0x995152ee7BB6304565Fbe04465d2c4D1BdD5683F"
+        "eth:0x995152ee7BB6304565Fbe04465d2c4D1BdD5683F"
      values.$members.3:
-        "0xA38372470ed4c3C4bb5123CC7f335212950e350A"
+        "eth:0xA38372470ed4c3C4bb5123CC7f335212950e350A"
      values.$members.4:
-        "0x44aC63d4e18c0d24d0EDe1C058D5A93Fc2fbB904"
+        "eth:0x44aC63d4e18c0d24d0EDe1C058D5A93Fc2fbB904"
      values.$members.5:
-        "0x3C20b05f44ef008A5b848761e58e5Ca9594163e9"
+        "eth:0x3C20b05f44ef008A5b848761e58e5Ca9594163e9"
      values.$members.6:
-        "0xA4f7168cEa82877B23Bc55a7fd7557D546F4dD31"
+        "eth:0xA4f7168cEa82877B23Bc55a7fd7557D546F4dD31"
      values.$members.7:
-        "0x542aC639c0DeF0a468aed462B474FF9B7858Bd7E"
+        "eth:0x542aC639c0DeF0a468aed462B474FF9B7858Bd7E"
      implementationNames.0x338477FfaF63c04AC06048787f910671eC914B34:
-        "SafeProxy"
      implementationNames.0x41675C099F32341bf84BFc5382aF534df5C7461a:
-        "Safe"
      implementationNames.eth:0x338477FfaF63c04AC06048787f910671eC914B34:
+        "SafeProxy"
      implementationNames.eth:0x41675C099F32341bf84BFc5382aF534df5C7461a:
+        "Safe"
    }
```

```diff
    EOA  (0x3C20b05f44ef008A5b848761e58e5Ca9594163e9) {
    +++ description: None
      address:
-        "0x3C20b05f44ef008A5b848761e58e5Ca9594163e9"
+        "eth:0x3C20b05f44ef008A5b848761e58e5Ca9594163e9"
    }
```

```diff
    EOA  (0x3f64654ec71d806F8d91AF285A6c34Df818E3aC3) {
    +++ description: None
      address:
-        "0x3f64654ec71d806F8d91AF285A6c34Df818E3aC3"
+        "eth:0x3f64654ec71d806F8d91AF285A6c34Df818E3aC3"
    }
```

```diff
    EOA  (0x403F4d4958409480502CdC78a54cE1B67263C17a) {
    +++ description: None
      address:
-        "0x403F4d4958409480502CdC78a54cE1B67263C17a"
+        "eth:0x403F4d4958409480502CdC78a54cE1B67263C17a"
    }
```

```diff
    EOA  (0x44aC63d4e18c0d24d0EDe1C058D5A93Fc2fbB904) {
    +++ description: None
      address:
-        "0x44aC63d4e18c0d24d0EDe1C058D5A93Fc2fbB904"
+        "eth:0x44aC63d4e18c0d24d0EDe1C058D5A93Fc2fbB904"
    }
```

```diff
    EOA  (0x454Ef2f69f91527856E06659f92a66f464C1ca4e) {
    +++ description: None
      address:
-        "0x454Ef2f69f91527856E06659f92a66f464C1ca4e"
+        "eth:0x454Ef2f69f91527856E06659f92a66f464C1ca4e"
    }
```

```diff
    EOA  (0x4985238672d91Baed43dF1B2431F67bc332A1753) {
    +++ description: None
      address:
-        "0x4985238672d91Baed43dF1B2431F67bc332A1753"
+        "eth:0x4985238672d91Baed43dF1B2431F67bc332A1753"
    }
```

```diff
    EOA  (0x5262498E7D4fbbb08425b2a06D91157acDC50aDA) {
    +++ description: None
      address:
-        "0x5262498E7D4fbbb08425b2a06D91157acDC50aDA"
+        "eth:0x5262498E7D4fbbb08425b2a06D91157acDC50aDA"
    }
```

```diff
    EOA  (0x542aC639c0DeF0a468aed462B474FF9B7858Bd7E) {
    +++ description: None
      address:
-        "0x542aC639c0DeF0a468aed462B474FF9B7858Bd7E"
+        "eth:0x542aC639c0DeF0a468aed462B474FF9B7858Bd7E"
    }
```

```diff
    EOA  (0x55688D9211bC00BA573A1e0672e5de050818a360) {
    +++ description: None
      address:
-        "0x55688D9211bC00BA573A1e0672e5de050818a360"
+        "eth:0x55688D9211bC00BA573A1e0672e5de050818a360"
    }
```

```diff
    contract SocketRegistry (0x5a3eD432f2De9645940333e4474bBAAB8cf64cf2) {
    +++ description: None
      address:
-        "0x5a3eD432f2De9645940333e4474bBAAB8cf64cf2"
+        "eth:0x5a3eD432f2De9645940333e4474bBAAB8cf64cf2"
      values.$admin:
-        "0x8247EF5705d3345516286B72bFE6D690197C2E99"
+        "eth:0x8247EF5705d3345516286B72bFE6D690197C2E99"
      values.$implementation:
-        "0x5b60105ceD5207D6ad217BF2d426e133454eCFB4"
+        "eth:0x5b60105ceD5207D6ad217BF2d426e133454eCFB4"
      values.$pastUpgrades.0.2.0:
-        "0x5b60105ceD5207D6ad217BF2d426e133454eCFB4"
+        "eth:0x5b60105ceD5207D6ad217BF2d426e133454eCFB4"
      values.registryCoordinator:
-        "0x0BAAc79acD45A023E19345c352d8a7a83C4e5656"
+        "eth:0x0BAAc79acD45A023E19345c352d8a7a83C4e5656"
      implementationNames.0x5a3eD432f2De9645940333e4474bBAAB8cf64cf2:
-        "TransparentUpgradeableProxy"
      implementationNames.0x5b60105ceD5207D6ad217BF2d426e133454eCFB4:
-        "SocketRegistry"
      implementationNames.eth:0x5a3eD432f2De9645940333e4474bBAAB8cf64cf2:
+        "TransparentUpgradeableProxy"
      implementationNames.eth:0x5b60105ceD5207D6ad217BF2d426e133454eCFB4:
+        "SocketRegistry"
    }
```

```diff
    EOA  (0x5A49Bf6c5690E22dFff3eB37F7dd18254eC361ED) {
    +++ description: None
      address:
-        "0x5A49Bf6c5690E22dFff3eB37F7dd18254eC361ED"
+        "eth:0x5A49Bf6c5690E22dFff3eB37F7dd18254eC361ED"
    }
```

```diff
    EOA  (0x5D9A6573206e5205702E4caD87DC61f4C2a1Ad04) {
    +++ description: None
      address:
-        "0x5D9A6573206e5205702E4caD87DC61f4C2a1Ad04"
+        "eth:0x5D9A6573206e5205702E4caD87DC61f4C2a1Ad04"
    }
```

```diff
    EOA  (0x68bbBD6c18B0bc1B563489A13a398345E9da23d0) {
    +++ description: None
      address:
-        "0x68bbBD6c18B0bc1B563489A13a398345E9da23d0"
+        "eth:0x68bbBD6c18B0bc1B563489A13a398345E9da23d0"
    }
```

```diff
    contract EigenDADisperserRegistry (0x78cb05379a3b66E5227f2C1496432D7FFE794Fad) {
    +++ description: Registry for EigenDA disperser info such as disperser key to address mapping.
      address:
-        "0x78cb05379a3b66E5227f2C1496432D7FFE794Fad"
+        "eth:0x78cb05379a3b66E5227f2C1496432D7FFE794Fad"
      values.$admin:
-        "0x8247EF5705d3345516286B72bFE6D690197C2E99"
+        "eth:0x8247EF5705d3345516286B72bFE6D690197C2E99"
      values.$implementation:
-        "0x7DECf99BE82Ea4Cf72F381a5fCBc04228955FBE5"
+        "eth:0x7DECf99BE82Ea4Cf72F381a5fCBc04228955FBE5"
      values.$pastUpgrades.0.2.0:
-        "0x7DECf99BE82Ea4Cf72F381a5fCBc04228955FBE5"
+        "eth:0x7DECf99BE82Ea4Cf72F381a5fCBc04228955FBE5"
+++ severity: HIGH
      values.dispersers.0:
-        "0xF3d7C0D52fF8f4CF74A3CD9C53778516f4235bE9"
+        "eth:0xF3d7C0D52fF8f4CF74A3CD9C53778516f4235bE9"
      values.owner:
-        "0x002721B4790d97dC140a049936aA710152Ba92D5"
+        "eth:0x002721B4790d97dC140a049936aA710152Ba92D5"
      implementationNames.0x78cb05379a3b66E5227f2C1496432D7FFE794Fad:
-        "TransparentUpgradeableProxy"
      implementationNames.0x7DECf99BE82Ea4Cf72F381a5fCBc04228955FBE5:
-        "EigenDADisperserRegistry"
      implementationNames.eth:0x78cb05379a3b66E5227f2C1496432D7FFE794Fad:
+        "TransparentUpgradeableProxy"
      implementationNames.eth:0x7DECf99BE82Ea4Cf72F381a5fCBc04228955FBE5:
+        "EigenDADisperserRegistry"
    }
```

```diff
    contract ProxyAdmin (0x8247EF5705d3345516286B72bFE6D690197C2E99) {
    +++ description: None
      address:
-        "0x8247EF5705d3345516286B72bFE6D690197C2E99"
+        "eth:0x8247EF5705d3345516286B72bFE6D690197C2E99"
      values.owner:
-        "0x002721B4790d97dC140a049936aA710152Ba92D5"
+        "eth:0x002721B4790d97dC140a049936aA710152Ba92D5"
      implementationNames.0x8247EF5705d3345516286B72bFE6D690197C2E99:
-        "ProxyAdmin"
      implementationNames.eth:0x8247EF5705d3345516286B72bFE6D690197C2E99:
+        "ProxyAdmin"
    }
```

```diff
    EOA  (0x8642473a123FE33b0aaE90bD8604eA1029417236) {
    +++ description: None
      address:
-        "0x8642473a123FE33b0aaE90bD8604eA1029417236"
+        "eth:0x8642473a123FE33b0aaE90bD8604eA1029417236"
    }
```

```diff
    contract EigenDAServiceManager (0x870679E138bCdf293b7Ff14dD44b70FC97e12fc0) {
    +++ description: Bridge contract that accepts blob batches data availability attestations. Batches availability is attested by EigenDA operators signatures and relayed to the service manager contract by the EigenDA disperser.
      address:
-        "0x870679E138bCdf293b7Ff14dD44b70FC97e12fc0"
+        "eth:0x870679E138bCdf293b7Ff14dD44b70FC97e12fc0"
      values.$admin:
-        "0x8247EF5705d3345516286B72bFE6D690197C2E99"
+        "eth:0x8247EF5705d3345516286B72bFE6D690197C2E99"
      values.$implementation:
-        "0xae448D008B6F69033AfdA361b46b36C472B6FEE0"
+        "eth:0xae448D008B6F69033AfdA361b46b36C472B6FEE0"
      values.$pastUpgrades.0.2.0:
-        "0x1f96861fEFa1065a5A96F20Deb6D8DC3ff48F7f9"
+        "eth:0x1f96861fEFa1065a5A96F20Deb6D8DC3ff48F7f9"
      values.$pastUpgrades.1.2.0:
-        "0xF5fD25A90902c27068CF5eBe53Be8da693Ac899e"
+        "eth:0xF5fD25A90902c27068CF5eBe53Be8da693Ac899e"
      values.$pastUpgrades.2.2.0:
-        "0x26089e9738b809d8308B0011B93b4225a112DB8C"
+        "eth:0x26089e9738b809d8308B0011B93b4225a112DB8C"
      values.$pastUpgrades.3.2.0:
-        "0xCDFFF07d5b8AcdAd13607615118a2e65030f5be1"
+        "eth:0xCDFFF07d5b8AcdAd13607615118a2e65030f5be1"
      values.$pastUpgrades.4.2.0:
-        "0x0D2C5FD4Bb956cDD48A23fC3Ef77a768a5cDbAf7"
+        "eth:0x0D2C5FD4Bb956cDD48A23fC3Ef77a768a5cDbAf7"
      values.$pastUpgrades.5.2.0:
-        "0x58fDE694Db83e589ABb21A6Fe66cb20Ce5554a07"
+        "eth:0x58fDE694Db83e589ABb21A6Fe66cb20Ce5554a07"
      values.$pastUpgrades.6.2.0:
-        "0xae448D008B6F69033AfdA361b46b36C472B6FEE0"
+        "eth:0xae448D008B6F69033AfdA361b46b36C472B6FEE0"
      values.avsDirectory:
-        "0x135DDa560e946695d6f155dACaFC6f1F25C1F5AF"
+        "eth:0x135DDa560e946695d6f155dACaFC6f1F25C1F5AF"
+++ description: The list of addresses authorized to confirm the availability of blobs batches to the DA bridge.
+++ severity: HIGH
      values.batchConfirmers.0:
-        "0x8ED83c6Bb12E441Ca2C3a544F525d4a3Fb6484D8"
+        "eth:0x8ED83c6Bb12E441Ca2C3a544F525d4a3Fb6484D8"
+++ description: The list of addresses authorized to confirm the availability of blobs batches to the DA bridge.
+++ severity: HIGH
      values.batchConfirmers.1:
-        "0x5A49Bf6c5690E22dFff3eB37F7dd18254eC361ED"
+        "eth:0x5A49Bf6c5690E22dFff3eB37F7dd18254eC361ED"
+++ description: The list of addresses authorized to confirm the availability of blobs batches to the DA bridge.
+++ severity: HIGH
      values.batchConfirmers.2:
-        "0x454Ef2f69f91527856E06659f92a66f464C1ca4e"
+        "eth:0x454Ef2f69f91527856E06659f92a66f464C1ca4e"
      values.blsApkRegistry:
-        "0x00A5Fd09F6CeE6AE9C8b0E5e33287F7c82880505"
+        "eth:0x00A5Fd09F6CeE6AE9C8b0E5e33287F7c82880505"
      values.delegation:
-        "0x39053D51B77DC0d36036Fc1fCc8Cb819df8Ef37A"
+        "eth:0x39053D51B77DC0d36036Fc1fCc8Cb819df8Ef37A"
      values.eigenDADisperserRegistry:
-        "0x78cb05379a3b66E5227f2C1496432D7FFE794Fad"
+        "eth:0x78cb05379a3b66E5227f2C1496432D7FFE794Fad"
      values.eigenDARelayRegistry:
-        "0xD160e6C1543f562fc2B0A5bf090aED32640Ec55B"
+        "eth:0xD160e6C1543f562fc2B0A5bf090aED32640Ec55B"
      values.eigenDAThresholdRegistry:
-        "0xdb4c89956eEa6F606135E7d366322F2bDE609F15"
+        "eth:0xdb4c89956eEa6F606135E7d366322F2bDE609F15"
      values.getRestakeableStrategies.0:
-        "0xbeaC0eeEeeeeEEeEeEEEEeeEEeEeeeEeeEEBEaC0"
+        "eth:0xbeaC0eeEeeeeEEeEeEEEEeeEEeEeeeEeeEEBEaC0"
      values.getRestakeableStrategies.1:
-        "0x93c4b944D05dfe6df7645A86cd2206016c51564D"
+        "eth:0x93c4b944D05dfe6df7645A86cd2206016c51564D"
      values.getRestakeableStrategies.2:
-        "0x1BeE69b7dFFfA4E2d53C2a2Df135C388AD25dCD2"
+        "eth:0x1BeE69b7dFFfA4E2d53C2a2Df135C388AD25dCD2"
      values.getRestakeableStrategies.3:
-        "0x54945180dB7943c0ed0FEE7EdaB2Bd24620256bc"
+        "eth:0x54945180dB7943c0ed0FEE7EdaB2Bd24620256bc"
      values.getRestakeableStrategies.4:
-        "0x9d7eD45EE2E8FC5482fa2428f15C971e6369011d"
+        "eth:0x9d7eD45EE2E8FC5482fa2428f15C971e6369011d"
      values.getRestakeableStrategies.5:
-        "0x13760F50a9d7377e4F20CB8CF9e4c26586c658ff"
+        "eth:0x13760F50a9d7377e4F20CB8CF9e4c26586c658ff"
      values.getRestakeableStrategies.6:
-        "0xa4C637e0F704745D182e4D38cAb7E7485321d059"
+        "eth:0xa4C637e0F704745D182e4D38cAb7E7485321d059"
      values.getRestakeableStrategies.7:
-        "0x57ba429517c3473B6d34CA9aCd56c0e735b94c02"
+        "eth:0x57ba429517c3473B6d34CA9aCd56c0e735b94c02"
      values.getRestakeableStrategies.8:
-        "0x0Fe4F44beE93503346A3Ac9EE5A26b130a5796d6"
+        "eth:0x0Fe4F44beE93503346A3Ac9EE5A26b130a5796d6"
      values.getRestakeableStrategies.9:
-        "0x7CA911E83dabf90C90dD3De5411a10F1A6112184"
+        "eth:0x7CA911E83dabf90C90dD3De5411a10F1A6112184"
      values.getRestakeableStrategies.10:
-        "0x8CA7A5d6f3acd3A7A8bC468a8CD0FB14B6BD28b6"
+        "eth:0x8CA7A5d6f3acd3A7A8bC468a8CD0FB14B6BD28b6"
      values.getRestakeableStrategies.11:
-        "0xAe60d8180437b5C34bB956822ac2710972584473"
+        "eth:0xAe60d8180437b5C34bB956822ac2710972584473"
      values.getRestakeableStrategies.12:
-        "0x298aFB19A105D59E74658C4C334Ff360BadE6dd2"
+        "eth:0x298aFB19A105D59E74658C4C334Ff360BadE6dd2"
      values.getRestakeableStrategies.13:
-        "0xaCB55C530Acdb2849e6d4f36992Cd8c9D50ED8F7"
+        "eth:0xaCB55C530Acdb2849e6d4f36992Cd8c9D50ED8F7"
      values.getRestakeableStrategies.14:
-        "0x6075546538c3eFbD607ea6aFC24149fCcFb2edF4"
+        "eth:0x6075546538c3eFbD607ea6aFC24149fCcFb2edF4"
      values.owner:
-        "0x002721B4790d97dC140a049936aA710152Ba92D5"
+        "eth:0x002721B4790d97dC140a049936aA710152Ba92D5"
      values.pauserRegistry:
-        "0x0c431C66F4dE941d089625E5B423D00707977060"
+        "eth:0x0c431C66F4dE941d089625E5B423D00707977060"
      values.paymentVault:
-        "0xb2e7ef419a2A399472ae22ef5cFcCb8bE97A4B05"
+        "eth:0xb2e7ef419a2A399472ae22ef5cFcCb8bE97A4B05"
      values.registryCoordinator:
-        "0x0BAAc79acD45A023E19345c352d8a7a83C4e5656"
+        "eth:0x0BAAc79acD45A023E19345c352d8a7a83C4e5656"
      values.rewardsInitiator:
-        "0x178eeeA9E0928dA2153A1d7951FBe30CF8371b8A"
+        "eth:0x178eeeA9E0928dA2153A1d7951FBe30CF8371b8A"
      values.stakeRegistry:
-        "0x006124Ae7976137266feeBFb3F4D2BE4C073139D"
+        "eth:0x006124Ae7976137266feeBFb3F4D2BE4C073139D"
      implementationNames.0x870679E138bCdf293b7Ff14dD44b70FC97e12fc0:
-        "TransparentUpgradeableProxy"
      implementationNames.0xae448D008B6F69033AfdA361b46b36C472B6FEE0:
-        "EigenDAServiceManager"
      implementationNames.eth:0x870679E138bCdf293b7Ff14dD44b70FC97e12fc0:
+        "TransparentUpgradeableProxy"
      implementationNames.eth:0xae448D008B6F69033AfdA361b46b36C472B6FEE0:
+        "EigenDAServiceManager"
    }
```

```diff
    EOA  (0x891bbCfEF0C7504218b3156Cd0795cA5C8c7d489) {
    +++ description: None
      address:
-        "0x891bbCfEF0C7504218b3156Cd0795cA5C8c7d489"
+        "eth:0x891bbCfEF0C7504218b3156Cd0795cA5C8c7d489"
    }
```

```diff
    EOA  (0x8ED83c6Bb12E441Ca2C3a544F525d4a3Fb6484D8) {
    +++ description: None
      address:
-        "0x8ED83c6Bb12E441Ca2C3a544F525d4a3Fb6484D8"
+        "eth:0x8ED83c6Bb12E441Ca2C3a544F525d4a3Fb6484D8"
    }
```

```diff
    EOA  (0x9308319e3988843f36BC6682Ffa571525E56a125) {
    +++ description: None
      address:
-        "0x9308319e3988843f36BC6682Ffa571525E56a125"
+        "eth:0x9308319e3988843f36BC6682Ffa571525E56a125"
    }
```

```diff
    EOA  (0x995152ee7BB6304565Fbe04465d2c4D1BdD5683F) {
    +++ description: None
      address:
-        "0x995152ee7BB6304565Fbe04465d2c4D1BdD5683F"
+        "eth:0x995152ee7BB6304565Fbe04465d2c4D1BdD5683F"
    }
```

```diff
    EOA  (0xA38372470ed4c3C4bb5123CC7f335212950e350A) {
    +++ description: None
      address:
-        "0xA38372470ed4c3C4bb5123CC7f335212950e350A"
+        "eth:0xA38372470ed4c3C4bb5123CC7f335212950e350A"
    }
```

```diff
    EOA  (0xA3e302a6Ea0cf79B8580d94e92Eb5514292daacE) {
    +++ description: None
      address:
-        "0xA3e302a6Ea0cf79B8580d94e92Eb5514292daacE"
+        "eth:0xA3e302a6Ea0cf79B8580d94e92Eb5514292daacE"
    }
```

```diff
    EOA  (0xA4f7168cEa82877B23Bc55a7fd7557D546F4dD31) {
    +++ description: None
      address:
-        "0xA4f7168cEa82877B23Bc55a7fd7557D546F4dD31"
+        "eth:0xA4f7168cEa82877B23Bc55a7fd7557D546F4dD31"
    }
```

```diff
    contract PaymentVault (0xb2e7ef419a2A399472ae22ef5cFcCb8bE97A4B05) {
    +++ description: Entrypoint for making reservations and on demand payments for EigenDA.
      address:
-        "0xb2e7ef419a2A399472ae22ef5cFcCb8bE97A4B05"
+        "eth:0xb2e7ef419a2A399472ae22ef5cFcCb8bE97A4B05"
      values.$admin:
-        "0x8247EF5705d3345516286B72bFE6D690197C2E99"
+        "eth:0x8247EF5705d3345516286B72bFE6D690197C2E99"
      values.$implementation:
-        "0x62242213E6FA34E943844f9B3124150EFb9CB0dD"
+        "eth:0x62242213E6FA34E943844f9B3124150EFb9CB0dD"
      values.$pastUpgrades.0.2.0:
-        "0x62242213E6FA34E943844f9B3124150EFb9CB0dD"
+        "eth:0x62242213E6FA34E943844f9B3124150EFb9CB0dD"
      values.owner:
-        "0x002721B4790d97dC140a049936aA710152Ba92D5"
+        "eth:0x002721B4790d97dC140a049936aA710152Ba92D5"
      implementationNames.0xb2e7ef419a2A399472ae22ef5cFcCb8bE97A4B05:
-        "TransparentUpgradeableProxy"
      implementationNames.0x62242213E6FA34E943844f9B3124150EFb9CB0dD:
-        "PaymentVault"
      implementationNames.eth:0xb2e7ef419a2A399472ae22ef5cFcCb8bE97A4B05:
+        "TransparentUpgradeableProxy"
      implementationNames.eth:0x62242213E6FA34E943844f9B3124150EFb9CB0dD:
+        "PaymentVault"
    }
```

```diff
    contract IndexRegistry (0xBd35a7a1CDeF403a6a99e4E8BA0974D198455030) {
    +++ description: A registry contract that keeps track of an ordered list of operators for each quorum.
      address:
-        "0xBd35a7a1CDeF403a6a99e4E8BA0974D198455030"
+        "eth:0xBd35a7a1CDeF403a6a99e4E8BA0974D198455030"
      values.$admin:
-        "0x8247EF5705d3345516286B72bFE6D690197C2E99"
+        "eth:0x8247EF5705d3345516286B72bFE6D690197C2E99"
      values.$implementation:
-        "0x1ae0b73118906f39D5ED30Ae4A484ce2F479a14c"
+        "eth:0x1ae0b73118906f39D5ED30Ae4A484ce2F479a14c"
      values.$pastUpgrades.0.2.0:
-        "0x1f96861fEFa1065a5A96F20Deb6D8DC3ff48F7f9"
+        "eth:0x1f96861fEFa1065a5A96F20Deb6D8DC3ff48F7f9"
      values.$pastUpgrades.1.2.0:
-        "0x1ae0b73118906f39D5ED30Ae4A484ce2F479a14c"
+        "eth:0x1ae0b73118906f39D5ED30Ae4A484ce2F479a14c"
      values.registryCoordinator:
-        "0x0BAAc79acD45A023E19345c352d8a7a83C4e5656"
+        "eth:0x0BAAc79acD45A023E19345c352d8a7a83C4e5656"
      implementationNames.0xBd35a7a1CDeF403a6a99e4E8BA0974D198455030:
-        "TransparentUpgradeableProxy"
      implementationNames.0x1ae0b73118906f39D5ED30Ae4A484ce2F479a14c:
-        "IndexRegistry"
      implementationNames.eth:0xBd35a7a1CDeF403a6a99e4E8BA0974D198455030:
+        "TransparentUpgradeableProxy"
      implementationNames.eth:0x1ae0b73118906f39D5ED30Ae4A484ce2F479a14c:
+        "IndexRegistry"
    }
```

```diff
    EOA  (0xca3E83c0e41A1f27b9f832F4fcE22e79Cffecfc7) {
    +++ description: None
      address:
-        "0xca3E83c0e41A1f27b9f832F4fcE22e79Cffecfc7"
+        "eth:0xca3E83c0e41A1f27b9f832F4fcE22e79Cffecfc7"
    }
```

```diff
    contract EigenDARelayRegistry (0xD160e6C1543f562fc2B0A5bf090aED32640Ec55B) {
    +++ description: Registry for EigenDA relay keys, maps key to address.
      address:
-        "0xD160e6C1543f562fc2B0A5bf090aED32640Ec55B"
+        "eth:0xD160e6C1543f562fc2B0A5bf090aED32640Ec55B"
      values.$admin:
-        "0x8247EF5705d3345516286B72bFE6D690197C2E99"
+        "eth:0x8247EF5705d3345516286B72bFE6D690197C2E99"
      values.$implementation:
-        "0xF6D82FBBdf700c086389e72C3023812e956ECa9e"
+        "eth:0xF6D82FBBdf700c086389e72C3023812e956ECa9e"
      values.$pastUpgrades.0.2.0:
-        "0xF6D82FBBdf700c086389e72C3023812e956ECa9e"
+        "eth:0xF6D82FBBdf700c086389e72C3023812e956ECa9e"
      values.owner:
-        "0x002721B4790d97dC140a049936aA710152Ba92D5"
+        "eth:0x002721B4790d97dC140a049936aA710152Ba92D5"
      values.relayers.0.relay:
-        "0xe8437B66E834B7CdC90cC5D98B8DD6e636b37D7a"
+        "eth:0xe8437B66E834B7CdC90cC5D98B8DD6e636b37D7a"
      implementationNames.0xD160e6C1543f562fc2B0A5bf090aED32640Ec55B:
-        "TransparentUpgradeableProxy"
      implementationNames.0xF6D82FBBdf700c086389e72C3023812e956ECa9e:
-        "EigenDARelayRegistry"
      implementationNames.eth:0xD160e6C1543f562fc2B0A5bf090aED32640Ec55B:
+        "TransparentUpgradeableProxy"
      implementationNames.eth:0xF6D82FBBdf700c086389e72C3023812e956ECa9e:
+        "EigenDARelayRegistry"
    }
```

```diff
    EOA  (0xD2Ee81Cf07B12140C793FcE5B26313CDd9d78eA8) {
    +++ description: None
      address:
-        "0xD2Ee81Cf07B12140C793FcE5B26313CDd9d78eA8"
+        "eth:0xD2Ee81Cf07B12140C793FcE5B26313CDd9d78eA8"
    }
```

```diff
    contract EigenDAThresholdRegistry (0xdb4c89956eEa6F606135E7d366322F2bDE609F15) {
    +++ description: Registry of EigenDA threshold (i.e, adversary and confirmation threshold percentage for a quorum)
      address:
-        "0xdb4c89956eEa6F606135E7d366322F2bDE609F15"
+        "eth:0xdb4c89956eEa6F606135E7d366322F2bDE609F15"
      values.$admin:
-        "0x8247EF5705d3345516286B72bFE6D690197C2E99"
+        "eth:0x8247EF5705d3345516286B72bFE6D690197C2E99"
      values.$implementation:
-        "0x92104977f16dAe423966caa5cD9C115F2D25a8D6"
+        "eth:0x92104977f16dAe423966caa5cD9C115F2D25a8D6"
      values.$pastUpgrades.0.2.0:
-        "0x92104977f16dAe423966caa5cD9C115F2D25a8D6"
+        "eth:0x92104977f16dAe423966caa5cD9C115F2D25a8D6"
      values.owner:
-        "0x002721B4790d97dC140a049936aA710152Ba92D5"
+        "eth:0x002721B4790d97dC140a049936aA710152Ba92D5"
      implementationNames.0xdb4c89956eEa6F606135E7d366322F2bDE609F15:
-        "TransparentUpgradeableProxy"
      implementationNames.0x92104977f16dAe423966caa5cD9C115F2D25a8D6:
-        "EigenDAThresholdRegistry"
      implementationNames.eth:0xdb4c89956eEa6F606135E7d366322F2bDE609F15:
+        "TransparentUpgradeableProxy"
      implementationNames.eth:0x92104977f16dAe423966caa5cD9C115F2D25a8D6:
+        "EigenDAThresholdRegistry"
    }
```

```diff
    EOA  (0xe0550117Cb066D3b330eBd764B0d75D3BA378734) {
    +++ description: None
      address:
-        "0xe0550117Cb066D3b330eBd764B0d75D3BA378734"
+        "eth:0xe0550117Cb066D3b330eBd764B0d75D3BA378734"
    }
```

```diff
    EOA  (0xe8437B66E834B7CdC90cC5D98B8DD6e636b37D7a) {
    +++ description: None
      address:
-        "0xe8437B66E834B7CdC90cC5D98B8DD6e636b37D7a"
+        "eth:0xe8437B66E834B7CdC90cC5D98B8DD6e636b37D7a"
    }
```

```diff
    EOA  (0xf20eD26be203f09B8F0Cb3265E74BB6AD24408b4) {
    +++ description: None
      address:
-        "0xf20eD26be203f09B8F0Cb3265E74BB6AD24408b4"
+        "eth:0xf20eD26be203f09B8F0Cb3265E74BB6AD24408b4"
    }
```

```diff
    EOA  (0xF3d7C0D52fF8f4CF74A3CD9C53778516f4235bE9) {
    +++ description: None
      address:
-        "0xF3d7C0D52fF8f4CF74A3CD9C53778516f4235bE9"
+        "eth:0xF3d7C0D52fF8f4CF74A3CD9C53778516f4235bE9"
    }
```

```diff
+   Status: CREATED
    contract EigenDAOperationsMultisig (0x002721B4790d97dC140a049936aA710152Ba92D5)
    +++ description: None
```

```diff
+   Status: CREATED
    contract StakeRegistry (0x006124Ae7976137266feeBFb3F4D2BE4C073139D)
    +++ description: Keeps track of the total stake of each operator.
```

```diff
+   Status: CREATED
    contract BLSApkRegistry (0x00A5Fd09F6CeE6AE9C8b0E5e33287F7c82880505)
    +++ description: Keeps track of the BLS public keys of each operator and the quorum aggregated keys.
```

```diff
+   Status: CREATED
    contract RegistryCoordinator (0x0BAAc79acD45A023E19345c352d8a7a83C4e5656)
    +++ description: Operators register here with an AVS: The coordinator has three registries: 1) a `StakeRegistry` that keeps track of operators' stakes, 2) a `BLSApkRegistry` that keeps track of operators' BLS public keys and aggregate BLS public keys for each quorum, 3) an `IndexRegistry` that keeps track of an ordered list of operators for each quorum.
```

```diff
+   Status: CREATED
    contract PauserRegistry (0x0c431C66F4dE941d089625E5B423D00707977060)
    +++ description: Defines and stores pauser and unpauser roles for EigenDA contracts.
```

```diff
+   Status: CREATED
    contract EjectionManager (0x130d8EA0052B45554e4C99079B84df292149Bd5E)
    +++ description: Contract used for ejection of operators from the RegistryCoordinator for violating the Service Legal Agreement (SLA).
```

```diff
+   Status: CREATED
    contract EigenLayerRewardsInitiatorMultisig (0x178eeeA9E0928dA2153A1d7951FBe30CF8371b8A)
    +++ description: None
```

```diff
+   Status: CREATED
    contract EigenDA Multisig (0x338477FfaF63c04AC06048787f910671eC914B34)
    +++ description: None
```

```diff
+   Status: CREATED
    contract SocketRegistry (0x5a3eD432f2De9645940333e4474bBAAB8cf64cf2)
    +++ description: None
```

```diff
+   Status: CREATED
    contract EigenDADisperserRegistry (0x78cb05379a3b66E5227f2C1496432D7FFE794Fad)
    +++ description: Registry for EigenDA disperser info such as disperser key to address mapping.
```

```diff
+   Status: CREATED
    contract ProxyAdmin (0x8247EF5705d3345516286B72bFE6D690197C2E99)
    +++ description: None
```

```diff
+   Status: CREATED
    contract EigenDAServiceManager (0x870679E138bCdf293b7Ff14dD44b70FC97e12fc0)
    +++ description: Bridge contract that accepts blob batches data availability attestations. Batches availability is attested by EigenDA operators signatures and relayed to the service manager contract by the EigenDA disperser.
```

```diff
+   Status: CREATED
    contract PaymentVault (0xb2e7ef419a2A399472ae22ef5cFcCb8bE97A4B05)
    +++ description: Entrypoint for making reservations and on demand payments for EigenDA.
```

```diff
+   Status: CREATED
    contract IndexRegistry (0xBd35a7a1CDeF403a6a99e4E8BA0974D198455030)
    +++ description: A registry contract that keeps track of an ordered list of operators for each quorum.
```

```diff
+   Status: CREATED
    contract EigenDARelayRegistry (0xD160e6C1543f562fc2B0A5bf090aED32640Ec55B)
    +++ description: Registry for EigenDA relay keys, maps key to address.
```

```diff
+   Status: CREATED
    contract EigenDAThresholdRegistry (0xdb4c89956eEa6F606135E7d366322F2bDE609F15)
    +++ description: Registry of EigenDA threshold (i.e, adversary and confirmation threshold percentage for a quorum)
```

Generated with discovered.json: 0xf45c76c4b21f213740d85595c1351af04e7d2582

# Diff at Fri, 04 Jul 2025 12:18:59 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@1f56dc47fe915564d4555300304da4d3bcbc087f block: 22823842
- current block number: 22823842

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 22823842 (main branch discovery), not current.

```diff
    contract EigenDAOperationsMultisig (0x002721B4790d97dC140a049936aA710152Ba92D5) {
    +++ description: None
      receivedPermissions.0.from:
-        "ethereum:0x0BAAc79acD45A023E19345c352d8a7a83C4e5656"
+        "eth:0x0BAAc79acD45A023E19345c352d8a7a83C4e5656"
      receivedPermissions.1.from:
-        "ethereum:0x870679E138bCdf293b7Ff14dD44b70FC97e12fc0"
+        "eth:0x870679E138bCdf293b7Ff14dD44b70FC97e12fc0"
      receivedPermissions.2.via.0.address:
-        "ethereum:0x8247EF5705d3345516286B72bFE6D690197C2E99"
+        "eth:0x8247EF5705d3345516286B72bFE6D690197C2E99"
      receivedPermissions.2.from:
-        "ethereum:0x006124Ae7976137266feeBFb3F4D2BE4C073139D"
+        "eth:0x006124Ae7976137266feeBFb3F4D2BE4C073139D"
      receivedPermissions.3.via.0.address:
-        "ethereum:0x8247EF5705d3345516286B72bFE6D690197C2E99"
+        "eth:0x8247EF5705d3345516286B72bFE6D690197C2E99"
      receivedPermissions.3.from:
-        "ethereum:0x00A5Fd09F6CeE6AE9C8b0E5e33287F7c82880505"
+        "eth:0x00A5Fd09F6CeE6AE9C8b0E5e33287F7c82880505"
      receivedPermissions.4.via.0.address:
-        "ethereum:0x8247EF5705d3345516286B72bFE6D690197C2E99"
+        "eth:0x8247EF5705d3345516286B72bFE6D690197C2E99"
      receivedPermissions.4.from:
-        "ethereum:0x0BAAc79acD45A023E19345c352d8a7a83C4e5656"
+        "eth:0x0BAAc79acD45A023E19345c352d8a7a83C4e5656"
      receivedPermissions.5.via.0.address:
-        "ethereum:0x8247EF5705d3345516286B72bFE6D690197C2E99"
+        "eth:0x8247EF5705d3345516286B72bFE6D690197C2E99"
      receivedPermissions.5.from:
-        "ethereum:0x130d8EA0052B45554e4C99079B84df292149Bd5E"
+        "eth:0x130d8EA0052B45554e4C99079B84df292149Bd5E"
      receivedPermissions.6.via.0.address:
-        "ethereum:0x8247EF5705d3345516286B72bFE6D690197C2E99"
+        "eth:0x8247EF5705d3345516286B72bFE6D690197C2E99"
      receivedPermissions.6.from:
-        "ethereum:0x5a3eD432f2De9645940333e4474bBAAB8cf64cf2"
+        "eth:0x5a3eD432f2De9645940333e4474bBAAB8cf64cf2"
      receivedPermissions.7.via.0.address:
-        "ethereum:0x8247EF5705d3345516286B72bFE6D690197C2E99"
+        "eth:0x8247EF5705d3345516286B72bFE6D690197C2E99"
      receivedPermissions.7.from:
-        "ethereum:0x78cb05379a3b66E5227f2C1496432D7FFE794Fad"
+        "eth:0x78cb05379a3b66E5227f2C1496432D7FFE794Fad"
      receivedPermissions.8.via.0.address:
-        "ethereum:0x8247EF5705d3345516286B72bFE6D690197C2E99"
+        "eth:0x8247EF5705d3345516286B72bFE6D690197C2E99"
      receivedPermissions.8.from:
-        "ethereum:0x870679E138bCdf293b7Ff14dD44b70FC97e12fc0"
+        "eth:0x870679E138bCdf293b7Ff14dD44b70FC97e12fc0"
      receivedPermissions.9.via.0.address:
-        "ethereum:0x8247EF5705d3345516286B72bFE6D690197C2E99"
+        "eth:0x8247EF5705d3345516286B72bFE6D690197C2E99"
      receivedPermissions.9.from:
-        "ethereum:0xb2e7ef419a2A399472ae22ef5cFcCb8bE97A4B05"
+        "eth:0xb2e7ef419a2A399472ae22ef5cFcCb8bE97A4B05"
      receivedPermissions.10.via.0.address:
-        "ethereum:0x8247EF5705d3345516286B72bFE6D690197C2E99"
+        "eth:0x8247EF5705d3345516286B72bFE6D690197C2E99"
      receivedPermissions.10.from:
-        "ethereum:0xBd35a7a1CDeF403a6a99e4E8BA0974D198455030"
+        "eth:0xBd35a7a1CDeF403a6a99e4E8BA0974D198455030"
      receivedPermissions.11.via.0.address:
-        "ethereum:0x8247EF5705d3345516286B72bFE6D690197C2E99"
+        "eth:0x8247EF5705d3345516286B72bFE6D690197C2E99"
      receivedPermissions.11.from:
-        "ethereum:0xD160e6C1543f562fc2B0A5bf090aED32640Ec55B"
+        "eth:0xD160e6C1543f562fc2B0A5bf090aED32640Ec55B"
      receivedPermissions.12.via.0.address:
-        "ethereum:0x8247EF5705d3345516286B72bFE6D690197C2E99"
+        "eth:0x8247EF5705d3345516286B72bFE6D690197C2E99"
      receivedPermissions.12.from:
-        "ethereum:0xdb4c89956eEa6F606135E7d366322F2bDE609F15"
+        "eth:0xdb4c89956eEa6F606135E7d366322F2bDE609F15"
      directlyReceivedPermissions.0.from:
-        "ethereum:0x8247EF5705d3345516286B72bFE6D690197C2E99"
+        "eth:0x8247EF5705d3345516286B72bFE6D690197C2E99"
    }
```

```diff
    contract PauserRegistry (0x0c431C66F4dE941d089625E5B423D00707977060) {
    +++ description: Defines and stores pauser and unpauser roles for EigenDA contracts.
      receivedPermissions.0.from:
-        "ethereum:0x870679E138bCdf293b7Ff14dD44b70FC97e12fc0"
+        "eth:0x870679E138bCdf293b7Ff14dD44b70FC97e12fc0"
    }
```

```diff
    contract EigenLayerRewardsInitiatorMultisig (0x178eeeA9E0928dA2153A1d7951FBe30CF8371b8A) {
    +++ description: None
      receivedPermissions.0.from:
-        "ethereum:0x870679E138bCdf293b7Ff14dD44b70FC97e12fc0"
+        "eth:0x870679E138bCdf293b7Ff14dD44b70FC97e12fc0"
    }
```

```diff
    contract EigenDA Multisig (0x338477FfaF63c04AC06048787f910671eC914B34) {
    +++ description: None
      receivedPermissions.0.from:
-        "ethereum:0x130d8EA0052B45554e4C99079B84df292149Bd5E"
+        "eth:0x130d8EA0052B45554e4C99079B84df292149Bd5E"
    }
```

```diff
    EOA  (0x454Ef2f69f91527856E06659f92a66f464C1ca4e) {
    +++ description: None
      receivedPermissions.0.from:
-        "ethereum:0x870679E138bCdf293b7Ff14dD44b70FC97e12fc0"
+        "eth:0x870679E138bCdf293b7Ff14dD44b70FC97e12fc0"
    }
```

```diff
    EOA  (0x5A49Bf6c5690E22dFff3eB37F7dd18254eC361ED) {
    +++ description: None
      receivedPermissions.0.from:
-        "ethereum:0x870679E138bCdf293b7Ff14dD44b70FC97e12fc0"
+        "eth:0x870679E138bCdf293b7Ff14dD44b70FC97e12fc0"
    }
```

```diff
    contract ProxyAdmin (0x8247EF5705d3345516286B72bFE6D690197C2E99) {
    +++ description: None
      directlyReceivedPermissions.0.from:
-        "ethereum:0x006124Ae7976137266feeBFb3F4D2BE4C073139D"
+        "eth:0x006124Ae7976137266feeBFb3F4D2BE4C073139D"
      directlyReceivedPermissions.1.from:
-        "ethereum:0x00A5Fd09F6CeE6AE9C8b0E5e33287F7c82880505"
+        "eth:0x00A5Fd09F6CeE6AE9C8b0E5e33287F7c82880505"
      directlyReceivedPermissions.2.from:
-        "ethereum:0x0BAAc79acD45A023E19345c352d8a7a83C4e5656"
+        "eth:0x0BAAc79acD45A023E19345c352d8a7a83C4e5656"
      directlyReceivedPermissions.3.from:
-        "ethereum:0x130d8EA0052B45554e4C99079B84df292149Bd5E"
+        "eth:0x130d8EA0052B45554e4C99079B84df292149Bd5E"
      directlyReceivedPermissions.4.from:
-        "ethereum:0x5a3eD432f2De9645940333e4474bBAAB8cf64cf2"
+        "eth:0x5a3eD432f2De9645940333e4474bBAAB8cf64cf2"
      directlyReceivedPermissions.5.from:
-        "ethereum:0x78cb05379a3b66E5227f2C1496432D7FFE794Fad"
+        "eth:0x78cb05379a3b66E5227f2C1496432D7FFE794Fad"
      directlyReceivedPermissions.6.from:
-        "ethereum:0x870679E138bCdf293b7Ff14dD44b70FC97e12fc0"
+        "eth:0x870679E138bCdf293b7Ff14dD44b70FC97e12fc0"
      directlyReceivedPermissions.7.from:
-        "ethereum:0xb2e7ef419a2A399472ae22ef5cFcCb8bE97A4B05"
+        "eth:0xb2e7ef419a2A399472ae22ef5cFcCb8bE97A4B05"
      directlyReceivedPermissions.8.from:
-        "ethereum:0xBd35a7a1CDeF403a6a99e4E8BA0974D198455030"
+        "eth:0xBd35a7a1CDeF403a6a99e4E8BA0974D198455030"
      directlyReceivedPermissions.9.from:
-        "ethereum:0xD160e6C1543f562fc2B0A5bf090aED32640Ec55B"
+        "eth:0xD160e6C1543f562fc2B0A5bf090aED32640Ec55B"
      directlyReceivedPermissions.10.from:
-        "ethereum:0xdb4c89956eEa6F606135E7d366322F2bDE609F15"
+        "eth:0xdb4c89956eEa6F606135E7d366322F2bDE609F15"
    }
```

```diff
    EOA  (0x8642473a123FE33b0aaE90bD8604eA1029417236) {
    +++ description: None
      receivedPermissions.0.from:
-        "ethereum:0x130d8EA0052B45554e4C99079B84df292149Bd5E"
+        "eth:0x130d8EA0052B45554e4C99079B84df292149Bd5E"
    }
```

```diff
    EOA  (0x8ED83c6Bb12E441Ca2C3a544F525d4a3Fb6484D8) {
    +++ description: None
      receivedPermissions.0.from:
-        "ethereum:0x870679E138bCdf293b7Ff14dD44b70FC97e12fc0"
+        "eth:0x870679E138bCdf293b7Ff14dD44b70FC97e12fc0"
    }
```

```diff
    EOA  (0xD2Ee81Cf07B12140C793FcE5B26313CDd9d78eA8) {
    +++ description: None
      receivedPermissions.0.from:
-        "ethereum:0x130d8EA0052B45554e4C99079B84df292149Bd5E"
+        "eth:0x130d8EA0052B45554e4C99079B84df292149Bd5E"
    }
```

```diff
    EOA  (0xe0550117Cb066D3b330eBd764B0d75D3BA378734) {
    +++ description: None
      receivedPermissions.0.from:
-        "ethereum:0x0BAAc79acD45A023E19345c352d8a7a83C4e5656"
+        "eth:0x0BAAc79acD45A023E19345c352d8a7a83C4e5656"
    }
```

```diff
    EOA  (0xe8437B66E834B7CdC90cC5D98B8DD6e636b37D7a) {
    +++ description: None
      receivedPermissions.0.from:
-        "ethereum:0xD160e6C1543f562fc2B0A5bf090aED32640Ec55B"
+        "eth:0xD160e6C1543f562fc2B0A5bf090aED32640Ec55B"
    }
```

```diff
    EOA  (0xF3d7C0D52fF8f4CF74A3CD9C53778516f4235bE9) {
    +++ description: None
      receivedPermissions.0.from:
-        "ethereum:0x78cb05379a3b66E5227f2C1496432D7FFE794Fad"
+        "eth:0x78cb05379a3b66E5227f2C1496432D7FFE794Fad"
    }
```

Generated with discovered.json: 0xd5dee85f10f94799f172c301fe3c251b28607d7a

# Diff at Tue, 01 Jul 2025 10:40:25 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@6dae2e2c6da3c994ad2a4e3a50e7430960cb763e block: 22625202
- current block number: 22823842

## Description

new 3/8 Ejector Safe.

## Watched changes

```diff
    contract EjectionManager (0x130d8EA0052B45554e4C99079B84df292149Bd5E) {
    +++ description: Contract used for ejection of operators from the RegistryCoordinator for violating the Service Legal Agreement (SLA).
      values.ejectors.2:
+        "0x338477FfaF63c04AC06048787f910671eC914B34"
    }
```

```diff
+   Status: CREATED
    contract EigenDA Multisig (0x338477FfaF63c04AC06048787f910671eC914B34)
    +++ description: None
```

## Source code changes

```diff
.../ethereum/.flat/EigenDA Multisig/Safe.sol       | 1088 ++++++++++++++++++++
 .../.flat/EigenDA Multisig/SafeProxy.p.sol         |   37 +
 2 files changed, 1125 insertions(+)
```

Generated with discovered.json: 0x57db56ee72ee24af201b2c124573508c36a6db0f

# Diff at Tue, 03 Jun 2025 16:21:03 GMT:

- author: vincfurc (<10850139+vincfurc@users.noreply.github.com>)
- comparing to: main@6300ee5652726c1ebabccf96f71a6db963946434 block: 22425142
- current block number: 22625202

## Description

Preparation for EigenDA V2 Blazaar, no impactful changes.

- RegistryCoordinator: Added socket registry, error format changes
- Socket registry: new contract that maps operators to their sockets
- EjectionManager: added check for amountEjectable & stakeForEjection >0
- EigenDAServiceManager: added EigenDADisperserRegistry, EigenDAThresholdRegistry, EigenDARelayRegistry. Removed quorum mentions, new data structures, new rewards functions
- EigenDADisperserRegistry: Registry for EigenDA disperser info such as disperser key to address mapping
- EigenDAThresholdRegistry: Registry of EigenDA threshold (adversary threshold percentage for a quorum, confirmation threshold percentage for a quorum)
- EigenDARelayRegistry: Registry for EigenDA relay keys, maps key to address
- PaymentVault: Entrypoint for making reservations and on demand payments for EigenDA

## Watched changes

```diff
    contract EigenDAOperationsMultisig (0x002721B4790d97dC140a049936aA710152Ba92D5) {
    +++ description: None
      receivedPermissions.12:
+        {"permission":"upgrade","from":"0x5a3eD432f2De9645940333e4474bBAAB8cf64cf2","role":"admin","via":[{"address":"0x8247EF5705d3345516286B72bFE6D690197C2E99"}]}
      receivedPermissions.11:
+        {"permission":"upgrade","from":"0x006124Ae7976137266feeBFb3F4D2BE4C073139D","role":"admin","via":[{"address":"0x8247EF5705d3345516286B72bFE6D690197C2E99"}]}
      receivedPermissions.10:
+        {"permission":"upgrade","from":"0xb2e7ef419a2A399472ae22ef5cFcCb8bE97A4B05","role":"admin","via":[{"address":"0x8247EF5705d3345516286B72bFE6D690197C2E99"}]}
      receivedPermissions.9:
+        {"permission":"upgrade","from":"0x130d8EA0052B45554e4C99079B84df292149Bd5E","role":"admin","via":[{"address":"0x8247EF5705d3345516286B72bFE6D690197C2E99"}]}
      receivedPermissions.8:
+        {"permission":"upgrade","from":"0xdb4c89956eEa6F606135E7d366322F2bDE609F15","role":"admin","via":[{"address":"0x8247EF5705d3345516286B72bFE6D690197C2E99"}]}
      receivedPermissions.7.from:
-        "0x006124Ae7976137266feeBFb3F4D2BE4C073139D"
+        "0x00A5Fd09F6CeE6AE9C8b0E5e33287F7c82880505"
      receivedPermissions.6.from:
-        "0x130d8EA0052B45554e4C99079B84df292149Bd5E"
+        "0x870679E138bCdf293b7Ff14dD44b70FC97e12fc0"
      receivedPermissions.5.from:
-        "0x00A5Fd09F6CeE6AE9C8b0E5e33287F7c82880505"
+        "0xBd35a7a1CDeF403a6a99e4E8BA0974D198455030"
      receivedPermissions.4.from:
-        "0x870679E138bCdf293b7Ff14dD44b70FC97e12fc0"
+        "0x0BAAc79acD45A023E19345c352d8a7a83C4e5656"
      receivedPermissions.3.from:
-        "0xBd35a7a1CDeF403a6a99e4E8BA0974D198455030"
+        "0x78cb05379a3b66E5227f2C1496432D7FFE794Fad"
      receivedPermissions.2.from:
-        "0x0BAAc79acD45A023E19345c352d8a7a83C4e5656"
+        "0xD160e6C1543f562fc2B0A5bf090aED32640Ec55B"
    }
```

```diff
    contract RegistryCoordinator (0x0BAAc79acD45A023E19345c352d8a7a83C4e5656) {
    +++ description: Operators register here with an AVS: The coordinator has three registries: 1) a `StakeRegistry` that keeps track of operators' stakes, 2) a `BLSApkRegistry` that keeps track of operators' BLS public keys and aggregate BLS public keys for each quorum, 3) an `IndexRegistry` that keeps track of an ordered list of operators for each quorum.
      sourceHashes.0:
-        "0x223309c7d816ce318a9371a50683d99b1ace4ccb775c4a4b3e6ec1238f0a5c68"
+        "0x7e7c9cae80b660c369700ce034c417e93999b08e43dabd1c37a1e76599552575"
      values.$implementation:
-        "0xdcabf0bE991d4609096CCe316df08d091356E03F"
+        "0x2088435ABcB1234A9427B755931C9064C93a2595"
      values.$pastUpgrades.3:
+        ["2024-04-05T21:49:59.000Z","0x6a6489dbfbe688c34d924a3e86de303d3d427dc328652e931926333729f242be",["0xd3e09a0c2A9A6FDf5E92aE65D3CC090A4dF8EECF"]]
      values.$pastUpgrades.2.2:
-        ["0xd3e09a0c2A9A6FDf5E92aE65D3CC090A4dF8EECF"]
+        "0x3a9b2c12f66b0acc238c64eebdf84faee5e7539710be705584432368f1724d7f"
      values.$pastUpgrades.2.1:
-        "0x6a6489dbfbe688c34d924a3e86de303d3d427dc328652e931926333729f242be"
+        "2024-04-05T21:49:47.000Z"
      values.$pastUpgrades.2.0:
-        "2024-04-05T21:49:59.000Z"
+        ["0x1f96861fEFa1065a5A96F20Deb6D8DC3ff48F7f9"]
      values.$pastUpgrades.1.2:
-        "0x3a9b2c12f66b0acc238c64eebdf84faee5e7539710be705584432368f1724d7f"
+        ["0x2088435ABcB1234A9427B755931C9064C93a2595"]
      values.$pastUpgrades.1.1:
-        "2024-04-05T21:49:47.000Z"
+        "0xfa483d640a2793a223b75e6a2c6fb8f9eaa2a1c0df1e6ca69d7d332251981282"
      values.$pastUpgrades.1.0:
-        ["0x1f96861fEFa1065a5A96F20Deb6D8DC3ff48F7f9"]
+        "2025-05-29T22:04:35.000Z"
      values.$upgradeCount:
-        3
+        4
      values.socketRegistry:
+        "0x5a3eD432f2De9645940333e4474bBAAB8cf64cf2"
      implementationNames.0xdcabf0bE991d4609096CCe316df08d091356E03F:
-        "RegistryCoordinator"
      implementationNames.0x2088435ABcB1234A9427B755931C9064C93a2595:
+        "RegistryCoordinator"
    }
```

```diff
    contract EjectionManager (0x130d8EA0052B45554e4C99079B84df292149Bd5E) {
    +++ description: Contract used for ejection of operators from the RegistryCoordinator for violating the Service Legal Agreement (SLA).
      sourceHashes.0:
-        "0xe0842698f9d2aadda65d129ee9797efd5820d2c146dc3f368826b9815f5b8c9f"
+        "0x94a826fe3f9609e445cfd3cd6d7d9709c559367e9cb49a9b6d7952cd3a116cd0"
      values.$implementation:
-        "0x33A517608999DF5CEfFa2b2EbA88B4461c26Af6f"
+        "0xC125fECDDabFe13f29EB287Bb8551892AEE7C98A"
      values.$pastUpgrades.3:
+        ["2024-05-10T13:31:35.000Z","0xd04d3d0dbf04adf100c0edbe832d60786758b828ce9073e205b8ab3675864d32",["0x1A27AC48D40F70213Ae6ec64f66852e0A1a0E6fa"]]
      values.$pastUpgrades.2.2:
-        ["0x1A27AC48D40F70213Ae6ec64f66852e0A1a0E6fa"]
+        "0x7dcee857c6f42698dd0db59a3032770cdffa8607b6902fee32f3d498991df44a"
      values.$pastUpgrades.2.1:
-        "0xd04d3d0dbf04adf100c0edbe832d60786758b828ce9073e205b8ab3675864d32"
+        ["0x33A517608999DF5CEfFa2b2EbA88B4461c26Af6f"]
      values.$pastUpgrades.2.0:
-        "2024-05-10T13:31:35.000Z"
+        "2024-08-07T15:52:47.000Z"
      values.$pastUpgrades.1.2:
-        "0x7dcee857c6f42698dd0db59a3032770cdffa8607b6902fee32f3d498991df44a"
+        "0xfa483d640a2793a223b75e6a2c6fb8f9eaa2a1c0df1e6ca69d7d332251981282"
      values.$pastUpgrades.1.1.0:
-        "0x33A517608999DF5CEfFa2b2EbA88B4461c26Af6f"
+        "0xC125fECDDabFe13f29EB287Bb8551892AEE7C98A"
      values.$pastUpgrades.1.0:
-        "2024-08-07T15:52:47.000Z"
+        "2025-05-29T22:04:35.000Z"
      values.$upgradeCount:
-        3
+        4
      implementationNames.0x33A517608999DF5CEfFa2b2EbA88B4461c26Af6f:
-        "EjectionManager"
      implementationNames.0xC125fECDDabFe13f29EB287Bb8551892AEE7C98A:
+        "EjectionManager"
    }
```

```diff
    contract ProxyAdmin (0x8247EF5705d3345516286B72bFE6D690197C2E99) {
    +++ description: None
      directlyReceivedPermissions.10:
+        {"permission":"upgrade","from":"0x5a3eD432f2De9645940333e4474bBAAB8cf64cf2","role":"admin"}
      directlyReceivedPermissions.9:
+        {"permission":"upgrade","from":"0x006124Ae7976137266feeBFb3F4D2BE4C073139D","role":"admin"}
      directlyReceivedPermissions.8:
+        {"permission":"upgrade","from":"0xb2e7ef419a2A399472ae22ef5cFcCb8bE97A4B05","role":"admin"}
      directlyReceivedPermissions.7:
+        {"permission":"upgrade","from":"0x130d8EA0052B45554e4C99079B84df292149Bd5E","role":"admin"}
      directlyReceivedPermissions.6:
+        {"permission":"upgrade","from":"0xdb4c89956eEa6F606135E7d366322F2bDE609F15","role":"admin"}
      directlyReceivedPermissions.5.from:
-        "0x006124Ae7976137266feeBFb3F4D2BE4C073139D"
+        "0x00A5Fd09F6CeE6AE9C8b0E5e33287F7c82880505"
      directlyReceivedPermissions.4.from:
-        "0x130d8EA0052B45554e4C99079B84df292149Bd5E"
+        "0x870679E138bCdf293b7Ff14dD44b70FC97e12fc0"
      directlyReceivedPermissions.3.from:
-        "0x00A5Fd09F6CeE6AE9C8b0E5e33287F7c82880505"
+        "0xBd35a7a1CDeF403a6a99e4E8BA0974D198455030"
      directlyReceivedPermissions.2.from:
-        "0x870679E138bCdf293b7Ff14dD44b70FC97e12fc0"
+        "0x0BAAc79acD45A023E19345c352d8a7a83C4e5656"
      directlyReceivedPermissions.1.from:
-        "0xBd35a7a1CDeF403a6a99e4E8BA0974D198455030"
+        "0x78cb05379a3b66E5227f2C1496432D7FFE794Fad"
      directlyReceivedPermissions.0.from:
-        "0x0BAAc79acD45A023E19345c352d8a7a83C4e5656"
+        "0xD160e6C1543f562fc2B0A5bf090aED32640Ec55B"
    }
```

```diff
    contract EigenDAServiceManager (0x870679E138bCdf293b7Ff14dD44b70FC97e12fc0) {
    +++ description: Bridge contract that accepts blob batches data availability attestations. Batches availability is attested by EigenDA operators signatures and relayed to the service manager contract by the EigenDA disperser.
      sourceHashes.1:
-        "0xd87f004d37330210f1eb137e4498b14ba6340f079eaa0e9e7a22c1d4f76dde7d"
+        "0x41471c5c89db3f645030775d3f3cc317047a179f36469fbd736db24baed6523e"
      sourceHashes.0:
-        "0xb0f8e019272d9343047a9e89cbb9526954b9e2a1149fdc2476e7c29759b38951"
+        "0xd87f004d37330210f1eb137e4498b14ba6340f079eaa0e9e7a22c1d4f76dde7d"
      values.$implementation:
-        "0x58fDE694Db83e589ABb21A6Fe66cb20Ce5554a07"
+        "0xae448D008B6F69033AfdA361b46b36C472B6FEE0"
      values.$pastUpgrades.6:
+        ["2024-09-17T14:17:11.000Z","0xaedce35d052ceaed37943107a78d8fb3d833ac5619edeab62a8772d67afaaff9",["0x58fDE694Db83e589ABb21A6Fe66cb20Ce5554a07"]]
      values.$pastUpgrades.5.2:
-        "0xaedce35d052ceaed37943107a78d8fb3d833ac5619edeab62a8772d67afaaff9"
+        "0xfacff9a26f07d7ae55c6b9fc80059faa016f249c4624841cfcd43c34717cbaf7"
      values.$pastUpgrades.5.1.0:
-        "0x58fDE694Db83e589ABb21A6Fe66cb20Ce5554a07"
+        "0x0D2C5FD4Bb956cDD48A23fC3Ef77a768a5cDbAf7"
      values.$pastUpgrades.5.0:
-        "2024-09-17T14:17:11.000Z"
+        "2024-08-03T16:14:35.000Z"
      values.$pastUpgrades.4.2:
-        "0xfacff9a26f07d7ae55c6b9fc80059faa016f249c4624841cfcd43c34717cbaf7"
+        ["0x26089e9738b809d8308B0011B93b4225a112DB8C"]
      values.$pastUpgrades.4.1:
-        ["0x0D2C5FD4Bb956cDD48A23fC3Ef77a768a5cDbAf7"]
+        "0xb40a6884127043977ba87604e5b6a7447b7f8e6fa88b3ab3d940507c8e1c92d8"
      values.$pastUpgrades.4.0:
-        "2024-08-03T16:14:35.000Z"
+        "2024-05-09T21:13:11.000Z"
      values.$pastUpgrades.3.2:
-        ["0x26089e9738b809d8308B0011B93b4225a112DB8C"]
+        "0x43cca617c25c2c5ac4164bdfbeedb8dbf7325056844893fe61bb9e2034ebad1e"
      values.$pastUpgrades.3.1:
-        "0xb40a6884127043977ba87604e5b6a7447b7f8e6fa88b3ab3d940507c8e1c92d8"
+        ["0xCDFFF07d5b8AcdAd13607615118a2e65030f5be1"]
      values.$pastUpgrades.3.0:
-        "2024-05-09T21:13:11.000Z"
+        "2024-05-21T19:56:59.000Z"
      values.$pastUpgrades.2.2:
-        "0x43cca617c25c2c5ac4164bdfbeedb8dbf7325056844893fe61bb9e2034ebad1e"
+        "0xb51ad742d1c13af667acb1608d33790a5dcc4970153a6ac2f415390b16fb485e"
      values.$pastUpgrades.2.1:
-        ["0xCDFFF07d5b8AcdAd13607615118a2e65030f5be1"]
+        "2024-04-05T21:49:59.000Z"
      values.$pastUpgrades.2.0:
-        "2024-05-21T19:56:59.000Z"
+        ["0xF5fD25A90902c27068CF5eBe53Be8da693Ac899e"]
      values.$pastUpgrades.1.2:
-        "0xb51ad742d1c13af667acb1608d33790a5dcc4970153a6ac2f415390b16fb485e"
+        "2024-04-05T21:49:47.000Z"
      values.$pastUpgrades.1.1:
-        "2024-04-05T21:49:59.000Z"
+        ["0x1f96861fEFa1065a5A96F20Deb6D8DC3ff48F7f9"]
      values.$pastUpgrades.1.0:
-        ["0xF5fD25A90902c27068CF5eBe53Be8da693Ac899e"]
+        "0x0742f1a4d072fc85fe39830a9d21536bf3e09c0ce5a7571cab93bd85d09ff576"
      values.$pastUpgrades.0.2:
-        "2024-04-05T21:49:47.000Z"
+        "0xfa483d640a2793a223b75e6a2c6fb8f9eaa2a1c0df1e6ca69d7d332251981282"
      values.$pastUpgrades.0.1.0:
-        "0x1f96861fEFa1065a5A96F20Deb6D8DC3ff48F7f9"
+        "0xae448D008B6F69033AfdA361b46b36C472B6FEE0"
      values.$pastUpgrades.0.0:
-        "0x0742f1a4d072fc85fe39830a9d21536bf3e09c0ce5a7571cab93bd85d09ff576"
+        "2025-05-29T22:04:35.000Z"
      values.$upgradeCount:
-        6
+        7
      values.eigenDADisperserRegistry:
+        "0x78cb05379a3b66E5227f2C1496432D7FFE794Fad"
      values.eigenDARelayRegistry:
+        "0xD160e6C1543f562fc2B0A5bf090aED32640Ec55B"
      values.eigenDAThresholdRegistry:
+        "0xdb4c89956eEa6F606135E7d366322F2bDE609F15"
      values.paymentVault:
+        "0xb2e7ef419a2A399472ae22ef5cFcCb8bE97A4B05"
      implementationNames.0x58fDE694Db83e589ABb21A6Fe66cb20Ce5554a07:
-        "EigenDAServiceManager"
      implementationNames.0xae448D008B6F69033AfdA361b46b36C472B6FEE0:
+        "EigenDAServiceManager"
    }
```

```diff
+   Status: CREATED
    contract SocketRegistry (0x5a3eD432f2De9645940333e4474bBAAB8cf64cf2)
    +++ description: None
```

```diff
+   Status: CREATED
    contract EigenDADisperserRegistry (0x78cb05379a3b66E5227f2C1496432D7FFE794Fad)
    +++ description: Registry for EigenDA disperser info such as disperser key to address mapping.
```

```diff
+   Status: CREATED
    contract PaymentVault (0xb2e7ef419a2A399472ae22ef5cFcCb8bE97A4B05)
    +++ description: Entrypoint for making reservations and on demand payments for EigenDA.
```

```diff
+   Status: CREATED
    contract EigenDARelayRegistry (0xD160e6C1543f562fc2B0A5bf090aED32640Ec55B)
    +++ description: Registry for EigenDA relay keys, maps key to address.
```

```diff
+   Status: CREATED
    contract EigenDAThresholdRegistry (0xdb4c89956eEa6F606135E7d366322F2bDE609F15)
    +++ description: Registry of EigenDA threshold (i.e, adversary and confirmation threshold percentage for a quorum)
```

## Source code changes

```diff
.../EigenDADisperserRegistry.sol                   |  410 +++++
 .../TransparentUpgradeableProxy.p.sol              |  631 +++++++
 .../EigenDARelayRegistry/EigenDARelayRegistry.sol  |  420 +++++
 .../TransparentUpgradeableProxy.p.sol              |  631 +++++++
 .../EigenDAServiceManager.sol                      | 1822 +++++++++++++-------
 .../EigenDAThresholdRegistry.sol                   |  715 ++++++++
 .../TransparentUpgradeableProxy.p.sol              |  631 +++++++
 .../EjectionManager/EjectionManager.sol            |   61 +-
 .../ethereum/.flat/PaymentVault/PaymentVault.sol   |  594 +++++++
 .../PaymentVault/TransparentUpgradeableProxy.p.sol |  631 +++++++
 .../RegistryCoordinator/RegistryCoordinator.sol    |  104 +-
 .../.flat/SocketRegistry/SocketRegistry.sol        |   53 +
 .../TransparentUpgradeableProxy.p.sol              |  631 +++++++
 13 files changed, 6635 insertions(+), 699 deletions(-)
```

Generated with discovered.json: 0x117dfaf8cdbc33a782a6e24f797d6a09fb98c618

# Diff at Fri, 23 May 2025 09:40:55 GMT:

- author: Adrian Adamiak (<adrian@adamiak.net>)
- comparing to: main@69cd181abbc3c830a6caf2f4429b37cae72ffdb8 block: 22425142
- current block number: 22425142

## Description

Introduced .role field on each permission, defaulting to field name on which it was defined (with '.' prefix)

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 22425142 (main branch discovery), not current.

```diff
    contract EigenDAOperationsMultisig (0x002721B4790d97dC140a049936aA710152Ba92D5) {
    +++ description: None
      receivedPermissions.7.role:
+        "admin"
      receivedPermissions.6.role:
+        "admin"
      receivedPermissions.5.role:
+        "admin"
      receivedPermissions.4.role:
+        "admin"
      receivedPermissions.3.role:
+        "admin"
      receivedPermissions.2.role:
+        "admin"
      receivedPermissions.1.role:
+        ".owner"
      receivedPermissions.0.role:
+        ".owner"
      directlyReceivedPermissions.0.role:
+        ".owner"
    }
```

```diff
    contract PauserRegistry (0x0c431C66F4dE941d089625E5B423D00707977060) {
    +++ description: Defines and stores pauser and unpauser roles for EigenDA contracts.
      receivedPermissions.0.role:
+        ".pauserRegistry"
    }
```

```diff
    contract EigenLayerRewardsInitiatorMultisig (0x178eeeA9E0928dA2153A1d7951FBe30CF8371b8A) {
    +++ description: None
      receivedPermissions.0.role:
+        ".rewardsInitiator"
    }
```

```diff
    EOA  (0x454Ef2f69f91527856E06659f92a66f464C1ca4e) {
    +++ description: None
      receivedPermissions.0.role:
+        ".batchConfirmers"
    }
```

```diff
    EOA  (0x5A49Bf6c5690E22dFff3eB37F7dd18254eC361ED) {
    +++ description: None
      receivedPermissions.0.role:
+        ".batchConfirmers"
    }
```

```diff
    contract ProxyAdmin (0x8247EF5705d3345516286B72bFE6D690197C2E99) {
    +++ description: None
      directlyReceivedPermissions.5.role:
+        "admin"
      directlyReceivedPermissions.4.role:
+        "admin"
      directlyReceivedPermissions.3.role:
+        "admin"
      directlyReceivedPermissions.2.role:
+        "admin"
      directlyReceivedPermissions.1.role:
+        "admin"
      directlyReceivedPermissions.0.role:
+        "admin"
    }
```

```diff
    EOA  (0x8642473a123FE33b0aaE90bD8604eA1029417236) {
    +++ description: None
      receivedPermissions.0.role:
+        ".ejectors"
    }
```

```diff
    EOA  (0x8ED83c6Bb12E441Ca2C3a544F525d4a3Fb6484D8) {
    +++ description: None
      receivedPermissions.0.role:
+        ".batchConfirmers"
    }
```

```diff
    EOA  (0xD2Ee81Cf07B12140C793FcE5B26313CDd9d78eA8) {
    +++ description: None
      receivedPermissions.0.role:
+        ".ejectors"
    }
```

```diff
    EOA  (0xe0550117Cb066D3b330eBd764B0d75D3BA378734) {
    +++ description: None
      receivedPermissions.0.role:
+        ".churnApprover"
    }
```

Generated with discovered.json: 0xcccee4500604b05cff3671140c666084f65d605a

# Diff at Mon, 12 May 2025 13:18:50 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@5e25d362b71032c18a3417a2307d6923e1b5a519 block: 22425142
- current block number: 22425142

## Description

replace medium severity everywhere.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 22425142 (main branch discovery), not current.

```diff
    contract RegistryCoordinator (0x0BAAc79acD45A023E19345c352d8a7a83C4e5656) {
    +++ description: Operators register here with an AVS: The coordinator has three registries: 1) a `StakeRegistry` that keeps track of operators' stakes, 2) a `BLSApkRegistry` that keeps track of operators' BLS public keys and aggregate BLS public keys for each quorum, 3) an `IndexRegistry` that keeps track of an ordered list of operators for each quorum.
      fieldMeta.ejectionCooldown.severity:
-        "MEDIUM"
+        "HIGH"
    }
```

```diff
    contract EigenDAServiceManager (0x870679E138bCdf293b7Ff14dD44b70FC97e12fc0) {
    +++ description: Bridge contract that accepts blob batches data availability attestations. Batches availability is attested by EigenDA operators signatures and relayed to the service manager contract by the EigenDA disperser.
      fieldMeta.BLOCK_STALE_MEASURE.severity:
-        "MEDIUM"
+        "HIGH"
      fieldMeta.quorumAdversaryThresholdPercentages.severity:
-        "MEDIUM"
+        "HIGH"
      fieldMeta.quorumConfirmationThresholdPercentages.severity:
-        "MEDIUM"
+        "HIGH"
      fieldMeta.batchConfirmers.severity:
-        "MEDIUM"
+        "HIGH"
    }
```

Generated with discovered.json: 0xe01ece34ed2b91a3e89bf4cbb1d3c2337256b809

# Diff at Tue, 06 May 2025 14:18:59 GMT:

- author: vincfurc (<10850139+vincfurc@users.noreply.github.com>)
- comparing to: main@30ca054bbefa91d57a0e71a49c313444ab339496 block: 22208508
- current block number: 22425142

## Description

New EigenDAOperationsMultisig as owner of core contracts. EigenDA has not upgraded to the allocation manager and its operators set yet, still uses AVS registry.

## Watched changes

```diff
    contract RegistryCoordinator (0x0BAAc79acD45A023E19345c352d8a7a83C4e5656) {
    +++ description: Operators register here with an AVS: The coordinator has three registries: 1) a `StakeRegistry` that keeps track of operators' stakes, 2) a `BLSApkRegistry` that keeps track of operators' BLS public keys and aggregate BLS public keys for each quorum, 3) an `IndexRegistry` that keeps track of an ordered list of operators for each quorum.
      values.owner:
-        "0xBE1685C81aA44FF9FB319dD389addd9374383e90"
+        "0x002721B4790d97dC140a049936aA710152Ba92D5"
    }
```

```diff
    contract EjectionManager (0x130d8EA0052B45554e4C99079B84df292149Bd5E) {
    +++ description: Contract used for ejection of operators from the RegistryCoordinator for violating the Service Legal Agreement (SLA).
      values.ejectors.1:
+        "0x8642473a123FE33b0aaE90bD8604eA1029417236"
      values.owner:
-        "0xBE1685C81aA44FF9FB319dD389addd9374383e90"
+        "0x002721B4790d97dC140a049936aA710152Ba92D5"
    }
```

```diff
    contract ProxyAdmin (0x8247EF5705d3345516286B72bFE6D690197C2E99) {
    +++ description: None
      values.owner:
-        "0x369e6F597e22EaB55fFb173C6d9cD234BD699111"
+        "0x002721B4790d97dC140a049936aA710152Ba92D5"
      receivedPermissions:
-        [{"permission":"upgrade","from":"0x006124Ae7976137266feeBFb3F4D2BE4C073139D"},{"permission":"upgrade","from":"0x00A5Fd09F6CeE6AE9C8b0E5e33287F7c82880505"},{"permission":"upgrade","from":"0x0BAAc79acD45A023E19345c352d8a7a83C4e5656"},{"permission":"upgrade","from":"0x130d8EA0052B45554e4C99079B84df292149Bd5E"},{"permission":"upgrade","from":"0x870679E138bCdf293b7Ff14dD44b70FC97e12fc0"},{"permission":"upgrade","from":"0xBd35a7a1CDeF403a6a99e4E8BA0974D198455030"}]
      directlyReceivedPermissions:
+        [{"permission":"upgrade","from":"0x006124Ae7976137266feeBFb3F4D2BE4C073139D"},{"permission":"upgrade","from":"0x00A5Fd09F6CeE6AE9C8b0E5e33287F7c82880505"},{"permission":"upgrade","from":"0x0BAAc79acD45A023E19345c352d8a7a83C4e5656"},{"permission":"upgrade","from":"0x130d8EA0052B45554e4C99079B84df292149Bd5E"},{"permission":"upgrade","from":"0x870679E138bCdf293b7Ff14dD44b70FC97e12fc0"},{"permission":"upgrade","from":"0xBd35a7a1CDeF403a6a99e4E8BA0974D198455030"}]
    }
```

```diff
    contract EigenDAServiceManager (0x870679E138bCdf293b7Ff14dD44b70FC97e12fc0) {
    +++ description: Bridge contract that accepts blob batches data availability attestations. Batches availability is attested by EigenDA operators signatures and relayed to the service manager contract by the EigenDA disperser.
      values.owner:
-        "0xBE1685C81aA44FF9FB319dD389addd9374383e90"
+        "0x002721B4790d97dC140a049936aA710152Ba92D5"
    }
```

```diff
+   Status: CREATED
    contract EigenDAOperationsMultisig (0x002721B4790d97dC140a049936aA710152Ba92D5)
    +++ description: None
```

## Source code changes

```diff
.../.flat/EigenDAOperationsMultisig/Safe.sol       | 1088 ++++++++++++++++++++
 .../EigenDAOperationsMultisig/SafeProxy.p.sol      |   37 +
 2 files changed, 1125 insertions(+)
```

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 22208508 (main branch discovery), not current.

```diff
    contract PauserRegistry (0x0c431C66F4dE941d089625E5B423D00707977060) {
    +++ description: Defines and stores pauser and unpauser roles for EigenDA contracts.
      template:
-        "eigenlayer/PauserRegistry"
+        "eigenlayer/EigenDAPauserRegistry"
      description:
-        "Defines and stores pauser and unpauser roles for EigenLayer contracts and the EigenDAServiceManager."
+        "Defines and stores pauser and unpauser roles for EigenDA contracts."
      directlyReceivedPermissions:
-        [{"permission":"interact","from":"0x870679E138bCdf293b7Ff14dD44b70FC97e12fc0","description":"can pause the DA bridge"}]
      receivedPermissions:
+        [{"permission":"interact","from":"0x870679E138bCdf293b7Ff14dD44b70FC97e12fc0","description":"can pause the DA bridge"}]
    }
```

```diff
-   Status: DELETED
    contract UpgradeableBeacon (0x0ed6703C298d28aE0878d1b28e88cA87F9662fE9)
    +++ description: None
```

```diff
-   Status: DELETED
    contract AVSDirectory (0x135DDa560e946695d6f155dACaFC6f1F25C1F5AF)
    +++ description: None
```

```diff
-   Status: DELETED
    contract EigenLayerOwningMultisig (0x369e6F597e22EaB55fFb173C6d9cD234BD699111)
    +++ description: None
```

```diff
-   Status: DELETED
    contract DelegationManager (0x39053D51B77DC0d36036Fc1fCc8Cb819df8Ef37A)
    +++ description: The DelegationManager contract is responsible for registering EigenLayer operators and managing the EigenLayer strategies delegations. The EigenDA StakeRegistry contract reads from the DelegationManager to track the total stake of each EigenDA operator.
```

```diff
-   Status: DELETED
    contract EigenLayerProtocolCouncil (0x461854d84Ee845F905e0eCf6C288DDEEb4A9533F)
    +++ description: None
```

```diff
-   Status: DELETED
    contract EigenLayerPauserMultisig (0x5050389572f2d220ad927CcbeA0D406831012390)
    +++ description: None
```

```diff
-   Status: DELETED
    contract UpgradeableBeacon (0x5a2a4F2F3C18f09179B6703e63D9eDD165909073)
    +++ description: None
```

```diff
-   Status: DELETED
    contract StrategyFactory (0x5e4C39Ad7A3E881585e383dB9827EB4811f6F647)
    +++ description: None
```

```diff
-   Status: DELETED
    contract EigenPod (0x6D225e974Fa404D25Ffb84eD6E242Ffa18eF6430)
    +++ description: None
```

```diff
-   Status: DELETED
    contract Safe (0x7F68e9C17D22005688b8E6968fCe31e32B4B03d1)
    +++ description: None
```

```diff
    contract ProxyAdmin (0x8247EF5705d3345516286B72bFE6D690197C2E99) {
    +++ description: None
      directlyReceivedPermissions:
-        [{"permission":"upgrade","from":"0x006124Ae7976137266feeBFb3F4D2BE4C073139D"},{"permission":"upgrade","from":"0x00A5Fd09F6CeE6AE9C8b0E5e33287F7c82880505"},{"permission":"upgrade","from":"0x0BAAc79acD45A023E19345c352d8a7a83C4e5656"},{"permission":"upgrade","from":"0x130d8EA0052B45554e4C99079B84df292149Bd5E"},{"permission":"upgrade","from":"0x870679E138bCdf293b7Ff14dD44b70FC97e12fc0"},{"permission":"upgrade","from":"0xBd35a7a1CDeF403a6a99e4E8BA0974D198455030"}]
      receivedPermissions:
+        [{"permission":"upgrade","from":"0x006124Ae7976137266feeBFb3F4D2BE4C073139D"},{"permission":"upgrade","from":"0x00A5Fd09F6CeE6AE9C8b0E5e33287F7c82880505"},{"permission":"upgrade","from":"0x0BAAc79acD45A023E19345c352d8a7a83C4e5656"},{"permission":"upgrade","from":"0x130d8EA0052B45554e4C99079B84df292149Bd5E"},{"permission":"upgrade","from":"0x870679E138bCdf293b7Ff14dD44b70FC97e12fc0"},{"permission":"upgrade","from":"0xBd35a7a1CDeF403a6a99e4E8BA0974D198455030"}]
    }
```

```diff
-   Status: DELETED
    contract StrategyManager (0x858646372CC42E1A627fcE94aa7A7033e7CF075A)
    +++ description: The StrategyManager contract is responsible for managing the EigenLayer token strategies. Each EigenDA quorum has at least one strategy that defines the operators quorum stake.
```

```diff
-   Status: DELETED
    contract ProxyAdmin (0x8b9566AdA63B64d1E1dcF1418b43fd1433b72444)
    +++ description: None
```

```diff
-   Status: DELETED
    contract EigenPodManager (0x91E677b07F7AF907ec9a428aafA9fc14a0d3A338)
    +++ description: None
```

```diff
    contract IndexRegistry (0xBd35a7a1CDeF403a6a99e4E8BA0974D198455030) {
    +++ description: A registry contract that keeps track of an ordered list of operators for each quorum.
      template:
+        "eigenlayer/IndexRegistry"
      description:
+        "A registry contract that keeps track of an ordered list of operators for each quorum."
    }
```

```diff
-   Status: DELETED
    contract EigenLayerOperationsMultisig (0xBE1685C81aA44FF9FB319dD389addd9374383e90)
    +++ description: None
```

```diff
-   Status: DELETED
    contract TimelockControllerOwning (0xC06Fd4F821eaC1fF1ae8067b36342899b57BAa2d)
    +++ description: A timelock that allows scheduling calls and executing or cancelling them with a delay.
```

```diff
-   Status: DELETED
    contract Slasher (0xD92145c07f8Ed1D392c1B88017934E301CC1c3Cd)
    +++ description: None
```

```diff
-   Status: DELETED
    contract StrategyBase (0xe9FA8F904d97854C7389b68923262ADCC6C27827)
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
```

```diff
-   Status: DELETED
    contract EIGEN Token (0xec53bF9167f50cDEB3Ae105f56099aaaB9061F83)
    +++ description: The EIGEN token can be socially forked to slash operators for data withholding attacks (and other intersubjectively attributable faults). EIGEN is a wrapper over a second token, bEIGEN, which will be used solely for intersubjective staking. Forking EIGEN means changing the canonical implementation of the bEIGEN token in the EIGEN token contract.
```

```diff
-   Status: DELETED
    contract EigenLayerCommunityMultisig (0xFEA47018D632A77bA579846c840d5706705Dc598)
    +++ description: None
```

Generated with discovered.json: 0x0b75298d35c1f03996e9da699866e6ff2d2ab796

# Diff at Tue, 29 Apr 2025 08:19:02 GMT:

- author: Adrian Adamiak (<adrian@adamiak.net>)
- comparing to: main@ef7477af00fe0b57a2f7cacf7e958c12494af662 block: 22208508
- current block number: 22208508

## Description

Field .issuedPermissions is removed from the output as no longer needed. Added 'permissionsConfigHash' due to refactoring of the modelling process (into a separate command).

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 22208508 (main branch discovery), not current.

```diff
    contract StakeRegistry (0x006124Ae7976137266feeBFb3F4D2BE4C073139D) {
    +++ description: Keeps track of the total stake of each operator.
      issuedPermissions:
-        [{"permission":"upgrade","to":"0x461854d84Ee845F905e0eCf6C288DDEEb4A9533F","via":[{"address":"0xC06Fd4F821eaC1fF1ae8067b36342899b57BAa2d","delay":864000},{"address":"0x369e6F597e22EaB55fFb173C6d9cD234BD699111"},{"address":"0x8247EF5705d3345516286B72bFE6D690197C2E99"}]},{"permission":"upgrade","to":"0xBE1685C81aA44FF9FB319dD389addd9374383e90","via":[{"address":"0xC06Fd4F821eaC1fF1ae8067b36342899b57BAa2d","delay":864000},{"address":"0x369e6F597e22EaB55fFb173C6d9cD234BD699111"},{"address":"0x8247EF5705d3345516286B72bFE6D690197C2E99"}]},{"permission":"upgrade","to":"0xFEA47018D632A77bA579846c840d5706705Dc598","via":[{"address":"0x369e6F597e22EaB55fFb173C6d9cD234BD699111"},{"address":"0x8247EF5705d3345516286B72bFE6D690197C2E99"}]}]
    }
```

```diff
    contract BLSApkRegistry (0x00A5Fd09F6CeE6AE9C8b0E5e33287F7c82880505) {
    +++ description: Keeps track of the BLS public keys of each operator and the quorum aggregated keys.
      issuedPermissions:
-        [{"permission":"upgrade","to":"0x461854d84Ee845F905e0eCf6C288DDEEb4A9533F","via":[{"address":"0xC06Fd4F821eaC1fF1ae8067b36342899b57BAa2d","delay":864000},{"address":"0x369e6F597e22EaB55fFb173C6d9cD234BD699111"},{"address":"0x8247EF5705d3345516286B72bFE6D690197C2E99"}]},{"permission":"upgrade","to":"0xBE1685C81aA44FF9FB319dD389addd9374383e90","via":[{"address":"0xC06Fd4F821eaC1fF1ae8067b36342899b57BAa2d","delay":864000},{"address":"0x369e6F597e22EaB55fFb173C6d9cD234BD699111"},{"address":"0x8247EF5705d3345516286B72bFE6D690197C2E99"}]},{"permission":"upgrade","to":"0xFEA47018D632A77bA579846c840d5706705Dc598","via":[{"address":"0x369e6F597e22EaB55fFb173C6d9cD234BD699111"},{"address":"0x8247EF5705d3345516286B72bFE6D690197C2E99"}]}]
    }
```

```diff
    contract RegistryCoordinator (0x0BAAc79acD45A023E19345c352d8a7a83C4e5656) {
    +++ description: Operators register here with an AVS: The coordinator has three registries: 1) a `StakeRegistry` that keeps track of operators' stakes, 2) a `BLSApkRegistry` that keeps track of operators' BLS public keys and aggregate BLS public keys for each quorum, 3) an `IndexRegistry` that keeps track of an ordered list of operators for each quorum.
      issuedPermissions:
-        [{"permission":"interact","to":"0xBE1685C81aA44FF9FB319dD389addd9374383e90","description":"can add and remove strategies","via":[]},{"permission":"interact","to":"0xe0550117Cb066D3b330eBd764B0d75D3BA378734","description":"can approve the replacement of churned operators from a quorum","via":[]},{"permission":"upgrade","to":"0x461854d84Ee845F905e0eCf6C288DDEEb4A9533F","via":[{"address":"0xC06Fd4F821eaC1fF1ae8067b36342899b57BAa2d","delay":864000},{"address":"0x369e6F597e22EaB55fFb173C6d9cD234BD699111"},{"address":"0x8247EF5705d3345516286B72bFE6D690197C2E99"}]},{"permission":"upgrade","to":"0xBE1685C81aA44FF9FB319dD389addd9374383e90","via":[{"address":"0xC06Fd4F821eaC1fF1ae8067b36342899b57BAa2d","delay":864000},{"address":"0x369e6F597e22EaB55fFb173C6d9cD234BD699111"},{"address":"0x8247EF5705d3345516286B72bFE6D690197C2E99"}]},{"permission":"upgrade","to":"0xFEA47018D632A77bA579846c840d5706705Dc598","via":[{"address":"0x369e6F597e22EaB55fFb173C6d9cD234BD699111"},{"address":"0x8247EF5705d3345516286B72bFE6D690197C2E99"}]}]
    }
```

```diff
    contract EjectionManager (0x130d8EA0052B45554e4C99079B84df292149Bd5E) {
    +++ description: Contract used for ejection of operators from the RegistryCoordinator for violating the Service Legal Agreement (SLA).
      issuedPermissions:
-        [{"permission":"interact","to":"0xD2Ee81Cf07B12140C793FcE5B26313CDd9d78eA8","description":"can eject DA operators from a quorum.","via":[]},{"permission":"upgrade","to":"0x461854d84Ee845F905e0eCf6C288DDEEb4A9533F","via":[{"address":"0xC06Fd4F821eaC1fF1ae8067b36342899b57BAa2d","delay":864000},{"address":"0x369e6F597e22EaB55fFb173C6d9cD234BD699111"},{"address":"0x8247EF5705d3345516286B72bFE6D690197C2E99"}]},{"permission":"upgrade","to":"0xBE1685C81aA44FF9FB319dD389addd9374383e90","via":[{"address":"0xC06Fd4F821eaC1fF1ae8067b36342899b57BAa2d","delay":864000},{"address":"0x369e6F597e22EaB55fFb173C6d9cD234BD699111"},{"address":"0x8247EF5705d3345516286B72bFE6D690197C2E99"}]},{"permission":"upgrade","to":"0xFEA47018D632A77bA579846c840d5706705Dc598","via":[{"address":"0x369e6F597e22EaB55fFb173C6d9cD234BD699111"},{"address":"0x8247EF5705d3345516286B72bFE6D690197C2E99"}]}]
    }
```

```diff
    contract AVSDirectory (0x135DDa560e946695d6f155dACaFC6f1F25C1F5AF) {
    +++ description: None
      issuedPermissions:
-        [{"permission":"upgrade","to":"0x461854d84Ee845F905e0eCf6C288DDEEb4A9533F","via":[{"address":"0xC06Fd4F821eaC1fF1ae8067b36342899b57BAa2d","delay":864000},{"address":"0x369e6F597e22EaB55fFb173C6d9cD234BD699111"},{"address":"0x8b9566AdA63B64d1E1dcF1418b43fd1433b72444"}]},{"permission":"upgrade","to":"0xBE1685C81aA44FF9FB319dD389addd9374383e90","via":[{"address":"0xC06Fd4F821eaC1fF1ae8067b36342899b57BAa2d","delay":864000},{"address":"0x369e6F597e22EaB55fFb173C6d9cD234BD699111"},{"address":"0x8b9566AdA63B64d1E1dcF1418b43fd1433b72444"}]},{"permission":"upgrade","to":"0xFEA47018D632A77bA579846c840d5706705Dc598","via":[{"address":"0x369e6F597e22EaB55fFb173C6d9cD234BD699111"},{"address":"0x8b9566AdA63B64d1E1dcF1418b43fd1433b72444"}]}]
    }
```

```diff
    contract DelegationManager (0x39053D51B77DC0d36036Fc1fCc8Cb819df8Ef37A) {
    +++ description: The DelegationManager contract is responsible for registering EigenLayer operators and managing the EigenLayer strategies delegations. The EigenDA StakeRegistry contract reads from the DelegationManager to track the total stake of each EigenDA operator.
      issuedPermissions:
-        [{"permission":"upgrade","to":"0x461854d84Ee845F905e0eCf6C288DDEEb4A9533F","via":[{"address":"0xC06Fd4F821eaC1fF1ae8067b36342899b57BAa2d","delay":864000},{"address":"0x369e6F597e22EaB55fFb173C6d9cD234BD699111"},{"address":"0x8b9566AdA63B64d1E1dcF1418b43fd1433b72444"}]},{"permission":"upgrade","to":"0xBE1685C81aA44FF9FB319dD389addd9374383e90","via":[{"address":"0xC06Fd4F821eaC1fF1ae8067b36342899b57BAa2d","delay":864000},{"address":"0x369e6F597e22EaB55fFb173C6d9cD234BD699111"},{"address":"0x8b9566AdA63B64d1E1dcF1418b43fd1433b72444"}]},{"permission":"upgrade","to":"0xFEA47018D632A77bA579846c840d5706705Dc598","via":[{"address":"0x369e6F597e22EaB55fFb173C6d9cD234BD699111"},{"address":"0x8b9566AdA63B64d1E1dcF1418b43fd1433b72444"}]}]
    }
```

```diff
    contract StrategyFactory (0x5e4C39Ad7A3E881585e383dB9827EB4811f6F647) {
    +++ description: None
      issuedPermissions:
-        [{"permission":"upgrade","to":"0x461854d84Ee845F905e0eCf6C288DDEEb4A9533F","via":[{"address":"0xC06Fd4F821eaC1fF1ae8067b36342899b57BAa2d","delay":864000},{"address":"0x369e6F597e22EaB55fFb173C6d9cD234BD699111"},{"address":"0x8b9566AdA63B64d1E1dcF1418b43fd1433b72444"}]},{"permission":"upgrade","to":"0xBE1685C81aA44FF9FB319dD389addd9374383e90","via":[{"address":"0xC06Fd4F821eaC1fF1ae8067b36342899b57BAa2d","delay":864000},{"address":"0x369e6F597e22EaB55fFb173C6d9cD234BD699111"},{"address":"0x8b9566AdA63B64d1E1dcF1418b43fd1433b72444"}]},{"permission":"upgrade","to":"0xFEA47018D632A77bA579846c840d5706705Dc598","via":[{"address":"0x369e6F597e22EaB55fFb173C6d9cD234BD699111"},{"address":"0x8b9566AdA63B64d1E1dcF1418b43fd1433b72444"}]}]
    }
```

```diff
    contract StrategyManager (0x858646372CC42E1A627fcE94aa7A7033e7CF075A) {
    +++ description: The StrategyManager contract is responsible for managing the EigenLayer token strategies. Each EigenDA quorum has at least one strategy that defines the operators quorum stake.
      issuedPermissions:
-        [{"permission":"upgrade","to":"0x461854d84Ee845F905e0eCf6C288DDEEb4A9533F","via":[{"address":"0xC06Fd4F821eaC1fF1ae8067b36342899b57BAa2d","delay":864000},{"address":"0x369e6F597e22EaB55fFb173C6d9cD234BD699111"},{"address":"0x8b9566AdA63B64d1E1dcF1418b43fd1433b72444"}]},{"permission":"upgrade","to":"0xBE1685C81aA44FF9FB319dD389addd9374383e90","via":[{"address":"0xC06Fd4F821eaC1fF1ae8067b36342899b57BAa2d","delay":864000},{"address":"0x369e6F597e22EaB55fFb173C6d9cD234BD699111"},{"address":"0x8b9566AdA63B64d1E1dcF1418b43fd1433b72444"}]},{"permission":"upgrade","to":"0xFEA47018D632A77bA579846c840d5706705Dc598","via":[{"address":"0x369e6F597e22EaB55fFb173C6d9cD234BD699111"},{"address":"0x8b9566AdA63B64d1E1dcF1418b43fd1433b72444"}]}]
    }
```

```diff
    contract EigenDAServiceManager (0x870679E138bCdf293b7Ff14dD44b70FC97e12fc0) {
    +++ description: Bridge contract that accepts blob batches data availability attestations. Batches availability is attested by EigenDA operators signatures and relayed to the service manager contract by the EigenDA disperser.
      issuedPermissions:
-        [{"permission":"interact","to":"0x1084c2e1E33632c4cB0e7C4f15c64b19d7fB1256","description":"can pause the DA bridge","via":[{"address":"0x5050389572f2d220ad927CcbeA0D406831012390"},{"address":"0x0c431C66F4dE941d089625E5B423D00707977060"}]},{"permission":"interact","to":"0x178eeeA9E0928dA2153A1d7951FBe30CF8371b8A","description":"can create rewards submissions.","via":[]},{"permission":"interact","to":"0x2E158da11961426E2A1Cc9e79f40244486b6845C","description":"can pause the DA bridge","via":[{"address":"0x5050389572f2d220ad927CcbeA0D406831012390"},{"address":"0x0c431C66F4dE941d089625E5B423D00707977060"}]},{"permission":"interact","to":"0x454Ef2f69f91527856E06659f92a66f464C1ca4e","description":"can confirm batches to the DA bridge.","via":[]},{"permission":"interact","to":"0x461854d84Ee845F905e0eCf6C288DDEEb4A9533F","description":"can pause the DA bridge","via":[{"address":"0xC06Fd4F821eaC1fF1ae8067b36342899b57BAa2d","delay":864000},{"address":"0x369e6F597e22EaB55fFb173C6d9cD234BD699111"},{"address":"0x0c431C66F4dE941d089625E5B423D00707977060"}]},{"permission":"interact","to":"0x4a3CD82B73821d075799680AcDff3e884B726777","description":"can pause the DA bridge","via":[{"address":"0x5050389572f2d220ad927CcbeA0D406831012390"},{"address":"0x0c431C66F4dE941d089625E5B423D00707977060"}]},{"permission":"interact","to":"0x57af860e3a1C16641CDDDa92898266D2df7Dfa71","description":"can pause the DA bridge","via":[{"address":"0x5050389572f2d220ad927CcbeA0D406831012390"},{"address":"0x0c431C66F4dE941d089625E5B423D00707977060"}]},{"permission":"interact","to":"0x5A49Bf6c5690E22dFff3eB37F7dd18254eC361ED","description":"can confirm batches to the DA bridge.","via":[]},{"permission":"interact","to":"0x8ED83c6Bb12E441Ca2C3a544F525d4a3Fb6484D8","description":"can confirm batches to the DA bridge.","via":[]},{"permission":"interact","to":"0x9C7E495F6220c2Eccf19Ce73a2d1d486D53296E4","description":"can pause the DA bridge","via":[{"address":"0x5050389572f2d220ad927CcbeA0D406831012390"},{"address":"0x0c431C66F4dE941d089625E5B423D00707977060"}]},{"permission":"interact","to":"0xBE1685C81aA44FF9FB319dD389addd9374383e90","description":"can pause the DA bridge","via":[{"address":"0x0c431C66F4dE941d089625E5B423D00707977060"}]},{"permission":"interact","to":"0xBE1685C81aA44FF9FB319dD389addd9374383e90","description":"can pause the DA bridge","via":[{"address":"0xC06Fd4F821eaC1fF1ae8067b36342899b57BAa2d","delay":864000},{"address":"0x369e6F597e22EaB55fFb173C6d9cD234BD699111"},{"address":"0x0c431C66F4dE941d089625E5B423D00707977060"}]},{"permission":"interact","to":"0xBE1685C81aA44FF9FB319dD389addd9374383e90","description":"can transfer ownership of the contract, update the metadata URI, set reward initiator and set batch confirmer","via":[]},{"permission":"interact","to":"0xEFca484E497a9de170Da32abfa11650957dD2a95","description":"can pause the DA bridge","via":[{"address":"0x5050389572f2d220ad927CcbeA0D406831012390"},{"address":"0x0c431C66F4dE941d089625E5B423D00707977060"}]},{"permission":"interact","to":"0xFEA47018D632A77bA579846c840d5706705Dc598","description":"can pause the DA bridge","via":[{"address":"0x369e6F597e22EaB55fFb173C6d9cD234BD699111"},{"address":"0x0c431C66F4dE941d089625E5B423D00707977060"}]},{"permission":"upgrade","to":"0x461854d84Ee845F905e0eCf6C288DDEEb4A9533F","via":[{"address":"0xC06Fd4F821eaC1fF1ae8067b36342899b57BAa2d","delay":864000},{"address":"0x369e6F597e22EaB55fFb173C6d9cD234BD699111"},{"address":"0x8247EF5705d3345516286B72bFE6D690197C2E99"}]},{"permission":"upgrade","to":"0xBE1685C81aA44FF9FB319dD389addd9374383e90","via":[{"address":"0xC06Fd4F821eaC1fF1ae8067b36342899b57BAa2d","delay":864000},{"address":"0x369e6F597e22EaB55fFb173C6d9cD234BD699111"},{"address":"0x8247EF5705d3345516286B72bFE6D690197C2E99"}]},{"permission":"upgrade","to":"0xFEA47018D632A77bA579846c840d5706705Dc598","via":[{"address":"0x369e6F597e22EaB55fFb173C6d9cD234BD699111"},{"address":"0x8247EF5705d3345516286B72bFE6D690197C2E99"}]}]
    }
```

```diff
    contract EigenPodManager (0x91E677b07F7AF907ec9a428aafA9fc14a0d3A338) {
    +++ description: None
      issuedPermissions:
-        [{"permission":"upgrade","to":"0x461854d84Ee845F905e0eCf6C288DDEEb4A9533F","via":[{"address":"0xC06Fd4F821eaC1fF1ae8067b36342899b57BAa2d","delay":864000},{"address":"0x369e6F597e22EaB55fFb173C6d9cD234BD699111"},{"address":"0x8b9566AdA63B64d1E1dcF1418b43fd1433b72444"}]},{"permission":"upgrade","to":"0xBE1685C81aA44FF9FB319dD389addd9374383e90","via":[{"address":"0xC06Fd4F821eaC1fF1ae8067b36342899b57BAa2d","delay":864000},{"address":"0x369e6F597e22EaB55fFb173C6d9cD234BD699111"},{"address":"0x8b9566AdA63B64d1E1dcF1418b43fd1433b72444"}]},{"permission":"upgrade","to":"0xFEA47018D632A77bA579846c840d5706705Dc598","via":[{"address":"0x369e6F597e22EaB55fFb173C6d9cD234BD699111"},{"address":"0x8b9566AdA63B64d1E1dcF1418b43fd1433b72444"}]}]
    }
```

```diff
    contract IndexRegistry (0xBd35a7a1CDeF403a6a99e4E8BA0974D198455030) {
    +++ description: None
      issuedPermissions:
-        [{"permission":"upgrade","to":"0x461854d84Ee845F905e0eCf6C288DDEEb4A9533F","via":[{"address":"0xC06Fd4F821eaC1fF1ae8067b36342899b57BAa2d","delay":864000},{"address":"0x369e6F597e22EaB55fFb173C6d9cD234BD699111"},{"address":"0x8247EF5705d3345516286B72bFE6D690197C2E99"}]},{"permission":"upgrade","to":"0xBE1685C81aA44FF9FB319dD389addd9374383e90","via":[{"address":"0xC06Fd4F821eaC1fF1ae8067b36342899b57BAa2d","delay":864000},{"address":"0x369e6F597e22EaB55fFb173C6d9cD234BD699111"},{"address":"0x8247EF5705d3345516286B72bFE6D690197C2E99"}]},{"permission":"upgrade","to":"0xFEA47018D632A77bA579846c840d5706705Dc598","via":[{"address":"0x369e6F597e22EaB55fFb173C6d9cD234BD699111"},{"address":"0x8247EF5705d3345516286B72bFE6D690197C2E99"}]}]
    }
```

```diff
    contract TimelockControllerOwning (0xC06Fd4F821eaC1fF1ae8067b36342899b57BAa2d) {
    +++ description: A timelock that allows scheduling calls and executing or cancelling them with a delay.
      issuedPermissions:
-        [{"permission":"interact","to":"0x461854d84Ee845F905e0eCf6C288DDEEb4A9533F","description":"executes scheduled operations after the delay","via":[]},{"permission":"interact","to":"0xBE1685C81aA44FF9FB319dD389addd9374383e90","description":"can cancel scheduled operations","via":[]}]
    }
```

```diff
    contract Slasher (0xD92145c07f8Ed1D392c1B88017934E301CC1c3Cd) {
    +++ description: None
      issuedPermissions:
-        [{"permission":"upgrade","to":"0x461854d84Ee845F905e0eCf6C288DDEEb4A9533F","via":[{"address":"0xC06Fd4F821eaC1fF1ae8067b36342899b57BAa2d","delay":864000},{"address":"0x369e6F597e22EaB55fFb173C6d9cD234BD699111"},{"address":"0x8b9566AdA63B64d1E1dcF1418b43fd1433b72444"}]},{"permission":"upgrade","to":"0xBE1685C81aA44FF9FB319dD389addd9374383e90","via":[{"address":"0xC06Fd4F821eaC1fF1ae8067b36342899b57BAa2d","delay":864000},{"address":"0x369e6F597e22EaB55fFb173C6d9cD234BD699111"},{"address":"0x8b9566AdA63B64d1E1dcF1418b43fd1433b72444"}]},{"permission":"upgrade","to":"0xFEA47018D632A77bA579846c840d5706705Dc598","via":[{"address":"0x369e6F597e22EaB55fFb173C6d9cD234BD699111"},{"address":"0x8b9566AdA63B64d1E1dcF1418b43fd1433b72444"}]}]
    }
```

```diff
    contract EIGEN Token (0xec53bF9167f50cDEB3Ae105f56099aaaB9061F83) {
    +++ description: The EIGEN token can be socially forked to slash operators for data withholding attacks (and other intersubjectively attributable faults). EIGEN is a wrapper over a second token, bEIGEN, which will be used solely for intersubjective staking. Forking EIGEN means changing the canonical implementation of the bEIGEN token in the EIGEN token contract.
      issuedPermissions:
-        [{"permission":"upgrade","to":"0x461854d84Ee845F905e0eCf6C288DDEEb4A9533F","via":[{"address":"0xC06Fd4F821eaC1fF1ae8067b36342899b57BAa2d","delay":864000},{"address":"0x369e6F597e22EaB55fFb173C6d9cD234BD699111"},{"address":"0x8b9566AdA63B64d1E1dcF1418b43fd1433b72444"}]},{"permission":"upgrade","to":"0xBE1685C81aA44FF9FB319dD389addd9374383e90","via":[{"address":"0xC06Fd4F821eaC1fF1ae8067b36342899b57BAa2d","delay":864000},{"address":"0x369e6F597e22EaB55fFb173C6d9cD234BD699111"},{"address":"0x8b9566AdA63B64d1E1dcF1418b43fd1433b72444"}]},{"permission":"upgrade","to":"0xFEA47018D632A77bA579846c840d5706705Dc598","via":[{"address":"0x369e6F597e22EaB55fFb173C6d9cD234BD699111"},{"address":"0x8b9566AdA63B64d1E1dcF1418b43fd1433b72444"}]}]
    }
```

Generated with discovered.json: 0xd1d35f2cd13a220b0671424f099f5a61502806e8

# Diff at Thu, 24 Apr 2025 10:30:01 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@564f772ef796772c9952d7432df8286347a08d9e block: 22208508
- current block number: 22208508

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 22208508 (main branch discovery), not current.

```diff
    contract RegistryCoordinator (0x0BAAc79acD45A023E19345c352d8a7a83C4e5656) {
    +++ description: Operators register here with an AVS: The coordinator has three registries: 1) a `StakeRegistry` that keeps track of operators' stakes, 2) a `BLSApkRegistry` that keeps track of operators' BLS public keys and aggregate BLS public keys for each quorum, 3) an `IndexRegistry` that keeps track of an ordered list of operators for each quorum.
+++ description: 0_maxOperatorCount, 1_kickBIPsOfOperatorStake, 2_kickBIPsOfTotalStake
      values.operatorSetParamsQuorum1:
-        [200,11000,50]
+        {"maxOperatorCount":200,"kickBIPsOfOperatorStake":11000,"kickBIPsOfTotalStake":50}
+++ description: 0_maxOperatorCount, 1_kickBIPsOfOperatorStake, 2_kickBIPsOfTotalStake
      values.operatorSetParamsQuorum2:
-        [200,11000,50]
+        {"maxOperatorCount":200,"kickBIPsOfOperatorStake":11000,"kickBIPsOfTotalStake":50}
+++ description: 0_maxOperatorCount, 1_kickBIPsOfOperatorStake, 2_kickBIPsOfTotalStake
      values.operatorSetParamsQuorum3:
-        [15,11000,667]
+        {"maxOperatorCount":15,"kickBIPsOfOperatorStake":11000,"kickBIPsOfTotalStake":667}
    }
```

Generated with discovered.json: 0xeeda554cfd0b24ba60f05f4cf57200af98ed40d1

# Diff at Sun, 06 Apr 2025 07:54:21 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@02dea11f7707601873600e275c4e2b7792c1a190 block: 22081891
- current block number: 22208508

## Description

signer/perms changes.

## Watched changes

```diff
    contract EigenLayerPauserMultisig (0x5050389572f2d220ad927CcbeA0D406831012390) {
    +++ description: None
      values.$members.7:
-        "0x9C7E495F6220c2Eccf19Ce73a2d1d486D53296E4"
      values.$members.6:
-        "0x57af860e3a1C16641CDDDa92898266D2df7Dfa71"
      values.$members.5:
-        "0x1084c2e1E33632c4cB0e7C4f15c64b19d7fB1256"
+        "0x9C7E495F6220c2Eccf19Ce73a2d1d486D53296E4"
      values.$members.4:
-        "0xEFca484E497a9de170Da32abfa11650957dD2a95"
+        "0x57af860e3a1C16641CDDDa92898266D2df7Dfa71"
      values.$members.3:
-        "0xA935b0d2a529abb7F048CB56dd8B876ed5d8bD99"
+        "0x1084c2e1E33632c4cB0e7C4f15c64b19d7fB1256"
      values.$members.2:
-        "0x34D64c402cA43C1c4B368e16130C64aC245718C6"
+        "0xEFca484E497a9de170Da32abfa11650957dD2a95"
      values.multisigThreshold:
-        "1 of 8 (13%)"
+        "1 of 6 (17%)"
    }
```

```diff
    contract EigenDAServiceManager (0x870679E138bCdf293b7Ff14dD44b70FC97e12fc0) {
    +++ description: Bridge contract that accepts blob batches data availability attestations. Batches availability is attested by EigenDA operators signatures and relayed to the service manager contract by the EigenDA disperser.
      issuedPermissions.19:
-        {"permission":"upgrade","to":"0xFEA47018D632A77bA579846c840d5706705Dc598","via":[{"address":"0x369e6F597e22EaB55fFb173C6d9cD234BD699111"},{"address":"0x8247EF5705d3345516286B72bFE6D690197C2E99"}]}
      issuedPermissions.18:
-        {"permission":"upgrade","to":"0xBE1685C81aA44FF9FB319dD389addd9374383e90","via":[{"address":"0xC06Fd4F821eaC1fF1ae8067b36342899b57BAa2d","delay":864000},{"address":"0x369e6F597e22EaB55fFb173C6d9cD234BD699111"},{"address":"0x8247EF5705d3345516286B72bFE6D690197C2E99"}]}
      issuedPermissions.17.permission:
-        "interact"
+        "upgrade"
      issuedPermissions.17.description:
-        "can pause the DA bridge"
      issuedPermissions.17.via.0.address:
-        "0x0c431C66F4dE941d089625E5B423D00707977060"
+        "0x8247EF5705d3345516286B72bFE6D690197C2E99"
      issuedPermissions.16.permission:
-        "interact"
+        "upgrade"
      issuedPermissions.16.to:
-        "0x34D64c402cA43C1c4B368e16130C64aC245718C6"
+        "0xBE1685C81aA44FF9FB319dD389addd9374383e90"
      issuedPermissions.16.description:
-        "can pause the DA bridge"
      issuedPermissions.16.via.2:
+        {"address":"0xC06Fd4F821eaC1fF1ae8067b36342899b57BAa2d","delay":864000}
      issuedPermissions.16.via.1.address:
-        "0x0c431C66F4dE941d089625E5B423D00707977060"
+        "0x369e6F597e22EaB55fFb173C6d9cD234BD699111"
      issuedPermissions.16.via.0.address:
-        "0x5050389572f2d220ad927CcbeA0D406831012390"
+        "0x8247EF5705d3345516286B72bFE6D690197C2E99"
      issuedPermissions.15.to:
-        "0x1084c2e1E33632c4cB0e7C4f15c64b19d7fB1256"
+        "0xFEA47018D632A77bA579846c840d5706705Dc598"
      issuedPermissions.15.via.1.address:
-        "0x0c431C66F4dE941d089625E5B423D00707977060"
+        "0x369e6F597e22EaB55fFb173C6d9cD234BD699111"
      issuedPermissions.15.via.0.address:
-        "0x5050389572f2d220ad927CcbeA0D406831012390"
+        "0x0c431C66F4dE941d089625E5B423D00707977060"
      issuedPermissions.14.permission:
-        "upgrade"
+        "interact"
      issuedPermissions.14.to:
-        "0x461854d84Ee845F905e0eCf6C288DDEEb4A9533F"
+        "0x1084c2e1E33632c4cB0e7C4f15c64b19d7fB1256"
      issuedPermissions.14.via.2:
-        {"address":"0xC06Fd4F821eaC1fF1ae8067b36342899b57BAa2d","delay":864000}
      issuedPermissions.14.via.1.address:
-        "0x369e6F597e22EaB55fFb173C6d9cD234BD699111"
+        "0x0c431C66F4dE941d089625E5B423D00707977060"
      issuedPermissions.14.via.0.address:
-        "0x8247EF5705d3345516286B72bFE6D690197C2E99"
+        "0x5050389572f2d220ad927CcbeA0D406831012390"
      issuedPermissions.14.description:
+        "can pause the DA bridge"
      issuedPermissions.13.permission:
-        "interact"
+        "upgrade"
      issuedPermissions.13.to:
-        "0x178eeeA9E0928dA2153A1d7951FBe30CF8371b8A"
+        "0x461854d84Ee845F905e0eCf6C288DDEEb4A9533F"
      issuedPermissions.13.description:
-        "can create rewards submissions."
      issuedPermissions.13.via.2:
+        {"address":"0xC06Fd4F821eaC1fF1ae8067b36342899b57BAa2d","delay":864000}
      issuedPermissions.13.via.1:
+        {"address":"0x369e6F597e22EaB55fFb173C6d9cD234BD699111"}
      issuedPermissions.13.via.0:
+        {"address":"0x8247EF5705d3345516286B72bFE6D690197C2E99"}
      issuedPermissions.12.to:
-        "0xEFca484E497a9de170Da32abfa11650957dD2a95"
+        "0x178eeeA9E0928dA2153A1d7951FBe30CF8371b8A"
      issuedPermissions.12.description:
-        "can pause the DA bridge"
+        "can create rewards submissions."
      issuedPermissions.12.via.1:
-        {"address":"0x0c431C66F4dE941d089625E5B423D00707977060"}
      issuedPermissions.12.via.0:
-        {"address":"0x5050389572f2d220ad927CcbeA0D406831012390"}
      issuedPermissions.11.to:
-        "0xBE1685C81aA44FF9FB319dD389addd9374383e90"
+        "0xEFca484E497a9de170Da32abfa11650957dD2a95"
      issuedPermissions.11.via.2:
-        {"address":"0xC06Fd4F821eaC1fF1ae8067b36342899b57BAa2d","delay":864000}
      issuedPermissions.11.via.1.address:
-        "0x369e6F597e22EaB55fFb173C6d9cD234BD699111"
+        "0x0c431C66F4dE941d089625E5B423D00707977060"
      issuedPermissions.11.via.0.address:
-        "0x0c431C66F4dE941d089625E5B423D00707977060"
+        "0x5050389572f2d220ad927CcbeA0D406831012390"
      issuedPermissions.10.via.2:
+        {"address":"0xC06Fd4F821eaC1fF1ae8067b36342899b57BAa2d","delay":864000}
      issuedPermissions.10.via.1:
+        {"address":"0x369e6F597e22EaB55fFb173C6d9cD234BD699111"}
      issuedPermissions.9.to:
-        "0x4a3CD82B73821d075799680AcDff3e884B726777"
+        "0xBE1685C81aA44FF9FB319dD389addd9374383e90"
      issuedPermissions.9.via.1:
-        {"address":"0x0c431C66F4dE941d089625E5B423D00707977060"}
      issuedPermissions.9.via.0.address:
-        "0x5050389572f2d220ad927CcbeA0D406831012390"
+        "0x0c431C66F4dE941d089625E5B423D00707977060"
      issuedPermissions.8.to:
-        "0x57af860e3a1C16641CDDDa92898266D2df7Dfa71"
+        "0x4a3CD82B73821d075799680AcDff3e884B726777"
      issuedPermissions.7.to:
-        "0xA935b0d2a529abb7F048CB56dd8B876ed5d8bD99"
+        "0x57af860e3a1C16641CDDDa92898266D2df7Dfa71"
    }
```

```diff
    contract EigenLayerOperationsMultisig (0xBE1685C81aA44FF9FB319dD389addd9374383e90) {
    +++ description: None
      values.$members.4:
-        "0xa2425B00F9A9457AEdd51d4C36d9917eA1Aa7a02"
+        "0xE31ad7cFD94bD74C40b53160aA0E8A0b6D340830"
      values.$members.3:
-        "0x27ff193A6A1574A611E21c39FDA636fA1d61ba30"
+        "0xFBB1A3C8C8A99A2A4797250dF87E307Dc3f01Fe0"
      values.$members.2:
-        "0xb7Ae34BB33da55f12797e793E01e63a17B11d108"
+        "0x27ff193A6A1574A611E21c39FDA636fA1d61ba30"
      values.$members.1:
-        "0xe7fFd467F7526abf9c8796EDeE0AD30110419127"
+        "0xb7Ae34BB33da55f12797e793E01e63a17B11d108"
      values.$members.0:
-        "0x422e2F724faFE75F3635458aD7D3Ac803DCD7ff1"
+        "0xe7fFd467F7526abf9c8796EDeE0AD30110419127"
    }
```

Generated with discovered.json: 0x0c00fde35dd786374f379b2545436eeb527dfc1f

# Diff at Wed, 19 Mar 2025 15:44:58 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@4609d8355d7594946b66bef47876090fce6b0842 block: 22045239
- current block number: 22081891

## Description

MS signer change.

## Watched changes

```diff
    contract EigenLayerRewardsInitiatorMultisig (0x178eeeA9E0928dA2153A1d7951FBe30CF8371b8A) {
    +++ description: None
      values.$members.5:
-        "0xf20eD26be203f09B8F0Cb3265E74BB6AD24408b4"
      values.$members.4:
-        "0xaBd099133278ACF0415186c88F34e01b05D116f6"
+        "0xf20eD26be203f09B8F0Cb3265E74BB6AD24408b4"
      values.$members.3:
-        "0x2bBA03bA38D90634e6afD8C23C16ca01651bc493"
+        "0x55688D9211bC00BA573A1e0672e5de050818a360"
      values.$members.2:
-        "0xca3E83c0e41A1f27b9f832F4fcE22e79Cffecfc7"
+        "0x2bBA03bA38D90634e6afD8C23C16ca01651bc493"
      values.$members.1:
-        "0x68bbBD6c18B0bc1B563489A13a398345E9da23d0"
+        "0xca3E83c0e41A1f27b9f832F4fcE22e79Cffecfc7"
      values.$members.0:
-        "0xe7fFd467F7526abf9c8796EDeE0AD30110419127"
+        "0x68bbBD6c18B0bc1B563489A13a398345E9da23d0"
      values.multisigThreshold:
-        "3 of 6 (50%)"
+        "3 of 5 (60%)"
    }
```

Generated with discovered.json: 0x757f551be5301d2afaecde64dd768a3e8ee9cb3d

# Diff at Wed, 19 Mar 2025 13:04:36 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@e950b6e93c84855ee2ec1740913b7b4c994b9ae2 block: 22045239
- current block number: 22045239

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 22045239 (main branch discovery), not current.

```diff
    contract undefined (0x454Ef2f69f91527856E06659f92a66f464C1ca4e) {
    +++ description: None
      types:
-        ["RISK_PARAMETER"]
      severity:
-        "MEDIUM"
    }
```

```diff
    contract undefined (0x5A49Bf6c5690E22dFff3eB37F7dd18254eC361ED) {
    +++ description: None
      types:
-        ["RISK_PARAMETER"]
      severity:
-        "MEDIUM"
    }
```

```diff
    contract undefined (0x8ED83c6Bb12E441Ca2C3a544F525d4a3Fb6484D8) {
    +++ description: None
      types:
-        ["RISK_PARAMETER"]
      severity:
-        "MEDIUM"
    }
```

Generated with discovered.json: 0xbff570f28830806075253acaf776c2dcce5a7039

# Diff at Fri, 14 Mar 2025 12:53:14 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@a22da884d1a9470186e80799bc96392136af1fbe block: 21786519
- current block number: 22045239

## Description

MS member change.

## Watched changes

```diff
    contract EigenLayerRewardsInitiatorMultisig (0x178eeeA9E0928dA2153A1d7951FBe30CF8371b8A) {
    +++ description: None
      values.$members.5:
+        "0xe7fFd467F7526abf9c8796EDeE0AD30110419127"
      values.$members.4:
-        "0xe7fFd467F7526abf9c8796EDeE0AD30110419127"
+        "0xca3E83c0e41A1f27b9f832F4fcE22e79Cffecfc7"
      values.$members.3:
-        "0xca3E83c0e41A1f27b9f832F4fcE22e79Cffecfc7"
+        "0xf20eD26be203f09B8F0Cb3265E74BB6AD24408b4"
      values.$members.2:
-        "0xf20eD26be203f09B8F0Cb3265E74BB6AD24408b4"
+        "0x2bBA03bA38D90634e6afD8C23C16ca01651bc493"
      values.$members.1:
-        "0x2bBA03bA38D90634e6afD8C23C16ca01651bc493"
+        "0xaBd099133278ACF0415186c88F34e01b05D116f6"
      values.$members.0:
-        "0xaBd099133278ACF0415186c88F34e01b05D116f6"
+        "0x68bbBD6c18B0bc1B563489A13a398345E9da23d0"
      values.multisigThreshold:
-        "3 of 5 (60%)"
+        "3 of 6 (50%)"
    }
```

Generated with discovered.json: 0x233c22c60b0653353f74a5835ea7ccec3f1242e4

# Diff at Tue, 04 Mar 2025 10:39:07 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@98d260b45fe0d2195ce5e629bd7b200c8706e8ba block: 21786519
- current block number: 21786519

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21786519 (main branch discovery), not current.

```diff
    contract StakeRegistry (0x006124Ae7976137266feeBFb3F4D2BE4C073139D) {
    +++ description: Keeps track of the total stake of each operator.
      sinceBlock:
+        19592323
    }
```

```diff
    contract BLSApkRegistry (0x00A5Fd09F6CeE6AE9C8b0E5e33287F7c82880505) {
    +++ description: Keeps track of the BLS public keys of each operator and the quorum aggregated keys.
      sinceBlock:
+        19592323
    }
```

```diff
    contract RegistryCoordinator (0x0BAAc79acD45A023E19345c352d8a7a83C4e5656) {
    +++ description: Operators register here with an AVS: The coordinator has three registries: 1) a `StakeRegistry` that keeps track of operators' stakes, 2) a `BLSApkRegistry` that keeps track of operators' BLS public keys and aggregate BLS public keys for each quorum, 3) an `IndexRegistry` that keeps track of an ordered list of operators for each quorum.
      sinceBlock:
+        19592322
    }
```

```diff
    contract PauserRegistry (0x0c431C66F4dE941d089625E5B423D00707977060) {
    +++ description: Defines and stores pauser and unpauser roles for EigenLayer contracts and the EigenDAServiceManager.
      sinceBlock:
+        17445563
    }
```

```diff
    contract UpgradeableBeacon (0x0ed6703C298d28aE0878d1b28e88cA87F9662fE9) {
    +++ description: None
      sinceBlock:
+        20493176
    }
```

```diff
    contract EjectionManager (0x130d8EA0052B45554e4C99079B84df292149Bd5E) {
    +++ description: Contract used for ejection of operators from the RegistryCoordinator for violating the Service Legal Agreement (SLA).
      sinceBlock:
+        19839949
    }
```

```diff
    contract AVSDirectory (0x135DDa560e946695d6f155dACaFC6f1F25C1F5AF) {
    +++ description: None
      sinceBlock:
+        19492759
    }
```

```diff
    contract EigenLayerRewardsInitiatorMultisig (0x178eeeA9E0928dA2153A1d7951FBe30CF8371b8A) {
    +++ description: None
      sinceBlock:
+        20371264
    }
```

```diff
    contract EigenLayerOwningMultisig (0x369e6F597e22EaB55fFb173C6d9cD234BD699111) {
    +++ description: None
      sinceBlock:
+        17472874
    }
```

```diff
    contract DelegationManager (0x39053D51B77DC0d36036Fc1fCc8Cb819df8Ef37A) {
    +++ description: The DelegationManager contract is responsible for registering EigenLayer operators and managing the EigenLayer strategies delegations. The EigenDA StakeRegistry contract reads from the DelegationManager to track the total stake of each EigenDA operator.
      sinceBlock:
+        17445563
    }
```

```diff
    contract EigenLayerProtocolCouncil (0x461854d84Ee845F905e0eCf6C288DDEEb4A9533F) {
    +++ description: None
      sinceBlock:
+        21239749
    }
```

```diff
    contract EigenLayerPauserMultisig (0x5050389572f2d220ad927CcbeA0D406831012390) {
    +++ description: None
      sinceBlock:
+        17443669
    }
```

```diff
    contract UpgradeableBeacon (0x5a2a4F2F3C18f09179B6703e63D9eDD165909073) {
    +++ description: None
      sinceBlock:
+        17445565
    }
```

```diff
    contract StrategyFactory (0x5e4C39Ad7A3E881585e383dB9827EB4811f6F647) {
    +++ description: None
      sinceBlock:
+        20493178
    }
```

```diff
    contract EigenPod (0x6D225e974Fa404D25Ffb84eD6E242Ffa18eF6430) {
    +++ description: None
      sinceBlock:
+        20571837
    }
```

```diff
    contract Safe (0x7F68e9C17D22005688b8E6968fCe31e32B4B03d1) {
    +++ description: None
      sinceBlock:
+        20896663
    }
```

```diff
    contract ProxyAdmin (0x8247EF5705d3345516286B72bFE6D690197C2E99) {
    +++ description: None
      sinceBlock:
+        19592322
    }
```

```diff
    contract StrategyManager (0x858646372CC42E1A627fcE94aa7A7033e7CF075A) {
    +++ description: The StrategyManager contract is responsible for managing the EigenLayer token strategies. Each EigenDA quorum has at least one strategy that defines the operators quorum stake.
      sinceBlock:
+        17445564
    }
```

```diff
    contract EigenDAServiceManager (0x870679E138bCdf293b7Ff14dD44b70FC97e12fc0) {
    +++ description: Bridge contract that accepts blob batches data availability attestations. Batches availability is attested by EigenDA operators signatures and relayed to the service manager contract by the EigenDA disperser.
      sinceBlock:
+        19592322
    }
```

```diff
    contract ProxyAdmin (0x8b9566AdA63B64d1E1dcF1418b43fd1433b72444) {
    +++ description: None
      sinceBlock:
+        17445563
    }
```

```diff
    contract EigenPodManager (0x91E677b07F7AF907ec9a428aafA9fc14a0d3A338) {
    +++ description: None
      sinceBlock:
+        17445564
    }
```

```diff
    contract IndexRegistry (0xBd35a7a1CDeF403a6a99e4E8BA0974D198455030) {
    +++ description: None
      sinceBlock:
+        19592323
    }
```

```diff
    contract EigenLayerOperationsMultisig (0xBE1685C81aA44FF9FB319dD389addd9374383e90) {
    +++ description: None
      sinceBlock:
+        17443829
    }
```

```diff
    contract TimelockControllerOwning (0xC06Fd4F821eaC1fF1ae8067b36342899b57BAa2d) {
    +++ description: A timelock that allows scheduling calls and executing or cancelling them with a delay.
      sinceBlock:
+        21239612
    }
```

```diff
    contract Slasher (0xD92145c07f8Ed1D392c1B88017934E301CC1c3Cd) {
    +++ description: None
      sinceBlock:
+        17445564
    }
```

```diff
    contract StrategyBase (0xe9FA8F904d97854C7389b68923262ADCC6C27827) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      sinceBlock:
+        20493175
    }
```

```diff
    contract EIGEN Token (0xec53bF9167f50cDEB3Ae105f56099aaaB9061F83) {
    +++ description: The EIGEN token can be socially forked to slash operators for data withholding attacks (and other intersubjectively attributable faults). EIGEN is a wrapper over a second token, bEIGEN, which will be used solely for intersubjective staking. Forking EIGEN means changing the canonical implementation of the bEIGEN token in the EIGEN token contract.
      sinceBlock:
+        18366276
    }
```

```diff
    contract EigenLayerCommunityMultisig (0xFEA47018D632A77bA579846c840d5706705Dc598) {
    +++ description: None
      sinceBlock:
+        17472847
    }
```

Generated with discovered.json: 0x4da91e8c7ee7a84a004e6a8d52978c7247d9e9ba

# Diff at Wed, 12 Feb 2025 08:54:05 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@554a6f0e6aa688c758b37653d0be7eb446f9152e block: 21786519
- current block number: 21786519

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21786519 (main branch discovery), not current.

```diff
    contract TimelockControllerOwning (0xC06Fd4F821eaC1fF1ae8067b36342899b57BAa2d) {
    +++ description: A timelock that allows scheduling calls and executing or cancelling them with a delay.
      description:
-        "A timelock that allows scheduling calls and executing or cancelling them with a delay"
+        "A timelock that allows scheduling calls and executing or cancelling them with a delay."
    }
```

Generated with discovered.json: 0x3af8a224f797588da25b9bfe888a67517baf2ac3

# Diff at Thu, 06 Feb 2025 09:19:17 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@fa699ce266b15edb364aa471a661f580ea1a4529 block: 21736785
- current block number: 21786519

## Description

Signer rotation in EigenLayerCommunityMultisig.

## Watched changes

```diff
    contract EigenLayerCommunityMultisig (0xFEA47018D632A77bA579846c840d5706705Dc598) {
    +++ description: None
      values.$members.4:
-        "0x313011Ee87b12700E29B0D1136Ae3d64665F3939"
+        "0xED732DEb32034e603bEEEdA84605dAbb8933594b"
      values.$members.3:
-        "0x80cb2DA66A3ccb6064f16B15B6ae11d8E089C6D7"
+        "0x7F68e9C17D22005688b8E6968fCe31e32B4B03d1"
    }
```

```diff
+   Status: CREATED
    contract Safe (0x7F68e9C17D22005688b8E6968fCe31e32B4B03d1)
    +++ description: None
```

## Source code changes

```diff
.../eigenda/ethereum/.flat/Safe/Safe.sol           | 1088 ++++++++++++++++++++
 .../eigenda/ethereum/.flat/Safe/SafeProxy.p.sol    |   37 +
 2 files changed, 1125 insertions(+)
```

Generated with discovered.json: 0x249e03d6a3e6c8a451dbf9adbd7939a3f5cfb761

# Diff at Tue, 04 Feb 2025 12:31:24 GMT:

- author: Adrian Adamiak (<adrian@adamiak.net>)
- comparing to: main@145553eed7ba44636411ecb25e4099728acd02f9 block: 21736785
- current block number: 21736785

## Description

Rename 'configure' permission to 'interact'

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21736785 (main branch discovery), not current.

```diff
    contract RegistryCoordinator (0x0BAAc79acD45A023E19345c352d8a7a83C4e5656) {
    +++ description: Operators register here with an AVS: The coordinator has three registries: 1) a `StakeRegistry` that keeps track of operators' stakes, 2) a `BLSApkRegistry` that keeps track of operators' BLS public keys and aggregate BLS public keys for each quorum, 3) an `IndexRegistry` that keeps track of an ordered list of operators for each quorum.
      issuedPermissions.1.permission:
-        "configure"
+        "interact"
      issuedPermissions.0.permission:
-        "configure"
+        "interact"
    }
```

```diff
    contract PauserRegistry (0x0c431C66F4dE941d089625E5B423D00707977060) {
    +++ description: Defines and stores pauser and unpauser roles for EigenLayer contracts and the EigenDAServiceManager.
      directlyReceivedPermissions.0.permission:
-        "configure"
+        "interact"
    }
```

```diff
    contract EjectionManager (0x130d8EA0052B45554e4C99079B84df292149Bd5E) {
    +++ description: Contract used for ejection of operators from the RegistryCoordinator for violating the Service Legal Agreement (SLA).
      issuedPermissions.0.permission:
-        "configure"
+        "interact"
    }
```

```diff
    contract EigenLayerRewardsInitiatorMultisig (0x178eeeA9E0928dA2153A1d7951FBe30CF8371b8A) {
    +++ description: None
      receivedPermissions.0.permission:
-        "configure"
+        "interact"
    }
```

```diff
    contract EigenLayerProtocolCouncil (0x461854d84Ee845F905e0eCf6C288DDEEb4A9533F) {
    +++ description: None
      receivedPermissions.1.permission:
-        "configure"
+        "interact"
      receivedPermissions.0.permission:
-        "configure"
+        "interact"
    }
```

```diff
    contract EigenDAServiceManager (0x870679E138bCdf293b7Ff14dD44b70FC97e12fc0) {
    +++ description: Bridge contract that accepts blob batches data availability attestations. Batches availability is attested by EigenDA operators signatures and relayed to the service manager contract by the EigenDA disperser.
      issuedPermissions.16.permission:
-        "configure"
+        "interact"
      issuedPermissions.15.permission:
-        "configure"
+        "interact"
      issuedPermissions.14.permission:
-        "configure"
+        "interact"
      issuedPermissions.13.permission:
-        "configure"
+        "interact"
      issuedPermissions.12.permission:
-        "configure"
+        "interact"
      issuedPermissions.11.permission:
-        "configure"
+        "interact"
      issuedPermissions.10.permission:
-        "configure"
+        "interact"
      issuedPermissions.9.permission:
-        "configure"
+        "interact"
      issuedPermissions.8.permission:
-        "configure"
+        "interact"
      issuedPermissions.7.permission:
-        "configure"
+        "interact"
      issuedPermissions.6.permission:
-        "configure"
+        "interact"
      issuedPermissions.5.permission:
-        "configure"
+        "interact"
      issuedPermissions.4.permission:
-        "configure"
+        "interact"
      issuedPermissions.3.permission:
-        "configure"
+        "interact"
      issuedPermissions.2.permission:
-        "configure"
+        "interact"
      issuedPermissions.1.permission:
-        "configure"
+        "interact"
      issuedPermissions.0.permission:
-        "configure"
+        "interact"
    }
```

```diff
    contract EigenLayerOperationsMultisig (0xBE1685C81aA44FF9FB319dD389addd9374383e90) {
    +++ description: None
      receivedPermissions.4.permission:
-        "configure"
+        "interact"
      receivedPermissions.3.permission:
-        "configure"
+        "interact"
      receivedPermissions.2.permission:
-        "configure"
+        "interact"
      receivedPermissions.1.permission:
-        "configure"
+        "interact"
      receivedPermissions.0.permission:
-        "configure"
+        "interact"
    }
```

```diff
    contract TimelockControllerOwning (0xC06Fd4F821eaC1fF1ae8067b36342899b57BAa2d) {
    +++ description: A timelock that allows scheduling calls and executing or cancelling them with a delay
      issuedPermissions.1.permission:
-        "configure"
+        "interact"
      issuedPermissions.0.permission:
-        "configure"
+        "interact"
    }
```

```diff
    contract EigenLayerCommunityMultisig (0xFEA47018D632A77bA579846c840d5706705Dc598) {
    +++ description: None
      receivedPermissions.0.permission:
-        "configure"
+        "interact"
    }
```

Generated with discovered.json: 0x238873892213bc6404be9eb87afa73dac25d2832

# Diff at Wed, 29 Jan 2025 14:53:51 GMT:

- author: Adrian Adamiak (<adrian@adamiak.net>)
- comparing to: main@74b593a4e23a0f1eeb37e9554e9a6178c76f8286 block: 21628459
- current block number: 21730569

## Description

Refine permissions.

## Watched changes

```diff
    contract EigenPodManager (0x91E677b07F7AF907ec9a428aafA9fc14a0d3A338) {
    +++ description: None
      values.numPods:
-        32824
+        32895
    }
```

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21628459 (main branch discovery), not current.

```diff
    contract StakeRegistry (0x006124Ae7976137266feeBFb3F4D2BE4C073139D) {
    +++ description: Keeps track of the total stake of each operator.
      issuedPermissions.2:
+        {"permission":"upgrade","to":"0xFEA47018D632A77bA579846c840d5706705Dc598","via":[{"address":"0x369e6F597e22EaB55fFb173C6d9cD234BD699111"},{"address":"0x8247EF5705d3345516286B72bFE6D690197C2E99"}]}
      issuedPermissions.1:
+        {"permission":"upgrade","to":"0xBE1685C81aA44FF9FB319dD389addd9374383e90","via":[{"address":"0xC06Fd4F821eaC1fF1ae8067b36342899b57BAa2d","delay":864000},{"address":"0x369e6F597e22EaB55fFb173C6d9cD234BD699111"},{"address":"0x8247EF5705d3345516286B72bFE6D690197C2E99"}]}
      issuedPermissions.0.to:
-        "0x8247EF5705d3345516286B72bFE6D690197C2E99"
+        "0x461854d84Ee845F905e0eCf6C288DDEEb4A9533F"
      issuedPermissions.0.via.2:
+        {"address":"0x8247EF5705d3345516286B72bFE6D690197C2E99"}
      issuedPermissions.0.via.1:
+        {"address":"0x369e6F597e22EaB55fFb173C6d9cD234BD699111"}
      issuedPermissions.0.via.0:
+        {"address":"0xC06Fd4F821eaC1fF1ae8067b36342899b57BAa2d","delay":864000}
      template:
+        "eigenlayer/StakeRegistry"
      description:
+        "Keeps track of the total stake of each operator."
    }
```

```diff
    contract BLSApkRegistry (0x00A5Fd09F6CeE6AE9C8b0E5e33287F7c82880505) {
    +++ description: Keeps track of the BLS public keys of each operator and the quorum aggregated keys.
      issuedPermissions.2:
+        {"permission":"upgrade","to":"0xFEA47018D632A77bA579846c840d5706705Dc598","via":[{"address":"0x369e6F597e22EaB55fFb173C6d9cD234BD699111"},{"address":"0x8247EF5705d3345516286B72bFE6D690197C2E99"}]}
      issuedPermissions.1:
+        {"permission":"upgrade","to":"0xBE1685C81aA44FF9FB319dD389addd9374383e90","via":[{"address":"0xC06Fd4F821eaC1fF1ae8067b36342899b57BAa2d","delay":864000},{"address":"0x369e6F597e22EaB55fFb173C6d9cD234BD699111"},{"address":"0x8247EF5705d3345516286B72bFE6D690197C2E99"}]}
      issuedPermissions.0.to:
-        "0x8247EF5705d3345516286B72bFE6D690197C2E99"
+        "0x461854d84Ee845F905e0eCf6C288DDEEb4A9533F"
      issuedPermissions.0.via.2:
+        {"address":"0x8247EF5705d3345516286B72bFE6D690197C2E99"}
      issuedPermissions.0.via.1:
+        {"address":"0x369e6F597e22EaB55fFb173C6d9cD234BD699111"}
      issuedPermissions.0.via.0:
+        {"address":"0xC06Fd4F821eaC1fF1ae8067b36342899b57BAa2d","delay":864000}
      template:
+        "eigenlayer/BLSApkRegistry"
      description:
+        "Keeps track of the BLS public keys of each operator and the quorum aggregated keys."
    }
```

```diff
    contract RegistryCoordinator (0x0BAAc79acD45A023E19345c352d8a7a83C4e5656) {
    +++ description: Operators register here with an AVS: The coordinator has three registries: 1) a `StakeRegistry` that keeps track of operators' stakes, 2) a `BLSApkRegistry` that keeps track of operators' BLS public keys and aggregate BLS public keys for each quorum, 3) an `IndexRegistry` that keeps track of an ordered list of operators for each quorum.
      description:
-        "Operators register here with an AVS: The coordinator has three registries: 1) a `StakeRegistry` that keeps track of operators' stakes, 2) a `BLSApkRegistry` that keeps track of operators' BLS public keys and aggregate BLS public keys for each quorum, 3) an `IndexRegistry` that keeps track of an ordered list of operators for each quorum"
+        "Operators register here with an AVS: The coordinator has three registries: 1) a `StakeRegistry` that keeps track of operators' stakes, 2) a `BLSApkRegistry` that keeps track of operators' BLS public keys and aggregate BLS public keys for each quorum, 3) an `IndexRegistry` that keeps track of an ordered list of operators for each quorum."
      issuedPermissions.4:
+        {"permission":"upgrade","to":"0xFEA47018D632A77bA579846c840d5706705Dc598","via":[{"address":"0x369e6F597e22EaB55fFb173C6d9cD234BD699111"},{"address":"0x8247EF5705d3345516286B72bFE6D690197C2E99"}]}
      issuedPermissions.3:
+        {"permission":"upgrade","to":"0xBE1685C81aA44FF9FB319dD389addd9374383e90","via":[{"address":"0xC06Fd4F821eaC1fF1ae8067b36342899b57BAa2d","delay":864000},{"address":"0x369e6F597e22EaB55fFb173C6d9cD234BD699111"},{"address":"0x8247EF5705d3345516286B72bFE6D690197C2E99"}]}
      issuedPermissions.2:
+        {"permission":"upgrade","to":"0x461854d84Ee845F905e0eCf6C288DDEEb4A9533F","via":[{"address":"0xC06Fd4F821eaC1fF1ae8067b36342899b57BAa2d","delay":864000},{"address":"0x369e6F597e22EaB55fFb173C6d9cD234BD699111"},{"address":"0x8247EF5705d3345516286B72bFE6D690197C2E99"}]}
      issuedPermissions.1:
+        {"permission":"configure","to":"0xe0550117Cb066D3b330eBd764B0d75D3BA378734","description":"can approve the replacement of churned operators from a quorum","via":[]}
      issuedPermissions.0.permission:
-        "upgrade"
+        "configure"
      issuedPermissions.0.to:
-        "0x8247EF5705d3345516286B72bFE6D690197C2E99"
+        "0xBE1685C81aA44FF9FB319dD389addd9374383e90"
      issuedPermissions.0.description:
+        "can add and remove strategies"
      template:
+        "eigenlayer/RegistryCoordinator"
    }
```

```diff
-   Status: DELETED
    contract StrategyBaseTVLLimits (0x0Fe4F44beE93503346A3Ac9EE5A26b130a5796d6)
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
```

```diff
    contract EjectionManager (0x130d8EA0052B45554e4C99079B84df292149Bd5E) {
    +++ description: Contract used for ejection of operators from the RegistryCoordinator for violating the Service Legal Agreement (SLA).
      description:
-        "Contract used for ejection of operators from the RegistryCoordinator."
+        "Contract used for ejection of operators from the RegistryCoordinator for violating the Service Legal Agreement (SLA)."
      issuedPermissions.3:
+        {"permission":"upgrade","to":"0xFEA47018D632A77bA579846c840d5706705Dc598","via":[{"address":"0x369e6F597e22EaB55fFb173C6d9cD234BD699111"},{"address":"0x8247EF5705d3345516286B72bFE6D690197C2E99"}]}
      issuedPermissions.2:
+        {"permission":"upgrade","to":"0xBE1685C81aA44FF9FB319dD389addd9374383e90","via":[{"address":"0xC06Fd4F821eaC1fF1ae8067b36342899b57BAa2d","delay":864000},{"address":"0x369e6F597e22EaB55fFb173C6d9cD234BD699111"},{"address":"0x8247EF5705d3345516286B72bFE6D690197C2E99"}]}
      issuedPermissions.1:
+        {"permission":"upgrade","to":"0x461854d84Ee845F905e0eCf6C288DDEEb4A9533F","via":[{"address":"0xC06Fd4F821eaC1fF1ae8067b36342899b57BAa2d","delay":864000},{"address":"0x369e6F597e22EaB55fFb173C6d9cD234BD699111"},{"address":"0x8247EF5705d3345516286B72bFE6D690197C2E99"}]}
      issuedPermissions.0.permission:
-        "upgrade"
+        "configure"
      issuedPermissions.0.to:
-        "0x8247EF5705d3345516286B72bFE6D690197C2E99"
+        "0xD2Ee81Cf07B12140C793FcE5B26313CDd9d78eA8"
      issuedPermissions.0.description:
+        "can eject DA operators from a quorum."
    }
```

```diff
-   Status: DELETED
    contract StrategyBaseTVLLimits (0x13760F50a9d7377e4F20CB8CF9e4c26586c658ff)
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
```

```diff
    contract EigenLayerRewardsInitiatorMultisig (0x178eeeA9E0928dA2153A1d7951FBe30CF8371b8A) {
    +++ description: None
      name:
-        "GnosisSafe"
+        "EigenLayerRewardsInitiatorMultisig"
      receivedPermissions:
+        [{"permission":"configure","from":"0x870679E138bCdf293b7Ff14dD44b70FC97e12fc0","description":"can create rewards submissions."}]
    }
```

```diff
-   Status: DELETED
    contract StrategyBaseTVLLimits (0x1BeE69b7dFFfA4E2d53C2a2Df135C388AD25dCD2)
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
```

```diff
-   Status: DELETED
    contract StrategyBaseTVLLimits (0x298aFB19A105D59E74658C4C334Ff360BadE6dd2)
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
```

```diff
-   Status: DELETED
    contract StrategyBaseTVLLimits (0x54945180dB7943c0ed0FEE7EdaB2Bd24620256bc)
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
```

```diff
-   Status: DELETED
    contract StrategyBaseTVLLimits (0x57ba429517c3473B6d34CA9aCd56c0e735b94c02)
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
```

```diff
-   Status: DELETED
    contract StrategyBase (0x6075546538c3eFbD607ea6aFC24149fCcFb2edF4)
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
```

```diff
-   Status: DELETED
    contract StrategyBaseTVLLimits (0x7CA911E83dabf90C90dD3De5411a10F1A6112184)
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
```

```diff
    contract ProxyAdmin (0x8247EF5705d3345516286B72bFE6D690197C2E99) {
    +++ description: None
      name:
-        "eigenDAProxyAdmin"
+        "ProxyAdmin"
      displayName:
-        "ProxyAdmin"
      receivedPermissions:
-        [{"permission":"upgrade","from":"0x006124Ae7976137266feeBFb3F4D2BE4C073139D"},{"permission":"upgrade","from":"0x00A5Fd09F6CeE6AE9C8b0E5e33287F7c82880505"},{"permission":"upgrade","from":"0x0BAAc79acD45A023E19345c352d8a7a83C4e5656"},{"permission":"upgrade","from":"0x130d8EA0052B45554e4C99079B84df292149Bd5E"},{"permission":"upgrade","from":"0x870679E138bCdf293b7Ff14dD44b70FC97e12fc0"},{"permission":"upgrade","from":"0xBd35a7a1CDeF403a6a99e4E8BA0974D198455030"}]
      directlyReceivedPermissions:
+        [{"permission":"upgrade","from":"0x006124Ae7976137266feeBFb3F4D2BE4C073139D"},{"permission":"upgrade","from":"0x00A5Fd09F6CeE6AE9C8b0E5e33287F7c82880505"},{"permission":"upgrade","from":"0x0BAAc79acD45A023E19345c352d8a7a83C4e5656"},{"permission":"upgrade","from":"0x130d8EA0052B45554e4C99079B84df292149Bd5E"},{"permission":"upgrade","from":"0x870679E138bCdf293b7Ff14dD44b70FC97e12fc0"},{"permission":"upgrade","from":"0xBd35a7a1CDeF403a6a99e4E8BA0974D198455030"}]
    }
```

```diff
    contract EigenDAServiceManager (0x870679E138bCdf293b7Ff14dD44b70FC97e12fc0) {
    +++ description: Bridge contract that accepts blob batches data availability attestations. Batches availability is attested by EigenDA operators signatures and relayed to the service manager contract by the EigenDA disperser.
      issuedPermissions.19:
+        {"permission":"upgrade","to":"0xFEA47018D632A77bA579846c840d5706705Dc598","via":[{"address":"0x369e6F597e22EaB55fFb173C6d9cD234BD699111"},{"address":"0x8247EF5705d3345516286B72bFE6D690197C2E99"}]}
      issuedPermissions.18:
+        {"permission":"upgrade","to":"0xBE1685C81aA44FF9FB319dD389addd9374383e90","via":[{"address":"0xC06Fd4F821eaC1fF1ae8067b36342899b57BAa2d","delay":864000},{"address":"0x369e6F597e22EaB55fFb173C6d9cD234BD699111"},{"address":"0x8247EF5705d3345516286B72bFE6D690197C2E99"}]}
      issuedPermissions.17:
+        {"permission":"upgrade","to":"0x461854d84Ee845F905e0eCf6C288DDEEb4A9533F","via":[{"address":"0xC06Fd4F821eaC1fF1ae8067b36342899b57BAa2d","delay":864000},{"address":"0x369e6F597e22EaB55fFb173C6d9cD234BD699111"},{"address":"0x8247EF5705d3345516286B72bFE6D690197C2E99"}]}
      issuedPermissions.16:
+        {"permission":"configure","to":"0xFEA47018D632A77bA579846c840d5706705Dc598","description":"can pause the DA bridge","via":[{"address":"0x369e6F597e22EaB55fFb173C6d9cD234BD699111"},{"address":"0x0c431C66F4dE941d089625E5B423D00707977060"}]}
      issuedPermissions.15:
+        {"permission":"configure","to":"0xEFca484E497a9de170Da32abfa11650957dD2a95","description":"can pause the DA bridge","via":[{"address":"0x5050389572f2d220ad927CcbeA0D406831012390"},{"address":"0x0c431C66F4dE941d089625E5B423D00707977060"}]}
      issuedPermissions.14:
+        {"permission":"configure","to":"0xBE1685C81aA44FF9FB319dD389addd9374383e90","description":"can transfer ownership of the contract, update the metadata URI, set reward initiator and set batch confirmer","via":[]}
      issuedPermissions.13:
+        {"permission":"configure","to":"0xBE1685C81aA44FF9FB319dD389addd9374383e90","description":"can pause the DA bridge","via":[{"address":"0xC06Fd4F821eaC1fF1ae8067b36342899b57BAa2d","delay":864000},{"address":"0x369e6F597e22EaB55fFb173C6d9cD234BD699111"},{"address":"0x0c431C66F4dE941d089625E5B423D00707977060"}]}
      issuedPermissions.12:
+        {"permission":"configure","to":"0xBE1685C81aA44FF9FB319dD389addd9374383e90","description":"can pause the DA bridge","via":[{"address":"0x0c431C66F4dE941d089625E5B423D00707977060"}]}
      issuedPermissions.11:
+        {"permission":"configure","to":"0xA935b0d2a529abb7F048CB56dd8B876ed5d8bD99","description":"can pause the DA bridge","via":[{"address":"0x5050389572f2d220ad927CcbeA0D406831012390"},{"address":"0x0c431C66F4dE941d089625E5B423D00707977060"}]}
      issuedPermissions.10:
+        {"permission":"configure","to":"0x9C7E495F6220c2Eccf19Ce73a2d1d486D53296E4","description":"can pause the DA bridge","via":[{"address":"0x5050389572f2d220ad927CcbeA0D406831012390"},{"address":"0x0c431C66F4dE941d089625E5B423D00707977060"}]}
      issuedPermissions.9:
+        {"permission":"configure","to":"0x8ED83c6Bb12E441Ca2C3a544F525d4a3Fb6484D8","description":"can confirm batches to the DA bridge.","via":[]}
      issuedPermissions.8:
+        {"permission":"configure","to":"0x5A49Bf6c5690E22dFff3eB37F7dd18254eC361ED","description":"can confirm batches to the DA bridge.","via":[]}
      issuedPermissions.7:
+        {"permission":"configure","to":"0x57af860e3a1C16641CDDDa92898266D2df7Dfa71","description":"can pause the DA bridge","via":[{"address":"0x5050389572f2d220ad927CcbeA0D406831012390"},{"address":"0x0c431C66F4dE941d089625E5B423D00707977060"}]}
      issuedPermissions.6:
+        {"permission":"configure","to":"0x4a3CD82B73821d075799680AcDff3e884B726777","description":"can pause the DA bridge","via":[{"address":"0x5050389572f2d220ad927CcbeA0D406831012390"},{"address":"0x0c431C66F4dE941d089625E5B423D00707977060"}]}
      issuedPermissions.5:
+        {"permission":"configure","to":"0x461854d84Ee845F905e0eCf6C288DDEEb4A9533F","description":"can pause the DA bridge","via":[{"address":"0xC06Fd4F821eaC1fF1ae8067b36342899b57BAa2d","delay":864000},{"address":"0x369e6F597e22EaB55fFb173C6d9cD234BD699111"},{"address":"0x0c431C66F4dE941d089625E5B423D00707977060"}]}
      issuedPermissions.4:
+        {"permission":"configure","to":"0x454Ef2f69f91527856E06659f92a66f464C1ca4e","description":"can confirm batches to the DA bridge.","via":[]}
      issuedPermissions.3:
+        {"permission":"configure","to":"0x34D64c402cA43C1c4B368e16130C64aC245718C6","description":"can pause the DA bridge","via":[{"address":"0x5050389572f2d220ad927CcbeA0D406831012390"},{"address":"0x0c431C66F4dE941d089625E5B423D00707977060"}]}
      issuedPermissions.2:
+        {"permission":"configure","to":"0x2E158da11961426E2A1Cc9e79f40244486b6845C","description":"can pause the DA bridge","via":[{"address":"0x5050389572f2d220ad927CcbeA0D406831012390"},{"address":"0x0c431C66F4dE941d089625E5B423D00707977060"}]}
      issuedPermissions.1:
+        {"permission":"configure","to":"0x178eeeA9E0928dA2153A1d7951FBe30CF8371b8A","description":"can create rewards submissions.","via":[]}
      issuedPermissions.0.permission:
-        "upgrade"
+        "configure"
      issuedPermissions.0.to:
-        "0x8247EF5705d3345516286B72bFE6D690197C2E99"
+        "0x1084c2e1E33632c4cB0e7C4f15c64b19d7fB1256"
      issuedPermissions.0.via.1:
+        {"address":"0x0c431C66F4dE941d089625E5B423D00707977060"}
      issuedPermissions.0.via.0:
+        {"address":"0x5050389572f2d220ad927CcbeA0D406831012390"}
      issuedPermissions.0.description:
+        "can pause the DA bridge"
      template:
+        "eigenlayer/EigenDAServiceManager"
      description:
+        "Bridge contract that accepts blob batches data availability attestations. Batches availability is attested by EigenDA operators signatures and relayed to the service manager contract by the EigenDA disperser."
    }
```

```diff
-   Status: DELETED
    contract StrategyBaseTVLLimits (0x8CA7A5d6f3acd3A7A8bC468a8CD0FB14B6BD28b6)
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
```

```diff
-   Status: DELETED
    contract StrategyBaseTVLLimits (0x93c4b944D05dfe6df7645A86cd2206016c51564D)
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
```

```diff
-   Status: DELETED
    contract StrategyBaseTVLLimits (0x9d7eD45EE2E8FC5482fa2428f15C971e6369011d)
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
```

```diff
-   Status: DELETED
    contract StrategyBaseTVLLimits (0xa4C637e0F704745D182e4D38cAb7E7485321d059)
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
```

```diff
-   Status: DELETED
    contract EigenStrategy (0xaCB55C530Acdb2849e6d4f36992Cd8c9D50ED8F7)
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
```

```diff
-   Status: DELETED
    contract StrategyBaseTVLLimits (0xAe60d8180437b5C34bB956822ac2710972584473)
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
```

```diff
    contract IndexRegistry (0xBd35a7a1CDeF403a6a99e4E8BA0974D198455030) {
    +++ description: None
      issuedPermissions.2:
+        {"permission":"upgrade","to":"0xFEA47018D632A77bA579846c840d5706705Dc598","via":[{"address":"0x369e6F597e22EaB55fFb173C6d9cD234BD699111"},{"address":"0x8247EF5705d3345516286B72bFE6D690197C2E99"}]}
      issuedPermissions.1:
+        {"permission":"upgrade","to":"0xBE1685C81aA44FF9FB319dD389addd9374383e90","via":[{"address":"0xC06Fd4F821eaC1fF1ae8067b36342899b57BAa2d","delay":864000},{"address":"0x369e6F597e22EaB55fFb173C6d9cD234BD699111"},{"address":"0x8247EF5705d3345516286B72bFE6D690197C2E99"}]}
      issuedPermissions.0.to:
-        "0x8247EF5705d3345516286B72bFE6D690197C2E99"
+        "0x461854d84Ee845F905e0eCf6C288DDEEb4A9533F"
      issuedPermissions.0.via.2:
+        {"address":"0x8247EF5705d3345516286B72bFE6D690197C2E99"}
      issuedPermissions.0.via.1:
+        {"address":"0x369e6F597e22EaB55fFb173C6d9cD234BD699111"}
      issuedPermissions.0.via.0:
+        {"address":"0xC06Fd4F821eaC1fF1ae8067b36342899b57BAa2d","delay":864000}
    }
```

```diff
+   Status: CREATED
    contract PauserRegistry (0x0c431C66F4dE941d089625E5B423D00707977060)
    +++ description: Defines and stores pauser and unpauser roles for EigenLayer contracts and the EigenDAServiceManager.
```

```diff
+   Status: CREATED
    contract UpgradeableBeacon (0x0ed6703C298d28aE0878d1b28e88cA87F9662fE9)
    +++ description: None
```

```diff
+   Status: CREATED
    contract AVSDirectory (0x135DDa560e946695d6f155dACaFC6f1F25C1F5AF)
    +++ description: None
```

```diff
+   Status: CREATED
    contract EigenLayerOwningMultisig (0x369e6F597e22EaB55fFb173C6d9cD234BD699111)
    +++ description: None
```

```diff
+   Status: CREATED
    contract DelegationManager (0x39053D51B77DC0d36036Fc1fCc8Cb819df8Ef37A)
    +++ description: The DelegationManager contract is responsible for registering EigenLayer operators and managing the EigenLayer strategies delegations. The EigenDA StakeRegistry contract reads from the DelegationManager to track the total stake of each EigenDA operator.
```

```diff
+   Status: CREATED
    contract EigenLayerProtocolCouncil (0x461854d84Ee845F905e0eCf6C288DDEEb4A9533F)
    +++ description: None
```

```diff
+   Status: CREATED
    contract EigenLayerPauserMultisig (0x5050389572f2d220ad927CcbeA0D406831012390)
    +++ description: None
```

```diff
+   Status: CREATED
    contract UpgradeableBeacon (0x5a2a4F2F3C18f09179B6703e63D9eDD165909073)
    +++ description: None
```

```diff
+   Status: CREATED
    contract StrategyFactory (0x5e4C39Ad7A3E881585e383dB9827EB4811f6F647)
    +++ description: None
```

```diff
+   Status: CREATED
    contract EigenPod (0x6D225e974Fa404D25Ffb84eD6E242Ffa18eF6430)
    +++ description: None
```

```diff
+   Status: CREATED
    contract StrategyManager (0x858646372CC42E1A627fcE94aa7A7033e7CF075A)
    +++ description: The StrategyManager contract is responsible for managing the EigenLayer token strategies. Each EigenDA quorum has at least one strategy that defines the operators quorum stake.
```

```diff
+   Status: CREATED
    contract ProxyAdmin (0x8b9566AdA63B64d1E1dcF1418b43fd1433b72444)
    +++ description: None
```

```diff
+   Status: CREATED
    contract EigenPodManager (0x91E677b07F7AF907ec9a428aafA9fc14a0d3A338)
    +++ description: None
```

```diff
+   Status: CREATED
    contract EigenLayerOperationsMultisig (0xBE1685C81aA44FF9FB319dD389addd9374383e90)
    +++ description: None
```

```diff
+   Status: CREATED
    contract TimelockControllerOwning (0xC06Fd4F821eaC1fF1ae8067b36342899b57BAa2d)
    +++ description: A timelock that allows scheduling calls and executing or cancelling them with a delay
```

```diff
+   Status: CREATED
    contract Slasher (0xD92145c07f8Ed1D392c1B88017934E301CC1c3Cd)
    +++ description: None
```

```diff
+   Status: CREATED
    contract StrategyBase (0xe9FA8F904d97854C7389b68923262ADCC6C27827)
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
```

```diff
+   Status: CREATED
    contract EIGEN Token (0xec53bF9167f50cDEB3Ae105f56099aaaB9061F83)
    +++ description: The EIGEN token can be socially forked to slash operators for data withholding attacks (and other intersubjectively attributable faults). EIGEN is a wrapper over a second token, bEIGEN, which will be used solely for intersubjective staking. Forking EIGEN means changing the canonical implementation of the bEIGEN token in the EIGEN token contract.
```

```diff
+   Status: CREATED
    contract EigenLayerCommunityMultisig (0xFEA47018D632A77bA579846c840d5706705Dc598)
    +++ description: None
```

Generated with discovered.json: 0xfdecefca0505b39cd2ee474098d469339feb25d1

# Diff at Mon, 27 Jan 2025 08:44:35 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@19f9c78c593bd40f9a0b28c3dce98eac1bd1d1b8 block: 21628459
- current block number: 21628459

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21628459 (main branch discovery), not current.

```diff
    contract StakeRegistry (0x006124Ae7976137266feeBFb3F4D2BE4C073139D) {
    +++ description: None
      values.firstQuorumStrategies:
-        ["0xbeaC0eeEeeeeEEeEeEEEEeeEEeEeeeEeeEEBEaC0","0x93c4b944D05dfe6df7645A86cd2206016c51564D","0x1BeE69b7dFFfA4E2d53C2a2Df135C388AD25dCD2","0x54945180dB7943c0ed0FEE7EdaB2Bd24620256bc","0x9d7eD45EE2E8FC5482fa2428f15C971e6369011d","0x13760F50a9d7377e4F20CB8CF9e4c26586c658ff","0xa4C637e0F704745D182e4D38cAb7E7485321d059","0x57ba429517c3473B6d34CA9aCd56c0e735b94c02","0x0Fe4F44beE93503346A3Ac9EE5A26b130a5796d6","0x7CA911E83dabf90C90dD3De5411a10F1A6112184","0x8CA7A5d6f3acd3A7A8bC468a8CD0FB14B6BD28b6","0xAe60d8180437b5C34bB956822ac2710972584473","0x298aFB19A105D59E74658C4C334Ff360BadE6dd2"]
      values.fourthQuorumStrategies:
-        []
      values.secondQuorumStrategies:
-        ["0xaCB55C530Acdb2849e6d4f36992Cd8c9D50ED8F7"]
      values.thirdQuorumStrategies:
-        ["0x6075546538c3eFbD607ea6aFC24149fCcFb2edF4"]
+++ description: The strategies for the first quorum (ETH).
      values.quorumStrategies:
+        {"0":["0xbeaC0eeEeeeeEEeEeEEEEeeEEeEeeeEeeEEBEaC0","0x93c4b944D05dfe6df7645A86cd2206016c51564D","0x1BeE69b7dFFfA4E2d53C2a2Df135C388AD25dCD2","0x54945180dB7943c0ed0FEE7EdaB2Bd24620256bc","0x9d7eD45EE2E8FC5482fa2428f15C971e6369011d","0x13760F50a9d7377e4F20CB8CF9e4c26586c658ff","0xa4C637e0F704745D182e4D38cAb7E7485321d059","0x57ba429517c3473B6d34CA9aCd56c0e735b94c02","0x0Fe4F44beE93503346A3Ac9EE5A26b130a5796d6","0x7CA911E83dabf90C90dD3De5411a10F1A6112184","0x8CA7A5d6f3acd3A7A8bC468a8CD0FB14B6BD28b6","0xAe60d8180437b5C34bB956822ac2710972584473","0x298aFB19A105D59E74658C4C334Ff360BadE6dd2"],"1":["0xaCB55C530Acdb2849e6d4f36992Cd8c9D50ED8F7"],"2":["0x6075546538c3eFbD607ea6aFC24149fCcFb2edF4"]}
      fieldMeta.firstQuorumStrategies:
-        {"description":"The strategies for the first quorum (ETH)."}
      fieldMeta.secondQuorumStrategies:
-        {"description":"The strategies for the second quorum (EIGEN)."}
      fieldMeta.thirdQuorumStrategies:
-        {"description":"The strategies for the third quorum."}
      fieldMeta.fourthQuorumStrategies:
-        {"description":"The strategies for the fourth quorum. Not used yet, here to catch a potential new quorum."}
      fieldMeta.quorumStrategies:
+        {"description":"The strategies for the first quorum (ETH)."}
    }
```

Generated with discovered.json: 0xa2e445bc97704b68ef3ecdfb0a26c867f3d17027

# Diff at Mon, 20 Jan 2025 11:09:28 GMT:

- author: Adrian Adamiak (<adrian@adamiak.net>)
- comparing to: main@2c8b4f3d9910bb6371be9b4df87b70856e7d8c64 block: 21628459
- current block number: 21628459

## Description

Rerun on the same block number. Applies fixes to permissions and via field. Renames permission's target to to/from.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21628459 (main branch discovery), not current.

```diff
    contract StakeRegistry (0x006124Ae7976137266feeBFb3F4D2BE4C073139D) {
    +++ description: None
      issuedPermissions.0.target:
-        "0x8247EF5705d3345516286B72bFE6D690197C2E99"
      issuedPermissions.0.to:
+        "0x8247EF5705d3345516286B72bFE6D690197C2E99"
    }
```

```diff
    contract BLSApkRegistry (0x00A5Fd09F6CeE6AE9C8b0E5e33287F7c82880505) {
    +++ description: None
      issuedPermissions.0.target:
-        "0x8247EF5705d3345516286B72bFE6D690197C2E99"
      issuedPermissions.0.to:
+        "0x8247EF5705d3345516286B72bFE6D690197C2E99"
    }
```

```diff
    contract RegistryCoordinator (0x0BAAc79acD45A023E19345c352d8a7a83C4e5656) {
    +++ description: Operators register here with an AVS: The coordinator has three registries: 1) a `StakeRegistry` that keeps track of operators' stakes, 2) a `BLSApkRegistry` that keeps track of operators' BLS public keys and aggregate BLS public keys for each quorum, 3) an `IndexRegistry` that keeps track of an ordered list of operators for each quorum
      issuedPermissions.0.target:
-        "0x8247EF5705d3345516286B72bFE6D690197C2E99"
      issuedPermissions.0.to:
+        "0x8247EF5705d3345516286B72bFE6D690197C2E99"
    }
```

```diff
    contract EjectionManager (0x130d8EA0052B45554e4C99079B84df292149Bd5E) {
    +++ description: Contract used for ejection of operators from the RegistryCoordinator.
      issuedPermissions.0.target:
-        "0x8247EF5705d3345516286B72bFE6D690197C2E99"
      issuedPermissions.0.to:
+        "0x8247EF5705d3345516286B72bFE6D690197C2E99"
    }
```

```diff
    contract eigenDAProxyAdmin (0x8247EF5705d3345516286B72bFE6D690197C2E99) {
    +++ description: None
      receivedPermissions.5.target:
-        "0xBd35a7a1CDeF403a6a99e4E8BA0974D198455030"
      receivedPermissions.5.from:
+        "0xBd35a7a1CDeF403a6a99e4E8BA0974D198455030"
      receivedPermissions.4.target:
-        "0x870679E138bCdf293b7Ff14dD44b70FC97e12fc0"
      receivedPermissions.4.from:
+        "0x870679E138bCdf293b7Ff14dD44b70FC97e12fc0"
      receivedPermissions.3.target:
-        "0x130d8EA0052B45554e4C99079B84df292149Bd5E"
      receivedPermissions.3.from:
+        "0x130d8EA0052B45554e4C99079B84df292149Bd5E"
      receivedPermissions.2.target:
-        "0x0BAAc79acD45A023E19345c352d8a7a83C4e5656"
      receivedPermissions.2.from:
+        "0x0BAAc79acD45A023E19345c352d8a7a83C4e5656"
      receivedPermissions.1.target:
-        "0x00A5Fd09F6CeE6AE9C8b0E5e33287F7c82880505"
      receivedPermissions.1.from:
+        "0x00A5Fd09F6CeE6AE9C8b0E5e33287F7c82880505"
      receivedPermissions.0.target:
-        "0x006124Ae7976137266feeBFb3F4D2BE4C073139D"
      receivedPermissions.0.from:
+        "0x006124Ae7976137266feeBFb3F4D2BE4C073139D"
    }
```

```diff
    contract EigenDAServiceManager (0x870679E138bCdf293b7Ff14dD44b70FC97e12fc0) {
    +++ description: None
      issuedPermissions.0.target:
-        "0x8247EF5705d3345516286B72bFE6D690197C2E99"
      issuedPermissions.0.to:
+        "0x8247EF5705d3345516286B72bFE6D690197C2E99"
    }
```

```diff
    contract IndexRegistry (0xBd35a7a1CDeF403a6a99e4E8BA0974D198455030) {
    +++ description: None
      issuedPermissions.0.target:
-        "0x8247EF5705d3345516286B72bFE6D690197C2E99"
      issuedPermissions.0.to:
+        "0x8247EF5705d3345516286B72bFE6D690197C2E99"
    }
```

Generated with discovered.json: 0x0003140ad2de71134c5740bd0893c03f6e7f1093

# Diff at Mon, 20 Jan 2025 09:24:43 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@82d3b5c180381f7d2d0e30406b2ac10025d0614f block: 21628459
- current block number: 21628459

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21628459 (main branch discovery), not current.

```diff
    contract RegistryCoordinator (0x0BAAc79acD45A023E19345c352d8a7a83C4e5656) {
    +++ description: Operators register here with an AVS: The coordinator has three registries: 1) a `StakeRegistry` that keeps track of operators' stakes, 2) a `BLSApkRegistry` that keeps track of operators' BLS public keys and aggregate BLS public keys for each quorum, 3) an `IndexRegistry` that keeps track of an ordered list of operators for each quorum
      fieldMeta.quorumCount.type:
+        "RISK_PARAMETER"
      fieldMeta.ejectionCooldown.type:
+        "RISK_PARAMETER"
    }
```

```diff
    contract StrategyBaseTVLLimits (0x0Fe4F44beE93503346A3Ac9EE5A26b130a5796d6) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      fieldMeta.getTVLLimits.type:
+        "RISK_PARAMETER"
      fieldMeta.maxPerDeposit.type:
+        "RISK_PARAMETER"
      fieldMeta.maxTotalDeposits.type:
+        "RISK_PARAMETER"
    }
```

```diff
    contract StrategyBaseTVLLimits (0x13760F50a9d7377e4F20CB8CF9e4c26586c658ff) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      fieldMeta.getTVLLimits.type:
+        "RISK_PARAMETER"
      fieldMeta.maxPerDeposit.type:
+        "RISK_PARAMETER"
      fieldMeta.maxTotalDeposits.type:
+        "RISK_PARAMETER"
    }
```

```diff
    contract StrategyBaseTVLLimits (0x1BeE69b7dFFfA4E2d53C2a2Df135C388AD25dCD2) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      fieldMeta.getTVLLimits.type:
+        "RISK_PARAMETER"
      fieldMeta.maxPerDeposit.type:
+        "RISK_PARAMETER"
      fieldMeta.maxTotalDeposits.type:
+        "RISK_PARAMETER"
    }
```

```diff
    contract StrategyBaseTVLLimits (0x298aFB19A105D59E74658C4C334Ff360BadE6dd2) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      fieldMeta.getTVLLimits.type:
+        "RISK_PARAMETER"
      fieldMeta.maxPerDeposit.type:
+        "RISK_PARAMETER"
      fieldMeta.maxTotalDeposits.type:
+        "RISK_PARAMETER"
    }
```

```diff
    contract StrategyBaseTVLLimits (0x54945180dB7943c0ed0FEE7EdaB2Bd24620256bc) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      fieldMeta.getTVLLimits.type:
+        "RISK_PARAMETER"
      fieldMeta.maxPerDeposit.type:
+        "RISK_PARAMETER"
      fieldMeta.maxTotalDeposits.type:
+        "RISK_PARAMETER"
    }
```

```diff
    contract StrategyBaseTVLLimits (0x57ba429517c3473B6d34CA9aCd56c0e735b94c02) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      fieldMeta.getTVLLimits.type:
+        "RISK_PARAMETER"
      fieldMeta.maxPerDeposit.type:
+        "RISK_PARAMETER"
      fieldMeta.maxTotalDeposits.type:
+        "RISK_PARAMETER"
    }
```

```diff
    contract StrategyBase (0x6075546538c3eFbD607ea6aFC24149fCcFb2edF4) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      fieldMeta.getTVLLimits.type:
+        "RISK_PARAMETER"
      fieldMeta.maxPerDeposit.type:
+        "RISK_PARAMETER"
      fieldMeta.maxTotalDeposits.type:
+        "RISK_PARAMETER"
    }
```

```diff
    contract StrategyBaseTVLLimits (0x7CA911E83dabf90C90dD3De5411a10F1A6112184) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      fieldMeta.getTVLLimits.type:
+        "RISK_PARAMETER"
      fieldMeta.maxPerDeposit.type:
+        "RISK_PARAMETER"
      fieldMeta.maxTotalDeposits.type:
+        "RISK_PARAMETER"
    }
```

```diff
    contract EigenDAServiceManager (0x870679E138bCdf293b7Ff14dD44b70FC97e12fc0) {
    +++ description: None
      fieldMeta.BLOCK_STALE_MEASURE.type:
+        "RISK_PARAMETER"
      fieldMeta.quorumAdversaryThresholdPercentages.type:
+        "RISK_PARAMETER"
      fieldMeta.quorumConfirmationThresholdPercentages.type:
+        "RISK_PARAMETER"
      fieldMeta.batchConfirmers.type:
+        "RISK_PARAMETER"
    }
```

```diff
    contract StrategyBaseTVLLimits (0x8CA7A5d6f3acd3A7A8bC468a8CD0FB14B6BD28b6) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      fieldMeta.getTVLLimits.type:
+        "RISK_PARAMETER"
      fieldMeta.maxPerDeposit.type:
+        "RISK_PARAMETER"
      fieldMeta.maxTotalDeposits.type:
+        "RISK_PARAMETER"
    }
```

```diff
    contract StrategyBaseTVLLimits (0x93c4b944D05dfe6df7645A86cd2206016c51564D) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      fieldMeta.getTVLLimits.type:
+        "RISK_PARAMETER"
      fieldMeta.maxPerDeposit.type:
+        "RISK_PARAMETER"
      fieldMeta.maxTotalDeposits.type:
+        "RISK_PARAMETER"
    }
```

```diff
    contract StrategyBaseTVLLimits (0x9d7eD45EE2E8FC5482fa2428f15C971e6369011d) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      fieldMeta.getTVLLimits.type:
+        "RISK_PARAMETER"
      fieldMeta.maxPerDeposit.type:
+        "RISK_PARAMETER"
      fieldMeta.maxTotalDeposits.type:
+        "RISK_PARAMETER"
    }
```

```diff
    contract StrategyBaseTVLLimits (0xa4C637e0F704745D182e4D38cAb7E7485321d059) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      fieldMeta.getTVLLimits.type:
+        "RISK_PARAMETER"
      fieldMeta.maxPerDeposit.type:
+        "RISK_PARAMETER"
      fieldMeta.maxTotalDeposits.type:
+        "RISK_PARAMETER"
    }
```

```diff
    contract EigenStrategy (0xaCB55C530Acdb2849e6d4f36992Cd8c9D50ED8F7) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      fieldMeta.getTVLLimits.type:
+        "RISK_PARAMETER"
      fieldMeta.maxPerDeposit.type:
+        "RISK_PARAMETER"
      fieldMeta.maxTotalDeposits.type:
+        "RISK_PARAMETER"
    }
```

```diff
    contract StrategyBaseTVLLimits (0xAe60d8180437b5C34bB956822ac2710972584473) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      fieldMeta.getTVLLimits.type:
+        "RISK_PARAMETER"
      fieldMeta.maxPerDeposit.type:
+        "RISK_PARAMETER"
      fieldMeta.maxTotalDeposits.type:
+        "RISK_PARAMETER"
    }
```

Generated with discovered.json: 0x1ee0c66e32c739049ac33e9c2ad09d167841a33d

# Diff at Wed, 15 Jan 2025 07:42:16 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@3ea176aee1470e5ec80e65adfc81a954f84584d8 block: 21365898
- current block number: 21628459

## Description

Config related: displayName.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21365898 (main branch discovery), not current.

```diff
    contract eigenDAProxyAdmin (0x8247EF5705d3345516286B72bFE6D690197C2E99) {
    +++ description: None
      displayName:
+        "ProxyAdmin"
    }
```

Generated with discovered.json: 0x266d513bb55e652a9011ddefc4f87da60c466b71

# Diff at Mon, 09 Dec 2024 15:40:04 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@02974be0caac873bba9178e618086aa67aaf0b90 block: 21027344
- current block number: 21365898

## Description

Apply strategy template manually due to unverified proxy.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21027344 (main branch discovery), not current.

```diff
-   Status: DELETED
    contract GnosisSafe (0x12a6Bfb2f81267b847743c87767B3A45b897b1C0)
    +++ description: None
```

```diff
    contract StrategyBase (0x6075546538c3eFbD607ea6aFC24149fCcFb2edF4) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      template:
+        "eigenlayer/Strategy"
      description:
+        "A strategy implementation allowing to deposit a specific token as a restakable asset."
      fieldMeta:
+        {"getTVLLimits":{"severity":"LOW","description":"Maximum TVL of the strategy."},"maxPerDeposit":{"severity":"LOW","description":"Maximum value of one deposit transaction"},"maxTotalDeposits":{"severity":"LOW","description":"Same as TVL limit"}}
    }
```

```diff
-   Status: DELETED
    contract AltLayerToken (0x8457CA5040ad67fdebbCC8EdCE889A335Bc0fbFB)
    +++ description: None
```

```diff
-   Status: DELETED
    contract ProxyAdmin (0x8d254438fD1Bc99f0862D63cB9B33a7b68c8F08D)
    +++ description: None
```

```diff
-   Status: DELETED
    contract ProxyAdmin (0x90F3068f412D2090A08a83742f8864a2dF385647)
    +++ description: None
```

```diff
-   Status: DELETED
    contract GnosisSafe (0xA7Ee328c8A00BEB30BC70789C4CFdb81a61eBc2f)
    +++ description: None
```

```diff
-   Status: DELETED
    contract ProxyAdmin (0xAa34B20da3f64BD4574DF818c7FBE2228b35FAAc)
    +++ description: None
```

```diff
-   Status: DELETED
    contract GnosisSafe (0xAd9A9c2EbEa3401d9A0e588bBc05455dd9F37570)
    +++ description: None
```

```diff
-   Status: DELETED
    contract StakedALT (0xb6D149C8DdA37aAAa2F8AD0934f2e5682C35890B)
    +++ description: None
```

```diff
-   Status: DELETED
    contract ERC4626Vault (0xF96798F49936EfB1a56F99Ceae924b6B8359afFb)
    +++ description: None
```

Generated with discovered.json: 0xf071513e92c539d7a5a558c967b247b82427d4ee

# Diff at Mon, 09 Dec 2024 13:18:36 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@6e20c0da4ccb19e6a71427cc5601e1587d8abd35 block: 21027344
- current block number: 21027344

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21027344 (main branch discovery), not current.

```diff
    contract StrategyBase (0x6075546538c3eFbD607ea6aFC24149fCcFb2edF4) {
    +++ description: None
      name:
-        ""
+        "StrategyBase"
      values.$immutable:
-        true
      values.$admin:
+        "0x369e6F597e22EaB55fFb173C6d9cD234BD699111"
      values.$beacon:
+        "0x0ed6703C298d28aE0878d1b28e88cA87F9662fE9"
      values.$implementation:
+        "0xe9FA8F904d97854C7389b68923262ADCC6C27827"
      values.$pastUpgrades:
+        []
      values.$upgradeCount:
+        0
      values.explanation:
+        "Base Strategy implementation to inherit from for more complex implementations"
      values.paused:
+        0
      values.pauserRegistry:
+        "0x0c431C66F4dE941d089625E5B423D00707977060"
      values.strategyManager:
+        "0x858646372CC42E1A627fcE94aa7A7033e7CF075A"
      values.totalShares:
+        "2532642361157292170453843"
      values.underlyingToken:
+        "0xF96798F49936EfB1a56F99Ceae924b6B8359afFb"
      proxyType:
+        "Beacon proxy"
    }
```

```diff
+   Status: CREATED
    contract GnosisSafe (0x12a6Bfb2f81267b847743c87767B3A45b897b1C0)
    +++ description: None
```

```diff
+   Status: CREATED
    contract AltLayerToken (0x8457CA5040ad67fdebbCC8EdCE889A335Bc0fbFB)
    +++ description: None
```

```diff
+   Status: CREATED
    contract ProxyAdmin (0x8d254438fD1Bc99f0862D63cB9B33a7b68c8F08D)
    +++ description: None
```

```diff
+   Status: CREATED
    contract ProxyAdmin (0x90F3068f412D2090A08a83742f8864a2dF385647)
    +++ description: None
```

```diff
+   Status: CREATED
    contract GnosisSafe (0xA7Ee328c8A00BEB30BC70789C4CFdb81a61eBc2f)
    +++ description: None
```

```diff
+   Status: CREATED
    contract ProxyAdmin (0xAa34B20da3f64BD4574DF818c7FBE2228b35FAAc)
    +++ description: None
```

```diff
+   Status: CREATED
    contract GnosisSafe (0xAd9A9c2EbEa3401d9A0e588bBc05455dd9F37570)
    +++ description: None
```

```diff
+   Status: CREATED
    contract StakedALT (0xb6D149C8DdA37aAAa2F8AD0934f2e5682C35890B)
    +++ description: None
```

```diff
+   Status: CREATED
    contract ERC4626Vault (0xF96798F49936EfB1a56F99Ceae924b6B8359afFb)
    +++ description: None
```

Generated with discovered.json: 0xc0703400c7c5f1a01090aac9ca83bc1c8404f8e1

# Diff at Wed, 23 Oct 2024 09:19:29 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@2734bfe28641dfdb3277a5800faf0a057c08a58f block: 21016549
- current block number: 21027344

## Description

Config related.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21016549 (main branch discovery), not current.

```diff
    contract StakeRegistry (0x006124Ae7976137266feeBFb3F4D2BE4C073139D) {
    +++ description: None
      values.$pastUpgrades.1.2:
+        ["0x1C468cf7089D263c2f53e2579b329B16aBc4dd96"]
      values.$pastUpgrades.1.1:
-        ["0x1C468cf7089D263c2f53e2579b329B16aBc4dd96"]
+        "0xb72070366da1397312ab26f2128e3be250c3f9b8fa7164694e55d052f8d9f8ac"
      values.$pastUpgrades.0.2:
+        ["0x1f96861fEFa1065a5A96F20Deb6D8DC3ff48F7f9"]
      values.$pastUpgrades.0.1:
-        ["0x1f96861fEFa1065a5A96F20Deb6D8DC3ff48F7f9"]
+        "0x67b4fa469020a02fb0ab975c67604ada64cb11cdb170d44a3108cc67a9037bad"
    }
```

```diff
    contract BLSApkRegistry (0x00A5Fd09F6CeE6AE9C8b0E5e33287F7c82880505) {
    +++ description: None
      values.$pastUpgrades.1.2:
+        ["0x5d0B9cE2e277Daf508528E9f6Bf6314E79e4eD2b"]
      values.$pastUpgrades.1.1:
-        ["0x5d0B9cE2e277Daf508528E9f6Bf6314E79e4eD2b"]
+        "0x02bfebfdc5898228aafc5da844daeea8bc9c810ee1ee17f555d46da13247f13c"
      values.$pastUpgrades.0.2:
+        ["0x1f96861fEFa1065a5A96F20Deb6D8DC3ff48F7f9"]
      values.$pastUpgrades.0.1:
-        ["0x1f96861fEFa1065a5A96F20Deb6D8DC3ff48F7f9"]
+        "0xd0aab9a017adecfb4a605cd0c0790eaa6776e15054ddae552970406fc2320dd8"
    }
```

```diff
    contract RegistryCoordinator (0x0BAAc79acD45A023E19345c352d8a7a83C4e5656) {
    +++ description: Operators register here with an AVS: The coordinator has three registries: 1) a `StakeRegistry` that keeps track of operators' stakes, 2) a `BLSApkRegistry` that keeps track of operators' BLS public keys and aggregate BLS public keys for each quorum, 3) an `IndexRegistry` that keeps track of an ordered list of operators for each quorum
      descriptions:
-        ["Operators register here with an AVS: The coordinator has three registries: 1) a `StakeRegistry` that keeps track of operators' stakes, 2) a `BLSApkRegistry` that keeps track of operators' BLS public keys and aggregate BLS public keys for each quorum, 3) an `IndexRegistry` that keeps track of an ordered list of operators for each quorum"]
      values.$pastUpgrades.2.2:
+        ["0xdcabf0bE991d4609096CCe316df08d091356E03F"]
      values.$pastUpgrades.2.1:
-        ["0xdcabf0bE991d4609096CCe316df08d091356E03F"]
+        "0x28e327c2afc40ceec4bbc6e6a960b2f7744632a20e48da93c657bdd82c92bf5c"
      values.$pastUpgrades.1.2:
+        ["0xd3e09a0c2A9A6FDf5E92aE65D3CC090A4dF8EECF"]
      values.$pastUpgrades.1.1:
-        ["0xd3e09a0c2A9A6FDf5E92aE65D3CC090A4dF8EECF"]
+        "0x6a6489dbfbe688c34d924a3e86de303d3d427dc328652e931926333729f242be"
      values.$pastUpgrades.0.2:
+        ["0x1f96861fEFa1065a5A96F20Deb6D8DC3ff48F7f9"]
      values.$pastUpgrades.0.1:
-        ["0x1f96861fEFa1065a5A96F20Deb6D8DC3ff48F7f9"]
+        "0x3a9b2c12f66b0acc238c64eebdf84faee5e7539710be705584432368f1724d7f"
      description:
+        "Operators register here with an AVS: The coordinator has three registries: 1) a `StakeRegistry` that keeps track of operators' stakes, 2) a `BLSApkRegistry` that keeps track of operators' BLS public keys and aggregate BLS public keys for each quorum, 3) an `IndexRegistry` that keeps track of an ordered list of operators for each quorum"
    }
```

```diff
    contract StrategyBaseTVLLimits (0x0Fe4F44beE93503346A3Ac9EE5A26b130a5796d6) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      descriptions:
-        ["A strategy implementation allowing to deposit a specific token as a restakable asset."]
      values.$pastUpgrades.0.2:
+        ["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]
      values.$pastUpgrades.0.1:
-        ["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]
+        "0xb6e75618673d4c8271ddc66b99d5cdc306dc03e400ce0a1f05f8e74b124dbb06"
      description:
+        "A strategy implementation allowing to deposit a specific token as a restakable asset."
    }
```

```diff
    contract EjectionManager (0x130d8EA0052B45554e4C99079B84df292149Bd5E) {
    +++ description: Contract used for ejection of operators from the RegistryCoordinator.
      descriptions:
-        ["Contract used for ejection of operators from the RegistryCoordinator."]
      values.$pastUpgrades.2.2:
+        ["0x33A517608999DF5CEfFa2b2EbA88B4461c26Af6f"]
      values.$pastUpgrades.2.1:
-        ["0x33A517608999DF5CEfFa2b2EbA88B4461c26Af6f"]
+        "0x7dcee857c6f42698dd0db59a3032770cdffa8607b6902fee32f3d498991df44a"
      values.$pastUpgrades.1.2:
+        ["0x1A27AC48D40F70213Ae6ec64f66852e0A1a0E6fa"]
      values.$pastUpgrades.1.1:
-        ["0x1A27AC48D40F70213Ae6ec64f66852e0A1a0E6fa"]
+        "0xd04d3d0dbf04adf100c0edbe832d60786758b828ce9073e205b8ab3675864d32"
      values.$pastUpgrades.0.2:
+        ["0x1f96861fEFa1065a5A96F20Deb6D8DC3ff48F7f9"]
      values.$pastUpgrades.0.1:
-        ["0x1f96861fEFa1065a5A96F20Deb6D8DC3ff48F7f9"]
+        "0xb9f7f80114bf8e8fa3092fb298aa8aae1bccbb04b36516667396b5b12a6a23e0"
      description:
+        "Contract used for ejection of operators from the RegistryCoordinator."
    }
```

```diff
    contract StrategyBaseTVLLimits (0x13760F50a9d7377e4F20CB8CF9e4c26586c658ff) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      descriptions:
-        ["A strategy implementation allowing to deposit a specific token as a restakable asset."]
      values.$pastUpgrades.0.2:
+        ["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]
      values.$pastUpgrades.0.1:
-        ["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]
+        "0x91ae672142747f6575ebefe89dba8550752c42ee0b0fe29e9df2523d93e6976d"
      description:
+        "A strategy implementation allowing to deposit a specific token as a restakable asset."
    }
```

```diff
    contract StrategyBaseTVLLimits (0x1BeE69b7dFFfA4E2d53C2a2Df135C388AD25dCD2) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      descriptions:
-        ["A strategy implementation allowing to deposit a specific token as a restakable asset."]
      values.$pastUpgrades.0.2:
+        ["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]
      values.$pastUpgrades.0.1:
-        ["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]
+        "0xc48ef66054da437f0a7eed4315c5b3f3029f6ebc85ded6d0891272f8f100bc26"
      description:
+        "A strategy implementation allowing to deposit a specific token as a restakable asset."
    }
```

```diff
    contract StrategyBaseTVLLimits (0x298aFB19A105D59E74658C4C334Ff360BadE6dd2) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      descriptions:
-        ["A strategy implementation allowing to deposit a specific token as a restakable asset."]
      values.$pastUpgrades.0.2:
+        ["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]
      values.$pastUpgrades.0.1:
-        ["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]
+        "0x6d9bbd5b0323a53856a76ca93769d0e105d9e08a48b502a55cbbb51187583a38"
      description:
+        "A strategy implementation allowing to deposit a specific token as a restakable asset."
    }
```

```diff
    contract StrategyBaseTVLLimits (0x54945180dB7943c0ed0FEE7EdaB2Bd24620256bc) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      descriptions:
-        ["A strategy implementation allowing to deposit a specific token as a restakable asset."]
      values.$pastUpgrades.0.2:
+        ["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]
      values.$pastUpgrades.0.1:
-        ["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]
+        "0xbc6446c92131a356edff85618f044940164fc98d078a272b9e4c6a78e6102c23"
      description:
+        "A strategy implementation allowing to deposit a specific token as a restakable asset."
    }
```

```diff
    contract StrategyBaseTVLLimits (0x57ba429517c3473B6d34CA9aCd56c0e735b94c02) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      descriptions:
-        ["A strategy implementation allowing to deposit a specific token as a restakable asset."]
      values.$pastUpgrades.0.2:
+        ["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]
      values.$pastUpgrades.0.1:
-        ["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]
+        "0xaedc32e20363c051714d18605ac7df70c74c35f65bd45310b53a71146cec5028"
      description:
+        "A strategy implementation allowing to deposit a specific token as a restakable asset."
    }
```

```diff
    contract StrategyBaseTVLLimits (0x7CA911E83dabf90C90dD3De5411a10F1A6112184) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      descriptions:
-        ["A strategy implementation allowing to deposit a specific token as a restakable asset."]
      values.$pastUpgrades.0.2:
+        ["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]
      values.$pastUpgrades.0.1:
-        ["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]
+        "0x1a3e6c479ac05253780d481ab8558b6e690f50d4387ae17ec3f0891b3480830e"
      description:
+        "A strategy implementation allowing to deposit a specific token as a restakable asset."
    }
```

```diff
    contract EigenDAServiceManager (0x870679E138bCdf293b7Ff14dD44b70FC97e12fc0) {
    +++ description: None
      values.$pastUpgrades.5.2:
+        ["0x58fDE694Db83e589ABb21A6Fe66cb20Ce5554a07"]
      values.$pastUpgrades.5.1:
-        ["0x58fDE694Db83e589ABb21A6Fe66cb20Ce5554a07"]
+        "0xaedce35d052ceaed37943107a78d8fb3d833ac5619edeab62a8772d67afaaff9"
      values.$pastUpgrades.4.2:
+        ["0x0D2C5FD4Bb956cDD48A23fC3Ef77a768a5cDbAf7"]
      values.$pastUpgrades.4.1:
-        ["0x0D2C5FD4Bb956cDD48A23fC3Ef77a768a5cDbAf7"]
+        "0xfacff9a26f07d7ae55c6b9fc80059faa016f249c4624841cfcd43c34717cbaf7"
      values.$pastUpgrades.3.2:
+        ["0xCDFFF07d5b8AcdAd13607615118a2e65030f5be1"]
      values.$pastUpgrades.3.1:
-        ["0xCDFFF07d5b8AcdAd13607615118a2e65030f5be1"]
+        "0x43cca617c25c2c5ac4164bdfbeedb8dbf7325056844893fe61bb9e2034ebad1e"
      values.$pastUpgrades.2.2:
+        ["0x26089e9738b809d8308B0011B93b4225a112DB8C"]
      values.$pastUpgrades.2.1:
-        ["0x26089e9738b809d8308B0011B93b4225a112DB8C"]
+        "0xb40a6884127043977ba87604e5b6a7447b7f8e6fa88b3ab3d940507c8e1c92d8"
      values.$pastUpgrades.1.2:
+        ["0xF5fD25A90902c27068CF5eBe53Be8da693Ac899e"]
      values.$pastUpgrades.1.1:
-        ["0xF5fD25A90902c27068CF5eBe53Be8da693Ac899e"]
+        "0xb51ad742d1c13af667acb1608d33790a5dcc4970153a6ac2f415390b16fb485e"
      values.$pastUpgrades.0.2:
+        ["0x1f96861fEFa1065a5A96F20Deb6D8DC3ff48F7f9"]
      values.$pastUpgrades.0.1:
-        ["0x1f96861fEFa1065a5A96F20Deb6D8DC3ff48F7f9"]
+        "0x0742f1a4d072fc85fe39830a9d21536bf3e09c0ce5a7571cab93bd85d09ff576"
    }
```

```diff
    contract StrategyBaseTVLLimits (0x8CA7A5d6f3acd3A7A8bC468a8CD0FB14B6BD28b6) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      descriptions:
-        ["A strategy implementation allowing to deposit a specific token as a restakable asset."]
      values.$pastUpgrades.0.2:
+        ["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]
      values.$pastUpgrades.0.1:
-        ["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]
+        "0xc0d0e91ba0b422da6b6eff6470f3f570d19263084102caefd1352898d1595f1a"
      description:
+        "A strategy implementation allowing to deposit a specific token as a restakable asset."
    }
```

```diff
    contract StrategyBaseTVLLimits (0x93c4b944D05dfe6df7645A86cd2206016c51564D) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      descriptions:
-        ["A strategy implementation allowing to deposit a specific token as a restakable asset."]
      values.$pastUpgrades.0.2:
+        ["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]
      values.$pastUpgrades.0.1:
-        ["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]
+        "0x2d3c7d1611d7d6f9331598452e2a567c223b1ba5e8cfac15e81c1e352ce30cba"
      description:
+        "A strategy implementation allowing to deposit a specific token as a restakable asset."
    }
```

```diff
    contract StrategyBaseTVLLimits (0x9d7eD45EE2E8FC5482fa2428f15C971e6369011d) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      descriptions:
-        ["A strategy implementation allowing to deposit a specific token as a restakable asset."]
      values.$pastUpgrades.0.2:
+        ["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]
      values.$pastUpgrades.0.1:
-        ["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]
+        "0x98c6f2080df9ded027ca703bb52acef213576aa9b376f9c7451e41ab4c265170"
      description:
+        "A strategy implementation allowing to deposit a specific token as a restakable asset."
    }
```

```diff
    contract StrategyBaseTVLLimits (0xa4C637e0F704745D182e4D38cAb7E7485321d059) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      descriptions:
-        ["A strategy implementation allowing to deposit a specific token as a restakable asset."]
      values.$pastUpgrades.0.2:
+        ["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]
      values.$pastUpgrades.0.1:
-        ["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]
+        "0xb70781ea053daa5b4eb4cba00d8d18d08c6097378713ce601363b5c02060e229"
      description:
+        "A strategy implementation allowing to deposit a specific token as a restakable asset."
    }
```

```diff
    contract EigenStrategy (0xaCB55C530Acdb2849e6d4f36992Cd8c9D50ED8F7) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      descriptions:
-        ["A strategy implementation allowing to deposit a specific token as a restakable asset."]
      values.$pastUpgrades.0.2:
+        ["0x27e7a3A81741B9fcc5Ad7edCBf9F8a72a5c00428"]
      values.$pastUpgrades.0.1:
-        ["0x27e7a3A81741B9fcc5Ad7edCBf9F8a72a5c00428"]
+        "0x1e60f03a48d638e436087faed31f404435ea0af12795342b5de9f63d27772295"
      description:
+        "A strategy implementation allowing to deposit a specific token as a restakable asset."
    }
```

```diff
    contract StrategyBaseTVLLimits (0xAe60d8180437b5C34bB956822ac2710972584473) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      descriptions:
-        ["A strategy implementation allowing to deposit a specific token as a restakable asset."]
      values.$pastUpgrades.0.2:
+        ["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]
      values.$pastUpgrades.0.1:
-        ["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]
+        "0x2cf67ed2870057d5151bb9935962cb9282fd15f7c6e25ef78af3ba23c09886b1"
      description:
+        "A strategy implementation allowing to deposit a specific token as a restakable asset."
    }
```

```diff
    contract IndexRegistry (0xBd35a7a1CDeF403a6a99e4E8BA0974D198455030) {
    +++ description: None
      values.$pastUpgrades.1.2:
+        ["0x1ae0b73118906f39D5ED30Ae4A484ce2F479a14c"]
      values.$pastUpgrades.1.1:
-        ["0x1ae0b73118906f39D5ED30Ae4A484ce2F479a14c"]
+        "0x59468c0a593e95396455fade35463fcff5e9e310e1da5fef0de8f9ad00645acc"
      values.$pastUpgrades.0.2:
+        ["0x1f96861fEFa1065a5A96F20Deb6D8DC3ff48F7f9"]
      values.$pastUpgrades.0.1:
-        ["0x1f96861fEFa1065a5A96F20Deb6D8DC3ff48F7f9"]
+        "0xfebe64f00a8d96fe319e7b388f6cf4c4fb343dac129610a1c978f2ffc2e70a36"
    }
```

Generated with discovered.json: 0x42a76c68ceedd557005c4d604b1551be8993140a

# Diff at Mon, 21 Oct 2024 21:09:33 GMT:

- author: vincfurc (<10850139+vincfurc@users.noreply.github.com>)
- comparing to: main@d2c8bdc42f0977d1db78a55131debd6f4207329d block: 20777943
- current block number: 21016549

## Description

The OperationsMultisig updated the ejectionCooldown param, and quorumEjection params for quorum 0 (ETH) and quorum 1 (EIGEN). 
Shortened ejectionRateLimitWindow and ejectionCooldown to 3 days, so that max 33% of the stake can be ejected in a 3-day window, and ejected operators can rejoin after 3 days from being ejected.
Added description for ejectionCooldown value in config.

tx hash: 0x4c850491b06a70d7bdacaf0686d0f14b5ef6ec24c38c3c9e3ba359468b9caeab

## Watched changes

```diff
    contract RegistryCoordinator (0x0BAAc79acD45A023E19345c352d8a7a83C4e5656) {
    +++ description: Operators register here with an AVS: The coordinator has three registries: 1) a `StakeRegistry` that keeps track of operators' stakes, 2) a `BLSApkRegistry` that keeps track of operators' BLS public keys and aggregate BLS public keys for each quorum, 3) an `IndexRegistry` that keeps track of an ordered list of operators for each quorum
+++ description: The time in seconds that an operator must wait before being able to re-register after being ejected.
+++ severity: MEDIUM
      values.ejectionCooldown:
-        604800
+        259200
    }
```

```diff
    contract EjectionManager (0x130d8EA0052B45554e4C99079B84df292149Bd5E) {
    +++ description: Contract used for ejection of operators from the RegistryCoordinator.
+++ description: Time delta to track ejection over. Cannot eject more than ejectableStakePercent of total stake in this time delta.
      values.ejectionRateLimitWindow.1:
+        259200
    }
```

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20777943 (main branch discovery), not current.

```diff
    contract StakeRegistry (0x006124Ae7976137266feeBFb3F4D2BE4C073139D) {
    +++ description: None
      values.$pastUpgrades.1.2:
-        ["0x1C468cf7089D263c2f53e2579b329B16aBc4dd96"]
      values.$pastUpgrades.1.1:
-        "0xb72070366da1397312ab26f2128e3be250c3f9b8fa7164694e55d052f8d9f8ac"
+        ["0x1C468cf7089D263c2f53e2579b329B16aBc4dd96"]
      values.$pastUpgrades.0.2:
-        ["0x1f96861fEFa1065a5A96F20Deb6D8DC3ff48F7f9"]
      values.$pastUpgrades.0.1:
-        "0x67b4fa469020a02fb0ab975c67604ada64cb11cdb170d44a3108cc67a9037bad"
+        ["0x1f96861fEFa1065a5A96F20Deb6D8DC3ff48F7f9"]
    }
```

```diff
    contract BLSApkRegistry (0x00A5Fd09F6CeE6AE9C8b0E5e33287F7c82880505) {
    +++ description: None
      values.$pastUpgrades.1.2:
-        ["0x5d0B9cE2e277Daf508528E9f6Bf6314E79e4eD2b"]
      values.$pastUpgrades.1.1:
-        "0x02bfebfdc5898228aafc5da844daeea8bc9c810ee1ee17f555d46da13247f13c"
+        ["0x5d0B9cE2e277Daf508528E9f6Bf6314E79e4eD2b"]
      values.$pastUpgrades.0.2:
-        ["0x1f96861fEFa1065a5A96F20Deb6D8DC3ff48F7f9"]
      values.$pastUpgrades.0.1:
-        "0xd0aab9a017adecfb4a605cd0c0790eaa6776e15054ddae552970406fc2320dd8"
+        ["0x1f96861fEFa1065a5A96F20Deb6D8DC3ff48F7f9"]
    }
```

```diff
    contract RegistryCoordinator (0x0BAAc79acD45A023E19345c352d8a7a83C4e5656) {
    +++ description: Operators register here with an AVS: The coordinator has three registries: 1) a `StakeRegistry` that keeps track of operators' stakes, 2) a `BLSApkRegistry` that keeps track of operators' BLS public keys and aggregate BLS public keys for each quorum, 3) an `IndexRegistry` that keeps track of an ordered list of operators for each quorum
      description:
-        "Operators register here with an AVS: The coordinator has three registries: 1) a `StakeRegistry` that keeps track of operators' stakes, 2) a `BLSApkRegistry` that keeps track of operators' BLS public keys and aggregate BLS public keys for each quorum, 3) an `IndexRegistry` that keeps track of an ordered list of operators for each quorum"
      values.$pastUpgrades.2.2:
-        ["0xdcabf0bE991d4609096CCe316df08d091356E03F"]
      values.$pastUpgrades.2.1:
-        "0x28e327c2afc40ceec4bbc6e6a960b2f7744632a20e48da93c657bdd82c92bf5c"
+        ["0xdcabf0bE991d4609096CCe316df08d091356E03F"]
      values.$pastUpgrades.1.2:
-        ["0xd3e09a0c2A9A6FDf5E92aE65D3CC090A4dF8EECF"]
      values.$pastUpgrades.1.1:
-        "0x6a6489dbfbe688c34d924a3e86de303d3d427dc328652e931926333729f242be"
+        ["0xd3e09a0c2A9A6FDf5E92aE65D3CC090A4dF8EECF"]
      values.$pastUpgrades.0.2:
-        ["0x1f96861fEFa1065a5A96F20Deb6D8DC3ff48F7f9"]
      values.$pastUpgrades.0.1:
-        "0x3a9b2c12f66b0acc238c64eebdf84faee5e7539710be705584432368f1724d7f"
+        ["0x1f96861fEFa1065a5A96F20Deb6D8DC3ff48F7f9"]
      fieldMeta.ejectionCooldown:
+        {"severity":"MEDIUM","description":"The time in seconds that an operator must wait before being able to re-register after being ejected."}
      descriptions:
+        ["Operators register here with an AVS: The coordinator has three registries: 1) a `StakeRegistry` that keeps track of operators' stakes, 2) a `BLSApkRegistry` that keeps track of operators' BLS public keys and aggregate BLS public keys for each quorum, 3) an `IndexRegistry` that keeps track of an ordered list of operators for each quorum"]
    }
```

```diff
    contract StrategyBaseTVLLimits (0x0Fe4F44beE93503346A3Ac9EE5A26b130a5796d6) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      description:
-        "A strategy implementation allowing to deposit a specific token as a restakable asset."
      values.$pastUpgrades.0.2:
-        ["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]
      values.$pastUpgrades.0.1:
-        "0xb6e75618673d4c8271ddc66b99d5cdc306dc03e400ce0a1f05f8e74b124dbb06"
+        ["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]
      descriptions:
+        ["A strategy implementation allowing to deposit a specific token as a restakable asset."]
    }
```

```diff
    contract EjectionManager (0x130d8EA0052B45554e4C99079B84df292149Bd5E) {
    +++ description: Contract used for ejection of operators from the RegistryCoordinator.
      description:
-        "Contract used for ejection of operators from the RegistryCoordinator."
      values.$pastUpgrades.2.2:
-        ["0x33A517608999DF5CEfFa2b2EbA88B4461c26Af6f"]
      values.$pastUpgrades.2.1:
-        "0x7dcee857c6f42698dd0db59a3032770cdffa8607b6902fee32f3d498991df44a"
+        ["0x33A517608999DF5CEfFa2b2EbA88B4461c26Af6f"]
      values.$pastUpgrades.1.2:
-        ["0x1A27AC48D40F70213Ae6ec64f66852e0A1a0E6fa"]
      values.$pastUpgrades.1.1:
-        "0xd04d3d0dbf04adf100c0edbe832d60786758b828ce9073e205b8ab3675864d32"
+        ["0x1A27AC48D40F70213Ae6ec64f66852e0A1a0E6fa"]
      values.$pastUpgrades.0.2:
-        ["0x1f96861fEFa1065a5A96F20Deb6D8DC3ff48F7f9"]
      values.$pastUpgrades.0.1:
-        "0xb9f7f80114bf8e8fa3092fb298aa8aae1bccbb04b36516667396b5b12a6a23e0"
+        ["0x1f96861fEFa1065a5A96F20Deb6D8DC3ff48F7f9"]
      descriptions:
+        ["Contract used for ejection of operators from the RegistryCoordinator."]
    }
```

```diff
    contract StrategyBaseTVLLimits (0x13760F50a9d7377e4F20CB8CF9e4c26586c658ff) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      description:
-        "A strategy implementation allowing to deposit a specific token as a restakable asset."
      values.$pastUpgrades.0.2:
-        ["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]
      values.$pastUpgrades.0.1:
-        "0x91ae672142747f6575ebefe89dba8550752c42ee0b0fe29e9df2523d93e6976d"
+        ["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]
      descriptions:
+        ["A strategy implementation allowing to deposit a specific token as a restakable asset."]
    }
```

```diff
    contract StrategyBaseTVLLimits (0x1BeE69b7dFFfA4E2d53C2a2Df135C388AD25dCD2) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      description:
-        "A strategy implementation allowing to deposit a specific token as a restakable asset."
      values.$pastUpgrades.0.2:
-        ["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]
      values.$pastUpgrades.0.1:
-        "0xc48ef66054da437f0a7eed4315c5b3f3029f6ebc85ded6d0891272f8f100bc26"
+        ["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]
      descriptions:
+        ["A strategy implementation allowing to deposit a specific token as a restakable asset."]
    }
```

```diff
    contract StrategyBaseTVLLimits (0x298aFB19A105D59E74658C4C334Ff360BadE6dd2) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      description:
-        "A strategy implementation allowing to deposit a specific token as a restakable asset."
      values.$pastUpgrades.0.2:
-        ["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]
      values.$pastUpgrades.0.1:
-        "0x6d9bbd5b0323a53856a76ca93769d0e105d9e08a48b502a55cbbb51187583a38"
+        ["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]
      descriptions:
+        ["A strategy implementation allowing to deposit a specific token as a restakable asset."]
    }
```

```diff
    contract StrategyBaseTVLLimits (0x54945180dB7943c0ed0FEE7EdaB2Bd24620256bc) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      description:
-        "A strategy implementation allowing to deposit a specific token as a restakable asset."
      values.$pastUpgrades.0.2:
-        ["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]
      values.$pastUpgrades.0.1:
-        "0xbc6446c92131a356edff85618f044940164fc98d078a272b9e4c6a78e6102c23"
+        ["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]
      descriptions:
+        ["A strategy implementation allowing to deposit a specific token as a restakable asset."]
    }
```

```diff
    contract StrategyBaseTVLLimits (0x57ba429517c3473B6d34CA9aCd56c0e735b94c02) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      description:
-        "A strategy implementation allowing to deposit a specific token as a restakable asset."
      values.$pastUpgrades.0.2:
-        ["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]
      values.$pastUpgrades.0.1:
-        "0xaedc32e20363c051714d18605ac7df70c74c35f65bd45310b53a71146cec5028"
+        ["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]
      descriptions:
+        ["A strategy implementation allowing to deposit a specific token as a restakable asset."]
    }
```

```diff
    contract StrategyBaseTVLLimits (0x7CA911E83dabf90C90dD3De5411a10F1A6112184) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      description:
-        "A strategy implementation allowing to deposit a specific token as a restakable asset."
      values.$pastUpgrades.0.2:
-        ["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]
      values.$pastUpgrades.0.1:
-        "0x1a3e6c479ac05253780d481ab8558b6e690f50d4387ae17ec3f0891b3480830e"
+        ["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]
      descriptions:
+        ["A strategy implementation allowing to deposit a specific token as a restakable asset."]
    }
```

```diff
    contract EigenDAServiceManager (0x870679E138bCdf293b7Ff14dD44b70FC97e12fc0) {
    +++ description: None
      values.$pastUpgrades.5.2:
-        ["0x58fDE694Db83e589ABb21A6Fe66cb20Ce5554a07"]
      values.$pastUpgrades.5.1:
-        "0xaedce35d052ceaed37943107a78d8fb3d833ac5619edeab62a8772d67afaaff9"
+        ["0x58fDE694Db83e589ABb21A6Fe66cb20Ce5554a07"]
      values.$pastUpgrades.4.2:
-        ["0x0D2C5FD4Bb956cDD48A23fC3Ef77a768a5cDbAf7"]
      values.$pastUpgrades.4.1:
-        "0xfacff9a26f07d7ae55c6b9fc80059faa016f249c4624841cfcd43c34717cbaf7"
+        ["0x0D2C5FD4Bb956cDD48A23fC3Ef77a768a5cDbAf7"]
      values.$pastUpgrades.3.2:
-        ["0xCDFFF07d5b8AcdAd13607615118a2e65030f5be1"]
      values.$pastUpgrades.3.1:
-        "0x43cca617c25c2c5ac4164bdfbeedb8dbf7325056844893fe61bb9e2034ebad1e"
+        ["0xCDFFF07d5b8AcdAd13607615118a2e65030f5be1"]
      values.$pastUpgrades.2.2:
-        ["0x26089e9738b809d8308B0011B93b4225a112DB8C"]
      values.$pastUpgrades.2.1:
-        "0xb40a6884127043977ba87604e5b6a7447b7f8e6fa88b3ab3d940507c8e1c92d8"
+        ["0x26089e9738b809d8308B0011B93b4225a112DB8C"]
      values.$pastUpgrades.1.2:
-        ["0xF5fD25A90902c27068CF5eBe53Be8da693Ac899e"]
      values.$pastUpgrades.1.1:
-        "0xb51ad742d1c13af667acb1608d33790a5dcc4970153a6ac2f415390b16fb485e"
+        ["0xF5fD25A90902c27068CF5eBe53Be8da693Ac899e"]
      values.$pastUpgrades.0.2:
-        ["0x1f96861fEFa1065a5A96F20Deb6D8DC3ff48F7f9"]
      values.$pastUpgrades.0.1:
-        "0x0742f1a4d072fc85fe39830a9d21536bf3e09c0ce5a7571cab93bd85d09ff576"
+        ["0x1f96861fEFa1065a5A96F20Deb6D8DC3ff48F7f9"]
    }
```

```diff
    contract StrategyBaseTVLLimits (0x8CA7A5d6f3acd3A7A8bC468a8CD0FB14B6BD28b6) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      description:
-        "A strategy implementation allowing to deposit a specific token as a restakable asset."
      values.$pastUpgrades.0.2:
-        ["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]
      values.$pastUpgrades.0.1:
-        "0xc0d0e91ba0b422da6b6eff6470f3f570d19263084102caefd1352898d1595f1a"
+        ["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]
      descriptions:
+        ["A strategy implementation allowing to deposit a specific token as a restakable asset."]
    }
```

```diff
    contract StrategyBaseTVLLimits (0x93c4b944D05dfe6df7645A86cd2206016c51564D) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      description:
-        "A strategy implementation allowing to deposit a specific token as a restakable asset."
      values.$pastUpgrades.0.2:
-        ["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]
      values.$pastUpgrades.0.1:
-        "0x2d3c7d1611d7d6f9331598452e2a567c223b1ba5e8cfac15e81c1e352ce30cba"
+        ["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]
      descriptions:
+        ["A strategy implementation allowing to deposit a specific token as a restakable asset."]
    }
```

```diff
    contract StrategyBaseTVLLimits (0x9d7eD45EE2E8FC5482fa2428f15C971e6369011d) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      description:
-        "A strategy implementation allowing to deposit a specific token as a restakable asset."
      values.$pastUpgrades.0.2:
-        ["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]
      values.$pastUpgrades.0.1:
-        "0x98c6f2080df9ded027ca703bb52acef213576aa9b376f9c7451e41ab4c265170"
+        ["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]
      descriptions:
+        ["A strategy implementation allowing to deposit a specific token as a restakable asset."]
    }
```

```diff
    contract StrategyBaseTVLLimits (0xa4C637e0F704745D182e4D38cAb7E7485321d059) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      description:
-        "A strategy implementation allowing to deposit a specific token as a restakable asset."
      values.$pastUpgrades.0.2:
-        ["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]
      values.$pastUpgrades.0.1:
-        "0xb70781ea053daa5b4eb4cba00d8d18d08c6097378713ce601363b5c02060e229"
+        ["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]
      descriptions:
+        ["A strategy implementation allowing to deposit a specific token as a restakable asset."]
    }
```

```diff
    contract EigenStrategy (0xaCB55C530Acdb2849e6d4f36992Cd8c9D50ED8F7) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      description:
-        "A strategy implementation allowing to deposit a specific token as a restakable asset."
      values.$pastUpgrades.0.2:
-        ["0x27e7a3A81741B9fcc5Ad7edCBf9F8a72a5c00428"]
      values.$pastUpgrades.0.1:
-        "0x1e60f03a48d638e436087faed31f404435ea0af12795342b5de9f63d27772295"
+        ["0x27e7a3A81741B9fcc5Ad7edCBf9F8a72a5c00428"]
      descriptions:
+        ["A strategy implementation allowing to deposit a specific token as a restakable asset."]
    }
```

```diff
    contract StrategyBaseTVLLimits (0xAe60d8180437b5C34bB956822ac2710972584473) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      description:
-        "A strategy implementation allowing to deposit a specific token as a restakable asset."
      values.$pastUpgrades.0.2:
-        ["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]
      values.$pastUpgrades.0.1:
-        "0x2cf67ed2870057d5151bb9935962cb9282fd15f7c6e25ef78af3ba23c09886b1"
+        ["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]
      descriptions:
+        ["A strategy implementation allowing to deposit a specific token as a restakable asset."]
    }
```

```diff
    contract IndexRegistry (0xBd35a7a1CDeF403a6a99e4E8BA0974D198455030) {
    +++ description: None
      values.$pastUpgrades.1.2:
-        ["0x1ae0b73118906f39D5ED30Ae4A484ce2F479a14c"]
      values.$pastUpgrades.1.1:
-        "0x59468c0a593e95396455fade35463fcff5e9e310e1da5fef0de8f9ad00645acc"
+        ["0x1ae0b73118906f39D5ED30Ae4A484ce2F479a14c"]
      values.$pastUpgrades.0.2:
-        ["0x1f96861fEFa1065a5A96F20Deb6D8DC3ff48F7f9"]
      values.$pastUpgrades.0.1:
-        "0xfebe64f00a8d96fe319e7b388f6cf4c4fb343dac129610a1c978f2ffc2e70a36"
+        ["0x1f96861fEFa1065a5A96F20Deb6D8DC3ff48F7f9"]
    }
```

Generated with discovered.json: 0x428ccfa0b20e38d6a9db83c2c6828db205e39f12

# Diff at Mon, 21 Oct 2024 12:44:14 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@e660599f23a07618fe949a07be1f516ce44f1914 block: 20777943
- current block number: 20777943

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20777943 (main branch discovery), not current.

```diff
    contract RegistryCoordinator (0x0BAAc79acD45A023E19345c352d8a7a83C4e5656) {
    +++ description: Operators register here with an AVS: The coordinator has three registries: 1) a `StakeRegistry` that keeps track of operators' stakes, 2) a `BLSApkRegistry` that keeps track of operators' BLS public keys and aggregate BLS public keys for each quorum, 3) an `IndexRegistry` that keeps track of an ordered list of operators for each quorum
      descriptions:
-        ["Operators register here with an AVS: The coordinator has three registries: 1) a `StakeRegistry` that keeps track of operators' stakes, 2) a `BLSApkRegistry` that keeps track of operators' BLS public keys and aggregate BLS public keys for each quorum, 3) an `IndexRegistry` that keeps track of an ordered list of operators for each quorum"]
      description:
+        "Operators register here with an AVS: The coordinator has three registries: 1) a `StakeRegistry` that keeps track of operators' stakes, 2) a `BLSApkRegistry` that keeps track of operators' BLS public keys and aggregate BLS public keys for each quorum, 3) an `IndexRegistry` that keeps track of an ordered list of operators for each quorum"
    }
```

```diff
    contract StrategyBaseTVLLimits (0x0Fe4F44beE93503346A3Ac9EE5A26b130a5796d6) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      descriptions:
-        ["A strategy implementation allowing to deposit a specific token as a restakable asset."]
      description:
+        "A strategy implementation allowing to deposit a specific token as a restakable asset."
    }
```

```diff
    contract EjectionManager (0x130d8EA0052B45554e4C99079B84df292149Bd5E) {
    +++ description: Contract used for ejection of operators from the RegistryCoordinator.
      descriptions:
-        ["Contract used for ejection of operators from the RegistryCoordinator."]
      description:
+        "Contract used for ejection of operators from the RegistryCoordinator."
    }
```

```diff
    contract StrategyBaseTVLLimits (0x13760F50a9d7377e4F20CB8CF9e4c26586c658ff) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      descriptions:
-        ["A strategy implementation allowing to deposit a specific token as a restakable asset."]
      description:
+        "A strategy implementation allowing to deposit a specific token as a restakable asset."
    }
```

```diff
    contract StrategyBaseTVLLimits (0x1BeE69b7dFFfA4E2d53C2a2Df135C388AD25dCD2) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      descriptions:
-        ["A strategy implementation allowing to deposit a specific token as a restakable asset."]
      description:
+        "A strategy implementation allowing to deposit a specific token as a restakable asset."
    }
```

```diff
    contract StrategyBaseTVLLimits (0x298aFB19A105D59E74658C4C334Ff360BadE6dd2) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      descriptions:
-        ["A strategy implementation allowing to deposit a specific token as a restakable asset."]
      description:
+        "A strategy implementation allowing to deposit a specific token as a restakable asset."
    }
```

```diff
    contract StrategyBaseTVLLimits (0x54945180dB7943c0ed0FEE7EdaB2Bd24620256bc) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      descriptions:
-        ["A strategy implementation allowing to deposit a specific token as a restakable asset."]
      description:
+        "A strategy implementation allowing to deposit a specific token as a restakable asset."
    }
```

```diff
    contract StrategyBaseTVLLimits (0x57ba429517c3473B6d34CA9aCd56c0e735b94c02) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      descriptions:
-        ["A strategy implementation allowing to deposit a specific token as a restakable asset."]
      description:
+        "A strategy implementation allowing to deposit a specific token as a restakable asset."
    }
```

```diff
    contract StrategyBaseTVLLimits (0x7CA911E83dabf90C90dD3De5411a10F1A6112184) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      descriptions:
-        ["A strategy implementation allowing to deposit a specific token as a restakable asset."]
      description:
+        "A strategy implementation allowing to deposit a specific token as a restakable asset."
    }
```

```diff
    contract StrategyBaseTVLLimits (0x8CA7A5d6f3acd3A7A8bC468a8CD0FB14B6BD28b6) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      descriptions:
-        ["A strategy implementation allowing to deposit a specific token as a restakable asset."]
      description:
+        "A strategy implementation allowing to deposit a specific token as a restakable asset."
    }
```

```diff
    contract StrategyBaseTVLLimits (0x93c4b944D05dfe6df7645A86cd2206016c51564D) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      descriptions:
-        ["A strategy implementation allowing to deposit a specific token as a restakable asset."]
      description:
+        "A strategy implementation allowing to deposit a specific token as a restakable asset."
    }
```

```diff
    contract StrategyBaseTVLLimits (0x9d7eD45EE2E8FC5482fa2428f15C971e6369011d) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      descriptions:
-        ["A strategy implementation allowing to deposit a specific token as a restakable asset."]
      description:
+        "A strategy implementation allowing to deposit a specific token as a restakable asset."
    }
```

```diff
    contract StrategyBaseTVLLimits (0xa4C637e0F704745D182e4D38cAb7E7485321d059) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      descriptions:
-        ["A strategy implementation allowing to deposit a specific token as a restakable asset."]
      description:
+        "A strategy implementation allowing to deposit a specific token as a restakable asset."
    }
```

```diff
    contract EigenStrategy (0xaCB55C530Acdb2849e6d4f36992Cd8c9D50ED8F7) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      descriptions:
-        ["A strategy implementation allowing to deposit a specific token as a restakable asset."]
      description:
+        "A strategy implementation allowing to deposit a specific token as a restakable asset."
    }
```

```diff
    contract StrategyBaseTVLLimits (0xAe60d8180437b5C34bB956822ac2710972584473) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      descriptions:
-        ["A strategy implementation allowing to deposit a specific token as a restakable asset."]
      description:
+        "A strategy implementation allowing to deposit a specific token as a restakable asset."
    }
```

Generated with discovered.json: 0x23271119134e0aa3a27803920560a7cdaa2921d7

# Diff at Mon, 21 Oct 2024 11:05:54 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@8895d33866f5665c4c710f4ddaa32bfa63cc3c78 block: 20777943
- current block number: 20777943

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20777943 (main branch discovery), not current.

```diff
    contract StakeRegistry (0x006124Ae7976137266feeBFb3F4D2BE4C073139D) {
    +++ description: None
      values.$pastUpgrades.1.2:
+        ["0x1C468cf7089D263c2f53e2579b329B16aBc4dd96"]
      values.$pastUpgrades.1.1:
-        ["0x1C468cf7089D263c2f53e2579b329B16aBc4dd96"]
+        "0xb72070366da1397312ab26f2128e3be250c3f9b8fa7164694e55d052f8d9f8ac"
      values.$pastUpgrades.0.2:
+        ["0x1f96861fEFa1065a5A96F20Deb6D8DC3ff48F7f9"]
      values.$pastUpgrades.0.1:
-        ["0x1f96861fEFa1065a5A96F20Deb6D8DC3ff48F7f9"]
+        "0x67b4fa469020a02fb0ab975c67604ada64cb11cdb170d44a3108cc67a9037bad"
    }
```

```diff
    contract BLSApkRegistry (0x00A5Fd09F6CeE6AE9C8b0E5e33287F7c82880505) {
    +++ description: None
      values.$pastUpgrades.1.2:
+        ["0x5d0B9cE2e277Daf508528E9f6Bf6314E79e4eD2b"]
      values.$pastUpgrades.1.1:
-        ["0x5d0B9cE2e277Daf508528E9f6Bf6314E79e4eD2b"]
+        "0x02bfebfdc5898228aafc5da844daeea8bc9c810ee1ee17f555d46da13247f13c"
      values.$pastUpgrades.0.2:
+        ["0x1f96861fEFa1065a5A96F20Deb6D8DC3ff48F7f9"]
      values.$pastUpgrades.0.1:
-        ["0x1f96861fEFa1065a5A96F20Deb6D8DC3ff48F7f9"]
+        "0xd0aab9a017adecfb4a605cd0c0790eaa6776e15054ddae552970406fc2320dd8"
    }
```

```diff
    contract RegistryCoordinator (0x0BAAc79acD45A023E19345c352d8a7a83C4e5656) {
    +++ description: Operators register here with an AVS: The coordinator has three registries: 1) a `StakeRegistry` that keeps track of operators' stakes, 2) a `BLSApkRegistry` that keeps track of operators' BLS public keys and aggregate BLS public keys for each quorum, 3) an `IndexRegistry` that keeps track of an ordered list of operators for each quorum
      values.$pastUpgrades.2.2:
+        ["0xdcabf0bE991d4609096CCe316df08d091356E03F"]
      values.$pastUpgrades.2.1:
-        ["0xdcabf0bE991d4609096CCe316df08d091356E03F"]
+        "0x28e327c2afc40ceec4bbc6e6a960b2f7744632a20e48da93c657bdd82c92bf5c"
      values.$pastUpgrades.1.2:
+        ["0xd3e09a0c2A9A6FDf5E92aE65D3CC090A4dF8EECF"]
      values.$pastUpgrades.1.1:
-        ["0xd3e09a0c2A9A6FDf5E92aE65D3CC090A4dF8EECF"]
+        "0x6a6489dbfbe688c34d924a3e86de303d3d427dc328652e931926333729f242be"
      values.$pastUpgrades.0.2:
+        ["0x1f96861fEFa1065a5A96F20Deb6D8DC3ff48F7f9"]
      values.$pastUpgrades.0.1:
-        ["0x1f96861fEFa1065a5A96F20Deb6D8DC3ff48F7f9"]
+        "0x3a9b2c12f66b0acc238c64eebdf84faee5e7539710be705584432368f1724d7f"
    }
```

```diff
    contract StrategyBaseTVLLimits (0x0Fe4F44beE93503346A3Ac9EE5A26b130a5796d6) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      values.$pastUpgrades.0.2:
+        ["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]
      values.$pastUpgrades.0.1:
-        ["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]
+        "0xb6e75618673d4c8271ddc66b99d5cdc306dc03e400ce0a1f05f8e74b124dbb06"
    }
```

```diff
    contract EjectionManager (0x130d8EA0052B45554e4C99079B84df292149Bd5E) {
    +++ description: Contract used for ejection of operators from the RegistryCoordinator.
      values.$pastUpgrades.2.2:
+        ["0x33A517608999DF5CEfFa2b2EbA88B4461c26Af6f"]
      values.$pastUpgrades.2.1:
-        ["0x33A517608999DF5CEfFa2b2EbA88B4461c26Af6f"]
+        "0x7dcee857c6f42698dd0db59a3032770cdffa8607b6902fee32f3d498991df44a"
      values.$pastUpgrades.1.2:
+        ["0x1A27AC48D40F70213Ae6ec64f66852e0A1a0E6fa"]
      values.$pastUpgrades.1.1:
-        ["0x1A27AC48D40F70213Ae6ec64f66852e0A1a0E6fa"]
+        "0xd04d3d0dbf04adf100c0edbe832d60786758b828ce9073e205b8ab3675864d32"
      values.$pastUpgrades.0.2:
+        ["0x1f96861fEFa1065a5A96F20Deb6D8DC3ff48F7f9"]
      values.$pastUpgrades.0.1:
-        ["0x1f96861fEFa1065a5A96F20Deb6D8DC3ff48F7f9"]
+        "0xb9f7f80114bf8e8fa3092fb298aa8aae1bccbb04b36516667396b5b12a6a23e0"
    }
```

```diff
    contract StrategyBaseTVLLimits (0x13760F50a9d7377e4F20CB8CF9e4c26586c658ff) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      values.$pastUpgrades.0.2:
+        ["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]
      values.$pastUpgrades.0.1:
-        ["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]
+        "0x91ae672142747f6575ebefe89dba8550752c42ee0b0fe29e9df2523d93e6976d"
    }
```

```diff
    contract StrategyBaseTVLLimits (0x1BeE69b7dFFfA4E2d53C2a2Df135C388AD25dCD2) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      values.$pastUpgrades.0.2:
+        ["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]
      values.$pastUpgrades.0.1:
-        ["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]
+        "0xc48ef66054da437f0a7eed4315c5b3f3029f6ebc85ded6d0891272f8f100bc26"
    }
```

```diff
    contract StrategyBaseTVLLimits (0x298aFB19A105D59E74658C4C334Ff360BadE6dd2) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      values.$pastUpgrades.0.2:
+        ["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]
      values.$pastUpgrades.0.1:
-        ["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]
+        "0x6d9bbd5b0323a53856a76ca93769d0e105d9e08a48b502a55cbbb51187583a38"
    }
```

```diff
    contract StrategyBaseTVLLimits (0x54945180dB7943c0ed0FEE7EdaB2Bd24620256bc) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      values.$pastUpgrades.0.2:
+        ["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]
      values.$pastUpgrades.0.1:
-        ["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]
+        "0xbc6446c92131a356edff85618f044940164fc98d078a272b9e4c6a78e6102c23"
    }
```

```diff
    contract StrategyBaseTVLLimits (0x57ba429517c3473B6d34CA9aCd56c0e735b94c02) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      values.$pastUpgrades.0.2:
+        ["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]
      values.$pastUpgrades.0.1:
-        ["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]
+        "0xaedc32e20363c051714d18605ac7df70c74c35f65bd45310b53a71146cec5028"
    }
```

```diff
    contract StrategyBaseTVLLimits (0x7CA911E83dabf90C90dD3De5411a10F1A6112184) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      values.$pastUpgrades.0.2:
+        ["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]
      values.$pastUpgrades.0.1:
-        ["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]
+        "0x1a3e6c479ac05253780d481ab8558b6e690f50d4387ae17ec3f0891b3480830e"
    }
```

```diff
    contract EigenDAServiceManager (0x870679E138bCdf293b7Ff14dD44b70FC97e12fc0) {
    +++ description: None
      values.$pastUpgrades.5.2:
+        ["0x58fDE694Db83e589ABb21A6Fe66cb20Ce5554a07"]
      values.$pastUpgrades.5.1:
-        ["0x58fDE694Db83e589ABb21A6Fe66cb20Ce5554a07"]
+        "0xaedce35d052ceaed37943107a78d8fb3d833ac5619edeab62a8772d67afaaff9"
      values.$pastUpgrades.4.2:
+        ["0x0D2C5FD4Bb956cDD48A23fC3Ef77a768a5cDbAf7"]
      values.$pastUpgrades.4.1:
-        ["0x0D2C5FD4Bb956cDD48A23fC3Ef77a768a5cDbAf7"]
+        "0xfacff9a26f07d7ae55c6b9fc80059faa016f249c4624841cfcd43c34717cbaf7"
      values.$pastUpgrades.3.2:
+        ["0xCDFFF07d5b8AcdAd13607615118a2e65030f5be1"]
      values.$pastUpgrades.3.1:
-        ["0xCDFFF07d5b8AcdAd13607615118a2e65030f5be1"]
+        "0x43cca617c25c2c5ac4164bdfbeedb8dbf7325056844893fe61bb9e2034ebad1e"
      values.$pastUpgrades.2.2:
+        ["0x26089e9738b809d8308B0011B93b4225a112DB8C"]
      values.$pastUpgrades.2.1:
-        ["0x26089e9738b809d8308B0011B93b4225a112DB8C"]
+        "0xb40a6884127043977ba87604e5b6a7447b7f8e6fa88b3ab3d940507c8e1c92d8"
      values.$pastUpgrades.1.2:
+        ["0xF5fD25A90902c27068CF5eBe53Be8da693Ac899e"]
      values.$pastUpgrades.1.1:
-        ["0xF5fD25A90902c27068CF5eBe53Be8da693Ac899e"]
+        "0xb51ad742d1c13af667acb1608d33790a5dcc4970153a6ac2f415390b16fb485e"
      values.$pastUpgrades.0.2:
+        ["0x1f96861fEFa1065a5A96F20Deb6D8DC3ff48F7f9"]
      values.$pastUpgrades.0.1:
-        ["0x1f96861fEFa1065a5A96F20Deb6D8DC3ff48F7f9"]
+        "0x0742f1a4d072fc85fe39830a9d21536bf3e09c0ce5a7571cab93bd85d09ff576"
    }
```

```diff
    contract StrategyBaseTVLLimits (0x8CA7A5d6f3acd3A7A8bC468a8CD0FB14B6BD28b6) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      values.$pastUpgrades.0.2:
+        ["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]
      values.$pastUpgrades.0.1:
-        ["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]
+        "0xc0d0e91ba0b422da6b6eff6470f3f570d19263084102caefd1352898d1595f1a"
    }
```

```diff
    contract StrategyBaseTVLLimits (0x93c4b944D05dfe6df7645A86cd2206016c51564D) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      values.$pastUpgrades.0.2:
+        ["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]
      values.$pastUpgrades.0.1:
-        ["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]
+        "0x2d3c7d1611d7d6f9331598452e2a567c223b1ba5e8cfac15e81c1e352ce30cba"
    }
```

```diff
    contract StrategyBaseTVLLimits (0x9d7eD45EE2E8FC5482fa2428f15C971e6369011d) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      values.$pastUpgrades.0.2:
+        ["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]
      values.$pastUpgrades.0.1:
-        ["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]
+        "0x98c6f2080df9ded027ca703bb52acef213576aa9b376f9c7451e41ab4c265170"
    }
```

```diff
    contract StrategyBaseTVLLimits (0xa4C637e0F704745D182e4D38cAb7E7485321d059) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      values.$pastUpgrades.0.2:
+        ["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]
      values.$pastUpgrades.0.1:
-        ["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]
+        "0xb70781ea053daa5b4eb4cba00d8d18d08c6097378713ce601363b5c02060e229"
    }
```

```diff
    contract EigenStrategy (0xaCB55C530Acdb2849e6d4f36992Cd8c9D50ED8F7) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      values.$pastUpgrades.0.2:
+        ["0x27e7a3A81741B9fcc5Ad7edCBf9F8a72a5c00428"]
      values.$pastUpgrades.0.1:
-        ["0x27e7a3A81741B9fcc5Ad7edCBf9F8a72a5c00428"]
+        "0x1e60f03a48d638e436087faed31f404435ea0af12795342b5de9f63d27772295"
    }
```

```diff
    contract StrategyBaseTVLLimits (0xAe60d8180437b5C34bB956822ac2710972584473) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      values.$pastUpgrades.0.2:
+        ["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]
      values.$pastUpgrades.0.1:
-        ["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]
+        "0x2cf67ed2870057d5151bb9935962cb9282fd15f7c6e25ef78af3ba23c09886b1"
    }
```

```diff
    contract IndexRegistry (0xBd35a7a1CDeF403a6a99e4E8BA0974D198455030) {
    +++ description: None
      values.$pastUpgrades.1.2:
+        ["0x1ae0b73118906f39D5ED30Ae4A484ce2F479a14c"]
      values.$pastUpgrades.1.1:
-        ["0x1ae0b73118906f39D5ED30Ae4A484ce2F479a14c"]
+        "0x59468c0a593e95396455fade35463fcff5e9e310e1da5fef0de8f9ad00645acc"
      values.$pastUpgrades.0.2:
+        ["0x1f96861fEFa1065a5A96F20Deb6D8DC3ff48F7f9"]
      values.$pastUpgrades.0.1:
-        ["0x1f96861fEFa1065a5A96F20Deb6D8DC3ff48F7f9"]
+        "0xfebe64f00a8d96fe319e7b388f6cf4c4fb343dac129610a1c978f2ffc2e70a36"
    }
```

Generated with discovered.json: 0x388ba1793bd8afdd33bb30d68eabcd4c95d8039f

# Diff at Mon, 14 Oct 2024 10:50:50 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@1afc77ff111ceb0970e7d09efcc7b2f376b0c281 block: 20777943
- current block number: 20777943

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20777943 (main branch discovery), not current.

```diff
    contract StakeRegistry (0x006124Ae7976137266feeBFb3F4D2BE4C073139D) {
    +++ description: None
      sourceHashes:
+        ["0xd87f004d37330210f1eb137e4498b14ba6340f079eaa0e9e7a22c1d4f76dde7d","0x249715f12cf118070103f30534be5816b6847d0b1cd8fe8cae8e1833c6afd1f8"]
    }
```

```diff
    contract BLSApkRegistry (0x00A5Fd09F6CeE6AE9C8b0E5e33287F7c82880505) {
    +++ description: None
      sourceHashes:
+        ["0xd87f004d37330210f1eb137e4498b14ba6340f079eaa0e9e7a22c1d4f76dde7d","0xb4ca65ab7fb0cd9a8fd6f0c4b7805ea96914dcb6dd65309b2557931358ad1ff3"]
    }
```

```diff
    contract RegistryCoordinator (0x0BAAc79acD45A023E19345c352d8a7a83C4e5656) {
    +++ description: Operators register here with an AVS: The coordinator has three registries: 1) a `StakeRegistry` that keeps track of operators' stakes, 2) a `BLSApkRegistry` that keeps track of operators' BLS public keys and aggregate BLS public keys for each quorum, 3) an `IndexRegistry` that keeps track of an ordered list of operators for each quorum
      sourceHashes:
+        ["0xd87f004d37330210f1eb137e4498b14ba6340f079eaa0e9e7a22c1d4f76dde7d","0x223309c7d816ce318a9371a50683d99b1ace4ccb775c4a4b3e6ec1238f0a5c68"]
    }
```

```diff
    contract StrategyBaseTVLLimits (0x0Fe4F44beE93503346A3Ac9EE5A26b130a5796d6) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      sourceHashes:
+        ["0xd87f004d37330210f1eb137e4498b14ba6340f079eaa0e9e7a22c1d4f76dde7d","0x0c3feee8ba16b88486431df7d8867f64bc50ea12410ff83491b8020bdc49a9fd"]
    }
```

```diff
    contract EjectionManager (0x130d8EA0052B45554e4C99079B84df292149Bd5E) {
    +++ description: Contract used for ejection of operators from the RegistryCoordinator.
      sourceHashes:
+        ["0xd87f004d37330210f1eb137e4498b14ba6340f079eaa0e9e7a22c1d4f76dde7d","0xe0842698f9d2aadda65d129ee9797efd5820d2c146dc3f368826b9815f5b8c9f"]
    }
```

```diff
    contract StrategyBaseTVLLimits (0x13760F50a9d7377e4F20CB8CF9e4c26586c658ff) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      sourceHashes:
+        ["0xd87f004d37330210f1eb137e4498b14ba6340f079eaa0e9e7a22c1d4f76dde7d","0x0c3feee8ba16b88486431df7d8867f64bc50ea12410ff83491b8020bdc49a9fd"]
    }
```

```diff
    contract GnosisSafe (0x178eeeA9E0928dA2153A1d7951FBe30CF8371b8A) {
    +++ description: None
      sourceHashes:
+        ["0x81a7349eebb98ac33b0bc6842e3cb258034a8f2a4ba004570bb8e2e25947f9ff","0xd42bbf9f7dcd3720a7fc6bdc6edfdfae8800a37d6dd4decfa0ef6ca4a2e88940"]
    }
```

```diff
    contract StrategyBaseTVLLimits (0x1BeE69b7dFFfA4E2d53C2a2Df135C388AD25dCD2) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      sourceHashes:
+        ["0xd87f004d37330210f1eb137e4498b14ba6340f079eaa0e9e7a22c1d4f76dde7d","0x0c3feee8ba16b88486431df7d8867f64bc50ea12410ff83491b8020bdc49a9fd"]
    }
```

```diff
    contract StrategyBaseTVLLimits (0x298aFB19A105D59E74658C4C334Ff360BadE6dd2) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      sourceHashes:
+        ["0xd87f004d37330210f1eb137e4498b14ba6340f079eaa0e9e7a22c1d4f76dde7d","0x0c3feee8ba16b88486431df7d8867f64bc50ea12410ff83491b8020bdc49a9fd"]
    }
```

```diff
    contract StrategyBaseTVLLimits (0x54945180dB7943c0ed0FEE7EdaB2Bd24620256bc) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      sourceHashes:
+        ["0xd87f004d37330210f1eb137e4498b14ba6340f079eaa0e9e7a22c1d4f76dde7d","0x0c3feee8ba16b88486431df7d8867f64bc50ea12410ff83491b8020bdc49a9fd"]
    }
```

```diff
    contract StrategyBaseTVLLimits (0x57ba429517c3473B6d34CA9aCd56c0e735b94c02) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      sourceHashes:
+        ["0xd87f004d37330210f1eb137e4498b14ba6340f079eaa0e9e7a22c1d4f76dde7d","0x0c3feee8ba16b88486431df7d8867f64bc50ea12410ff83491b8020bdc49a9fd"]
    }
```

```diff
    contract StrategyBaseTVLLimits (0x7CA911E83dabf90C90dD3De5411a10F1A6112184) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      sourceHashes:
+        ["0xd87f004d37330210f1eb137e4498b14ba6340f079eaa0e9e7a22c1d4f76dde7d","0x0c3feee8ba16b88486431df7d8867f64bc50ea12410ff83491b8020bdc49a9fd"]
    }
```

```diff
    contract eigenDAProxyAdmin (0x8247EF5705d3345516286B72bFE6D690197C2E99) {
    +++ description: None
      template:
+        "global/ProxyAdmin"
      sourceHashes:
+        ["0xae641c7d7a83bba7fa913b9544f946dc23ca0527c2f4abb9c6a3496f49375218"]
    }
```

```diff
    contract EigenDAServiceManager (0x870679E138bCdf293b7Ff14dD44b70FC97e12fc0) {
    +++ description: None
      sourceHashes:
+        ["0xd87f004d37330210f1eb137e4498b14ba6340f079eaa0e9e7a22c1d4f76dde7d","0xb0f8e019272d9343047a9e89cbb9526954b9e2a1149fdc2476e7c29759b38951"]
    }
```

```diff
    contract StrategyBaseTVLLimits (0x8CA7A5d6f3acd3A7A8bC468a8CD0FB14B6BD28b6) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      sourceHashes:
+        ["0xd87f004d37330210f1eb137e4498b14ba6340f079eaa0e9e7a22c1d4f76dde7d","0x0c3feee8ba16b88486431df7d8867f64bc50ea12410ff83491b8020bdc49a9fd"]
    }
```

```diff
    contract StrategyBaseTVLLimits (0x93c4b944D05dfe6df7645A86cd2206016c51564D) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      sourceHashes:
+        ["0xd87f004d37330210f1eb137e4498b14ba6340f079eaa0e9e7a22c1d4f76dde7d","0x0c3feee8ba16b88486431df7d8867f64bc50ea12410ff83491b8020bdc49a9fd"]
    }
```

```diff
    contract StrategyBaseTVLLimits (0x9d7eD45EE2E8FC5482fa2428f15C971e6369011d) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      sourceHashes:
+        ["0xd87f004d37330210f1eb137e4498b14ba6340f079eaa0e9e7a22c1d4f76dde7d","0x0c3feee8ba16b88486431df7d8867f64bc50ea12410ff83491b8020bdc49a9fd"]
    }
```

```diff
    contract StrategyBaseTVLLimits (0xa4C637e0F704745D182e4D38cAb7E7485321d059) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      sourceHashes:
+        ["0xd87f004d37330210f1eb137e4498b14ba6340f079eaa0e9e7a22c1d4f76dde7d","0x0c3feee8ba16b88486431df7d8867f64bc50ea12410ff83491b8020bdc49a9fd"]
    }
```

```diff
    contract EigenStrategy (0xaCB55C530Acdb2849e6d4f36992Cd8c9D50ED8F7) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      sourceHashes:
+        ["0x993403059c5620e6c91110514f9f4a2f2331c55dab587699c67c19edddab92ad","0x4c5ff062896caf72eb8999dc0f839adca5dbec7dd71c1aa6d0b1defce8ee6046"]
    }
```

```diff
    contract StrategyBaseTVLLimits (0xAe60d8180437b5C34bB956822ac2710972584473) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      sourceHashes:
+        ["0xd87f004d37330210f1eb137e4498b14ba6340f079eaa0e9e7a22c1d4f76dde7d","0x0c3feee8ba16b88486431df7d8867f64bc50ea12410ff83491b8020bdc49a9fd"]
    }
```

```diff
    contract IndexRegistry (0xBd35a7a1CDeF403a6a99e4E8BA0974D198455030) {
    +++ description: None
      sourceHashes:
+        ["0xd87f004d37330210f1eb137e4498b14ba6340f079eaa0e9e7a22c1d4f76dde7d","0x0a21d40cd8eeee384b8feb55d745d69c6793753a08622872cc24972811a97da9"]
    }
```

Generated with discovered.json: 0xa91ad5520a88b83052a58008938b283dcbb00dbe

# Diff at Tue, 01 Oct 2024 10:51:04 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@bd754dc73c66120164006054f8d25c5fae9cd910 block: 20777943
- current block number: 20777943

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20777943 (main branch discovery), not current.

```diff
    contract StakeRegistry (0x006124Ae7976137266feeBFb3F4D2BE4C073139D) {
    +++ description: None
      values.$pastUpgrades:
+        [["2024-04-05T21:49:59.000Z",["0x1f96861fEFa1065a5A96F20Deb6D8DC3ff48F7f9"]],["2024-04-05T21:49:59.000Z",["0x1C468cf7089D263c2f53e2579b329B16aBc4dd96"]]]
    }
```

```diff
    contract BLSApkRegistry (0x00A5Fd09F6CeE6AE9C8b0E5e33287F7c82880505) {
    +++ description: None
      values.$pastUpgrades:
+        [["2024-04-05T21:49:59.000Z",["0x1f96861fEFa1065a5A96F20Deb6D8DC3ff48F7f9"]],["2024-04-05T21:49:59.000Z",["0x5d0B9cE2e277Daf508528E9f6Bf6314E79e4eD2b"]]]
    }
```

```diff
    contract RegistryCoordinator (0x0BAAc79acD45A023E19345c352d8a7a83C4e5656) {
    +++ description: Operators register here with an AVS: The coordinator has three registries: 1) a `StakeRegistry` that keeps track of operators' stakes, 2) a `BLSApkRegistry` that keeps track of operators' BLS public keys and aggregate BLS public keys for each quorum, 3) an `IndexRegistry` that keeps track of an ordered list of operators for each quorum
      values.$pastUpgrades:
+        [["2024-04-05T21:49:47.000Z",["0x1f96861fEFa1065a5A96F20Deb6D8DC3ff48F7f9"]],["2024-04-05T21:49:59.000Z",["0xd3e09a0c2A9A6FDf5E92aE65D3CC090A4dF8EECF"]],["2024-07-24T15:18:11.000Z",["0xdcabf0bE991d4609096CCe316df08d091356E03F"]]]
    }
```

```diff
    contract StrategyBaseTVLLimits (0x0Fe4F44beE93503346A3Ac9EE5A26b130a5796d6) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      values.$pastUpgrades:
+        [["2023-12-05T15:47:23.000Z",["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]]]
    }
```

```diff
    contract EjectionManager (0x130d8EA0052B45554e4C99079B84df292149Bd5E) {
    +++ description: Contract used for ejection of operators from the RegistryCoordinator.
      values.$pastUpgrades:
+        [["2024-05-10T13:31:35.000Z",["0x1f96861fEFa1065a5A96F20Deb6D8DC3ff48F7f9"]],["2024-05-10T13:31:35.000Z",["0x1A27AC48D40F70213Ae6ec64f66852e0A1a0E6fa"]],["2024-08-07T15:52:47.000Z",["0x33A517608999DF5CEfFa2b2EbA88B4461c26Af6f"]]]
    }
```

```diff
    contract StrategyBaseTVLLimits (0x13760F50a9d7377e4F20CB8CF9e4c26586c658ff) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      values.$pastUpgrades:
+        [["2023-12-05T15:47:23.000Z",["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]]]
    }
```

```diff
    contract StrategyBaseTVLLimits (0x1BeE69b7dFFfA4E2d53C2a2Df135C388AD25dCD2) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      values.$pastUpgrades:
+        [["2023-06-09T22:16:59.000Z",["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]]]
    }
```

```diff
    contract StrategyBaseTVLLimits (0x298aFB19A105D59E74658C4C334Ff360BadE6dd2) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      values.$pastUpgrades:
+        [["2024-01-05T20:15:23.000Z",["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]]]
    }
```

```diff
    contract StrategyBaseTVLLimits (0x54945180dB7943c0ed0FEE7EdaB2Bd24620256bc) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      values.$pastUpgrades:
+        [["2023-06-09T22:16:59.000Z",["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]]]
    }
```

```diff
    contract StrategyBaseTVLLimits (0x57ba429517c3473B6d34CA9aCd56c0e735b94c02) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      values.$pastUpgrades:
+        [["2023-12-05T15:47:23.000Z",["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]]]
    }
```

```diff
    contract StrategyBaseTVLLimits (0x7CA911E83dabf90C90dD3De5411a10F1A6112184) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      values.$pastUpgrades:
+        [["2023-12-05T15:47:23.000Z",["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]]]
    }
```

```diff
    contract EigenDAServiceManager (0x870679E138bCdf293b7Ff14dD44b70FC97e12fc0) {
    +++ description: None
      values.$pastUpgrades:
+        [["2024-04-05T21:49:47.000Z",["0x1f96861fEFa1065a5A96F20Deb6D8DC3ff48F7f9"]],["2024-04-05T21:49:59.000Z",["0xF5fD25A90902c27068CF5eBe53Be8da693Ac899e"]],["2024-05-09T21:13:11.000Z",["0x26089e9738b809d8308B0011B93b4225a112DB8C"]],["2024-05-21T19:56:59.000Z",["0xCDFFF07d5b8AcdAd13607615118a2e65030f5be1"]],["2024-08-03T16:14:35.000Z",["0x0D2C5FD4Bb956cDD48A23fC3Ef77a768a5cDbAf7"]],["2024-09-17T14:17:11.000Z",["0x58fDE694Db83e589ABb21A6Fe66cb20Ce5554a07"]]]
    }
```

```diff
    contract StrategyBaseTVLLimits (0x8CA7A5d6f3acd3A7A8bC468a8CD0FB14B6BD28b6) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      values.$pastUpgrades:
+        [["2024-01-05T20:15:23.000Z",["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]]]
    }
```

```diff
    contract StrategyBaseTVLLimits (0x93c4b944D05dfe6df7645A86cd2206016c51564D) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      values.$pastUpgrades:
+        [["2023-06-09T22:16:59.000Z",["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]]]
    }
```

```diff
    contract StrategyBaseTVLLimits (0x9d7eD45EE2E8FC5482fa2428f15C971e6369011d) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      values.$pastUpgrades:
+        [["2023-12-05T15:47:23.000Z",["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]]]
    }
```

```diff
    contract StrategyBaseTVLLimits (0xa4C637e0F704745D182e4D38cAb7E7485321d059) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      values.$pastUpgrades:
+        [["2023-12-05T15:47:23.000Z",["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]]]
    }
```

```diff
    contract EigenStrategy (0xaCB55C530Acdb2849e6d4f36992Cd8c9D50ED8F7) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      values.$pastUpgrades:
+        [["2024-04-18T04:30:11.000Z",["0x27e7a3A81741B9fcc5Ad7edCBf9F8a72a5c00428"]]]
    }
```

```diff
    contract StrategyBaseTVLLimits (0xAe60d8180437b5C34bB956822ac2710972584473) {
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
      values.$pastUpgrades:
+        [["2024-01-05T20:15:23.000Z",["0xdfdA04f980bE6A64E3607c95Ca26012Ab9aA46d3"]]]
    }
```

```diff
    contract IndexRegistry (0xBd35a7a1CDeF403a6a99e4E8BA0974D198455030) {
    +++ description: None
      values.$pastUpgrades:
+        [["2024-04-05T21:49:59.000Z",["0x1f96861fEFa1065a5A96F20Deb6D8DC3ff48F7f9"]],["2024-04-05T21:49:59.000Z",["0x1ae0b73118906f39D5ED30Ae4A484ce2F479a14c"]]]
    }
```

Generated with discovered.json: 0xf57bca95bc2f9c5a0ff66a0694131823eb2943bd

# Diff at Wed, 18 Sep 2024 14:02:13 GMT:

- author: vincfurc (<10850139+vincfurc@users.noreply.github.com>)
- comparing to: main@4e648bd4c0074d47d5b0332211bcd81db775dd7b block: 20777108
- current block number: 20777943

## Description

Added shapes to strategy template to automatically apply the template. Templetized ignoring eigen() token method to prevent custom strategy from spamming.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20777108 (main branch discovery), not current.

```diff
+   Status: CREATED
    contract StrategyBaseTVLLimits (0x0Fe4F44beE93503346A3Ac9EE5A26b130a5796d6)
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
```

```diff
+   Status: CREATED
    contract StrategyBaseTVLLimits (0x13760F50a9d7377e4F20CB8CF9e4c26586c658ff)
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
```

```diff
+   Status: CREATED
    contract StrategyBaseTVLLimits (0x1BeE69b7dFFfA4E2d53C2a2Df135C388AD25dCD2)
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
```

```diff
+   Status: CREATED
    contract StrategyBaseTVLLimits (0x298aFB19A105D59E74658C4C334Ff360BadE6dd2)
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
```

```diff
+   Status: CREATED
    contract StrategyBaseTVLLimits (0x54945180dB7943c0ed0FEE7EdaB2Bd24620256bc)
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
```

```diff
+   Status: CREATED
    contract StrategyBaseTVLLimits (0x57ba429517c3473B6d34CA9aCd56c0e735b94c02)
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
```

```diff
+   Status: CREATED
    contract  (0x6075546538c3eFbD607ea6aFC24149fCcFb2edF4)
    +++ description: None
```

```diff
+   Status: CREATED
    contract StrategyBaseTVLLimits (0x7CA911E83dabf90C90dD3De5411a10F1A6112184)
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
```

```diff
+   Status: CREATED
    contract StrategyBaseTVLLimits (0x8CA7A5d6f3acd3A7A8bC468a8CD0FB14B6BD28b6)
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
```

```diff
+   Status: CREATED
    contract StrategyBaseTVLLimits (0x93c4b944D05dfe6df7645A86cd2206016c51564D)
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
```

```diff
+   Status: CREATED
    contract StrategyBaseTVLLimits (0x9d7eD45EE2E8FC5482fa2428f15C971e6369011d)
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
```

```diff
+   Status: CREATED
    contract StrategyBaseTVLLimits (0xa4C637e0F704745D182e4D38cAb7E7485321d059)
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
```

```diff
+   Status: CREATED
    contract EigenStrategy (0xaCB55C530Acdb2849e6d4f36992Cd8c9D50ED8F7)
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
```

```diff
+   Status: CREATED
    contract StrategyBaseTVLLimits (0xAe60d8180437b5C34bB956822ac2710972584473)
    +++ description: A strategy implementation allowing to deposit a specific token as a restakable asset.
```

Generated with discovered.json: 0x9fbc162dcba18856455a482b45c2a33b4f650c9c

# Diff at Wed, 18 Sep 2024 11:14:04 GMT:

- author: vincfurc (<10850139+vincfurc@users.noreply.github.com>)
- comparing to: main@c2aae39cbab1defe84c7155af7d521cf3c228e0d block: 20661957
- current block number: 20777108

## Description

New quorum added for Restaked ALT (reALT). This new third quorum is not used in latest confirmBatch transactions.

## Watched changes

```diff
    contract EigenDAServiceManager (0x870679E138bCdf293b7Ff14dD44b70FC97e12fc0) {
    +++ description: None
      values.$implementation:
-        "0x0D2C5FD4Bb956cDD48A23fC3Ef77a768a5cDbAf7"
+        "0x58fDE694Db83e589ABb21A6Fe66cb20Ce5554a07"
      values.$upgradeCount:
-        5
+        6
+++ description: The maximum percentage of the stake which can be held by adversarial nodes before the availability of a blob is affected. First bytes is hex value for the first quorum, second byte is for the second quorum and so on.
+++ severity: MEDIUM
      values.quorumAdversaryThresholdPercentages:
-        "0x2121"
+        "0x212121"
+++ description: The minimum percentage of stake that must attest in order to consider the blob dispersal successful. First bytes is hex value for the first quorum, second byte is for the second quorum and so on.
+++ severity: MEDIUM
      values.quorumConfirmationThresholdPercentages:
-        "0x3737"
+        "0x373737"
    }
```

## Source code changes

```diff
.../EigenDAServiceManager/EigenDAServiceManager.sol                   | 4 ++--
 1 file changed, 2 insertions(+), 2 deletions(-)
```

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20661957 (main branch discovery), not current.

```diff
    contract StakeRegistry (0x006124Ae7976137266feeBFb3F4D2BE4C073139D) {
    +++ description: None
+++ description: The strategies for the first quorum (ETH).
      values.firstQuorumStrategies:
+        ["0xbeaC0eeEeeeeEEeEeEEEEeeEEeEeeeEeeEEBEaC0","0x93c4b944D05dfe6df7645A86cd2206016c51564D","0x1BeE69b7dFFfA4E2d53C2a2Df135C388AD25dCD2","0x54945180dB7943c0ed0FEE7EdaB2Bd24620256bc","0x9d7eD45EE2E8FC5482fa2428f15C971e6369011d","0x13760F50a9d7377e4F20CB8CF9e4c26586c658ff","0xa4C637e0F704745D182e4D38cAb7E7485321d059","0x57ba429517c3473B6d34CA9aCd56c0e735b94c02","0x0Fe4F44beE93503346A3Ac9EE5A26b130a5796d6","0x7CA911E83dabf90C90dD3De5411a10F1A6112184","0x8CA7A5d6f3acd3A7A8bC468a8CD0FB14B6BD28b6","0xAe60d8180437b5C34bB956822ac2710972584473","0x298aFB19A105D59E74658C4C334Ff360BadE6dd2"]
+++ description: The strategies for the fourth quorum. Not used yet, here to catch a potential new quorum.
      values.fourthQuorumStrategies:
+        []
+++ description: The strategies for the second quorum (EIGEN).
      values.secondQuorumStrategies:
+        ["0xaCB55C530Acdb2849e6d4f36992Cd8c9D50ED8F7"]
+++ description: The strategies for the third quorum.
      values.thirdQuorumStrategies:
+        ["0x6075546538c3eFbD607ea6aFC24149fCcFb2edF4"]
      fieldMeta:
+        {"firstQuorumStrategies":{"description":"The strategies for the first quorum (ETH)."},"secondQuorumStrategies":{"description":"The strategies for the second quorum (EIGEN)."},"thirdQuorumStrategies":{"description":"The strategies for the third quorum."},"fourthQuorumStrategies":{"description":"The strategies for the fourth quorum. Not used yet, here to catch a potential new quorum."}}
    }
```

```diff
    contract EigenDAServiceManager (0x870679E138bCdf293b7Ff14dD44b70FC97e12fc0) {
    +++ description: None
      fieldMeta.quorumAdversaryThresholdPercentages.description:
-        "The maximum percentage of the stake which can be held by adversarial nodes before the availability of a blob is affected. First bytes is hex value for the first quorum, second byte is for the second quorum."
+        "The maximum percentage of the stake which can be held by adversarial nodes before the availability of a blob is affected. First bytes is hex value for the first quorum, second byte is for the second quorum and so on."
      fieldMeta.quorumConfirmationThresholdPercentages.description:
-        "The minimum percentage of stake that must attest in order to consider the blob dispersal successful. First bytes is hex value for the first quorum, second byte is for the second quorum."
+        "The minimum percentage of stake that must attest in order to consider the blob dispersal successful. First bytes is hex value for the first quorum, second byte is for the second quorum and so on."
    }
```

Generated with discovered.json: 0x8e81bf69871f9c75df3876cc95e439c7edc13416

# Diff at Mon, 02 Sep 2024 09:21:51 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@8fcb30f6c613b5454aa9ecdec05a118442e9dc7b block: 20592130
- current block number: 20661957

## Description

A third quorum is added. (added config) This new quorum uses a yet unverified strategy to count its stake. (Probbaly related to restaked ALT)

source: [StakeRegistry.strategyParams(2,0)](https://etherscan.io/address/0x006124Ae7976137266feeBFb3F4D2BE4C073139D#readProxyContract#F20)

## Watched changes

```diff
    contract RegistryCoordinator (0x0BAAc79acD45A023E19345c352d8a7a83C4e5656) {
    +++ description: Operators register here with an AVS: The coordinator has three registries: 1) a `StakeRegistry` that keeps track of operators' stakes, 2) a `BLSApkRegistry` that keeps track of operators' BLS public keys and aggregate BLS public keys for each quorum, 3) an `IndexRegistry` that keeps track of an ordered list of operators for each quorum
+++ description: 0_maxOperatorCount, 1_kickBIPsOfOperatorStake, 2_kickBIPsOfTotalStake
      values.operatorSetParamsQuorum3.2:
-        0
+        667
+++ description: 0_maxOperatorCount, 1_kickBIPsOfOperatorStake, 2_kickBIPsOfTotalStake
      values.operatorSetParamsQuorum3.1:
-        0
+        11000
+++ description: 0_maxOperatorCount, 1_kickBIPsOfOperatorStake, 2_kickBIPsOfTotalStake
      values.operatorSetParamsQuorum3.0:
-        0
+        15
+++ description: if quorum count changes, makes sure the new quorum parameters are tracked in the config
+++ severity: HIGH
      values.quorumCount:
-        2
+        3
    }
```

```diff
    contract EigenDAServiceManager (0x870679E138bCdf293b7Ff14dD44b70FC97e12fc0) {
    +++ description: None
      values.getRestakeableStrategies.14:
+        "0x6075546538c3eFbD607ea6aFC24149fCcFb2edF4"
    }
```

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20592130 (main branch discovery), not current.

```diff
    contract RegistryCoordinator (0x0BAAc79acD45A023E19345c352d8a7a83C4e5656) {
    +++ description: Operators register here with an AVS: The coordinator has three registries: 1) a `StakeRegistry` that keeps track of operators' stakes, 2) a `BLSApkRegistry` that keeps track of operators' BLS public keys and aggregate BLS public keys for each quorum, 3) an `IndexRegistry` that keeps track of an ordered list of operators for each quorum
+++ description: 0_maxOperatorCount, 1_kickBIPsOfOperatorStake, 2_kickBIPsOfTotalStake
      values.operatorSetParamsQuorum3:
+        [0,0,0]
      fieldMeta.operatorSetParamsQuorum3:
+        {"description":"0_maxOperatorCount, 1_kickBIPsOfOperatorStake, 2_kickBIPsOfTotalStake"}
    }
```

Generated with discovered.json: 0x33459c5acd864fbda69294f8166805ee2954942f

# Diff at Fri, 30 Aug 2024 07:52:11 GMT:

- author: Adrian Adamiak (<adrian@adamiak.net>)
- comparing to: main@6c1bd1f41fadf5f2cb1c1805b5a2c6138a3ed35a block: 20592130
- current block number: 20592130

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20592130 (main branch discovery), not current.

```diff
    contract eigenDAProxyAdmin (0x8247EF5705d3345516286B72bFE6D690197C2E99) {
    +++ description: None
      receivedPermissions.5.via:
-        []
      receivedPermissions.4.via:
-        []
      receivedPermissions.3.via:
-        []
      receivedPermissions.2.via:
-        []
      receivedPermissions.1.via:
-        []
      receivedPermissions.0.via:
-        []
    }
```

Generated with discovered.json: 0xd78fc12619af80fee0e879c766ffb9a240a1d06a

# Diff at Fri, 23 Aug 2024 15:15:42 GMT:

- author: vincfurc (<10850139+vincfurc@users.noreply.github.com>)
- comparing to: main@bf2d0ebf21a279d76dfafc24de12b751244afaf6 block: 20482509
- current block number: 20592130

## Description

Added batch confirmers discovery (addresses allowed to call confirmBatch method).

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20482509 (main branch discovery), not current.

```diff
    contract StakeRegistry (0x006124Ae7976137266feeBFb3F4D2BE4C073139D) {
    +++ description: None
      values.$upgradeCount:
+        2
    }
```

```diff
    contract BLSApkRegistry (0x00A5Fd09F6CeE6AE9C8b0E5e33287F7c82880505) {
    +++ description: None
      values.$upgradeCount:
+        2
    }
```

```diff
    contract RegistryCoordinator (0x0BAAc79acD45A023E19345c352d8a7a83C4e5656) {
    +++ description: Operators register here with an AVS: The coordinator has three registries: 1) a `StakeRegistry` that keeps track of operators' stakes, 2) a `BLSApkRegistry` that keeps track of operators' BLS public keys and aggregate BLS public keys for each quorum, 3) an `IndexRegistry` that keeps track of an ordered list of operators for each quorum
      values.$upgradeCount:
+        3
    }
```

```diff
    contract EjectionManager (0x130d8EA0052B45554e4C99079B84df292149Bd5E) {
    +++ description: Contract used for ejection of operators from the RegistryCoordinator.
      values.$upgradeCount:
+        3
    }
```

```diff
    contract EigenDAServiceManager (0x870679E138bCdf293b7Ff14dD44b70FC97e12fc0) {
    +++ description: None
      name:
-        "eigenDAServiceManager"
+        "EigenDAServiceManager"
      values.$upgradeCount:
+        5
+++ description: The list of addresses authorized to confirm the availability of blobs batches to the DA bridge.
+++ severity: MEDIUM
      values.batchConfirmers:
+        ["0x8ED83c6Bb12E441Ca2C3a544F525d4a3Fb6484D8","0x5A49Bf6c5690E22dFff3eB37F7dd18254eC361ED","0x454Ef2f69f91527856E06659f92a66f464C1ca4e"]
      fieldMeta.batchConfirmers:
+        {"severity":"MEDIUM","description":"The list of addresses authorized to confirm the availability of blobs batches to the DA bridge."}
    }
```

```diff
    contract IndexRegistry (0xBd35a7a1CDeF403a6a99e4E8BA0974D198455030) {
    +++ description: None
      values.$upgradeCount:
+        2
    }
```

Generated with discovered.json: 0xbb36619ad44c154665a8e37cf418261edea7ee2d

# Diff at Fri, 23 Aug 2024 09:52:13 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@67597c7d6c810bc726594446890178150240711e block: 20482509
- current block number: 20482509

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20482509 (main branch discovery), not current.

```diff
    contract StakeRegistry (0x006124Ae7976137266feeBFb3F4D2BE4C073139D) {
    +++ description: None
      values.$upgradeCount:
+        2
    }
```

```diff
    contract BLSApkRegistry (0x00A5Fd09F6CeE6AE9C8b0E5e33287F7c82880505) {
    +++ description: None
      values.$upgradeCount:
+        2
    }
```

```diff
    contract RegistryCoordinator (0x0BAAc79acD45A023E19345c352d8a7a83C4e5656) {
    +++ description: Operators register here with an AVS: The coordinator has three registries: 1) a `StakeRegistry` that keeps track of operators' stakes, 2) a `BLSApkRegistry` that keeps track of operators' BLS public keys and aggregate BLS public keys for each quorum, 3) an `IndexRegistry` that keeps track of an ordered list of operators for each quorum
      values.$upgradeCount:
+        3
    }
```

```diff
    contract EjectionManager (0x130d8EA0052B45554e4C99079B84df292149Bd5E) {
    +++ description: Contract used for ejection of operators from the RegistryCoordinator.
      values.$upgradeCount:
+        3
    }
```

```diff
    contract eigenDAServiceManager (0x870679E138bCdf293b7Ff14dD44b70FC97e12fc0) {
    +++ description: None
      values.$upgradeCount:
+        5
    }
```

```diff
    contract IndexRegistry (0xBd35a7a1CDeF403a6a99e4E8BA0974D198455030) {
    +++ description: None
      values.$upgradeCount:
+        2
    }
```

Generated with discovered.json: 0xaf9c62cdfec62d108f80a9d93c789843773b3b50

# Diff at Wed, 21 Aug 2024 10:02:59 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@2f6dde3357bf5d79196b6e94f79d853a6c4ec72b block: 20482509
- current block number: 20482509

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20482509 (main branch discovery), not current.

```diff
    contract StakeRegistry (0x006124Ae7976137266feeBFb3F4D2BE4C073139D) {
    +++ description: None
      issuedPermissions:
+        [{"permission":"upgrade","target":"0x8247EF5705d3345516286B72bFE6D690197C2E99","via":[]}]
    }
```

```diff
    contract BLSApkRegistry (0x00A5Fd09F6CeE6AE9C8b0E5e33287F7c82880505) {
    +++ description: None
      issuedPermissions:
+        [{"permission":"upgrade","target":"0x8247EF5705d3345516286B72bFE6D690197C2E99","via":[]}]
    }
```

```diff
    contract RegistryCoordinator (0x0BAAc79acD45A023E19345c352d8a7a83C4e5656) {
    +++ description: Operators register here with an AVS: The coordinator has three registries: 1) a `StakeRegistry` that keeps track of operators' stakes, 2) a `BLSApkRegistry` that keeps track of operators' BLS public keys and aggregate BLS public keys for each quorum, 3) an `IndexRegistry` that keeps track of an ordered list of operators for each quorum
      issuedPermissions:
+        [{"permission":"upgrade","target":"0x8247EF5705d3345516286B72bFE6D690197C2E99","via":[]}]
    }
```

```diff
    contract EjectionManager (0x130d8EA0052B45554e4C99079B84df292149Bd5E) {
    +++ description: Contract used for ejection of operators from the RegistryCoordinator.
      issuedPermissions:
+        [{"permission":"upgrade","target":"0x8247EF5705d3345516286B72bFE6D690197C2E99","via":[]}]
    }
```

```diff
    contract eigenDAProxyAdmin (0x8247EF5705d3345516286B72bFE6D690197C2E99) {
    +++ description: None
      assignedPermissions:
-        {"upgrade":["0x006124Ae7976137266feeBFb3F4D2BE4C073139D","0x00A5Fd09F6CeE6AE9C8b0E5e33287F7c82880505","0x0BAAc79acD45A023E19345c352d8a7a83C4e5656","0x130d8EA0052B45554e4C99079B84df292149Bd5E","0x870679E138bCdf293b7Ff14dD44b70FC97e12fc0","0xBd35a7a1CDeF403a6a99e4E8BA0974D198455030"]}
      receivedPermissions:
+        [{"permission":"upgrade","target":"0x006124Ae7976137266feeBFb3F4D2BE4C073139D","via":[]},{"permission":"upgrade","target":"0x00A5Fd09F6CeE6AE9C8b0E5e33287F7c82880505","via":[]},{"permission":"upgrade","target":"0x0BAAc79acD45A023E19345c352d8a7a83C4e5656","via":[]},{"permission":"upgrade","target":"0x130d8EA0052B45554e4C99079B84df292149Bd5E","via":[]},{"permission":"upgrade","target":"0x870679E138bCdf293b7Ff14dD44b70FC97e12fc0","via":[]},{"permission":"upgrade","target":"0xBd35a7a1CDeF403a6a99e4E8BA0974D198455030","via":[]}]
    }
```

```diff
    contract eigenDAServiceManager (0x870679E138bCdf293b7Ff14dD44b70FC97e12fc0) {
    +++ description: None
      issuedPermissions:
+        [{"permission":"upgrade","target":"0x8247EF5705d3345516286B72bFE6D690197C2E99","via":[]}]
    }
```

```diff
    contract IndexRegistry (0xBd35a7a1CDeF403a6a99e4E8BA0974D198455030) {
    +++ description: None
      issuedPermissions:
+        [{"permission":"upgrade","target":"0x8247EF5705d3345516286B72bFE6D690197C2E99","via":[]}]
    }
```

Generated with discovered.json: 0xe16e4e41647c26adabbd294f3e0f4b5361ddd3f0

# Diff at Fri, 09 Aug 2024 11:59:24 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@bf40aa32f030fd312056ca0ef198c8550467d1d7 block: 20482509
- current block number: 20482509

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20482509 (main branch discovery), not current.

```diff
    contract eigenDAProxyAdmin (0x8247EF5705d3345516286B72bFE6D690197C2E99) {
    +++ description: None
      assignedPermissions.upgrade.5:
-        "0x130d8EA0052B45554e4C99079B84df292149Bd5E"
+        "0xBd35a7a1CDeF403a6a99e4E8BA0974D198455030"
      assignedPermissions.upgrade.4:
-        "0xBd35a7a1CDeF403a6a99e4E8BA0974D198455030"
+        "0x870679E138bCdf293b7Ff14dD44b70FC97e12fc0"
      assignedPermissions.upgrade.3:
-        "0x006124Ae7976137266feeBFb3F4D2BE4C073139D"
+        "0x130d8EA0052B45554e4C99079B84df292149Bd5E"
      assignedPermissions.upgrade.0:
-        "0x870679E138bCdf293b7Ff14dD44b70FC97e12fc0"
+        "0x006124Ae7976137266feeBFb3F4D2BE4C073139D"
    }
```

Generated with discovered.json: 0xd4ce8cc3f2bd534b61a4c64dbdb3bbfd088d16b5

# Diff at Fri, 09 Aug 2024 10:09:31 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@1f0da1d0aab7bc6b3b5e54e7e93480bd98e57035 block: 20482509
- current block number: 20482509

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20482509 (main branch discovery), not current.

```diff
    contract GnosisSafe (0x178eeeA9E0928dA2153A1d7951FBe30CF8371b8A) {
    +++ description: None
      values.$multisigThreshold:
-        "3 of 5 (60%)"
      values.getOwners:
-        ["0xaBd099133278ACF0415186c88F34e01b05D116f6","0x2bBA03bA38D90634e6afD8C23C16ca01651bc493","0xf20eD26be203f09B8F0Cb3265E74BB6AD24408b4","0xca3E83c0e41A1f27b9f832F4fcE22e79Cffecfc7","0xe7fFd467F7526abf9c8796EDeE0AD30110419127"]
      values.getThreshold:
-        3
      values.$members:
+        ["0xaBd099133278ACF0415186c88F34e01b05D116f6","0x2bBA03bA38D90634e6afD8C23C16ca01651bc493","0xf20eD26be203f09B8F0Cb3265E74BB6AD24408b4","0xca3E83c0e41A1f27b9f832F4fcE22e79Cffecfc7","0xe7fFd467F7526abf9c8796EDeE0AD30110419127"]
      values.$threshold:
+        3
      values.multisigThreshold:
+        "3 of 5 (60%)"
    }
```

```diff
    contract eigenDAProxyAdmin (0x8247EF5705d3345516286B72bFE6D690197C2E99) {
    +++ description: None
      assignedPermissions.admin:
-        ["0x006124Ae7976137266feeBFb3F4D2BE4C073139D","0x00A5Fd09F6CeE6AE9C8b0E5e33287F7c82880505","0x0BAAc79acD45A023E19345c352d8a7a83C4e5656","0x130d8EA0052B45554e4C99079B84df292149Bd5E","0x870679E138bCdf293b7Ff14dD44b70FC97e12fc0","0xBd35a7a1CDeF403a6a99e4E8BA0974D198455030"]
      assignedPermissions.upgrade:
+        ["0x870679E138bCdf293b7Ff14dD44b70FC97e12fc0","0x00A5Fd09F6CeE6AE9C8b0E5e33287F7c82880505","0x0BAAc79acD45A023E19345c352d8a7a83C4e5656","0x006124Ae7976137266feeBFb3F4D2BE4C073139D","0xBd35a7a1CDeF403a6a99e4E8BA0974D198455030","0x130d8EA0052B45554e4C99079B84df292149Bd5E"]
    }
```

Generated with discovered.json: 0xd3389b76e1701747e6d6d47573d1c9b808860970

# Diff at Thu, 08 Aug 2024 07:56:00 GMT:

- author: vincfurc (<10850139+vincfurc@users.noreply.github.com>)
- comparing to: main@188cb79f5563b495dd4046c3ce9c177c6e946b32 block: 20454476
- current block number: 20482509

## Description

Added uint256 type safety to totalEjectable calculation.

## Watched changes

```diff
    contract EjectionManager (0x130d8EA0052B45554e4C99079B84df292149Bd5E) {
    +++ description: Contract used for ejection of operators from the RegistryCoordinator.
      values.$implementation:
-        "0x1A27AC48D40F70213Ae6ec64f66852e0A1a0E6fa"
+        "0x33A517608999DF5CEfFa2b2EbA88B4461c26Af6f"
    }
```

## Source code changes

```diff
.../{.flat@20454476 => .flat}/EjectionManager/EjectionManager.sol       | 2 +-
 1 file changed, 1 insertion(+), 1 deletion(-)
```

Generated with discovered.json: 0x012e5a445d7bc77ae4e992083f1a0ef924afe1ff

# Diff at Sun, 04 Aug 2024 10:05:09 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@14945a4ebc63b3db3867f33067f31f159fedd9a9 block: 20382262
- current block number: 20454476

## Description

This eigenDAServiceManager implementation upgrade prepared for the ability of AVSs to reward stakers and operators. Apart from that, only formatting and abstraction changes:
- New `ServiceManagerBaseStorage` abstract contract (moved out from `ServiceManagerBase`)
- New `createAVSRewardsSubmission` function and `onlyRewardsInitiator` modifier to call it: This allows AVSs to reward stakers and operators (https://www.blog.eigenlayer.xyz/coming-soon-avs-rewards-and-eigen-programmatic-incentives/)
- `IServiceManagerUI` abstracted out of `IServiceManager`

## Watched changes

```diff
    contract eigenDAServiceManager (0x870679E138bCdf293b7Ff14dD44b70FC97e12fc0) {
    +++ description: None
      values.$implementation:
-        "0xCDFFF07d5b8AcdAd13607615118a2e65030f5be1"
+        "0x0D2C5FD4Bb956cDD48A23fC3Ef77a768a5cDbAf7"
      values.rewardsInitiator:
+        "0x178eeeA9E0928dA2153A1d7951FBe30CF8371b8A"
    }
```

```diff
+   Status: CREATED
    contract GnosisSafe (0x178eeeA9E0928dA2153A1d7951FBe30CF8371b8A)
    +++ description: None
```

## Source code changes

```diff
.../ethereum/.flat/GnosisSafe/GnosisSafe.sol       | 952 +++++++++++++++++++++
 .../.flat/GnosisSafe/GnosisSafeProxy.p.sol         |  34 +
 .../EigenDAServiceManager.sol                      | 362 ++++++--
 3 files changed, 1257 insertions(+), 91 deletions(-)
```

Generated with discovered.json: 0x63bf2f7363f3c48e38662a16ef1b0850ee65cfe0

# Diff at Tue, 30 Jul 2024 11:11:45 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@b2b6471ff62871f4956541f42ec025c356c08f7e block: 20382262
- current block number: 20382262

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20382262 (main branch discovery), not current.

```diff
    contract RegistryCoordinator (0x0BAAc79acD45A023E19345c352d8a7a83C4e5656) {
    +++ description: Operators register here with an AVS: The coordinator has three registries: 1) a `StakeRegistry` that keeps track of operators' stakes, 2) a `BLSApkRegistry` that keeps track of operators' BLS public keys and aggregate BLS public keys for each quorum, 3) an `IndexRegistry` that keeps track of an ordered list of operators for each quorum
      fieldMeta:
+        {"operatorSetParamsQuorum1":{"description":"0_maxOperatorCount, 1_kickBIPsOfOperatorStake, 2_kickBIPsOfTotalStake"},"operatorSetParamsQuorum2":{"description":"0_maxOperatorCount, 1_kickBIPsOfOperatorStake, 2_kickBIPsOfTotalStake"},"quorumCount":{"severity":"HIGH","description":"if quorum count changes, makes sure the new quorum parameters are tracked in the config"},"registeredOperators":{"description":"List of all registered operators ids"}}
    }
```

```diff
    contract EjectionManager (0x130d8EA0052B45554e4C99079B84df292149Bd5E) {
    +++ description: Contract used for ejection of operators from the RegistryCoordinator.
      fieldMeta:
+        {"ejectionRateLimitWindow":{"description":"Time delta to track ejection over. Cannot eject more than ejectableStakePercent of total stake in this time delta."},"ejectableStakePercent":{"description":"Max stake to be ejectable per time delta."}}
    }
```

```diff
    contract eigenDAServiceManager (0x870679E138bCdf293b7Ff14dD44b70FC97e12fc0) {
    +++ description: None
      fieldMeta:
+        {"BLOCK_STALE_MEASURE":{"severity":"MEDIUM","description":"This is the maximum amount of blocks in the past that the service will consider stake amounts to still be 'valid'. If a batch is signed by a certain amount of stake, it then needs to be submitted within the next BLOCK_STALE_MEASURE blocks, or the confirmBatch function will revert."},"quorumAdversaryThresholdPercentages":{"severity":"MEDIUM","description":"The maximum percentage of the stake which can be held by adversarial nodes before the availability of a blob is affected. First bytes is hex value for the first quorum, second byte is for the second quorum."},"quorumConfirmationThresholdPercentages":{"severity":"MEDIUM","description":"The minimum percentage of stake that must attest in order to consider the blob dispersal successful. First bytes is hex value for the first quorum, second byte is for the second quorum."}}
    }
```

Generated with discovered.json: 0xd2139e7ec6e7f6a8566780c760916d780e211b0d

# Diff at Thu, 25 Jul 2024 08:06:53 GMT:

- author: vincfurc (<10850139+vincfurc@users.noreply.github.com>)
- comparing to: main@22ea980261775f90fcc11819837e728806ddea2b block: 20239375
- current block number: 20382262

## Description

RegistryCoordinator upgrade: two new variables lastEjectionTimestamp, and ejectionCooldown. Once ejected, operators now need to wait for the cooldown period to end before they can reregister (currently 7 days).

## Watched changes

```diff
    contract RegistryCoordinator (0x0BAAc79acD45A023E19345c352d8a7a83C4e5656) {
    +++ description: Operators register here with an AVS: The coordinator has three registries: 1) a `StakeRegistry` that keeps track of operators' stakes, 2) a `BLSApkRegistry` that keeps track of operators' BLS public keys and aggregate BLS public keys for each quorum, 3) an `IndexRegistry` that keeps track of an ordered list of operators for each quorum
      values.$implementation:
-        "0xd3e09a0c2A9A6FDf5E92aE65D3CC090A4dF8EECF"
+        "0xdcabf0bE991d4609096CCe316df08d091356E03F"
      values.ejectionCooldown:
+        604800
    }
```

## Source code changes

```diff
.../RegistryCoordinator/RegistryCoordinator.sol    | 68 ++++++++++++++++++----
 1 file changed, 58 insertions(+), 10 deletions(-)
```

Generated with discovered.json: 0x1cb8d13729ba33d6cddd0c638aca07a479a0e8bf

# Diff at Wed, 22 May 2024 14:05:54 GMT:

- author: vincfurc (<10850139+vincfurc@users.noreply.github.com>)
- comparing to: main@c032520e456d0e6bee8b65e420ff7dba9f36bd48 block: 19840892
- current block number: 19925902

## Description

Registry coordinator:
    - Ejector address was changed from the EigenLayerOperationsMultisig to the EjectionManager

eigenDAServiceManager:
    - New EjectionManager contract
    - quorumNumbersRequired - second quorum (EIGEN token) now active

EjectionManager:
- used to eject validators from quorum
- permissioned, only ejectors and owner can eject operators
- operators to eject are external input provided by ejector
    Ejection spec parameters: 
        - Max 200 operators for each quorum. When the global operator cap (200) is reached for the quorum, the joining operator must have more than 1.1X the quorum weight of the current lowest-weighted operator in order to replace that operator.
        - RateLimitWindow and max EjectableStakePercent. There is a time delta (7 days) to track ejection over. SC checks that system cannot eject more than ejectableStakePercent (33.33%) of total stake in this time delta.


## Watched changes

```diff
    contract RegistryCoordinator (0x0BAAc79acD45A023E19345c352d8a7a83C4e5656) {
    +++ description: Operators register here with an AVS: The coordinator has three registries: 1) a `StakeRegistry` that keeps track of operators' stakes, 2) a `BLSApkRegistry` that keeps track of operators' BLS public keys and aggregate BLS public keys for each quorum, 3) an `IndexRegistry` that keeps track of an ordered list of operators for each quorum
      values.ejector:
-        "0xBE1685C81aA44FF9FB319dD389addd9374383e90"
+        "0x130d8EA0052B45554e4C99079B84df292149Bd5E"
    }
```

```diff
    contract eigenDAServiceManager (0x870679E138bCdf293b7Ff14dD44b70FC97e12fc0) {
    +++ description: None
      upgradeability.implementation:
-        "0x26089e9738b809d8308B0011B93b4225a112DB8C"
+        "0xCDFFF07d5b8AcdAd13607615118a2e65030f5be1"
      implementations.0:
-        "0x26089e9738b809d8308B0011B93b4225a112DB8C"
+        "0xCDFFF07d5b8AcdAd13607615118a2e65030f5be1"
      values.quorumNumbersRequired:
-        "0x00"
+        "0x0001"
    }
```

```diff
+   Status: CREATED
    contract EjectionManager (0x130d8EA0052B45554e4C99079B84df292149Bd5E)
    +++ description: Contract used for ejection of operators from the RegistryCoordinator.
```

## Source code changes

```diff
.../.flat/EjectionManager/EjectionManager.sol      | 583 +++++++++++++++++++
 .../TransparentUpgradeableProxy.p.sol              | 630 +++++++++++++++++++++
 .../EigenDAServiceManager.sol                      |   2 +-
 3 files changed, 1214 insertions(+), 1 deletion(-)
```

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 19840892 (main branch discovery), not current.

```diff
-   Status: DELETED
    contract PauserRegistry (0x0c431C66F4dE941d089625E5B423D00707977060)
    +++ description: None
```

```diff
-   Status: DELETED
    contract AVSDirectory (0x135DDa560e946695d6f155dACaFC6f1F25C1F5AF)
    +++ description: None
```

```diff
-   Status: DELETED
    contract DelegationManager (0x39053D51B77DC0d36036Fc1fCc8Cb819df8Ef37A)
    +++ description: None
```

```diff
-   Status: DELETED
    contract StrategyManager (0x858646372CC42E1A627fcE94aa7A7033e7CF075A)
    +++ description: None
```

```diff
-   Status: DELETED
    contract ProxyAdmin (0x8b9566AdA63B64d1E1dcF1418b43fd1433b72444)
    +++ description: None
```

```diff
-   Status: DELETED
    contract Slasher (0xD92145c07f8Ed1D392c1B88017934E301CC1c3Cd)
    +++ description: None
```

Generated with discovered.json: 0x4e479e1b2a0b36502a85f604c53bafd929ceeeb2

# Diff at Fri, 10 May 2024 16:41:41 GMT:

- author: vincfurc (<10850139+vincfurc@users.noreply.github.com>)
- comparing to: main@16e4da28258ea850de75580ddfa72ad7e4264813 block: 19819650
- current block number: 19840892

## Description

Only implementation change is the BLOCK_STALE_MEASURE constant variable, from 150 to 300. This is the maximum amount of blocks in the past that the service will consider stake amounts to still be 'valid'. If a batch is signed by a certain amount of stake, it then needs to be submitted within the next 300 blocks, or the confirmBatch function will revert.

quorumAdversaryThresholdPercentages and quorumConfirmationThresholdPercentages are currently unused in the smart contracts. They might be called by off-chain workers.

## Watched changes

```diff
    contract eigenDAServiceManager (0x870679E138bCdf293b7Ff14dD44b70FC97e12fc0) {
    +++ description: None
      upgradeability.implementation:
-        "0xF5fD25A90902c27068CF5eBe53Be8da693Ac899e"
+        "0x26089e9738b809d8308B0011B93b4225a112DB8C"
      implementations.0:
-        "0xF5fD25A90902c27068CF5eBe53Be8da693Ac899e"
+        "0x26089e9738b809d8308B0011B93b4225a112DB8C"
      values.BLOCK_STALE_MEASURE:
-        150
+        300
      values.quorumAdversaryThresholdPercentages:
-        "0x21"
+        "0x2121"
      values.quorumConfirmationThresholdPercentages:
-        "0x37"
+        "0x3737"
    }
```

## Source code changes

```diff
.../eigenDAServiceManager/EigenDAServiceManager.sol      | 16 +++++++++++++---
 1 file changed, 13 insertions(+), 3 deletions(-)
```

Generated with discovered.json: 0xae248316ccb53ed8a1d072efe292a56c46012859

# Diff at Tue, 07 May 2024 17:24:20 GMT:

- author: vincfurc (<10850139+vincfurc@users.noreply.github.com>)
- comparing to: main@202b915373bcf792690ef0483d0fd8eab1b8c303 block: 19775064
- current block number: 19819650

## Description

Contracts have been moved to a shared module.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 19775064 (main branch discovery), not current.

```diff
-   Status: DELETED
    contract EigenLayerBeaconOracle (0x343907185b71aDF0eBa9567538314396aa985442)
    +++ description: None
```

```diff
-   Status: DELETED
    contract EigenLayerExecutorMultisig (0x369e6F597e22EaB55fFb173C6d9cD234BD699111)
    +++ description: None
```

```diff
-   Status: DELETED
    contract UpgradeableBeacon (0x5a2a4F2F3C18f09179B6703e63D9eDD165909073)
    +++ description: None
```

```diff
-   Status: DELETED
    contract DelayedWithdrawalRouter (0x7Fe7E9CC0F274d2435AD5d56D5fa73E47F6A23D8)
    +++ description: None
```

```diff
-   Status: DELETED
    contract EigenPod (0x8bA40dA60f0827d027F029aCEE62609F0527a255)
    +++ description: None
```

```diff
-   Status: DELETED
    contract EigenPodManager (0x91E677b07F7AF907ec9a428aafA9fc14a0d3A338)
    +++ description: None
```

```diff
-   Status: DELETED
    contract Timelock (0xA6Db1A8C5a981d1536266D2a393c5F8dDb210EAF)
    +++ description: None
```

```diff
-   Status: DELETED
    contract EigenLayerOperationsMultisig (0xBE1685C81aA44FF9FB319dD389addd9374383e90)
    +++ description: None
```

```diff
-   Status: DELETED
    contract EigenLayerCommunityMultisig (0xFEA47018D632A77bA579846c840d5706705Dc598)
    +++ description: None
```

Generated with discovered.json: 0x7a1b394dc3b63660e37fba29bfa6432ce4768fed

# Diff at Wed, 01 May 2024 11:45:46 GMT:

- author: sekuba (<sekuba@users.noreply.github.com>)
- comparing to: main@acc36455c1f5f929e0ed99a6e280e868e5ad4c09 block: 19760326
- current block number: 19775064

## Description

- getRestakeableStrategies: From EL: Added bEIGEN-Strategy. This is an extended `BaseStrategy` smart contract that will be used for staking bEIGEN. (It also allows EIGEN but will unwrap it for you on deposit)

- Second quorum - Added tracking of new quorum parameters. The second quorum uses EIGEN strategy (0xaCB55C530Acdb2849e6d4f36992Cd8c9D50ED8F7) for stake calculation in the stake registry.

## Watched changes

```diff
    contract RegistryCoordinator (0x0BAAc79acD45A023E19345c352d8a7a83C4e5656) {
    +++ description: Operators register here with an AVS: The coordinator has three registries: 1) a `StakeRegistry` that keeps track of operators' stakes, 2) a `BLSApkRegistry` that keeps track of operators' BLS public keys and aggregate BLS public keys for each quorum, 3) an `IndexRegistry` that keeps track of an ordered list of operators for each quorum
+++ description: 0_maxOperatorCount, 1_kickBIPsOfOperatorStake, 2_kickBIPsOfTotalStake
      values.operatorSetParamsQuorum2.2:
-        0
+        50
+++ description: 0_maxOperatorCount, 1_kickBIPsOfOperatorStake, 2_kickBIPsOfTotalStake
      values.operatorSetParamsQuorum2.1:
-        0
+        11000
+++ description: 0_maxOperatorCount, 1_kickBIPsOfOperatorStake, 2_kickBIPsOfTotalStake
      values.operatorSetParamsQuorum2.0:
-        0
+        200
+++ description: if quorum count changes, makes sure the new quorum parameters are tracked in the config
+++ type: RISK_PARAMETER
+++ severity: HIGH
      values.quorumCount:
-        1
+        2
    }
```

```diff
    contract eigenDAServiceManager (0x870679E138bCdf293b7Ff14dD44b70FC97e12fc0) {
    +++ description: None
      values.getRestakeableStrategies.13:
+        "0xaCB55C530Acdb2849e6d4f36992Cd8c9D50ED8F7"
    }
```

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 19760326 (main branch discovery), not current.

```diff
    contract RegistryCoordinator (0x0BAAc79acD45A023E19345c352d8a7a83C4e5656) {
    +++ description: Operators register here with an AVS: The coordinator has three registries: 1) a `StakeRegistry` that keeps track of operators' stakes, 2) a `BLSApkRegistry` that keeps track of operators' BLS public keys and aggregate BLS public keys for each quorum, 3) an `IndexRegistry` that keeps track of an ordered list of operators for each quorum
      values.operatorSetParams:
-        [200,11000,50]
+++ description: 0_maxOperatorCount, 1_kickBIPsOfOperatorStake, 2_kickBIPsOfTotalStake
      values.operatorSetParamsQuorum1:
+        [200,11000,50]
+++ description: 0_maxOperatorCount, 1_kickBIPsOfOperatorStake, 2_kickBIPsOfTotalStake
      values.operatorSetParamsQuorum2:
+        [0,0,0]
    }
```

Generated with discovered.json: 0x6c1f315d53c94420733788742a072d1746dfbbcb

# Diff at Mon, 29 Apr 2024 10:19:33 GMT:

- author: vincfurc (<10850139+vincfurc@users.noreply.github.com>)
- comparing to: main@bb2ea25728d2348708c9bfebf5b1c50078db1c65 block: 19632640
- current block number: 19760326

## Description

EigenDA exposes the address of the RegistryCoordinator while for istance EOracle does not (it's immutable constructor param). Check RC is discovered when adding new AVSes.

## Watched changes

```diff
    contract StrategyManager (0x858646372CC42E1A627fcE94aa7A7033e7CF075A) {
    +++ description: None
      values.paused:
-        1
+        0
    }
```

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 19632640 (main branch discovery), not current.

```diff
    contract RegistryCoordinator (0x0BAAc79acD45A023E19345c352d8a7a83C4e5656) {
    +++ description: None
      values.operatorSetParams:
+        [200,11000,50]
    }
```

```diff
    contract GnosisSafe (0x369e6F597e22EaB55fFb173C6d9cD234BD699111) {
    +++ description: None
      name:
-        "GnosisSafe"
+        "EigenLayerExecutorMultisig"
    }
```

```diff
    contract GnosisSafe (0xBE1685C81aA44FF9FB319dD389addd9374383e90) {
    +++ description: None
      name:
-        "GnosisSafe"
+        "EigenLayerOperationsMultisig"
    }
```

```diff
    contract GnosisSafe (0xFEA47018D632A77bA579846c840d5706705Dc598) {
    +++ description: None
      name:
-        "GnosisSafe"
+        "EigenLayerCommunityMultisig"
    }
```

Generated with discovered.json: 0xf05c5798cc9c79512ff31687f00faf8f51d5bd1a

# Diff at Thu, 11 Apr 2024 13:21:37 GMT:

- author: vincfurc (<10850139+vincfurc@users.noreply.github.com>)
- current block number: 19632640

## Description

Provide description of changes. This section will be preserved.

## Initial discovery

```diff
+   Status: CREATED
    contract StakeRegistry (0x006124Ae7976137266feeBFb3F4D2BE4C073139D)
    +++ description: None
```

```diff
+   Status: CREATED
    contract BLSApkRegistry (0x00A5Fd09F6CeE6AE9C8b0E5e33287F7c82880505)
    +++ description: None
```

```diff
+   Status: CREATED
    contract RegistryCoordinator (0x0BAAc79acD45A023E19345c352d8a7a83C4e5656)
    +++ description: None
```

```diff
+   Status: CREATED
    contract PauserRegistry (0x0c431C66F4dE941d089625E5B423D00707977060)
    +++ description: None
```

```diff
+   Status: CREATED
    contract AVSDirectory (0x135DDa560e946695d6f155dACaFC6f1F25C1F5AF)
    +++ description: None
```

```diff
+   Status: CREATED
    contract EigenLayerBeaconOracle (0x343907185b71aDF0eBa9567538314396aa985442)
    +++ description: None
```

```diff
+   Status: CREATED
    contract GnosisSafe (0x369e6F597e22EaB55fFb173C6d9cD234BD699111)
    +++ description: None
```

```diff
+   Status: CREATED
    contract DelegationManager (0x39053D51B77DC0d36036Fc1fCc8Cb819df8Ef37A)
    +++ description: None
```

```diff
+   Status: CREATED
    contract UpgradeableBeacon (0x5a2a4F2F3C18f09179B6703e63D9eDD165909073)
    +++ description: None
```

```diff
+   Status: CREATED
    contract DelayedWithdrawalRouter (0x7Fe7E9CC0F274d2435AD5d56D5fa73E47F6A23D8)
    +++ description: None
```

```diff
+   Status: CREATED
    contract eigenDAProxyAdmin (0x8247EF5705d3345516286B72bFE6D690197C2E99)
    +++ description: None
```

```diff
+   Status: CREATED
    contract StrategyManager (0x858646372CC42E1A627fcE94aa7A7033e7CF075A)
    +++ description: None
```

```diff
+   Status: CREATED
    contract eigenDAServiceManager (0x870679E138bCdf293b7Ff14dD44b70FC97e12fc0)
    +++ description: None
```

```diff
+   Status: CREATED
    contract ProxyAdmin (0x8b9566AdA63B64d1E1dcF1418b43fd1433b72444)
    +++ description: None
```

```diff
+   Status: CREATED
    contract EigenPod (0x8bA40dA60f0827d027F029aCEE62609F0527a255)
    +++ description: None
```

```diff
+   Status: CREATED
    contract EigenPodManager (0x91E677b07F7AF907ec9a428aafA9fc14a0d3A338)
    +++ description: None
```

```diff
+   Status: CREATED
    contract Timelock (0xA6Db1A8C5a981d1536266D2a393c5F8dDb210EAF)
    +++ description: None
```

```diff
+   Status: CREATED
    contract IndexRegistry (0xBd35a7a1CDeF403a6a99e4E8BA0974D198455030)
    +++ description: None
```

```diff
+   Status: CREATED
    contract GnosisSafe (0xBE1685C81aA44FF9FB319dD389addd9374383e90)
    +++ description: None
```

```diff
+   Status: CREATED
    contract Slasher (0xD92145c07f8Ed1D392c1B88017934E301CC1c3Cd)
    +++ description: None
```

```diff
+   Status: CREATED
    contract GnosisSafe (0xFEA47018D632A77bA579846c840d5706705Dc598)
    +++ description: None
```