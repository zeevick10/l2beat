Generated with discovered.json: 0x419f53241daa23f41234c15e22e35d0eb8d4f76a

# Diff at Mon, 14 Jul 2025 12:46:28 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@9f4300dad2f3d080cd56fa311d4a848556c74e72 block: 22882446
- current block number: 22882446

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 22882446 (main branch discovery), not current.

```diff
    contract Factory (0x06D538690AF257Da524f25D0CD52fD85b1c2173E) {
    +++ description: None
      address:
-        "0x06D538690AF257Da524f25D0CD52fD85b1c2173E"
+        "eth:0x06D538690AF257Da524f25D0CD52fD85b1c2173E"
      values.allPools.0:
-        "0xdf0770dF86a8034b3EFEf0A1Bb3c889B8332FF56"
+        "eth:0xdf0770dF86a8034b3EFEf0A1Bb3c889B8332FF56"
      values.allPools.1:
-        "0x38EA452219524Bb87e18dE1C24D3bB59510BD783"
+        "eth:0x38EA452219524Bb87e18dE1C24D3bB59510BD783"
      values.allPools.2:
-        "0x692953e758c3669290cb1677180c64183cEe374e"
+        "eth:0x692953e758c3669290cb1677180c64183cEe374e"
      values.allPools.3:
-        "0x101816545F6bd2b1076434B54383a1E633390A2E"
+        "eth:0x101816545F6bd2b1076434B54383a1E633390A2E"
      values.allPools.4:
-        "0x0Faf1d2d3CED330824de3B8200fc8dc6E397850d"
+        "eth:0x0Faf1d2d3CED330824de3B8200fc8dc6E397850d"
      values.allPools.5:
-        "0xfA0F307783AC21C39E939ACFF795e27b650F6e68"
+        "eth:0xfA0F307783AC21C39E939ACFF795e27b650F6e68"
      values.allPools.6:
-        "0x590d4f8A68583639f215f675F3a259Ed84790580"
+        "eth:0x590d4f8A68583639f215f675F3a259Ed84790580"
      values.allPools.7:
-        "0xE8F55368C82D38bbbbDb5533e7F56AfC2E978CC2"
+        "eth:0xE8F55368C82D38bbbbDb5533e7F56AfC2E978CC2"
      values.allPools.8:
-        "0x9cef9a0b1bE0D289ac9f4a98ff317c33EAA84eb8"
+        "eth:0x9cef9a0b1bE0D289ac9f4a98ff317c33EAA84eb8"
      values.allPools.9:
-        "0xd8772edBF88bBa2667ed011542343b0eDDaCDa47"
+        "eth:0xd8772edBF88bBa2667ed011542343b0eDDaCDa47"
      values.allPools.10:
-        "0x430Ebff5E3E80A6C58E7e6ADA1d90F5c28AA116d"
+        "eth:0x430Ebff5E3E80A6C58E7e6ADA1d90F5c28AA116d"
      values.allPools.11:
-        "0x1CE66c52C36757Daf6551eDc04800A0Ec9983A09"
+        "eth:0x1CE66c52C36757Daf6551eDc04800A0Ec9983A09"
      values.allPools.12:
-        "0xA572d137666DCbAdFA47C3fC41F15e90134C618c"
+        "eth:0xA572d137666DCbAdFA47C3fC41F15e90134C618c"
      values.defaultFeeLibrary:
-        "0x8C3085D9a554884124C998CDB7f6d7219E9C1e6F"
+        "eth:0x8C3085D9a554884124C998CDB7f6d7219E9C1e6F"
      values.owner:
-        "0x65bb797c2B9830d891D87288F029ed8dACc19705"
+        "eth:0x65bb797c2B9830d891D87288F029ed8dACc19705"
      values.router:
-        "0x8731d54E9D02c286767d56ac03e8037C07e01e98"
+        "eth:0x8731d54E9D02c286767d56ac03e8037C07e01e98"
      implementationNames.0x06D538690AF257Da524f25D0CD52fD85b1c2173E:
-        "Factory"
      implementationNames.eth:0x06D538690AF257Da524f25D0CD52fD85b1c2173E:
+        "Factory"
    }
```

```diff
    EOA  (0x0cb72C1F6a36c225A7E2B21712E8853A4A1acc47) {
    +++ description: None
      address:
-        "0x0cb72C1F6a36c225A7E2B21712E8853A4A1acc47"
+        "eth:0x0cb72C1F6a36c225A7E2B21712E8853A4A1acc47"
    }
```

```diff
    contract DAI Pool (0x0Faf1d2d3CED330824de3B8200fc8dc6E397850d) {
    +++ description: None
      address:
-        "0x0Faf1d2d3CED330824de3B8200fc8dc6E397850d"
+        "eth:0x0Faf1d2d3CED330824de3B8200fc8dc6E397850d"
      values.feeLibrary:
-        "0x8C3085D9a554884124C998CDB7f6d7219E9C1e6F"
+        "eth:0x8C3085D9a554884124C998CDB7f6d7219E9C1e6F"
      values.router:
-        "0x8731d54E9D02c286767d56ac03e8037C07e01e98"
+        "eth:0x8731d54E9D02c286767d56ac03e8037C07e01e98"
      values.token:
-        "0x6B175474E89094C44Da98b954EedeAC495271d0F"
+        "eth:0x6B175474E89094C44Da98b954EedeAC495271d0F"
      implementationNames.0x0Faf1d2d3CED330824de3B8200fc8dc6E397850d:
-        "Pool"
      implementationNames.eth:0x0Faf1d2d3CED330824de3B8200fc8dc6E397850d:
+        "Pool"
    }
```

```diff
    contract SG-ETH Pool (0x101816545F6bd2b1076434B54383a1E633390A2E) {
    +++ description: None
      address:
-        "0x101816545F6bd2b1076434B54383a1E633390A2E"
+        "eth:0x101816545F6bd2b1076434B54383a1E633390A2E"
      values.feeLibrary:
-        "0x8C3085D9a554884124C998CDB7f6d7219E9C1e6F"
+        "eth:0x8C3085D9a554884124C998CDB7f6d7219E9C1e6F"
      values.router:
-        "0x8731d54E9D02c286767d56ac03e8037C07e01e98"
+        "eth:0x8731d54E9D02c286767d56ac03e8037C07e01e98"
      values.token:
-        "0x72E2F4830b9E45d52F80aC08CB2bEC0FeF72eD9c"
+        "eth:0x72E2F4830b9E45d52F80aC08CB2bEC0FeF72eD9c"
      implementationNames.0x101816545F6bd2b1076434B54383a1E633390A2E:
-        "Pool"
      implementationNames.eth:0x101816545F6bd2b1076434B54383a1E633390A2E:
+        "Pool"
    }
```

```diff
    contract WOO Pool (0x1CE66c52C36757Daf6551eDc04800A0Ec9983A09) {
    +++ description: None
      address:
-        "0x1CE66c52C36757Daf6551eDc04800A0Ec9983A09"
+        "eth:0x1CE66c52C36757Daf6551eDc04800A0Ec9983A09"
      values.feeLibrary:
-        "0x8C3085D9a554884124C998CDB7f6d7219E9C1e6F"
+        "eth:0x8C3085D9a554884124C998CDB7f6d7219E9C1e6F"
      values.router:
-        "0x8731d54E9D02c286767d56ac03e8037C07e01e98"
+        "eth:0x8731d54E9D02c286767d56ac03e8037C07e01e98"
      values.token:
-        "0x4691937a7508860F876c9c0a2a617E7d9E945D4B"
+        "eth:0x4691937a7508860F876c9c0a2a617E7d9E945D4B"
      implementationNames.0x1CE66c52C36757Daf6551eDc04800A0Ec9983A09:
-        "Pool"
      implementationNames.eth:0x1CE66c52C36757Daf6551eDc04800A0Ec9983A09:
+        "Pool"
    }
```

```diff
    EOA  (0x1D7C6783328C145393e84fb47a7f7C548f5Ee28d) {
    +++ description: None
      address:
-        "0x1D7C6783328C145393e84fb47a7f7C548f5Ee28d"
+        "eth:0x1D7C6783328C145393e84fb47a7f7C548f5Ee28d"
    }
```

```diff
    contract Bridge (0x296F55F8Fb28E498B858d0BcDA06D955B2Cb3f97) {
    +++ description: None
      address:
-        "0x296F55F8Fb28E498B858d0BcDA06D955B2Cb3f97"
+        "eth:0x296F55F8Fb28E498B858d0BcDA06D955B2Cb3f97"
      values.layerZeroEndpoint:
-        "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
+        "eth:0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
      values.owner:
-        "0x65bb797c2B9830d891D87288F029ed8dACc19705"
+        "eth:0x65bb797c2B9830d891D87288F029ed8dACc19705"
      values.router:
-        "0x8731d54E9D02c286767d56ac03e8037C07e01e98"
+        "eth:0x8731d54E9D02c286767d56ac03e8037C07e01e98"
      implementationNames.0x296F55F8Fb28E498B858d0BcDA06D955B2Cb3f97:
-        "Bridge"
      implementationNames.eth:0x296F55F8Fb28E498B858d0BcDA06D955B2Cb3f97:
+        "Bridge"
    }
```

```diff
    EOA  (0x2E1078e128e8AA6A70eC8d1B17A79Fc4B457d437) {
    +++ description: None
      address:
-        "0x2E1078e128e8AA6A70eC8d1B17A79Fc4B457d437"
+        "eth:0x2E1078e128e8AA6A70eC8d1B17A79Fc4B457d437"
    }
```

```diff
    contract TreasuryV2 (0x3773E1E9Deb273fCdf9f80bc88bB387B1e6Ce34d) {
    +++ description: None
      address:
-        "0x3773E1E9Deb273fCdf9f80bc88bB387B1e6Ce34d"
+        "eth:0x3773E1E9Deb273fCdf9f80bc88bB387B1e6Ce34d"
      values.owner:
-        "0xBe010A7e3686FdF65E93344ab664D065A0B02478"
+        "eth:0xBe010A7e3686FdF65E93344ab664D065A0B02478"
      values.uln:
-        "0x4D73AdB72bC3DD368966edD0f0b2148401A178E2"
+        "eth:0x4D73AdB72bC3DD368966edD0f0b2148401A178E2"
      implementationNames.0x3773E1E9Deb273fCdf9f80bc88bB387B1e6Ce34d:
-        "TreasuryV2"
      implementationNames.eth:0x3773E1E9Deb273fCdf9f80bc88bB387B1e6Ce34d:
+        "TreasuryV2"
    }
```

```diff
    contract USDT Pool (0x38EA452219524Bb87e18dE1C24D3bB59510BD783) {
    +++ description: None
      address:
-        "0x38EA452219524Bb87e18dE1C24D3bB59510BD783"
+        "eth:0x38EA452219524Bb87e18dE1C24D3bB59510BD783"
      values.feeLibrary:
-        "0x8C3085D9a554884124C998CDB7f6d7219E9C1e6F"
+        "eth:0x8C3085D9a554884124C998CDB7f6d7219E9C1e6F"
      values.router:
-        "0x8731d54E9D02c286767d56ac03e8037C07e01e98"
+        "eth:0x8731d54E9D02c286767d56ac03e8037C07e01e98"
      values.token:
-        "0xdAC17F958D2ee523a2206206994597C13D831ec7"
+        "eth:0xdAC17F958D2ee523a2206206994597C13D831ec7"
      implementationNames.0x38EA452219524Bb87e18dE1C24D3bB59510BD783:
-        "Pool"
      implementationNames.eth:0x38EA452219524Bb87e18dE1C24D3bB59510BD783:
+        "Pool"
    }
```

