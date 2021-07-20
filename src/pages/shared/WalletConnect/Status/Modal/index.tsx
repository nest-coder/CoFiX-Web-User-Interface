import './styles'

import { t, Trans } from '@lingui/macro'
import { FC, memo } from 'react'
import Card from 'src/components/Card'
import { FailOutline, Loading, SuccessOutline } from 'src/components/Icon'
import useEtherScanHost from 'src/hooks/useEtherScanHost'
import useTransaction, {
  Transaction,
  TransactionReceiptStatus,
  TransactionStatus,
  TransactionType,
} from 'src/libs/web3/hooks/useTransaction'
import useWeb3 from 'src/libs/web3/hooks/useWeb3'

type Props = { onClose?: () => void }

const TransactionItem: FC<{ transaction: Transaction }> = ({ transaction }) => {
  const etherScanHost = useEtherScanHost()
  const icon = (() => {
    switch (transaction.status) {
      case TransactionStatus.Fail:
        return <FailOutline width={22} height={22} />
      case TransactionStatus.Success:
        switch (transaction.receiptStatus) {
          case TransactionReceiptStatus.Unknown:
            return <Loading width={22} height={22} className="animation-spin" />
          case TransactionReceiptStatus.Successful:
            return <SuccessOutline width={22} height={22} />
          case TransactionReceiptStatus.Reverted:
            return <FailOutline width={22} height={22} />
          default:
        }

        return <SuccessOutline width={22} height={22} />
      case TransactionStatus.Pending:
        return <Loading width={22} height={22} className="animation-spin" />
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

  const classPrefix = 'cofi-wallet-transaction'
  return (
    <div className={`${classPrefix}`}>
      <div className={`${classPrefix}-container`}>
        {icon}
        <span className={`${classPrefix}-title`}>{title}</span>
        <span className={`${classPrefix}-content`}>{content}</span>
      </div>
      {transaction.hash && (
        <a
          className={`${classPrefix}-link`}
          href={etherScanHost + '/tx/' + transaction.hash}
          target="_blank"
          rel="noreferrer"
        >
          <Trans>View</Trans>
        </a>
      )}
    </div>
  )
}

const WalletConnectModal: FC<Props> = memo((props) => {
  const { activeConnector, account, deactivate } = useWeb3()

  function disconnect() {
    deactivate()
  }

  const { transactions } = useTransaction()
  if (!activeConnector || !account) {
    return <></>
  }

  const classPrefix = 'cofi-wallet-connect-status-modal'

  return (
    <Card closable title={t`Wallet`} className={`${classPrefix}`} onClose={props.onClose}>
      <div className={`${classPrefix}-wallet`}>
        <div className={`${classPrefix}-header`}>
          <span>
            <Trans>Connected</Trans>
          </span>
          <button onClick={disconnect}>
            <Trans>Disconnect</Trans>
          </button>
        </div>
        <div className={`${classPrefix}-content`}>
          <activeConnector.Icon />
          <span>
            {account.slice(0, 8)}...{account.slice(34, 42)}
          </span>
        </div>
      </div>

      <div className={`${classPrefix}-title`}>
        <Trans>Recent Transactions</Trans>

        <ul>
          {[...transactions]
            .filter((t) => t.type !== TransactionType.Swap)
            .reverse()
            .slice(0, 5)
            .map((t: any) => {
              return (
                <li key={t.id}>
                  <TransactionItem transaction={t} />
                </li>
              )
            })}
        </ul>
      </div>
    </Card>
  )
})

export default WalletConnectModal
