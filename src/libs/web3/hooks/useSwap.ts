import { useCallback, useEffect, useState } from 'react'
import { ADDRESS_ZERO } from '../constants/constant'
import useTransaction, { TansactionSwapContent, TransactionType } from './useTransaction'
import useWeb3 from './useWeb3'
import BigNumber from 'bignumber.js'
import { deadline } from 'src/libs/time'
import { toBigNumber } from '../util'
import useSlippageTolerance from 'src/hooks/useSlippageTolerance'

const useSwap = (content: TansactionSwapContent) => {
  const { api } = useWeb3()
  const { push } = useTransaction()
  const { ratio: slippageTolerance } = useSlippageTolerance()

  const [result, setResult] = useState<{
    ratio: {
      oracle: BigNumber
      final: BigNumber
    }

    amount: {
      oracle: BigNumber
      oracleFormat: string
      final: BigNumber
      finalFormat: string
      spread: BigNumber
      spreadFormat: string
    }

    oracleCallFee: {
      value: BigNumber
      amount: BigNumber
      format: string
    }
  }>()

  const [args, setArgs] = useState<{
    paths?: Array<string>
    amountIn: string
    amountOutMin: string
    amountOutMinFormat: string
    src: string
    dest: string
    account: string
    ethValue: string
  }>()

  useEffect(() => {
    ;(async () => {
      if (!api) {
        return
      }

      const srcToken = api.Tokens[content.src.symbol]
      const destToken = api.Tokens[content.dest.symbol]
      if (!srcToken || !destToken) {
        return
      }

      const [srcSwapInfo, destSwapInfo] = await Promise.all([
        srcToken.getSwapInfo(content.src.amount),
        destToken.getSwapInfo(content.dest.amount),
      ])

      const oracleRatio = toBigNumber(
        destToken
          .amount(destSwapInfo.oracleValuePerETH)
          .div(srcToken.amount(srcSwapInfo.oracleValuePerETH))
          .toFixed(destToken.decimals)
      )
      const oralceValue = destToken.parse(oracleRatio)

      const finalRatio = toBigNumber(
        destToken
          .amount(destSwapInfo.finalValuePerETH)
          .div(srcToken.amount(srcSwapInfo.finalValuePerETH))
          .toFixed(destToken.decimals)
      )
      const finalValue = destToken.parse(finalRatio)

      const spreadValue = finalValue.minus(oralceValue)

      let oracleCallFee = api.Tokens.ETH.parse(0.01)
      const pairFor = await api.Contracts.CoFiXRouter.pairFor(srcToken.symbol, destToken.symbol)
      let paths
      if (!pairFor || pairFor === ADDRESS_ZERO) {
        paths = await api.Contracts.CoFiXRouter.getRouterPath(srcToken.symbol, destToken.symbol)
        if (!paths) {
          setResult(undefined)
          return
        }

        if (paths) {
          const ethPos = paths.indexOf(ADDRESS_ZERO)
          if (ethPos > 0 && ethPos < paths.length - 1) {
            oracleCallFee = api.Tokens.ETH.parse(0.02)
          }
        }
      }

      const newResult = {
        ratio: {
          oracle: oracleRatio,
          final: finalRatio,
        },
        amount: {
          oracle: destToken.amount(oralceValue),
          oracleFormat: destToken.format(destToken.amount(oralceValue)),
          final: destToken.amount(finalValue),
          finalFormat: destToken.format(destToken.amount(finalValue)),
          spread: destToken.amount(spreadValue),
          spreadFormat: destToken.format(destToken.amount(spreadValue)),
        },
        oracleCallFee: {
          value: oracleCallFee,
          amount: api.Tokens.ETH.amount(oracleCallFee),
          format: api.Tokens.ETH.amount(oracleCallFee).toFixed(2),
        },
      }

      if (JSON.stringify(newResult) !== JSON.stringify(result)) {
        setResult(newResult)
      }

      let ethValue = oracleCallFee
      if (srcToken.symbol === 'ETH') {
        ethValue = ethValue.plus(srcToken.parse(content.src.amount))
      }

      const amountOutMin = toBigNumber(
        destToken
          .parse(content.dest.amount)
          .multipliedBy(1 - slippageTolerance)
          .toFixed(0)
      )
      const newArgs = {
        paths,
        amountIn: srcToken.parse(content.src.amount).toFixed(0),
        amountOutMin: amountOutMin.toFixed(0),
        amountOutMinFormat: destToken.format(destToken.amount(amountOutMin)),
        // amountOutMin: '0',

        account: api.account || '',
        src: srcToken.address || '',
        dest: destToken.address || '',
        ethValue: ethValue.toFixed(0),
      }
      if (JSON.stringify(newArgs) !== JSON.stringify(args)) {
        setArgs(newArgs)
      }
    })()
  }, [api, content.src.amount, content.src.symbol, content.dest.amount, content.dest.symbol])

  const handler = useCallback(async () => {
    if (!api || !args) {
      return
    }

    push(
      {
        type: TransactionType.Swap,
        content,
      },
      async () => {
        if (args.paths) {
          return api.Contracts.CoFiXRouter.contract?.swapExactTokensForTokens(
            args.paths,
            args.amountIn,
            args.amountOutMin,
            args.account,
            args.account,
            deadline(),
            {
              value: args.ethValue,
            }
          )
        } else {
          return api.Contracts.CoFiXRouter.contract?.swap(
            args.src,
            args.dest,
            args.amountIn,
            args.amountOutMin,
            args.account,
            args.account,
            deadline(),
            {
              value: args.ethValue,
            }
          )
        }
      }
    )
  }, [args])

  return { ...result, handler, paths: args?.paths, amountOutMinFormat: args?.amountOutMinFormat }
}

export default useSwap
