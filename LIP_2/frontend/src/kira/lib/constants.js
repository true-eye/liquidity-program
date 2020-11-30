export const contractAddresses = {
  kira: {  // KEX Smart Contract Address
    42: '0x41379EF961492a594F91bB0F966c2CeD32B49544',
  },
  kiraStaking: {
    42: '0xb3b3abadb4C97C0a957F85D32fB23C6172e62Fdc',
  },
  weth: {
    42: '0xd0A1E359811322d97991E03f863a0C30C2cF029C',
  },
}

export const supportedPools = [
  {
    pid: 0,
    lpAddresses: {
      42: '0xb88b44f171d6fc4ef6efce313819067e62002d5c',
    },
    tokenAddresses: {
      42: '0x41379EF961492a594F91bB0F966c2CeD32B49544'
    },
    name: 'Apple (KEX/ETH) Pool',
    symbol: 'KEX-ETH UNI-V2 LP',
    tokenSymbol: 'KEX',
    icon: "🍎",
  },
  {
    pid: 1,
    lpAddresses: {
      42: '0xb88B44F171d6fC4EF6eFcE313819067E62002D5c',
    },
    tokenAddresses: {
      42: '0x41379EF961492a594F91bB0F966c2CeD32B49544',
    },
    name: 'Melon (USDT) Pool',
    symbol: 'KEX-USDT UNI-V2 LP',
    tokenSymbol: 'USDT',
    icon: "🍋",
  },
]