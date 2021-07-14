import { FC, ChangeEvent, useRef } from 'react'
import './styles'
import { t } from '@lingui/macro'
import { useState } from 'react'
import { useEffect } from 'react'
import Modal from './Modal'
import Popup from 'reactjs-popup'
import { ArrowDownOutline, TokenXToken } from 'src/components/Icon'
import useGasFee from 'src/hooks/useGasFee'
import useTokenBalance from 'src/hooks/useTokenBalance'
import BigNumber from 'bignumber.js'
import useWeb3 from 'src/libs/web3/hooks/useWeb3'
import useToken from 'src/hooks/useToken'
import { toBigNumber } from 'src/libs/web3/util'
import classNames from 'classnames'

type Props = {
  title?: string
  symbol?: string

  selectable?: boolean
  maximize?: boolean

  balance?: {
    amount: BigNumber
    value: BigNumber
    formatAmount: string
  }
  balanceTitle?: string
  noExtra?: boolean

  className?: string
  editable?: boolean

  value?: string
  onChange?: (amount: string, symbol: string) => any
}

const TokenInput: FC<Props> = ({ ...props }) => {
  const [value, setValue] = useState(props.value as string)
  const [symbol, setSymbol] = useState(props.symbol as string)
  const token = useToken(symbol)

  const { api, account } = useWeb3()
  const modal = useRef<any>()
  const gasFee = useGasFee()
  const tokenBalance = useTokenBalance(symbol, account || '')
  const [balance, setBalance] = useState<Props['balance']>(props.balance || tokenBalance)

  useEffect(() => {
    if (props.balance) {
      setBalance(props.balance)
    } else {
      setBalance(tokenBalance)
    }
  }, [props.balance, tokenBalance])

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    let v = e.target.value

    if (v.length > 18) {
      return
    }

    const value = toBigNumber(v)
    if (value.lt(0)) {
      v = '0'
    }

    setValue(v)
  }

  const handleMax = () => {
    if (!balance) {
      return
    }
    if (!api) {
      return
    }

    if (symbol === 'ETH' && gasFee) {
      // NOTICE: 50000 is estimate gas limit
      setValue(api.Tokens.ETH.amount(balance.value.minus(gasFee.value.multipliedBy(50000))).toString())
    } else {
      setValue(balance.amount.toString())
    }
  }

  const handleSelectToken = (symbol: string) => {
    setSymbol(symbol)
    modal.current.close()
  }

  useEffect(() => {
    if (typeof props.value === 'undefined') {
      return
    }

    setValue(props.value)
  }, [props.value])

  useEffect(() => {
    if (typeof props.symbol === 'undefined') {
      return
    }

    setSymbol(props.symbol)
  }, [props.symbol])

  useEffect(() => {
    if (props.onChange) {
      props.onChange(value, symbol)
    }
  }, [value, symbol])

  const insufficientBalance = !!balance && toBigNumber(value).gt(balance.amount)
  const classPrefix = 'cofi-token-input'
  return (
    <div className={`${classPrefix} ${props.className}`}>
      {props.title && <div className={`${classPrefix}-title`}>{props.title}</div>}

      <div className={`${classPrefix}-container`}>
        <div className={`${classPrefix}-token`}>
          {token && (token.isXToken ? <TokenXToken /> : <token.Icon />)}
          <span>{token && (token.isXToken ? 'XToken' : token.symbol)}</span>

          {props.selectable && (
            <Popup
              modal
              ref={modal}
              trigger={
                <span className={`${classPrefix}-arrow`}>
                  <ArrowDownOutline />
                </span>
              }
            >
              <Modal onClose={() => modal.current.close()} onSelect={handleSelectToken} />
            </Popup>
          )}
        </div>

        <input
          type="number"
          className={`${classPrefix}-input`}
          value={value}
          onChange={handleInput}
          placeholder={props.editable === false ? '--' : '0.0'}
          disabled={props.editable === false}
        />
      </div>

      {props.noExtra !== true && (
        <div className={`${classPrefix}-extra`}>
          <span
            className={classNames({
              [`${classPrefix}-balance`]: true,
              error: insufficientBalance,
            })}
          >{`${props.balanceTitle || t`Balance:`} ${balance ? balance.formatAmount : '--'} ${
            token ? (token.isXToken ? 'XToken' : token.symbol) : ''
          }`}</span>

          {props.maximize && balance && (
            <span className={`${classPrefix}-max`} onClick={handleMax}>
              MAX
            </span>
          )}
        </div>
      )}
    </div>
  )
}

TokenInput.defaultProps = {
  selectable: true,
  maximize: true,
  symbol: 'ETH',
}

export default TokenInput
