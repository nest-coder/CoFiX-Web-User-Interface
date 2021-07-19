import { TokenUSDT } from 'src/components/Icon'
import { CoFiXPairProps } from '../api/CoFiXPair'

export const ETHUSDT: CoFiXPairProps = {
  symbol: 'ETH-USDT',
  Icon: TokenUSDT,
  pair: ['ETH', 'USDT'],
  addresses: {
    4: '0x7756f374E19E1528454B5291282D6C9e33eCBC69',
  },
  cofiAmountPerBlock: 3,
  cofiRewardPercentage: 0.9,
}

export const ETHNEST: CoFiXPairProps = {
  symbol: 'ETH-NEST',
  Icon: TokenUSDT,
  pair: ['ETH', 'NEST'],
  addresses: {
    4: '0xEC38914c82969716C5E271a63087D365B0E259b2',
  },
  cofiAmountPerBlock: 3,
  cofiRewardPercentage: 0.9,
}

export const CoFiXPairWhitelist = [ETHUSDT, ETHNEST]
