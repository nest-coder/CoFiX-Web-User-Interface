import './styles'
import { FC } from 'react'
import useWeb3 from 'src/libs/web3/hooks/useWeb3'
import Button from 'src/components/Button'
import Modal from './Modal'
import Popup from 'reactjs-popup'
import { useState } from 'react'
import useTransaction, { TransactionReceiptStatus } from 'src/libs/web3/hooks/useTransaction'
import { Loading } from 'src/components/Icon'

const WalletConnectStatus: FC = () => {
  const { account } = useWeb3()
  if (!account) {
    return <></>
  }

  const [open, setOpen] = useState(false)
  const { transactions } = useTransaction()

  const pendingTransactions = (transactions || []).filter(
    (t) => t?.receiptStatus === TransactionReceiptStatus.Unknown
  ).length

  const classPrefix = 'cofi-wallet-connect'
  return (
    <Popup
      open={open}
      modal
      closeOnDocumentClick
      trigger={
        <span>
          <Button className={`${classPrefix}-button`} onClick={() => setOpen(true)}>
            {!!pendingTransactions && (
              <span className={`${classPrefix}-pending`}>
                <Loading className="animation-spin" height={30} width={30} />
                <span>{pendingTransactions}</span>
              </span>
            )}
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