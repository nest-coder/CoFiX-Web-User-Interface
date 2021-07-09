import BigNumber from 'bignumber.js'
import { useEffect, useState } from 'react'
import useWeb3 from 'src/libs/web3/hooks/useWeb3'
import useInterval from '@use-it/interval'

const useTokenBalance = (symbol: string, address?: string) => {
  const { api } = useWeb3()

  const [balance, setBalance] = useState<{
    value: BigNumber
    amount: BigNumber
    formatAmount: string
  }>()

  async function refresh() {
    if (!address || !api) {
      return
    }

    const t = api.Tokens[symbol]
    if (!t) {
      return
    }

    const v = await t.balanceOf(address)
    if (!balance || !v.eq(balance.value)) {
      setBalance({
        amount: t.amount(v),
        value: v,
        formatAmount: t.format(t.amount(v)),
      })
    }
  }

  useEffect(() => {
    refresh()
  }, [api, symbol, address])
  useInterval(refresh, 1000)

  return balance
}

export default useTokenBalance