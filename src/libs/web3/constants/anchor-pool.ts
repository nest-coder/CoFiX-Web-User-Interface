import { CoFiXAnchorPoolProps } from '../api/CoFiXAnchorPool'
import { t } from '@lingui/macro'

export const ETH: CoFiXAnchorPoolProps = {
  title: t`ETH Anchor`,
  addresses: {
    4: '0xA5fF74B6BcF816AA3e13857a68c231DE6EEAF4eA',
  },
  anchorToken: 'ETH',
  tokens: ['ETH', 'PETH'],
  cofiAmountPerBlock: 3,
}

export const USD: CoFiXAnchorPoolProps = {
  title: t`USD Anchor`,
  addresses: {
    4: '0x5Ed0d53442415BE2Ac4d1bA5e289721c4e3A8ce1',
  },
  anchorToken: 'USDT',
  tokens: ['USDT', 'PUSD', 'DAI'],
  cofiAmountPerBlock: 3,
}

export const AnchorPoolWhitelist = [ETH, USD]