```diff
    EOA  (0x39f86ECef62c5bcE23428d6b7c7050D9Ecb0e346) {
    +++ description: None
      address:
-        "0x39f86ECef62c5bcE23428d6b7c7050D9Ecb0e346"
+        "eth:0x39f86ECef62c5bcE23428d6b7c7050D9Ecb0e346"
    }
```

```diff
    contract USDT Pool2 (0x430Ebff5E3E80A6C58E7e6ADA1d90F5c28AA116d) {
    +++ description: None
      address:
-        "0x430Ebff5E3E80A6C58E7e6ADA1d90F5c28AA116d"
+        "eth:0x430Ebff5E3E80A6C58E7e6ADA1d90F5c28AA116d"
      values.feeLibrary:
-        "0x8C3085D9a554884124C998CDB7f6d7219E9C1e6F"
+        "eth:0x8C3085D9a554884124C998CDB7f6d7219E9C1e6F"
      values.router:
-        "0x8731d54E9D02c286767d56ac03e8037C07e01e98"
+        "eth:0x8731d54E9D02c286767d56ac03e8037C07e01e98"
      values.token:
-        "0xdAC17F958D2ee523a2206206994597C13D831ec7"
+        "eth:0xdAC17F958D2ee523a2206206994597C13D831ec7"
      implementationNames.0x430Ebff5E3E80A6C58E7e6ADA1d90F5c28AA116d:
-        "Pool"
      implementationNames.eth:0x430Ebff5E3E80A6C58E7e6ADA1d90F5c28AA116d:
+        "Pool"
    }
```

```diff
    contract UltraLightNodeV2 (0x4D73AdB72bC3DD368966edD0f0b2148401A178E2) {
    +++ description: None
      address:
-        "0x4D73AdB72bC3DD368966edD0f0b2148401A178E2"
+        "eth:0x4D73AdB72bC3DD368966edD0f0b2148401A178E2"
      values.endpoint:
-        "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
+        "eth:0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
      values.layerZeroToken:
-        "0x0000000000000000000000000000000000000000"
+        "eth:0x0000000000000000000000000000000000000000"
      values.nonceContract:
-        "0x5B905fE05F81F3a8ad8B28C6E17779CFAbf76068"
+        "eth:0x5B905fE05F81F3a8ad8B28C6E17779CFAbf76068"
      values.owner:
-        "0xBe010A7e3686FdF65E93344ab664D065A0B02478"
+        "eth:0xBe010A7e3686FdF65E93344ab664D065A0B02478"
      values.stargateArbConfig.relayer:
-        "0x902F09715B6303d4173037652FA7377e5b98089E"
+        "eth:0x902F09715B6303d4173037652FA7377e5b98089E"
      values.stargateArbConfig.oracle:
-        "0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc"
+        "eth:0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc"
      values.stargateScrollConfig.relayer:
-        "0x902F09715B6303d4173037652FA7377e5b98089E"
+        "eth:0x902F09715B6303d4173037652FA7377e5b98089E"
      values.stargateScrollConfig.oracle:
-        "0x5a54fe5234E811466D5366846283323c954310B2"
+        "eth:0x5a54fe5234E811466D5366846283323c954310B2"
      values.treasuryContract:
-        "0x3773E1E9Deb273fCdf9f80bc88bB387B1e6Ce34d"
+        "eth:0x3773E1E9Deb273fCdf9f80bc88bB387B1e6Ce34d"
      implementationNames.0x4D73AdB72bC3DD368966edD0f0b2148401A178E2:
-        "UltraLightNodeV2"
      implementationNames.eth:0x4D73AdB72bC3DD368966edD0f0b2148401A178E2:
+        "UltraLightNodeV2"
    }
```

```diff
    EOA  (0x565cFd7224bbc2a81a6e2a1464892ecB27efB070) {
    +++ description: None
      address:
-        "0x565cFd7224bbc2a81a6e2a1464892ecB27efB070"
+        "eth:0x565cFd7224bbc2a81a6e2a1464892ecB27efB070"
    }
```

```diff
    contract sUSD Pool (0x590d4f8A68583639f215f675F3a259Ed84790580) {
    +++ description: None
      address:
-        "0x590d4f8A68583639f215f675F3a259Ed84790580"
+        "eth:0x590d4f8A68583639f215f675F3a259Ed84790580"
      values.feeLibrary:
-        "0x8C3085D9a554884124C998CDB7f6d7219E9C1e6F"
+        "eth:0x8C3085D9a554884124C998CDB7f6d7219E9C1e6F"
      values.router:
-        "0x8731d54E9D02c286767d56ac03e8037C07e01e98"
+        "eth:0x8731d54E9D02c286767d56ac03e8037C07e01e98"
      values.token:
-        "0x57Ab1ec28D129707052df4dF418D58a2D46d5f51"
+        "eth:0x57Ab1ec28D129707052df4dF418D58a2D46d5f51"
      implementationNames.0x590d4f8A68583639f215f675F3a259Ed84790580:
-        "Pool"
      implementationNames.eth:0x590d4f8A68583639f215f675F3a259Ed84790580:
+        "Pool"
    }
```

```diff
    contract TSS Oracle (0x5a54fe5234E811466D5366846283323c954310B2) {
    +++ description: None
      address:
-        "0x5a54fe5234E811466D5366846283323c954310B2"
+        "eth:0x5a54fe5234E811466D5366846283323c954310B2"
      values.$admin:
-        "0x967bAf657ec4d4b1cb00b06f7Cc6E8BA604e3AC8"
+        "eth:0x967bAf657ec4d4b1cb00b06f7Cc6E8BA604e3AC8"
      values.$implementation:
-        "0x3eEA8d627ab6983fFFc7027ee623Fd7699343fc1"
+        "eth:0x3eEA8d627ab6983fFFc7027ee623Fd7699343fc1"
      values.$pastUpgrades.0.2.0:
-        "0xccEf13cFEB6873c167f62A365548A57C9ed29DC5"
+        "eth:0xccEf13cFEB6873c167f62A365548A57C9ed29DC5"
      values.$pastUpgrades.1.2.0:
-        "0x3eEA8d627ab6983fFFc7027ee623Fd7699343fc1"
+        "eth:0x3eEA8d627ab6983fFFc7027ee623Fd7699343fc1"
      implementationNames.0x5a54fe5234E811466D5366846283323c954310B2:
-        "OptimizedTransparentUpgradeableProxy"
      implementationNames.0x3eEA8d627ab6983fFFc7027ee623Fd7699343fc1:
-        ""
      implementationNames.eth:0x5a54fe5234E811466D5366846283323c954310B2:
+        "OptimizedTransparentUpgradeableProxy"
      implementationNames.eth:0x3eEA8d627ab6983fFFc7027ee623Fd7699343fc1:
+        ""
    }
```

```diff
    contract NonceContract (0x5B905fE05F81F3a8ad8B28C6E17779CFAbf76068) {
    +++ description: None
      address:
-        "0x5B905fE05F81F3a8ad8B28C6E17779CFAbf76068"
+        "eth:0x5B905fE05F81F3a8ad8B28C6E17779CFAbf76068"
      values.endpoint:
-        "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
+        "eth:0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
      implementationNames.0x5B905fE05F81F3a8ad8B28C6E17779CFAbf76068:
-        "NonceContract"
      implementationNames.eth:0x5B905fE05F81F3a8ad8B28C6E17779CFAbf76068:
+        "NonceContract"
    }
```

```diff
    EOA  (0x5bC6AA6ad117A8B50ABf9E1658971f5DA1968c5c) {
    +++ description: None
      address:
-        "0x5bC6AA6ad117A8B50ABf9E1658971f5DA1968c5c"
+        "eth:0x5bC6AA6ad117A8B50ABf9E1658971f5DA1968c5c"
    }
```

```diff
    contract StarGate Multisig (0x65bb797c2B9830d891D87288F029ed8dACc19705) {
    +++ description: None
      address:
-        "0x65bb797c2B9830d891D87288F029ed8dACc19705"
+        "eth:0x65bb797c2B9830d891D87288F029ed8dACc19705"
      values.$implementation:
-        "0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552"
+        "eth:0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552"
      values.$members.0:
-        "0x2E1078e128e8AA6A70eC8d1B17A79Fc4B457d437"
+        "eth:0x2E1078e128e8AA6A70eC8d1B17A79Fc4B457d437"
      values.$members.1:
-        "0x565cFd7224bbc2a81a6e2a1464892ecB27efB070"
+        "eth:0x565cFd7224bbc2a81a6e2a1464892ecB27efB070"
      values.$members.2:
-        "0x1D7C6783328C145393e84fb47a7f7C548f5Ee28d"
+        "eth:0x1D7C6783328C145393e84fb47a7f7C548f5Ee28d"
      values.$members.3:
-        "0x79e2b9C1F6C9ed1375C93AaF139e6C4537f48523"
+        "eth:0x79e2b9C1F6C9ed1375C93AaF139e6C4537f48523"
      values.$members.4:
-        "0x7C8D1Db01130acEEc5fF892c99a18c4b4BAdC326"
+        "eth:0x7C8D1Db01130acEEc5fF892c99a18c4b4BAdC326"
      values.$members.5:
-        "0xf02CC4dc84aC59Bd6089BAddcEB9d4Ef3AEFb0f0"
+        "eth:0xf02CC4dc84aC59Bd6089BAddcEB9d4Ef3AEFb0f0"
      implementationNames.0x65bb797c2B9830d891D87288F029ed8dACc19705:
-        "GnosisSafeProxy"
      implementationNames.0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552:
-        "GnosisSafe"
      implementationNames.eth:0x65bb797c2B9830d891D87288F029ed8dACc19705:
+        "GnosisSafeProxy"
      implementationNames.eth:0xd9Db270c1B5E3Bd161E8c8503c55cEABeE709552:
+        "GnosisSafe"
    }
```

```diff
    contract Endpoint (0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675) {
    +++ description: None
      address:
-        "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
+        "eth:0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
      values.defaultReceiveLibraryAddress:
-        "0x4D73AdB72bC3DD368966edD0f0b2148401A178E2"
+        "eth:0x4D73AdB72bC3DD368966edD0f0b2148401A178E2"
      values.defaultSendLibrary:
-        "0x4D73AdB72bC3DD368966edD0f0b2148401A178E2"
+        "eth:0x4D73AdB72bC3DD368966edD0f0b2148401A178E2"
      values.owner:
-        "0xBe010A7e3686FdF65E93344ab664D065A0B02478"
+        "eth:0xBe010A7e3686FdF65E93344ab664D065A0B02478"
      implementationNames.0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675:
-        "Endpoint"
      implementationNames.eth:0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675:
+        "Endpoint"
    }
```

```diff
    contract USDD Pool (0x692953e758c3669290cb1677180c64183cEe374e) {
    +++ description: None
      address:
-        "0x692953e758c3669290cb1677180c64183cEe374e"
+        "eth:0x692953e758c3669290cb1677180c64183cEe374e"
      values.feeLibrary:
-        "0x8C3085D9a554884124C998CDB7f6d7219E9C1e6F"
+        "eth:0x8C3085D9a554884124C998CDB7f6d7219E9C1e6F"
      values.router:
-        "0x8731d54E9D02c286767d56ac03e8037C07e01e98"
+        "eth:0x8731d54E9D02c286767d56ac03e8037C07e01e98"
      values.token:
-        "0x0C10bF8FcB7Bf5412187A595ab97a3609160b5c6"
+        "eth:0x0C10bF8FcB7Bf5412187A595ab97a3609160b5c6"
      implementationNames.0x692953e758c3669290cb1677180c64183cEe374e:
-        "Pool"
      implementationNames.eth:0x692953e758c3669290cb1677180c64183cEe374e:
+        "Pool"
    }
```

