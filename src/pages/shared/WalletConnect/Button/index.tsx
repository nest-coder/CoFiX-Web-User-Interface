import { FC, useState } from 'react'

import Popup from 'reactjs-popup'
import { Trans } from '@lingui/macro'
import Modal from './Modal'
import Button, { Props as ButtonProps } from 'src/components/Button'

type Props = {
  buttonProps?: ButtonProps
}
const WalletConnectButton: FC<Props> = ({ buttonProps }) => {
  const [open, setOpen] = useState(false)

  return (
    <Popup
      open={open}
      modal
      trigger={
        <span className="display-block">
          <Button className="cofi-wallet-connect-button" onClick={() => setOpen(true)} {...buttonProps}>
            <Trans>Connect Wallet</Trans>
          </Button>
        </span>
      }
    >
      <Modal onClose={() => setOpen(false)} />
    </Popup>
  )
}

export default WalletConnectButton
