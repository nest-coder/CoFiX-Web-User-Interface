import { FC } from 'react'
import useWeb3 from 'src/libs/web3/hooks/useWeb3'
import Button from 'src/components/Button'
import Modal from './Modal'
import Popup from 'reactjs-popup'
import { useState } from 'react'

const WalletConnectStatus: FC = () => {
  const { account } = useWeb3()
  if (!account) {
    return <></>
  }

  const [open, setOpen] = useState(false)

  return (
    <Popup
      open={open}
      modal
      closeOnDocumentClick
      trigger={
        <span>
          <Button className="cofi-wallet-connect-button" onClick={() => setOpen(true)}>
            {account.slice(0, 6)}...{account.slice(38, 42)}
          </Button>
        </span>
      }
    >
      <Modal onClose={() => setOpen(false)} />
    </Popup>
  )
}

export default WalletConnectStatus