```diff
    EOA  (0x73E9c017Ad37e2113e709D8070Cc9E1b28180e1e) {
    +++ description: None
      address:
-        "0x73E9c017Ad37e2113e709D8070Cc9E1b28180e1e"
+        "eth:0x73E9c017Ad37e2113e709D8070Cc9E1b28180e1e"
    }
```

```diff
    EOA  (0x76F6d257CEB5736CbcAAb5c48E4225a45F74d6e5) {
    +++ description: None
      address:
-        "0x76F6d257CEB5736CbcAAb5c48E4225a45F74d6e5"
+        "eth:0x76F6d257CEB5736CbcAAb5c48E4225a45F74d6e5"
    }
```

```diff
    EOA  (0x771dcAcB96024d1e55Fd21Fe8a8187AA7EC9e77e) {
    +++ description: None
      address:
-        "0x771dcAcB96024d1e55Fd21Fe8a8187AA7EC9e77e"
+        "eth:0x771dcAcB96024d1e55Fd21Fe8a8187AA7EC9e77e"
    }
```

```diff
    EOA  (0x79e2b9C1F6C9ed1375C93AaF139e6C4537f48523) {
    +++ description: None
      address:
-        "0x79e2b9C1F6C9ed1375C93AaF139e6C4537f48523"
+        "eth:0x79e2b9C1F6C9ed1375C93AaF139e6C4537f48523"
    }
```

```diff
    EOA  (0x7B80f2924E3Ad59a55f4bcC38AB63480599Be6c8) {
    +++ description: None
      address:
-        "0x7B80f2924E3Ad59a55f4bcC38AB63480599Be6c8"
+        "eth:0x7B80f2924E3Ad59a55f4bcC38AB63480599Be6c8"
    }
```

```diff
    EOA  (0x7C8D1Db01130acEEc5fF892c99a18c4b4BAdC326) {
    +++ description: None
      address:
-        "0x7C8D1Db01130acEEc5fF892c99a18c4b4BAdC326"
+        "eth:0x7C8D1Db01130acEEc5fF892c99a18c4b4BAdC326"
    }
```

```diff
    contract Router (0x8731d54E9D02c286767d56ac03e8037C07e01e98) {
    +++ description: None
      address:
-        "0x8731d54E9D02c286767d56ac03e8037C07e01e98"
+        "eth:0x8731d54E9D02c286767d56ac03e8037C07e01e98"
      values.bridge:
-        "0x296F55F8Fb28E498B858d0BcDA06D955B2Cb3f97"
+        "eth:0x296F55F8Fb28E498B858d0BcDA06D955B2Cb3f97"
      values.factory:
-        "0x06D538690AF257Da524f25D0CD52fD85b1c2173E"
+        "eth:0x06D538690AF257Da524f25D0CD52fD85b1c2173E"
      values.mintFeeOwner:
-        "0x0000000000000000000000000000000000000000"
+        "eth:0x0000000000000000000000000000000000000000"
      values.owner:
-        "0x65bb797c2B9830d891D87288F029ed8dACc19705"
+        "eth:0x65bb797c2B9830d891D87288F029ed8dACc19705"
      values.protocolFeeOwner:
-        "0x65bb797c2B9830d891D87288F029ed8dACc19705"
+        "eth:0x65bb797c2B9830d891D87288F029ed8dACc19705"
      implementationNames.0x8731d54E9D02c286767d56ac03e8037C07e01e98:
-        "Router"
      implementationNames.eth:0x8731d54E9D02c286767d56ac03e8037C07e01e98:
+        "Router"
    }
```

```diff
    contract StarGateFeeLibrary7 (0x8C3085D9a554884124C998CDB7f6d7219E9C1e6F) {
    +++ description: None
      address:
-        "0x8C3085D9a554884124C998CDB7f6d7219E9C1e6F"
+        "eth:0x8C3085D9a554884124C998CDB7f6d7219E9C1e6F"
      values.factory:
-        "0x06D538690AF257Da524f25D0CD52fD85b1c2173E"
+        "eth:0x06D538690AF257Da524f25D0CD52fD85b1c2173E"
      values.lzEndpoint:
-        "0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
+        "eth:0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675"
      values.owner:
-        "0x65bb797c2B9830d891D87288F029ed8dACc19705"
+        "eth:0x65bb797c2B9830d891D87288F029ed8dACc19705"
      values.precrime:
-        "0x0000000000000000000000000000000000000000"
+        "eth:0x0000000000000000000000000000000000000000"
      implementationNames.0x8C3085D9a554884124C998CDB7f6d7219E9C1e6F:
-        "StargateFeeLibraryV07"
      implementationNames.eth:0x8C3085D9a554884124C998CDB7f6d7219E9C1e6F:
+        "StargateFeeLibraryV07"
    }
```

```diff
    contract LayerZero Relayer (0x902F09715B6303d4173037652FA7377e5b98089E) {
    +++ description: None
      address:
-        "0x902F09715B6303d4173037652FA7377e5b98089E"
+        "eth:0x902F09715B6303d4173037652FA7377e5b98089E"
      values.$admin:
-        "0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"
+        "eth:0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"
      values.$implementation:
-        "0xB830a5AfCBEBb936c30C607a18BbbA9f5B0a592f"
+        "eth:0xB830a5AfCBEBb936c30C607a18BbbA9f5B0a592f"
      values.$pastUpgrades.0.2.0:
-        "0x4E341b9Cf90514A5b7dfec2c9A1f20AA4514C260"
+        "eth:0x4E341b9Cf90514A5b7dfec2c9A1f20AA4514C260"
      values.$pastUpgrades.1.2.0:
-        "0xDD55F55CB9a39EF1eed4Ee1a84EE1b7411bE306a"
+        "eth:0xDD55F55CB9a39EF1eed4Ee1a84EE1b7411bE306a"
      values.$pastUpgrades.2.2.0:
-        "0x9512a85438606dEdE54297634dEd7C7C0c231874"
+        "eth:0x9512a85438606dEdE54297634dEd7C7C0c231874"
      values.$pastUpgrades.3.2.0:
-        "0xaF34771b16960ea77484A866a34CCDAFDc913D9C"
+        "eth:0xaF34771b16960ea77484A866a34CCDAFDc913D9C"
      values.$pastUpgrades.4.2.0:
-        "0x8775e9D584008f84daFe7abe75a62f6C91491027"
+        "eth:0x8775e9D584008f84daFe7abe75a62f6C91491027"
      values.$pastUpgrades.5.2.0:
-        "0xB830a5AfCBEBb936c30C607a18BbbA9f5B0a592f"
+        "eth:0xB830a5AfCBEBb936c30C607a18BbbA9f5B0a592f"
      implementationNames.0x902F09715B6303d4173037652FA7377e5b98089E:
-        "OptimizedTransparentUpgradeableProxy"
      implementationNames.0xB830a5AfCBEBb936c30C607a18BbbA9f5B0a592f:
-        ""
      implementationNames.eth:0x902F09715B6303d4173037652FA7377e5b98089E:
+        "OptimizedTransparentUpgradeableProxy"
      implementationNames.eth:0xB830a5AfCBEBb936c30C607a18BbbA9f5B0a592f:
+        ""
    }
```

```diff
    contract ProxyAdmin (0x967bAf657ec4d4b1cb00b06f7Cc6E8BA604e3AC8) {
    +++ description: None
      address:
-        "0x967bAf657ec4d4b1cb00b06f7Cc6E8BA604e3AC8"
+        "eth:0x967bAf657ec4d4b1cb00b06f7Cc6E8BA604e3AC8"
      values.owner:
-        "0x7B80f2924E3Ad59a55f4bcC38AB63480599Be6c8"
+        "eth:0x7B80f2924E3Ad59a55f4bcC38AB63480599Be6c8"
      implementationNames.0x967bAf657ec4d4b1cb00b06f7Cc6E8BA604e3AC8:
-        "ProxyAdmin"
      implementationNames.eth:0x967bAf657ec4d4b1cb00b06f7Cc6E8BA604e3AC8:
+        "ProxyAdmin"
    }
```

```diff
    contract MAI Pool (0x9cef9a0b1bE0D289ac9f4a98ff317c33EAA84eb8) {
    +++ description: None
      address:
-        "0x9cef9a0b1bE0D289ac9f4a98ff317c33EAA84eb8"
+        "eth:0x9cef9a0b1bE0D289ac9f4a98ff317c33EAA84eb8"
      values.feeLibrary:
-        "0x8C3085D9a554884124C998CDB7f6d7219E9C1e6F"
+        "eth:0x8C3085D9a554884124C998CDB7f6d7219E9C1e6F"
      values.router:
-        "0x8731d54E9D02c286767d56ac03e8037C07e01e98"
+        "eth:0x8731d54E9D02c286767d56ac03e8037C07e01e98"
      values.token:
-        "0x8D6CeBD76f18E1558D4DB88138e2DeFB3909fAD6"
+        "eth:0x8D6CeBD76f18E1558D4DB88138e2DeFB3909fAD6"
      implementationNames.0x9cef9a0b1bE0D289ac9f4a98ff317c33EAA84eb8:
-        "Pool"
      implementationNames.eth:0x9cef9a0b1bE0D289ac9f4a98ff317c33EAA84eb8:
+        "Pool"
    }
```

```diff
    contract mETH Pool (0xA572d137666DCbAdFA47C3fC41F15e90134C618c) {
    +++ description: None
      address:
-        "0xA572d137666DCbAdFA47C3fC41F15e90134C618c"
+        "eth:0xA572d137666DCbAdFA47C3fC41F15e90134C618c"
      values.feeLibrary:
-        "0x8C3085D9a554884124C998CDB7f6d7219E9C1e6F"
+        "eth:0x8C3085D9a554884124C998CDB7f6d7219E9C1e6F"
      values.router:
-        "0x8731d54E9D02c286767d56ac03e8037C07e01e98"
+        "eth:0x8731d54E9D02c286767d56ac03e8037C07e01e98"
      values.token:
-        "0xd5F7838F5C461fefF7FE49ea5ebaF7728bB0ADfa"
+        "eth:0xd5F7838F5C461fefF7FE49ea5ebaF7728bB0ADfa"
      implementationNames.0xA572d137666DCbAdFA47C3fC41F15e90134C618c:
-        "Pool"
      implementationNames.eth:0xA572d137666DCbAdFA47C3fC41F15e90134C618c:
+        "Pool"
    }
```

```diff
    contract ProxyAdmin (0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9) {
    +++ description: None
      address:
-        "0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"
+        "eth:0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"
      values.owner:
-        "0x76F6d257CEB5736CbcAAb5c48E4225a45F74d6e5"
+        "eth:0x76F6d257CEB5736CbcAAb5c48E4225a45F74d6e5"
      implementationNames.0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9:
-        "ProxyAdmin"
      implementationNames.eth:0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9:
+        "ProxyAdmin"
    }
```

