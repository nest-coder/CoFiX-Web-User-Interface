import { useCallback, useEffect, useState } from 'react'
import { toBigNumber } from '../util'
import useTransaction, { TransactionRepurchaseContent, TransactionType } from './useTransaction'
import useWeb3 from './useWeb3'
import BigNumber from 'bignumber.js'

const useRepurchase = (content: TransactionRepurchaseContent) => {
  const { api } = useWeb3()
  const { push } = useTransaction()

  const [args, setArgs] = useState<{
    symbol: string
    amount: BigNumber
    ethAmount: {
      value: BigNumber
      amount: BigNumber
      formatAmount: string
    }
    usdtAmount: {
      value: BigNumber
      amount: BigNumber
      formatAmount: string
    }
  }>()

  useEffect(() => {
    ;(async () => {
      if (!api) {
        return
      }

      const [ethAmount, usdtAmount] = await Promise.all([
        api.Tokens.COFI.getETHAmount(),
        api.Tokens.COFI.getUSDTAmount(),
      ])

      const amount = toBigNumber(content.amount)

      if (!amount.isNaN()) {
        const eth = ethAmount.multipliedBy(amount)
        const usdt = usdtAmount.multipliedBy(amount)

        const newArgs = {
          symbol: content.symbol,
          amount,
          ethAmount: {
            value: api.Tokens.ETH.parse(eth),
            amount: eth,
            formatAmount: api.Tokens.ETH.format(eth),
          },
          usdtAmount: {
            value: api.Tokens.USDT.parse(usdt),
            amount: usdt,
            formatAmount: api.Tokens.USDT.format(usdt),
          },
        }

        if (JSON.stringify(newArgs) !== JSON.stringify(args)) {
          setArgs(newArgs)
        }
      }
    })()
  }, [api, content.amount, content.symbol])

  const handler = useCallback(async () => {
    if (!args || !api || !api.account) {
      return
    }

    return push(
      {
        type: TransactionType.Repurchase,
        content,
      },
      async () => {
        if (args.symbol === 'ETH') {
          return api.Contracts.CoFiXDAO.contract?.redeem(
            api.Tokens.ETH.parse(content.amount).toFixed(0),
            api.account || '',
            {
              value: api.Tokens.ETH.parse(0.01).toFixed(0),
            }
          )
        } else {
          return api.Contracts.CoFiXDAO.contract?.redeemToken(
            api.Tokens[content.symbol].address || '',
            api.Tokens.USDT.parse(content.amount).toFixed(0),
            api.account || '',
            {
              value: api.Tokens.ETH.parse(0.02).toFixed(0),
            }
          )
        }
      }
    )
  }, [args])

  return {
    ...args,

    handler,
  }
}

export default useRepurchase
