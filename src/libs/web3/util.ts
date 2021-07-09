import { BigNumberish } from '@ethersproject/bignumber'
import BigNumber from 'bignumber.js'

export const toBigNumber = (n: BigNumberish | BigNumber) => {
  if (n instanceof BigNumber) {
    return n
  }

  if (typeof n === 'string') {
    return new BigNumber(n)
  }

  if (n.toString) {
    return new BigNumber(n.toString())
  }

  return new BigNumber(NaN)
}