```diff
    contract LayerZero Multisig (0xBe010A7e3686FdF65E93344ab664D065A0B02478) {
    +++ description: Custom multisignature contract allowing offchain signing and execution on multiple target chains.
      address:
-        "0xBe010A7e3686FdF65E93344ab664D065A0B02478"
+        "eth:0xBe010A7e3686FdF65E93344ab664D065A0B02478"
      values.$members.0:
-        "0x0cb72C1F6a36c225A7E2B21712E8853A4A1acc47"
+        "eth:0x0cb72C1F6a36c225A7E2B21712E8853A4A1acc47"
      values.$members.1:
-        "0x5bC6AA6ad117A8B50ABf9E1658971f5DA1968c5c"
+        "eth:0x5bC6AA6ad117A8B50ABf9E1658971f5DA1968c5c"
      values.$members.2:
-        "0x73E9c017Ad37e2113e709D8070Cc9E1b28180e1e"
+        "eth:0x73E9c017Ad37e2113e709D8070Cc9E1b28180e1e"
      values.$members.3:
-        "0x771dcAcB96024d1e55Fd21Fe8a8187AA7EC9e77e"
+        "eth:0x771dcAcB96024d1e55Fd21Fe8a8187AA7EC9e77e"
      values.$members.4:
-        "0xe67DB04d7eFF4e9ec282eD929632D4FF058112d7"
+        "eth:0xe67DB04d7eFF4e9ec282eD929632D4FF058112d7"
      values.getExecutors.0:
-        "0x39f86ECef62c5bcE23428d6b7c7050D9Ecb0e346"
+        "eth:0x39f86ECef62c5bcE23428d6b7c7050D9Ecb0e346"
      implementationNames.0xBe010A7e3686FdF65E93344ab664D065A0B02478:
-        "OneSig"
      implementationNames.eth:0xBe010A7e3686FdF65E93344ab664D065A0B02478:
+        "OneSig"
    }
```

```diff
    contract Google Cloud Oracle (0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc) {
    +++ description: None
      address:
-        "0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc"
+        "eth:0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc"
      values.priceFeed:
-        "0xC03f31fD86a9077785b7bCf6598Ce3598Fa91113"
+        "eth:0xC03f31fD86a9077785b7bCf6598Ce3598Fa91113"
      values.workerFeeLib:
-        "0xdeA04ef31C4B4FDf31CB58923F37869739280d49"
+        "eth:0xdeA04ef31C4B4FDf31CB58923F37869739280d49"
      implementationNames.0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc:
-        "VerifierNetwork"
      implementationNames.eth:0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc:
+        "VerifierNetwork"
    }
```

```diff
    contract METIS Pool (0xd8772edBF88bBa2667ed011542343b0eDDaCDa47) {
    +++ description: None
      address:
-        "0xd8772edBF88bBa2667ed011542343b0eDDaCDa47"
+        "eth:0xd8772edBF88bBa2667ed011542343b0eDDaCDa47"
      values.feeLibrary:
-        "0x8C3085D9a554884124C998CDB7f6d7219E9C1e6F"
+        "eth:0x8C3085D9a554884124C998CDB7f6d7219E9C1e6F"
      values.router:
-        "0x8731d54E9D02c286767d56ac03e8037C07e01e98"
+        "eth:0x8731d54E9D02c286767d56ac03e8037C07e01e98"
      values.token:
-        "0x9E32b13ce7f2E80A01932B42553652E053D6ed8e"
+        "eth:0x9E32b13ce7f2E80A01932B42553652E053D6ed8e"
      implementationNames.0xd8772edBF88bBa2667ed011542343b0eDDaCDa47:
-        "Pool"
      implementationNames.eth:0xd8772edBF88bBa2667ed011542343b0eDDaCDa47:
+        "Pool"
    }
```

```diff
    contract VerifierFeeLib (0xdeA04ef31C4B4FDf31CB58923F37869739280d49) {
    +++ description: None
      address:
-        "0xdeA04ef31C4B4FDf31CB58923F37869739280d49"
+        "eth:0xdeA04ef31C4B4FDf31CB58923F37869739280d49"
      implementationNames.0xdeA04ef31C4B4FDf31CB58923F37869739280d49:
-        "VerifierFeeLib"
      implementationNames.eth:0xdeA04ef31C4B4FDf31CB58923F37869739280d49:
+        "VerifierFeeLib"
    }
```

```diff
    contract USDC Pool (0xdf0770dF86a8034b3EFEf0A1Bb3c889B8332FF56) {
    +++ description: None
      address:
-        "0xdf0770dF86a8034b3EFEf0A1Bb3c889B8332FF56"
+        "eth:0xdf0770dF86a8034b3EFEf0A1Bb3c889B8332FF56"
      values.feeLibrary:
-        "0x8C3085D9a554884124C998CDB7f6d7219E9C1e6F"
+        "eth:0x8C3085D9a554884124C998CDB7f6d7219E9C1e6F"
      values.router:
-        "0x8731d54E9D02c286767d56ac03e8037C07e01e98"
+        "eth:0x8731d54E9D02c286767d56ac03e8037C07e01e98"
      values.token:
-        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
+        "eth:0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
      implementationNames.0xdf0770dF86a8034b3EFEf0A1Bb3c889B8332FF56:
-        "Pool"
      implementationNames.eth:0xdf0770dF86a8034b3EFEf0A1Bb3c889B8332FF56:
+        "Pool"
    }
```

```diff
    EOA  (0xe67DB04d7eFF4e9ec282eD929632D4FF058112d7) {
    +++ description: None
      address:
-        "0xe67DB04d7eFF4e9ec282eD929632D4FF058112d7"
+        "eth:0xe67DB04d7eFF4e9ec282eD929632D4FF058112d7"
    }
```

```diff
    contract LUSD Pool (0xE8F55368C82D38bbbbDb5533e7F56AfC2E978CC2) {
    +++ description: None
      address:
-        "0xE8F55368C82D38bbbbDb5533e7F56AfC2E978CC2"
+        "eth:0xE8F55368C82D38bbbbDb5533e7F56AfC2E978CC2"
      values.feeLibrary:
-        "0x8C3085D9a554884124C998CDB7f6d7219E9C1e6F"
+        "eth:0x8C3085D9a554884124C998CDB7f6d7219E9C1e6F"
      values.router:
-        "0x8731d54E9D02c286767d56ac03e8037C07e01e98"
+        "eth:0x8731d54E9D02c286767d56ac03e8037C07e01e98"
      values.token:
-        "0x5f98805A4E8be255a32880FDeC7F6728C6568bA0"
+        "eth:0x5f98805A4E8be255a32880FDeC7F6728C6568bA0"
      implementationNames.0xE8F55368C82D38bbbbDb5533e7F56AfC2E978CC2:
-        "Pool"
      implementationNames.eth:0xE8F55368C82D38bbbbDb5533e7F56AfC2E978CC2:
+        "Pool"
    }
```

```diff
    EOA  (0xf02CC4dc84aC59Bd6089BAddcEB9d4Ef3AEFb0f0) {
    +++ description: None
      address:
-        "0xf02CC4dc84aC59Bd6089BAddcEB9d4Ef3AEFb0f0"
+        "eth:0xf02CC4dc84aC59Bd6089BAddcEB9d4Ef3AEFb0f0"
    }
```

```diff
    contract Frax Pool (0xfA0F307783AC21C39E939ACFF795e27b650F6e68) {
    +++ description: None
      address:
-        "0xfA0F307783AC21C39E939ACFF795e27b650F6e68"
+        "eth:0xfA0F307783AC21C39E939ACFF795e27b650F6e68"
      values.feeLibrary:
-        "0x8C3085D9a554884124C998CDB7f6d7219E9C1e6F"
+        "eth:0x8C3085D9a554884124C998CDB7f6d7219E9C1e6F"
      values.router:
-        "0x8731d54E9D02c286767d56ac03e8037C07e01e98"
+        "eth:0x8731d54E9D02c286767d56ac03e8037C07e01e98"
      values.token:
-        "0x853d955aCEf822Db058eb8505911ED77F175b99e"
+        "eth:0x853d955aCEf822Db058eb8505911ED77F175b99e"
      implementationNames.0xfA0F307783AC21C39E939ACFF795e27b650F6e68:
-        "Pool"
      implementationNames.eth:0xfA0F307783AC21C39E939ACFF795e27b650F6e68:
+        "Pool"
    }
```

```diff
+   Status: CREATED
    contract Factory (0x06D538690AF257Da524f25D0CD52fD85b1c2173E)
    +++ description: None
```

```diff
+   Status: CREATED
    contract DAI Pool (0x0Faf1d2d3CED330824de3B8200fc8dc6E397850d)
    +++ description: None
```

```diff
+   Status: CREATED
    contract SG-ETH Pool (0x101816545F6bd2b1076434B54383a1E633390A2E)
    +++ description: None
```

```diff
+   Status: CREATED
    contract WOO Pool (0x1CE66c52C36757Daf6551eDc04800A0Ec9983A09)
    +++ description: None
```

```diff
+   Status: CREATED
    contract Bridge (0x296F55F8Fb28E498B858d0BcDA06D955B2Cb3f97)
    +++ description: None
```

```diff
+   Status: CREATED
    contract TreasuryV2 (0x3773E1E9Deb273fCdf9f80bc88bB387B1e6Ce34d)
    +++ description: None
```

```diff
+   Status: CREATED
    contract USDT Pool (0x38EA452219524Bb87e18dE1C24D3bB59510BD783)
    +++ description: None
```

```diff
+   Status: CREATED
    contract USDT Pool2 (0x430Ebff5E3E80A6C58E7e6ADA1d90F5c28AA116d)
    +++ description: None
```

```diff
+   Status: CREATED
    contract UltraLightNodeV2 (0x4D73AdB72bC3DD368966edD0f0b2148401A178E2)
    +++ description: None
```

```diff
+   Status: CREATED
    contract sUSD Pool (0x590d4f8A68583639f215f675F3a259Ed84790580)
    +++ description: None
```

```diff
+   Status: CREATED
    contract TSS Oracle (0x5a54fe5234E811466D5366846283323c954310B2)
    +++ description: None
```

```diff
+   Status: CREATED
    contract NonceContract (0x5B905fE05F81F3a8ad8B28C6E17779CFAbf76068)
    +++ description: None
```

```diff
+   Status: CREATED
    contract StarGate Multisig (0x65bb797c2B9830d891D87288F029ed8dACc19705)
    +++ description: None
```

```diff
+   Status: CREATED
    contract Endpoint (0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675)
    +++ description: None
```

```diff
+   Status: CREATED
    contract USDD Pool (0x692953e758c3669290cb1677180c64183cEe374e)
    +++ description: None
```

```diff
+   Status: CREATED
    contract Router (0x8731d54E9D02c286767d56ac03e8037C07e01e98)
    +++ description: None
```

```diff
+   Status: CREATED
    contract StarGateFeeLibrary7 (0x8C3085D9a554884124C998CDB7f6d7219E9C1e6F)
    +++ description: None
```

```diff
+   Status: CREATED
    contract LayerZero Relayer (0x902F09715B6303d4173037652FA7377e5b98089E)
    +++ description: None
```

```diff
+   Status: CREATED
    contract ProxyAdmin (0x967bAf657ec4d4b1cb00b06f7Cc6E8BA604e3AC8)
    +++ description: None
```

```diff
+   Status: CREATED
    contract MAI Pool (0x9cef9a0b1bE0D289ac9f4a98ff317c33EAA84eb8)
    +++ description: None
```

```diff
+   Status: CREATED
    contract mETH Pool (0xA572d137666DCbAdFA47C3fC41F15e90134C618c)
    +++ description: None
```

```diff
+   Status: CREATED
    contract ProxyAdmin (0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9)
    +++ description: None
```

```diff
+   Status: CREATED
    contract LayerZero Multisig (0xBe010A7e3686FdF65E93344ab664D065A0B02478)
    +++ description: Custom multisignature contract allowing offchain signing and execution on multiple target chains.
```

```diff
+   Status: CREATED
    contract Google Cloud Oracle (0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc)
    +++ description: None
```

```diff
+   Status: CREATED
    contract METIS Pool (0xd8772edBF88bBa2667ed011542343b0eDDaCDa47)
    +++ description: None
```

