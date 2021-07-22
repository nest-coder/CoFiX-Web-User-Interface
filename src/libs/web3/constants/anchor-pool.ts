import { CoFiXAnchorPoolProps } from '../api/CoFiXAnchorPool'
import { t } from '@lingui/macro'

export const ETH: CoFiXAnchorPoolProps = {
  title: t`ETH Anchor`,
  addresses: {
    4: '0x6Bba09C78b7CB6f559341BfFacCF19f5FD8AdAE6',
  },
  anchorToken: 'ETH',
  tokens: ['ETH', 'PETH'],
  cofiAmountPerBlock: 3,
}

export const USD: CoFiXAnchorPoolProps = {
  title: t`USD Anchor`,
  addresses: {
    4: '0x4Ac7ea8AfF091D12C38b5A7Cf049482298656DE6',
  },
  anchorToken: 'USDT',
  tokens: ['USDT', 'PUSD', 'DAI'],
  cofiAmountPerBlock: 3,
}

export const AnchorPoolWhitelist = [ETH, USD]
