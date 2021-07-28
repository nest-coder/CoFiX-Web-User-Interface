import { CoFiXAnchorPoolProps } from '../api/CoFiXAnchorPool'
import { t } from '@lingui/macro'

export const ETH: CoFiXAnchorPoolProps = {
  title: t`ETH Anchor`,
  addresses: {
    4: '0xD93F55F65316de63497163e4d2FD0390A1805c35',
  },
  anchorToken: 'ETH',
  tokens: ['ETH', 'PETH'],
  cofiAmountPerBlock: 3,
}

export const USD: CoFiXAnchorPoolProps = {
  title: t`USD Anchor`,
  addresses: {
    4: '0xdCa0d07422691f286f5CE641FF4F40D5979BC0D7',
  },
  anchorToken: 'USDT',
  tokens: ['USDT', 'PUSD', 'USDC'],
  cofiAmountPerBlock: 3,
}

export const AnchorPoolWhitelist = [ETH, USD]