```diff
+   Status: CREATED
    contract VerifierFeeLib (0xdeA04ef31C4B4FDf31CB58923F37869739280d49)
    +++ description: None
```

```diff
+   Status: CREATED
    contract USDC Pool (0xdf0770dF86a8034b3EFEf0A1Bb3c889B8332FF56)
    +++ description: None
```

```diff
+   Status: CREATED
    contract LUSD Pool (0xE8F55368C82D38bbbbDb5533e7F56AfC2E978CC2)
    +++ description: None
```

```diff
+   Status: CREATED
    contract Frax Pool (0xfA0F307783AC21C39E939ACFF795e27b650F6e68)
    +++ description: None
```

Generated with discovered.json: 0xbb1a3ddf76a9498109f3df0f4129263637d3be6b

# Diff at Wed, 09 Jul 2025 15:13:57 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@d05d4ec9af28b2df4e687d7b7676cddffcae6887 block: 21723798
- current block number: 22882446

## Description

Update LZ Multisig to a custom multisig contract that allows offchain signing with multichain onchain execution.

## Watched changes

```diff
    contract TreasuryV2 (0x3773E1E9Deb273fCdf9f80bc88bB387B1e6Ce34d) {
    +++ description: None
      values.owner:
-        "0xCDa8e3ADD00c95E5035617F970096118Ca2F4C92"
+        "0xBe010A7e3686FdF65E93344ab664D065A0B02478"
    }
```

```diff
    contract UltraLightNodeV2 (0x4D73AdB72bC3DD368966edD0f0b2148401A178E2) {
    +++ description: None
      values.owner:
-        "0xCDa8e3ADD00c95E5035617F970096118Ca2F4C92"
+        "0xBe010A7e3686FdF65E93344ab664D065A0B02478"
    }
```

```diff
    contract Endpoint (0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675) {
    +++ description: None
      values.owner:
-        "0xCDa8e3ADD00c95E5035617F970096118Ca2F4C92"
+        "0xBe010A7e3686FdF65E93344ab664D065A0B02478"
    }
```

```diff
-   Status: DELETED
    contract LayerZero Multisig (0xCDa8e3ADD00c95E5035617F970096118Ca2F4C92)
    +++ description: None
```

```diff
+   Status: CREATED
    contract LayerZero Multisig (0xBe010A7e3686FdF65E93344ab664D065A0B02478)
    +++ description: Custom multisignature contract allowing offchain signing and execution on multiple target chains.
```

## Source code changes

```diff
.../LayerZero Multisig/GnosisSafe.sol => /dev/null |  953 -------------
 .../GnosisSafeProxy.p.sol => /dev/null             |   35 -
 .../stargate/ethereum/.flat/LayerZero Multisig.sol | 1396 ++++++++++++++++++++
 3 files changed, 1396 insertions(+), 988 deletions(-)
```

Generated with discovered.json: 0x18ac3cffa70e5492d935edfba702beec56466e45

# Diff at Fri, 04 Jul 2025 12:19:22 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@1f56dc47fe915564d4555300304da4d3bcbc087f block: 21723798
- current block number: 21723798

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21723798 (main branch discovery), not current.

```diff
    contract ProxyAdmin (0x967bAf657ec4d4b1cb00b06f7Cc6E8BA604e3AC8) {
    +++ description: None
      receivedPermissions.0.from:
-        "ethereum:0x5a54fe5234E811466D5366846283323c954310B2"
+        "eth:0x5a54fe5234E811466D5366846283323c954310B2"
    }
```

```diff
    contract ProxyAdmin (0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9) {
    +++ description: None
      receivedPermissions.0.from:
-        "ethereum:0x902F09715B6303d4173037652FA7377e5b98089E"
+        "eth:0x902F09715B6303d4173037652FA7377e5b98089E"
    }
```

Generated with discovered.json: 0x8271e456526c26b5be47fc64dff6b4d42cdee0a6

# Diff at Fri, 23 May 2025 09:41:05 GMT:

- author: Adrian Adamiak (<adrian@adamiak.net>)
- comparing to: main@69cd181abbc3c830a6caf2f4429b37cae72ffdb8 block: 21723798
- current block number: 21723798

## Description

Introduced .role field on each permission, defaulting to field name on which it was defined (with '.' prefix)

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21723798 (main branch discovery), not current.

```diff
    contract ProxyAdmin (0x967bAf657ec4d4b1cb00b06f7Cc6E8BA604e3AC8) {
    +++ description: None
      receivedPermissions.0.role:
+        "admin"
    }
```

```diff
    contract ProxyAdmin (0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9) {
    +++ description: None
      receivedPermissions.0.role:
+        "admin"
    }
```

Generated with discovered.json: 0x367e129ba360baaf75a07844ec75fecfc59fce1d

# Diff at Tue, 29 Apr 2025 08:19:12 GMT:

- author: Adrian Adamiak (<adrian@adamiak.net>)
- comparing to: main@ef7477af00fe0b57a2f7cacf7e958c12494af662 block: 21723798
- current block number: 21723798

## Description

Field .issuedPermissions is removed from the output as no longer needed. Added 'permissionsConfigHash' due to refactoring of the modelling process (into a separate command).

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21723798 (main branch discovery), not current.

```diff
    contract TSS Oracle (0x5a54fe5234E811466D5366846283323c954310B2) {
    +++ description: None
      issuedPermissions:
-        [{"permission":"upgrade","to":"0x967bAf657ec4d4b1cb00b06f7Cc6E8BA604e3AC8","via":[]}]
    }
```

```diff
    contract LayerZero Relayer (0x902F09715B6303d4173037652FA7377e5b98089E) {
    +++ description: None
      issuedPermissions:
-        [{"permission":"upgrade","to":"0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9","via":[]}]
    }
```

Generated with discovered.json: 0xa4c78a5e653c544a21127e2f7ed892ab294a2482

# Diff at Thu, 24 Apr 2025 10:31:03 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@564f772ef796772c9952d7432df8286347a08d9e block: 21723798
- current block number: 21723798

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21723798 (main branch discovery), not current.

```diff
    contract UltraLightNodeV2 (0x4D73AdB72bC3DD368966edD0f0b2148401A178E2) {
    +++ description: None
      values.stargateArbConfig:
-        [2,20,"0x902F09715B6303d4173037652FA7377e5b98089E",2,15,"0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc"]
+        {"inboundProofLibraryVersion":2,"inboundBlockConfirmations":20,"relayer":"0x902F09715B6303d4173037652FA7377e5b98089E","outboundProofType":2,"outboundBlockConfirmations":15,"oracle":"0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc"}
      values.stargateScrollConfig:
-        [2,5,"0x902F09715B6303d4173037652FA7377e5b98089E",2,15,"0x5a54fe5234E811466D5366846283323c954310B2"]
+        {"inboundProofLibraryVersion":2,"inboundBlockConfirmations":5,"relayer":"0x902F09715B6303d4173037652FA7377e5b98089E","outboundProofType":2,"outboundBlockConfirmations":15,"oracle":"0x5a54fe5234E811466D5366846283323c954310B2"}
    }
```

Generated with discovered.json: 0xd80caa7bfa359ecbc3ff0a63ad57d08b0b21f916

# Diff at Tue, 04 Mar 2025 10:40:01 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@98d260b45fe0d2195ce5e629bd7b200c8706e8ba block: 21723798
- current block number: 21723798

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21723798 (main branch discovery), not current.

```diff
    contract Factory (0x06D538690AF257Da524f25D0CD52fD85b1c2173E) {
    +++ description: None
      sinceBlock:
+        14402871
    }
```

```diff
    contract DAI Pool (0x0Faf1d2d3CED330824de3B8200fc8dc6E397850d) {
    +++ description: None
      sinceBlock:
+        15970816
    }
```

```diff
    contract SG-ETH Pool (0x101816545F6bd2b1076434B54383a1E633390A2E) {
    +++ description: None
      sinceBlock:
+        15035701
    }
```

```diff
    contract WOO Pool (0x1CE66c52C36757Daf6551eDc04800A0Ec9983A09) {
    +++ description: None
      sinceBlock:
+        16680977
    }
```

```diff
    contract Bridge (0x296F55F8Fb28E498B858d0BcDA06D955B2Cb3f97) {
    +++ description: None
      sinceBlock:
+        14402868
    }
```

```diff
    contract TreasuryV2 (0x3773E1E9Deb273fCdf9f80bc88bB387B1e6Ce34d) {
    +++ description: None
      sinceBlock:
+        15416287
    }
```

```diff
    contract USDT Pool (0x38EA452219524Bb87e18dE1C24D3bB59510BD783) {
    +++ description: None
      sinceBlock:
+        14403402
    }
```

```diff
    contract USDT Pool2 (0x430Ebff5E3E80A6C58E7e6ADA1d90F5c28AA116d) {
    +++ description: None
      sinceBlock:
+        16415911
    }
```

```diff
    contract UltraLightNodeV2 (0x4D73AdB72bC3DD368966edD0f0b2148401A178E2) {
    +++ description: None
      sinceBlock:
+        15416271
    }
```

```diff
    contract sUSD Pool (0x590d4f8A68583639f215f675F3a259Ed84790580) {
    +++ description: None
      sinceBlock:
+        15970821
    }
```

```diff
    contract TSS Oracle (0x5a54fe5234E811466D5366846283323c954310B2) {
    +++ description: None
      sinceBlock:
+        15416736
    }
```

```diff
    contract NonceContract (0x5B905fE05F81F3a8ad8B28C6E17779CFAbf76068) {
    +++ description: None
      sinceBlock:
+        15398311
    }
```

```diff
    contract StarGate Multisig (0x65bb797c2B9830d891D87288F029ed8dACc19705) {
    +++ description: None
      sinceBlock:
+        14402408
    }
```

```diff
    contract Endpoint (0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675) {
    +++ description: None
      sinceBlock:
+        14388880
    }
```

```diff
    contract USDD Pool (0x692953e758c3669290cb1677180c64183cEe374e) {
    +++ description: None
      sinceBlock:
+        15035701
    }
```

```diff
    contract Router (0x8731d54E9D02c286767d56ac03e8037C07e01e98) {
    +++ description: None
      sinceBlock:
+        14402864
    }
```

```diff
    contract StarGateFeeLibrary7 (0x8C3085D9a554884124C998CDB7f6d7219E9C1e6F) {
    +++ description: None
      sinceBlock:
+        17437020
    }
```

```diff
    contract LayerZero Relayer (0x902F09715B6303d4173037652FA7377e5b98089E) {
    +++ description: None
      sinceBlock:
+        15416448
    }
```

```diff
    contract ProxyAdmin (0x967bAf657ec4d4b1cb00b06f7Cc6E8BA604e3AC8) {
    +++ description: None
      sinceBlock:
+        15410443
    }
```

```diff
    contract MAI Pool (0x9cef9a0b1bE0D289ac9f4a98ff317c33EAA84eb8) {
    +++ description: None
      sinceBlock:
+        15979653
    }
```

```diff
    contract mETH Pool (0xA572d137666DCbAdFA47C3fC41F15e90134C618c) {
    +++ description: None
      sinceBlock:
+        19138880
    }
```

```diff
    contract ProxyAdmin (0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9) {
    +++ description: None
      sinceBlock:
+        14388905
    }
```

```diff
    contract LayerZero Multisig (0xCDa8e3ADD00c95E5035617F970096118Ca2F4C92) {
    +++ description: None
      sinceBlock:
+        14457816
    }
```

```diff
    contract Google Cloud Oracle (0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc) {
    +++ description: None
      sinceBlock:
+        18095084
    }
```

```diff
    contract METIS Pool (0xd8772edBF88bBa2667ed011542343b0eDDaCDa47) {
    +++ description: None
      sinceBlock:
+        16415911
    }
```

