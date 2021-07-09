import { useMemo } from 'react'
import useWeb3 from 'src/libs/web3/hooks/useWeb3'

const useToken = (symbol: string) => {
  const { api } = useWeb3()

  return useMemo(() => {
    if (!api) {
      return
    }

    return api.Tokens[symbol]
  }, [api, symbol])
}

export default useToken
