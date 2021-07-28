import { TokenCOFI, TokenHBTC, TokenNEST, TokenUSDT } from 'src/components/Icon'

import { CoFiXPairProps } from '../api/CoFiXPair'

export const ETHUSDT: CoFiXPairProps = {
  symbol: 'ETH-USDT',
  Icon: TokenUSDT,
  pair: ['ETH', 'USDT'],
  addresses: {
    4: '0xf749fA2B6E75F9EfBa8427eA86036f38A7173F9C',
  },
  cofiAmountPerBlock: 3,
  cofiRewardPercentage: 0.9,
}

export const ETHHBTC: CoFiXPairProps = {
  symbol: 'ETH-HBTC',
  Icon: TokenHBTC,
  pair: ['ETH', 'HBTC'],
  addresses: {
    4: '0xB042c57997a561FB93C510BA1811927B78452EAF',
  },
  cofiAmountPerBlock: 3,
  cofiRewardPercentage: 0.9,
}

export const ETHNEST: CoFiXPairProps = {
  symbol: 'ETH-NEST',
  Icon: TokenNEST,
  pair: ['ETH', 'NEST'],
  addresses: {
    4: '0x6FAc11eE801713460B2b9Fe089f473c48756D45d',
  },
  cofiAmountPerBlock: 3,
  cofiRewardPercentage: 0.9,
}

export const ETHCOFI: CoFiXPairProps = {
  symbol: 'ETH-COFI',
  Icon: TokenCOFI,
  pair: ['ETH', 'COFI'],
  addresses: {
    4: '0x45579827334583680c33ae9110C6a65806DB6EC7',
  },
  cofiAmountPerBlock: 3,
  cofiRewardPercentage: 0.9,
}

export const CoFiXPairWhitelist = [ETHUSDT, ETHHBTC, ETHNEST, ETHCOFI]