```diff
    contract VerifierFeeLib (0xdeA04ef31C4B4FDf31CB58923F37869739280d49) {
    +++ description: None
      sinceBlock:
+        18095085
    }
```

```diff
    contract USDC Pool (0xdf0770dF86a8034b3EFEf0A1Bb3c889B8332FF56) {
    +++ description: None
      sinceBlock:
+        14403393
    }
```

```diff
    contract LUSD Pool (0xE8F55368C82D38bbbbDb5533e7F56AfC2E978CC2) {
    +++ description: None
      sinceBlock:
+        15970821
    }
```

```diff
    contract Frax Pool (0xfA0F307783AC21C39E939ACFF795e27b650F6e68) {
    +++ description: None
      sinceBlock:
+        15970816
    }
```

Generated with discovered.json: 0x55658afed1de7bf30ab944043644d40c6e1bb06f

# Diff at Tue, 28 Jan 2025 15:04:50 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@b60bc0e936cb7b213e24f14ed69abaff22493651 block: 21630186
- current block number: 21723798

## Description

LayerZero MS update: members swapped and new member added (now 3/5).

## Watched changes

```diff
    contract LayerZero Multisig (0xCDa8e3ADD00c95E5035617F970096118Ca2F4C92) {
    +++ description: None
      values.$members.4:
+        "0x73E9c017Ad37e2113e709D8070Cc9E1b28180e1e"
      values.$members.3:
-        "0x67FC8c432448f9a8d541C17579EF7a142378d5aD"
+        "0x9F403140Bc0574D7d36eA472b82DAa1Bbd4eF327"
      values.$members.2:
-        "0x73E9c017Ad37e2113e709D8070Cc9E1b28180e1e"
+        "0x771dcAcB96024d1e55Fd21Fe8a8187AA7EC9e77e"
      values.$members.1:
-        "0xBb6633cc267951E938F9B6421E4F54aa5b2c1936"
+        "0x112c737AeEbD2E52DEb9ff5c9c19497F1A1777b0"
      values.$members.0:
-        "0x9F403140Bc0574D7d36eA472b82DAa1Bbd4eF327"
+        "0xB981a2664f5f547291Df5F8dCD4505f7015912CF"
      values.$threshold:
-        2
+        3
      values.multisigThreshold:
-        "2 of 4 (50%)"
+        "3 of 5 (60%)"
    }
```

Generated with discovered.json: 0x52af6e7ffc7a343c7b0719d6ed7d1a8a0465ef82

# Diff at Mon, 20 Jan 2025 11:10:11 GMT:

- author: Adrian Adamiak (<adrian@adamiak.net>)
- comparing to: main@2c8b4f3d9910bb6371be9b4df87b70856e7d8c64 block: 21630186
- current block number: 21630186

## Description

Rerun on the same block number. Applies fixes to permissions and via field. Renames permission's target to to/from.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 21630186 (main branch discovery), not current.

```diff
    contract TSS Oracle (0x5a54fe5234E811466D5366846283323c954310B2) {
    +++ description: None
      issuedPermissions.0.target:
-        "0x967bAf657ec4d4b1cb00b06f7Cc6E8BA604e3AC8"
      issuedPermissions.0.to:
+        "0x967bAf657ec4d4b1cb00b06f7Cc6E8BA604e3AC8"
    }
```

```diff
    contract LayerZero Relayer (0x902F09715B6303d4173037652FA7377e5b98089E) {
    +++ description: None
      issuedPermissions.0.target:
-        "0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"
      issuedPermissions.0.to:
+        "0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9"
    }
```

```diff
    contract ProxyAdmin (0x967bAf657ec4d4b1cb00b06f7Cc6E8BA604e3AC8) {
    +++ description: None
      receivedPermissions.0.target:
-        "0x5a54fe5234E811466D5366846283323c954310B2"
      receivedPermissions.0.from:
+        "0x5a54fe5234E811466D5366846283323c954310B2"
    }
```

```diff
    contract ProxyAdmin (0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9) {
    +++ description: None
      receivedPermissions.0.target:
-        "0x902F09715B6303d4173037652FA7377e5b98089E"
      receivedPermissions.0.from:
+        "0x902F09715B6303d4173037652FA7377e5b98089E"
    }
```

Generated with discovered.json: 0x4eddcdb8889013943b42f7be52419ae9beebd801

# Diff at Mon, 25 Nov 2024 10:52:49 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@62a44faa52866a55f9881cb2852ac75b1fcc60b0 block: 21027581
- current block number: 21264296

## Description

MS signer change.

## Watched changes

```diff
    contract StarGate Multisig (0x65bb797c2B9830d891D87288F029ed8dACc19705) {
    +++ description: None
      values.$members.4:
-        "0xF05F4211ad15A8e49b49C0436067CFFfEa783aA4"
+        "0x7C8D1Db01130acEEc5fF892c99a18c4b4BAdC326"
    }
```

Generated with discovered.json: 0x88ca1199a942a49af7c36a7fcf060b09f3724264

# Diff at Wed, 23 Oct 2024 10:07:17 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@2734bfe28641dfdb3277a5800faf0a057c08a58f block: 20240852
- current block number: 21027581

## Description

LayerZero Multisig: One signer removed.

## Watched changes

```diff
    contract LayerZero Multisig (0xCDa8e3ADD00c95E5035617F970096118Ca2F4C92) {
    +++ description: None
      values.$members.4:
-        "0x67FC8c432448f9a8d541C17579EF7a142378d5aD"
      values.$members.3:
-        "0x73E9c017Ad37e2113e709D8070Cc9E1b28180e1e"
+        "0x67FC8c432448f9a8d541C17579EF7a142378d5aD"
      values.$members.2:
-        "0xBb6633cc267951E938F9B6421E4F54aa5b2c1936"
+        "0x73E9c017Ad37e2113e709D8070Cc9E1b28180e1e"
      values.$members.1:
-        "0xe095F2590eF1Ab39601445025847Ed8E4B40D687"
+        "0xBb6633cc267951E938F9B6421E4F54aa5b2c1936"
      values.multisigThreshold:
-        "2 of 5 (40%)"
+        "2 of 4 (50%)"
    }
```

Generated with discovered.json: 0xf6c6dbe2b5fe75d76da5aba1a33a91a524031704

# Diff at Mon, 21 Oct 2024 11:10:40 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@8895d33866f5665c4c710f4ddaa32bfa63cc3c78 block: 20240852
- current block number: 20240852

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20240852 (main branch discovery), not current.

```diff
    contract TSS Oracle (0x5a54fe5234E811466D5366846283323c954310B2) {
    +++ description: None
      values.$pastUpgrades.1.2:
+        ["0x3eEA8d627ab6983fFFc7027ee623Fd7699343fc1"]
      values.$pastUpgrades.1.1:
-        ["0x3eEA8d627ab6983fFFc7027ee623Fd7699343fc1"]
+        "0x9b7aa9602e9b7c0835daf01b281300d8ca0a51e42942ab9bda92104e05b118c5"
      values.$pastUpgrades.0.2:
+        ["0xccEf13cFEB6873c167f62A365548A57C9ed29DC5"]
      values.$pastUpgrades.0.1:
-        ["0xccEf13cFEB6873c167f62A365548A57C9ed29DC5"]
+        "0x552bd37cf291bcc16f62985e1c87e65f26e063eefbbbbf0c7874517af2356d59"
    }
```

```diff
    contract LayerZero Relayer (0x902F09715B6303d4173037652FA7377e5b98089E) {
    +++ description: None
      values.$pastUpgrades.5.2:
+        ["0xB830a5AfCBEBb936c30C607a18BbbA9f5B0a592f"]
      values.$pastUpgrades.5.1:
-        ["0xB830a5AfCBEBb936c30C607a18BbbA9f5B0a592f"]
+        "0x73b24db83de84a82dae12cc42405822b258a762a7c18206498f869be5d676866"
      values.$pastUpgrades.4.2:
+        ["0x8775e9D584008f84daFe7abe75a62f6C91491027"]
      values.$pastUpgrades.4.1:
-        ["0x8775e9D584008f84daFe7abe75a62f6C91491027"]
+        "0x432c0e623817af575b5382c38b9bd117f34da874f0f4c9a3f170e74d6a71cd8f"
      values.$pastUpgrades.3.2:
+        ["0xaF34771b16960ea77484A866a34CCDAFDc913D9C"]
      values.$pastUpgrades.3.1:
-        ["0xaF34771b16960ea77484A866a34CCDAFDc913D9C"]
+        "0x26f56a3da2382a89bead8d00ea9e93ed15f4fd83627a31c5721dcebe690a1f73"
      values.$pastUpgrades.2.2:
+        ["0x9512a85438606dEdE54297634dEd7C7C0c231874"]
      values.$pastUpgrades.2.1:
-        ["0x9512a85438606dEdE54297634dEd7C7C0c231874"]
+        "0x1605419ac94c967804d0d4c2b809620b593fea2c47f3fc2f3f2a8cf677da7551"
      values.$pastUpgrades.1.2:
+        ["0xDD55F55CB9a39EF1eed4Ee1a84EE1b7411bE306a"]
      values.$pastUpgrades.1.1:
-        ["0xDD55F55CB9a39EF1eed4Ee1a84EE1b7411bE306a"]
+        "0x368b49a019b69220edb9dfcedf34c3b9354a56bed285e21b897e8523237270c9"
      values.$pastUpgrades.0.2:
+        ["0x4E341b9Cf90514A5b7dfec2c9A1f20AA4514C260"]
      values.$pastUpgrades.0.1:
-        ["0x4E341b9Cf90514A5b7dfec2c9A1f20AA4514C260"]
+        "0x665e97daa183fb3d57ee6aac0438d555feeeb570b782e03e7b972919aa57212f"
    }
```

Generated with discovered.json: 0x1178ba55a07e7d0f85df04ddda7abc21b76ae35e

# Diff at Mon, 14 Oct 2024 10:56:13 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@1afc77ff111ceb0970e7d09efcc7b2f376b0c281 block: 20240852
- current block number: 20240852

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20240852 (main branch discovery), not current.

```diff
    contract Factory (0x06D538690AF257Da524f25D0CD52fD85b1c2173E) {
    +++ description: None
      sourceHashes:
+        ["0xbc704e600b52db9b8f9530b3e75e45a8f0561c0d52beab8121e42c3fa18aefaf"]
    }
```

```diff
    contract DAI Pool (0x0Faf1d2d3CED330824de3B8200fc8dc6E397850d) {
    +++ description: None
      sourceHashes:
+        ["0x599edeae7294922e7192ddef4fc4c244c46f9ae0b9b4e8e8207ab02bd956ba93"]
    }
```

```diff
    contract SG-ETH Pool (0x101816545F6bd2b1076434B54383a1E633390A2E) {
    +++ description: None
      sourceHashes:
+        ["0x599edeae7294922e7192ddef4fc4c244c46f9ae0b9b4e8e8207ab02bd956ba93"]
    }
```

```diff
    contract WOO Pool (0x1CE66c52C36757Daf6551eDc04800A0Ec9983A09) {
    +++ description: None
      sourceHashes:
+        ["0x599edeae7294922e7192ddef4fc4c244c46f9ae0b9b4e8e8207ab02bd956ba93"]
    }
```

```diff
    contract Bridge (0x296F55F8Fb28E498B858d0BcDA06D955B2Cb3f97) {
    +++ description: None
      sourceHashes:
+        ["0xcfc56af1501e5fdb6791848b058bbdd819db31eb1e168d31c30743c57eb88a41"]
    }
```

