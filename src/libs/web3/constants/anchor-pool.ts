import { CoFiXAnchorPoolProps } from '../api/CoFiXAnchorPool'
import { t } from '@lingui/macro'

export const ETH: CoFiXAnchorPoolProps = {
  title: t`ETH Anchor`,
  addresses: {
    4: '0xbbd6b432B280dea51f137F8234a5D0Ac36D17fdf',
  },
  anchorToken: 'ETH',
  tokens: ['ETH', 'PETH', 'WETH'],
  cofiAmountPerBlock: 3,
}

export const USD: CoFiXAnchorPoolProps = {
  title: t`USD Anchor`,
  addresses: {
    4: '0x08B79267ff01393925081396b328B6d6f82a4250',
  },
  anchorToken: 'USDT',
  tokens: ['USDT', 'PUSD', 'DAI'],
  cofiAmountPerBlock: 3,
}

export const AnchorPoolWhitelist = [ETH, USD]
