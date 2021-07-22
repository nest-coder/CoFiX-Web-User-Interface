import { TokenCOFI, TokenHBTC, TokenNEST, TokenUSDT } from 'src/components/Icon'

import { CoFiXPairProps } from '../api/CoFiXPair'

export const ETHUSDT: CoFiXPairProps = {
  symbol: 'ETH-USDT',
  Icon: TokenUSDT,
  pair: ['ETH', 'USDT'],
  addresses: {
    4: '0x5930c58d71b83bc4586D13f5767aa921ca8B4143',
  },
  cofiAmountPerBlock: 3,
  cofiRewardPercentage: 0.9,
}

export const ETHHBTC: CoFiXPairProps = {
  symbol: 'ETH-HBTC',
  Icon: TokenHBTC,
  pair: ['ETH', 'HBTC'],
  addresses: {
    4: '0xF91809d869082DaEc8ed4fa36cB9423C2132726B',
  },
  cofiAmountPerBlock: 3,
  cofiRewardPercentage: 0.9,
}

export const ETHNEST: CoFiXPairProps = {
  symbol: 'ETH-NEST',
  Icon: TokenNEST,
  pair: ['ETH', 'NEST'],
  addresses: {
    4: '0x9eD5c27a4527927a4eF8cAa36547CAb502631A69',
  },
  cofiAmountPerBlock: 3,
  cofiRewardPercentage: 0.9,
}

export const ETHCOFI: CoFiXPairProps = {
  symbol: 'ETH-COFI',
  Icon: TokenCOFI,
  pair: ['ETH', 'COFI'],
  addresses: {
    4: '0xF3Ef9e8Cbdd0424E0B152709358749155697C2d6',
  },
  cofiAmountPerBlock: 3,
  cofiRewardPercentage: 0.9,
}

export const CoFiXPairWhitelist = [ETHUSDT, ETHHBTC, ETHNEST, ETHCOFI]