```diff
    contract TreasuryV2 (0x3773E1E9Deb273fCdf9f80bc88bB387B1e6Ce34d) {
    +++ description: None
      sourceHashes:
+        ["0x8b908351f18fdaeaf600ae46ef1450c535f741fc95bb25acade77f8b59fdc168"]
    }
```

```diff
    contract USDT Pool (0x38EA452219524Bb87e18dE1C24D3bB59510BD783) {
    +++ description: None
      sourceHashes:
+        ["0x599edeae7294922e7192ddef4fc4c244c46f9ae0b9b4e8e8207ab02bd956ba93"]
    }
```

```diff
    contract USDT Pool2 (0x430Ebff5E3E80A6C58E7e6ADA1d90F5c28AA116d) {
    +++ description: None
      sourceHashes:
+        ["0x599edeae7294922e7192ddef4fc4c244c46f9ae0b9b4e8e8207ab02bd956ba93"]
    }
```

```diff
    contract UltraLightNodeV2 (0x4D73AdB72bC3DD368966edD0f0b2148401A178E2) {
    +++ description: None
      sourceHashes:
+        ["0x38c85ab54f670eaa1fc2b351aee39913bc12e2b26c460ee31cf89d3f1f7d59b9"]
    }
```

```diff
    contract sUSD Pool (0x590d4f8A68583639f215f675F3a259Ed84790580) {
    +++ description: None
      sourceHashes:
+        ["0x599edeae7294922e7192ddef4fc4c244c46f9ae0b9b4e8e8207ab02bd956ba93"]
    }
```

```diff
    contract NonceContract (0x5B905fE05F81F3a8ad8B28C6E17779CFAbf76068) {
    +++ description: None
      sourceHashes:
+        ["0x895867397d61409de8476975bae4d871fec1c289e52fe97b31872726808dae38"]
    }
```

```diff
    contract StarGate Multisig (0x65bb797c2B9830d891D87288F029ed8dACc19705) {
    +++ description: None
      sourceHashes:
+        ["0x81a7349eebb98ac33b0bc6842e3cb258034a8f2a4ba004570bb8e2e25947f9ff","0xd42bbf9f7dcd3720a7fc6bdc6edfdfae8800a37d6dd4decfa0ef6ca4a2e88940"]
    }
```

```diff
    contract Endpoint (0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675) {
    +++ description: None
      sourceHashes:
+        ["0x945c3299d0cf62b9ea7a77d6328295d54327299d6a153e1e7b48d85fa9b77215"]
    }
```

```diff
    contract USDD Pool (0x692953e758c3669290cb1677180c64183cEe374e) {
    +++ description: None
      sourceHashes:
+        ["0x599edeae7294922e7192ddef4fc4c244c46f9ae0b9b4e8e8207ab02bd956ba93"]
    }
```

```diff
    contract Router (0x8731d54E9D02c286767d56ac03e8037C07e01e98) {
    +++ description: None
      sourceHashes:
+        ["0xaca03a3990b02abbdfb3479c15740adb67918d89a2b2ba4a789156a84a23895f"]
    }
```

```diff
    contract StarGateFeeLibrary7 (0x8C3085D9a554884124C998CDB7f6d7219E9C1e6F) {
    +++ description: None
      sourceHashes:
+        ["0xa8c87025dca83b0d7859efc30fa933d23dc2c4a29483706d9123f2c0248ff35e"]
    }
```

```diff
    contract ProxyAdmin (0x967bAf657ec4d4b1cb00b06f7Cc6E8BA604e3AC8) {
    +++ description: None
      sourceHashes:
+        ["0xeb95d39e1b35f76b6331da863f87bf2e148dd21abf5666590443b65f6a125630"]
    }
```

```diff
    contract MAI Pool (0x9cef9a0b1bE0D289ac9f4a98ff317c33EAA84eb8) {
    +++ description: None
      sourceHashes:
+        ["0x599edeae7294922e7192ddef4fc4c244c46f9ae0b9b4e8e8207ab02bd956ba93"]
    }
```

```diff
    contract mETH Pool (0xA572d137666DCbAdFA47C3fC41F15e90134C618c) {
    +++ description: None
      sourceHashes:
+        ["0x599edeae7294922e7192ddef4fc4c244c46f9ae0b9b4e8e8207ab02bd956ba93"]
    }
```

```diff
    contract ProxyAdmin (0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9) {
    +++ description: None
      sourceHashes:
+        ["0xeb95d39e1b35f76b6331da863f87bf2e148dd21abf5666590443b65f6a125630"]
    }
```

```diff
    contract LayerZero Multisig (0xCDa8e3ADD00c95E5035617F970096118Ca2F4C92) {
    +++ description: None
      sourceHashes:
+        ["0x81a7349eebb98ac33b0bc6842e3cb258034a8f2a4ba004570bb8e2e25947f9ff","0xd42bbf9f7dcd3720a7fc6bdc6edfdfae8800a37d6dd4decfa0ef6ca4a2e88940"]
    }
```

```diff
    contract Google Cloud Oracle (0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc) {
    +++ description: None
      sourceHashes:
+        ["0x1be31a02ca7158d467a49eeb964f0f8aa1d1e74019df854c1881d89d51260701"]
    }
```

```diff
    contract METIS Pool (0xd8772edBF88bBa2667ed011542343b0eDDaCDa47) {
    +++ description: None
      sourceHashes:
+        ["0x599edeae7294922e7192ddef4fc4c244c46f9ae0b9b4e8e8207ab02bd956ba93"]
    }
```

```diff
    contract VerifierFeeLib (0xdeA04ef31C4B4FDf31CB58923F37869739280d49) {
    +++ description: None
      sourceHashes:
+        ["0x37e1cee9d0a4ad6ebb439d27dbbf23925fcd9f9c0d5b43a33a6335e62b54d18c"]
    }
```

```diff
    contract USDC Pool (0xdf0770dF86a8034b3EFEf0A1Bb3c889B8332FF56) {
    +++ description: None
      sourceHashes:
+        ["0x599edeae7294922e7192ddef4fc4c244c46f9ae0b9b4e8e8207ab02bd956ba93"]
    }
```

```diff
    contract LUSD Pool (0xE8F55368C82D38bbbbDb5533e7F56AfC2E978CC2) {
    +++ description: None
      sourceHashes:
+        ["0x599edeae7294922e7192ddef4fc4c244c46f9ae0b9b4e8e8207ab02bd956ba93"]
    }
```

```diff
    contract Frax Pool (0xfA0F307783AC21C39E939ACFF795e27b650F6e68) {
    +++ description: None
      sourceHashes:
+        ["0x599edeae7294922e7192ddef4fc4c244c46f9ae0b9b4e8e8207ab02bd956ba93"]
    }
```

Generated with discovered.json: 0x4e354eec060dee36a608f249b5e8a44f10ea30d8

# Diff at Tue, 01 Oct 2024 10:55:35 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@bd754dc73c66120164006054f8d25c5fae9cd910 block: 20240852
- current block number: 20240852

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20240852 (main branch discovery), not current.

```diff
    contract TSS Oracle (0x5a54fe5234E811466D5366846283323c954310B2) {
    +++ description: None
      values.$pastUpgrades:
+        [["2023-02-08T19:58:23.000Z",["0xccEf13cFEB6873c167f62A365548A57C9ed29DC5"]],["2023-04-27T02:38:47.000Z",["0x3eEA8d627ab6983fFFc7027ee623Fd7699343fc1"]]]
    }
```

```diff
    contract LayerZero Relayer (0x902F09715B6303d4173037652FA7377e5b98089E) {
    +++ description: None
      values.$pastUpgrades:
+        [["2022-11-21T22:41:47.000Z",["0x4E341b9Cf90514A5b7dfec2c9A1f20AA4514C260"]],["2023-02-03T23:06:47.000Z",["0xDD55F55CB9a39EF1eed4Ee1a84EE1b7411bE306a"]],["2023-04-23T04:37:11.000Z",["0x9512a85438606dEdE54297634dEd7C7C0c231874"]],["2023-06-26T23:20:23.000Z",["0xaF34771b16960ea77484A866a34CCDAFDc913D9C"]],["2023-09-20T19:37:35.000Z",["0x8775e9D584008f84daFe7abe75a62f6C91491027"]],["2023-09-22T14:15:59.000Z",["0xB830a5AfCBEBb936c30C607a18BbbA9f5B0a592f"]]]
    }
```

Generated with discovered.json: 0x7fa5352e64f49c1e8051f0480ca4244275a894b4

# Diff at Fri, 30 Aug 2024 08:01:09 GMT:

- author: Adrian Adamiak (<adrian@adamiak.net>)
- comparing to: main@6c1bd1f41fadf5f2cb1c1805b5a2c6138a3ed35a block: 20240852
- current block number: 20240852

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20240852 (main branch discovery), not current.

```diff
    contract ProxyAdmin (0x967bAf657ec4d4b1cb00b06f7Cc6E8BA604e3AC8) {
    +++ description: None
      receivedPermissions.0.via:
-        []
    }
```

```diff
    contract ProxyAdmin (0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9) {
    +++ description: None
      receivedPermissions.0.via:
-        []
    }
```

Generated with discovered.json: 0xe0c7aadb8e3c3ffcfd3520dd3974cfc3fb11a070

# Diff at Fri, 23 Aug 2024 09:55:43 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@67597c7d6c810bc726594446890178150240711e block: 20240852
- current block number: 20240852

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20240852 (main branch discovery), not current.

```diff
    contract TSS Oracle (0x5a54fe5234E811466D5366846283323c954310B2) {
    +++ description: None
      values.$upgradeCount:
+        2
    }
```

```diff
    contract LayerZero Relayer (0x902F09715B6303d4173037652FA7377e5b98089E) {
    +++ description: None
      values.$upgradeCount:
+        6
    }
```

Generated with discovered.json: 0x1bbf8fb145a459105e0f11d0b01e4f995f51a663

# Diff at Wed, 21 Aug 2024 10:06:03 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@2f6dde3357bf5d79196b6e94f79d853a6c4ec72b block: 20240852
- current block number: 20240852

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20240852 (main branch discovery), not current.

```diff
    contract TSS Oracle (0x5a54fe5234E811466D5366846283323c954310B2) {
    +++ description: None
      issuedPermissions:
+        [{"permission":"upgrade","target":"0x967bAf657ec4d4b1cb00b06f7Cc6E8BA604e3AC8","via":[]}]
    }
```

```diff
    contract LayerZero Relayer (0x902F09715B6303d4173037652FA7377e5b98089E) {
    +++ description: None
      issuedPermissions:
+        [{"permission":"upgrade","target":"0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9","via":[]}]
    }
```

```diff
    contract ProxyAdmin (0x967bAf657ec4d4b1cb00b06f7Cc6E8BA604e3AC8) {
    +++ description: None
      assignedPermissions:
-        {"upgrade":["0x5a54fe5234E811466D5366846283323c954310B2"]}
      receivedPermissions:
+        [{"permission":"upgrade","target":"0x5a54fe5234E811466D5366846283323c954310B2","via":[]}]
    }
```

```diff
    contract ProxyAdmin (0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9) {
    +++ description: None
      assignedPermissions:
-        {"upgrade":["0x902F09715B6303d4173037652FA7377e5b98089E"]}
      receivedPermissions:
+        [{"permission":"upgrade","target":"0x902F09715B6303d4173037652FA7377e5b98089E","via":[]}]
    }
```

Generated with discovered.json: 0xb78dfc69c6dea378b4a4ba9baaed0ac40255cb55

# Diff at Fri, 09 Aug 2024 10:12:27 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@1f0da1d0aab7bc6b3b5e54e7e93480bd98e57035 block: 20240852
- current block number: 20240852

## Description

