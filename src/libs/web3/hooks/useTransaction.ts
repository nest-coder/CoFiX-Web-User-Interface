import { useEffect, useState } from 'react'
import { createContainer } from 'unstated-next'
import { ContractTransaction } from '@ethersproject/contracts'
import useWeb3 from './useWeb3'
import localforage from 'localforage'

export enum TransactionType {
  Swap,
  AddLiquidity,
  RemoveLiquidity,
  StakeXToken,
  WithdrawXToken,
  ClaimCOFI,
  Repurchase,
  Approve,
}

export enum TransactionStatus {
  Pending,
  Success,
  Fail,
}

export type TansactionSwapContent = {
  src: {
    amount: string
    symbol: string
  }
  dest: {
    amount: string
    symbol: string
  }
}

export type TransactionRepurchaseContent = {
  amount: string
  symbol: string
}

export type TransasctionClaimCOFIContent = {
  token0: string
  token1?: string
  amount?: string
}

export type TransactionAddLiquidityContent = {
  token0: { amount: string; symbol: string }
  token1?: { amount: string; symbol: string }

  liquidity?: string
  autoStake?: boolean
}

export type TransactionRemoveLiquidityContent = {
  token0: string
  token1?: string
  liquidity: string

  receive?: Array<{ symbol: string; amount: string }>
}

export type TransactionStakeXTokenContent = {
  token0: string
  token1?: string
  amount: string
}

export type TransactionWithdrawXTokenContent = {
  token0: string
  token1?: string
  amount: string
}

export type TransactionApproveContent = {
  transactionType: TransactionType
  token: [string, string]
}

export type Transaction = {
  id?: string
  timestamp?: number
  status?: TransactionStatus
  hash?: string
  msg?: string
  tx?: string
} & (
  | {
      type: TransactionType.Swap
      content: TansactionSwapContent
    }
  | {
      type: TransactionType.Repurchase
      content: TransactionRepurchaseContent
    }
  | {
      type: TransactionType.ClaimCOFI
      content: TransasctionClaimCOFIContent
    }
  | {
      type: TransactionType.AddLiquidity
      content: TransactionAddLiquidityContent
    }
  | {
      type: TransactionType.RemoveLiquidity
      content: TransactionRemoveLiquidityContent
    }
  | {
      type: TransactionType.Approve
      content: TransactionApproveContent
    }
  | {
      type: TransactionType.StakeXToken
      content: TransactionStakeXTokenContent
    }
  | {
      type: TransactionType.WithdrawXToken
      content: TransactionWithdrawXTokenContent
    }
)

const _useTransaction = () => {
  const { api } = useWeb3()
  const [transactions, setTransactions] = useState<Array<Transaction>>([])
  const [current, setCurrent] = useState<Transaction>()
  const [showModal, setShowModal] = useState(false)

  const push = async (transaction: Transaction, t: () => Promise<ContractTransaction | undefined>) => {
    try {
      transaction.id = `${Date.now()}`
      transaction.timestamp = Date.now()
      transaction.status = TransactionStatus.Pending

      setCurrent({ ...transaction })
      setTransactions(transactions.concat(transaction))
      setShowModal(true)

      const result = await t()
      if (!result) {
        return
      }

      transaction.hash = result.hash
      transaction.status = TransactionStatus.Success
      // transaction.tx = utils.serializeTransaction(result)
      setCurrent({ ...transaction })
    } catch (e) {
      console.error(e)
      transaction.msg = e
      transaction.status = TransactionStatus.Fail
      setCurrent({ ...transaction })
    }
  }

  useEffect(() => {
    if (!api) {
      return
    }

    ;(async () => {
      const cache = await localforage.getItem(`transactions:${api.chainId}`)
      if (cache) {
        setTransactions(JSON.parse(cache as string) as any)
      }
    })()
  }, [api])

  useEffect(() => {
    if (!api) {
      return
    }

    ;(async () => {
      await localforage.setItem(`transactions:${api.chainId}`, JSON.stringify(transactions))
    })()
  }, [api, transactions])

  useEffect(() => {
    if (!current) {
      return
    }

    const index = transactions.findIndex((t) => t.id === current.id)
    if (index > -1) {
      transactions[index] = current as any
      setTransactions([...transactions])
    }
  }, [current])

  const closeModal = () => {
    setShowModal(false)
  }

  return { transactions, push, current, showModal, closeModal }
}

const transaction = createContainer(_useTransaction)

const useTransaction = () => {
  return transaction.useContainer()
}

export default useTransaction

export const Provider = transaction.Provider
