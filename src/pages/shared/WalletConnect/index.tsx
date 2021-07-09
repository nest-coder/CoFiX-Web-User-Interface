import { FC } from 'react'
import useWeb3 from 'src/libs/web3/hooks/useWeb3'
import Status from './Status'
import Button from './Button'

const WalletConnect: FC = () => {
  const { account } = useWeb3()

  return account ? <Status /> : <Button />
}

export default WalletConnect
