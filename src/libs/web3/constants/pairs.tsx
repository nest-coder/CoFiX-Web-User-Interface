import { TokenUSDT } from 'src/components/Icon'
import { CoFiXPairProps } from '../api/CoFiXPair'

export const ETHUSDT: CoFiXPairProps = {
  symbol: 'ETH-USDT',
  Icon: TokenUSDT,
  pair: ['ETH', 'USDT'],
  addresses: {
    4: '0xb7719040D4357A2a58D1293a52511b57bCbd533D',
  },
  cofiAmountPerBlock: 3,
  cofiRewardPercentage: 0.9,
}

export const ETHNEST: CoFiXPairProps = {
  symbol: 'ETH-NEST',
  Icon: TokenUSDT,
  pair: ['ETH', 'NEST'],
  addresses: {
    4: '0x91025AF7C4699473C9f9Cae7876c86e4ef715107',
  },
  cofiAmountPerBlock: 3,
  cofiRewardPercentage: 0.9,
}

export const CoFiXPairWhitelist = [ETHUSDT, ETHNEST]
