import { useCallback, useMemo, useState } from 'react'
import useTransaction, { TransactionApproveContent, TransactionType } from './useTransaction'
import useWeb3 from './useWeb3'

const useApprove = (content: TransactionApproveContent) => {
  const { api } = useWeb3()
  const { push } = useTransaction()

  const args = useMemo(() => {
    if (!api) return

    switch (content.transactionType) {
      case TransactionType.AddLiquidity:
        return {
          token: api.Tokens[content.token[1]],
          spender: api.Contracts.CoFiXRouter.address,
        }
      case TransactionType.RemoveLiquidity:
        if (!content.token[0]) {
          return
        }
        return {
          token: content.token[1]
            ? api.CoFiXPairs[content.token[0]][content.token[1]]
            : api.CoFixAnchorPools[content.token[0]].xtokens[content.token[0]],
          spender: api.Contracts.CoFiXRouter.address,
        }
      case TransactionType.StakeXToken:
        if (!content.token[0]) {
          return
        }
        return {
          token: content.token[1]
            ? api.CoFiXPairs[content.token[0]][content.token[1]]
            : api.CoFixAnchorPools[content.token[0]].xtokens[content.token[0]],
          spender: api.Contracts.CoFiXVaultForStaking.address,
        }
      case TransactionType.Swap:
        return {
          token: api.Tokens[content.token[0]],
          spender: api.Contracts.CoFiXRouter.address,
        }
      case TransactionType.Repurchase:
        return {
          token: api.Tokens[content.token[0]],
          spender: api.Contracts.CoFiXDAO.address,
        }
    }
  }, [api, content.token[0], content.token[1], content.transactionType])

  const [allowance, setAllowance] = useState(false)

  const check = useCallback(async () => {
    if (!api || !args || !args.token || !args.spender) {
      return false
    }

    const value = await args.token.allowance(args.spender)
    setAllowance(value)
    return value
  }, [args?.token, args?.spender])

  const handler = useCallback(async () => {
    if (!api || !args || !args.token || !args.spender) {
      return
    }

    const interval = async () => {
      if (!(await check())) {
        setTimeout(interval, 200)
      }
    }

    push(
      {
        type: TransactionType.Approve,
        content,
      },
      () => args.token.approve(args.spender as string)
    )

    interval()
  }, [args])

  check()

  return {
    handler,
    allowance,
  }
}

export default useApprove
