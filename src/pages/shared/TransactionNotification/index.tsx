import './styles'
import { FC } from 'react'
import { FailOutline, SuccessOutline } from 'src/components/Icon'
import useEtherScanHost from 'src/hooks/useEtherScanHost'
import { Transaction, TransactionReceiptStatus, TransactionType } from 'src/libs/web3/hooks/useTransaction'
import { Trans, t } from '@lingui/macro'
import { toast } from 'react-toastify'

type Props = {
  transaction: Transaction
}

const TransactionNotification: FC<Props> = ({ transaction }) => {
  const etherScanHost = useEtherScanHost()
  const icon = (() => {
    switch (transaction.receiptStatus) {
      case TransactionReceiptStatus.Successful:
        return <SuccessOutline width={28} height={28} />
      case TransactionReceiptStatus.Reverted:
        return <FailOutline width={28} height={28} />
      default:
        return <></>
    }
  })()

  const title = (() => {
    switch (transaction.type) {
      case TransactionType.Swap:
        return t`Swap`
      case TransactionType.AddLiquidity:
        return t`Add Liquidity`
      case TransactionType.RemoveLiquidity:
        return t`Remove Liquidity`
      case TransactionType.StakeXToken:
        return t`Stake XToken`
      case TransactionType.WithdrawXToken:
        return t`Withdraw XToken`
      case TransactionType.ClaimCOFI:
        return t`Claim COFI`
      case TransactionType.Repurchase:
        return t`Repurchase`
      case TransactionType.Approve:
        return t`Approve`
      default:
        return t`Unsupported Type`
    }
  })()

  const content = (() => {
    switch (transaction.type) {
      case TransactionType.Swap:
        return `${transaction.content.src.amount} ${transaction.content.src.symbol} → ${transaction.content.dest.amount} ${transaction.content.dest.symbol}`
      case TransactionType.AddLiquidity:
        return (
          `${transaction.content.token0.amount} ${transaction.content.token0.symbol}` +
          (transaction.content.token1
            ? ` + ${transaction.content.token1.amount} ${transaction.content.token1.symbol}`
            : '')
        )
      case TransactionType.RemoveLiquidity:
        return `${transaction.content.liquidity} XToken`
      case TransactionType.ClaimCOFI:
        return `${transaction.content.amount} COFI`
      case TransactionType.Repurchase:
        return `${transaction.content.amount} COFI`
      case TransactionType.Approve:
        switch (transaction.content.transactionType) {
          case TransactionType.AddLiquidity:
            return `${t`Add Liquidity`} ${transaction.content.token.filter(Boolean).join(' + ')}`
          case TransactionType.RemoveLiquidity:
            return `${t`Remove Liquidity`} ${transaction.content.token.filter(Boolean).join(' + ')}`
          default:
            return ''
        }
      default:
        return t`Unsupported Content`
    }
  })()
  const classPrefix = 'cofi-transaction-notification'

  return (
    <div className={`${classPrefix}`}>
      <div className={`${classPrefix}-container`}>
        {icon}
        <div className={`${classPrefix}-desc`}>
          <div className={`${classPrefix}-title`}>{title}</div>
          <div className={`${classPrefix}-content`}>{content}</div>
        </div>
      </div>

      <a
        className={`${classPrefix}-link`}
        href={etherScanHost + '/tx/' + transaction.hash}
        target="_blank"
        rel="noreferrer"
      >
        <Trans>View in Browser</Trans>
      </a>
    </div>
  )
}

export default TransactionNotification

export const notifyTransaction = (transaction: Transaction) => {
  toast(<TransactionNotification transaction={transaction} />, {
    closeOnClick: false,
  })
}