Discovery rerun on the same block number with only config-related changes.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 20240852 (main branch discovery), not current.

```diff
    contract StarGate Multisig (0x65bb797c2B9830d891D87288F029ed8dACc19705) {
    +++ description: None
      values.$multisigThreshold:
-        "3 of 6 (50%)"
      values.getOwners:
-        ["0x2E1078e128e8AA6A70eC8d1B17A79Fc4B457d437","0x565cFd7224bbc2a81a6e2a1464892ecB27efB070","0x1D7C6783328C145393e84fb47a7f7C548f5Ee28d","0x79e2b9C1F6C9ed1375C93AaF139e6C4537f48523","0xF05F4211ad15A8e49b49C0436067CFFfEa783aA4","0xf02CC4dc84aC59Bd6089BAddcEB9d4Ef3AEFb0f0"]
      values.getThreshold:
-        3
      values.$members:
+        ["0x2E1078e128e8AA6A70eC8d1B17A79Fc4B457d437","0x565cFd7224bbc2a81a6e2a1464892ecB27efB070","0x1D7C6783328C145393e84fb47a7f7C548f5Ee28d","0x79e2b9C1F6C9ed1375C93AaF139e6C4537f48523","0xF05F4211ad15A8e49b49C0436067CFFfEa783aA4","0xf02CC4dc84aC59Bd6089BAddcEB9d4Ef3AEFb0f0"]
      values.$threshold:
+        3
      values.multisigThreshold:
+        "3 of 6 (50%)"
    }
```

```diff
    contract ProxyAdmin (0x967bAf657ec4d4b1cb00b06f7Cc6E8BA604e3AC8) {
    +++ description: None
      assignedPermissions.admin:
-        ["0x5a54fe5234E811466D5366846283323c954310B2"]
      assignedPermissions.upgrade:
+        ["0x5a54fe5234E811466D5366846283323c954310B2"]
    }
```

```diff
    contract ProxyAdmin (0xA658742d33ebd2ce2F0bdFf73515Aa797Fd161D9) {
    +++ description: None
      assignedPermissions.admin:
-        ["0x902F09715B6303d4173037652FA7377e5b98089E"]
      assignedPermissions.upgrade:
+        ["0x902F09715B6303d4173037652FA7377e5b98089E"]
    }
```

```diff
    contract LayerZero Multisig (0xCDa8e3ADD00c95E5035617F970096118Ca2F4C92) {
    +++ description: None
      values.$multisigThreshold:
-        "2 of 5 (40%)"
      values.getOwners:
-        ["0x9F403140Bc0574D7d36eA472b82DAa1Bbd4eF327","0xe095F2590eF1Ab39601445025847Ed8E4B40D687","0xBb6633cc267951E938F9B6421E4F54aa5b2c1936","0x73E9c017Ad37e2113e709D8070Cc9E1b28180e1e","0x67FC8c432448f9a8d541C17579EF7a142378d5aD"]
      values.getThreshold:
-        2
      values.$members:
+        ["0x9F403140Bc0574D7d36eA472b82DAa1Bbd4eF327","0xe095F2590eF1Ab39601445025847Ed8E4B40D687","0xBb6633cc267951E938F9B6421E4F54aa5b2c1936","0x73E9c017Ad37e2113e709D8070Cc9E1b28180e1e","0x67FC8c432448f9a8d541C17579EF7a142378d5aD"]
      values.$threshold:
+        2
      values.multisigThreshold:
+        "2 of 5 (40%)"
    }
```

Generated with discovered.json: 0xbc0988c485f24863dfe55a91479a9a50d14dd02b

# Diff at Fri, 05 Jul 2024 14:19:05 GMT:

- author: sekuba (<29250140+sekuba@users.noreply.github.com>)
- comparing to: main@111fee0655d72e75c60324b920975e421fd852f7 block: 19532207
- current block number: 20240852

## Description

Config related.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 19532207 (main branch discovery), not current.

```diff
-   Status: DELETED
    contract  (0x9bfAc7947FC1b64aA9F12b24EcD519DaEcEf3Ba5)
    +++ description: None
```

```diff
-   Status: DELETED
    contract  (0xC03f31fD86a9077785b7bCf6598Ce3598Fa91113)
    +++ description: None
```

Generated with discovered.json: 0xe68bb3eb077b5467cdab7bf3fbb62717a6d63a4a

# Diff at Thu, 28 Mar 2024 11:08:18 GMT:

- author: Mateusz Radomski (<radomski.main@protonmail.com>)
- comparing to: main@21187e63b9b90823a55c461c331868a470ce17eb block: 19433750
- current block number: 19532207

## Description

Update discovery to include the multisig threshold.

## Config/verification related changes

Following changes come from updates made to the config file,
or/and contracts becoming verified, not from differences found during
discovery. Values are for block 19433750 (main branch discovery), not current.

```diff
    contract StarGate Multisig (0x65bb797c2B9830d891D87288F029ed8dACc19705) {
    +++ description: None
      upgradeability.threshold:
+        "3 of 6 (50%)"
    }
```

```diff
    contract LayerZero Multisig (0xCDa8e3ADD00c95E5035617F970096118Ca2F4C92) {
    +++ description: None
      upgradeability.threshold:
+        "2 of 5 (40%)"
    }
```

Generated with discovered.json: 0x58e5e65bfca08d68390f2842b5da775add19380b

# Diff at Thu, 14 Mar 2024 14:12:08 GMT

- author: Michał Podsiadły (<michal.podsiadly@l2beat.com>)
- comparing to: main@3ffa91064379f34a2916a1ad4e93791b752e7e9e block: 19225512
- current block number: 19433750

## Description

New PriceFeed Oracle implementation has been deployed. Chain paths and liquidity data has been updated.

## Watched changes

```diff
    contract  (0xC03f31fD86a9077785b7bCf6598Ce3598Fa91113) {
    +++ description: None
      upgradeability.implementation:
-        "0xF641db6860FD5f6643D05bD75405a2586a63a141"
+        "0x13dff8847EA170eBb8439ce732c0A14Bb49fDd92"
      implementations.0:
-        "0xF641db6860FD5f6643D05bD75405a2586a63a141"
+        "0x13dff8847EA170eBb8439ce732c0A14Bb49fDd92"
    }
```

## Source code changes

```diff
.../-0xC03f31fD86a9077785b7bCf6598Ce3598Fa91113/implementation/meta.txt | 2 +-
 1 file changed, 1 insertion(+), 1 deletion(-)
```

Generated with discovered.json: 0x6aa238b93e1fb75daa84f0b1ea40a61326c2f152

# Diff at Wed, 14 Feb 2024 10:08:14 GMT

- author: Radina Talanova (<nt.radina@gmail.com>)
- comparing to: main@6045526c8b7e15993de0acdd037b3ffbaa1bedda block: 18820326
- current block number: 19225512

## Description

A new pool for mETH is added. The Default basis point multiplier of the Google Oracle is updated (related to fees). The latest version of the LayerZero Endpoint contract is updated:

- Version 4: 0xd231084bfb234c107d3ee2b22f97f3346fdaf705 (SendUln301)
- Version 5: 0x245b6e8ffe9ea5fc301e32d16f66bd4c2123eefc (ReceiveUln301)

## Watched changes

```diff
    contract Factory (0x06D538690AF257Da524f25D0CD52fD85b1c2173E) {
      values.allPools[12]:
+        "0xA572d137666DCbAdFA47C3fC41F15e90134C618c"
      values.allPoolsLength:
-        12
+        13
    }
```

```diff
    contract Endpoint (0x66A71Dcef29A0fFBDBE3c6a460a3B5BC225Cd675) {
      values.latestVersion:
-        3
+        5
    }
```

```diff
    contract Google Cloud Oracle (0xD56e4eAb23cb81f43168F9F45211Eb027b9aC7cc) {
      values.defaultMultiplierBps:
-        12000
+        12100
    }
```

```diff
+   Status: CREATED
    contract mETH Pool (0xA572d137666DCbAdFA47C3fC41F15e90134C618c) {
    }
```

## Source code changes

```diff
.../@openzeppelin/contracts/access/Ownable.sol     |  68 +++
 .../@openzeppelin/contracts/math/SafeMath.sol      | 214 +++++++
 .../@openzeppelin/contracts/utils/Context.sol      |  24 +
 .../contracts/utils/ReentrancyGuard.sol            |  62 ++
 .../.code/mETH Pool/contracts/LPTokenERC20.sol     | 134 +++++
 .../ethereum/.code/mETH Pool/contracts/Pool.sol    | 644 +++++++++++++++++++++
 .../contracts/interfaces/IStargateFeeLibrary.sol   |  17 +
 .../stargate/ethereum/.code/mETH Pool/meta.txt     |   2 +
 8 files changed, 1165 insertions(+)
```

Generated with discovered.json: 0x98cb3e3594feadbd9145ee754066d371eda0c119

# Diff at Tue, 19 Dec 2023 13:36:06 GMT

- author: Michał Sobieraj-Jakubiec (<michalsidzej@gmail.com>)
- comparing to: main@1e70db199340dc9df7ac0996900e54067b9d4f12

## Description

Added new config values.

## Watched changes

```diff
    contract UltraLightNodeV2 (0x4D73AdB72bC3DD368966edD0f0b2148401A178E2) {
      values.stargateOracles[1]:
+        "0x000000000000000000000000d56e4eab23cb81f43168f9f45211eb027b9ac7cc"
      values.stargateOracles[0]:
+        "0x0000000000000000000000005a54fe5234e811466d5366846283323c954310b2"
      values.stargateRelayers[0]:
+        "0x000000000000000000000000902f09715b6303d4173037652fa7377e5b98089e"
    }
```

# Diff at Thu, 23 Nov 2023 13:31:10 GMT

- author: Amin Latifi (<a.latifi.al@gmail.com>)
- comparing to: main@2ff45714640abe4c50d283967078888d4af81d78

## Description

StarGateFeeLibrary7 owner was replaced: 0x1D7C6783328C145393e84fb47a7f7C548f5Ee28d -> 0x65bb797c2B9830d891D87288F029ed8dACc19705

## Watched changes

```diff
    contract StarGateFeeLibrary7 (0x8C3085D9a554884124C998CDB7f6d7219E9C1e6F) {
      values.owner:
-        "0x1D7C6783328C145393e84fb47a7f7C548f5Ee28d"
+        "0x65bb797c2B9830d891D87288F029ed8dACc19705"
    }
```

# Diff at Fri, 17 Nov 2023 12:24:03 GMT

- author: Adrian Adamiak (<adrian@adamiak.net>)
- comparing to: main@8df7aef75226275b8e56ba8d4d76ce64057b0360

## Description

One EOA owner was replaced in StarGate Multisig:

- removed: 0x285b7EEa81a5B66B62e7276a24c1e0F83F7409c1
- added: 0x2E1078e128e8AA6A70eC8d1B17A79Fc4B457d437

The same change was performed on a multisig in the Aptos project.

## Watched changes

```diff
    contract StarGate Multisig (0x65bb797c2B9830d891D87288F029ed8dACc19705) {
      values.getOwners.2:
-        "0x285b7EEa81a5B66B62e7276a24c1e0F83F7409c1"
+        "0x1D7C6783328C145393e84fb47a7f7C548f5Ee28d"
      values.getOwners.1:
-        "0x1D7C6783328C145393e84fb47a7f7C548f5Ee28d"
+        "0x565cFd7224bbc2a81a6e2a1464892ecB27efB070"
      values.getOwners.0:
-        "0x565cFd7224bbc2a81a6e2a1464892ecB27efB070"
+        "0x2E1078e128e8AA6A70eC8d1B17A79Fc4B457d437"
    }
```
