import { FC, useState } from 'react'
import './styles'

import { t, Trans } from '@lingui/macro'
import Card from 'src/components/Card'
import CollapseCard from 'src/components/CollapaseCard'
import TokenInput from 'src/components/TokenInput'
import { SwitchOutline } from 'src/components/Icon'
import Field from 'src/components/Field'
import useWeb3 from 'src/libs/web3/hooks/useWeb3'
import Popup from 'reactjs-popup'
import { useEffect } from 'react'
import { TransactionType } from 'src/libs/web3/hooks/useTransaction'
import useSwap from 'src/libs/web3/hooks/useSwap'
import { toBigNumber } from 'src/libs/web3/util'
import { useMemo } from 'react'
import useSlippageTolerance from 'src/hooks/useSlippageTolerance'
import TransactionButtonGroup from '../shared/TransactionButtonGroup'
import { RiskAction, useRiskModal } from '../shared/RiskModal'

const Swap: FC = () => {
  const { api } = useWeb3()
  const { ratio: slippageTolerance } = useSlippageTolerance()
  const [src, setSrc] = useState({ symbol: 'ETH', amount: '' })
  const [dest, setDest] = useState({ symbol: 'USDT', amount: '' })
  const swap = useSwap({ src, dest })
  const [confirm, setConfirm] = useState(false)
  const { checkRisk } = useRiskModal()
  const [insufficient, setInsufficient] = useState(false)

  const handleSwitch = () => {
    const oldSrc = src
    setSrc(dest)
    setDest(oldSrc)
  }

  const handleChangeSrc = (amount: string, symbol: string) => {
    if (symbol === dest.symbol) {
      handleSwitch()
    } else {
      if (symbol === src.symbol && amount === src.amount) {
        return
      }
      setSrc({
        symbol,
        amount,
      })

      if (swap?.ratio && amount) {
        setDest({
          symbol: dest.symbol,
          amount: toBigNumber(amount).multipliedBy(swap?.ratio.final).toString(),
        })
      }
    }
  }

  const handleChangeDest = (amount: string, symbol: string) => {
    if (symbol === src.symbol) {
      handleSwitch()
    } else {
      if (symbol === dest.symbol && amount === dest.amount) {
        return
      }
      setDest({
        symbol,
        amount,
      })

      if (swap?.ratio && amount) {
        setSrc({
          symbol: dest.symbol,
          amount: toBigNumber(amount).div(swap?.ratio).toString(),
        })
      }
    }
  }

  useEffect(() => {
    if (swap?.ratio && src.amount) {
      setDest({
        symbol: dest.symbol,
        amount: toBigNumber(src.amount).multipliedBy(swap?.ratio).toString(),
      })
    }
  }, [swap?.ratio])

  const classPrefix = 'cofi-page-swap'
  const sectionSwap = (
    <section>
      <Card title={t`Exchange`}>
        <div className="token-input-pair">
          <TokenInput
            title={t`FROM`}
            symbol={src.symbol}
            value={src.amount}
            onChange={handleChangeSrc}
            checkInsufficientBalance
            onInsufficientBalance={(b) => setInsufficient(b)}
          />
          <SwitchOutline onClick={handleSwitch} />
          <TokenInput
            title={t`TO(ESTIMATED)`}
            symbol={dest.symbol}
            value={dest.amount}
            onChange={handleChangeDest}
            loading={swap.loading}
          />
        </div>

        <Field
          name={t`Trading Price`}
          value={`1 ${src.symbol} = ${swap?.amount?.finalFormat || '--'} ${dest.symbol}`}
          tooltip={
            <>
              <h1>
                <Trans>Trade Price Calculation</Trans>
              </h1>

              <section>
                <p>
                  <Trans>
                    The Trade Price is calculated based on the Decentralized NEST Oracle Price, the Computable Risk
                    Compensation Coefficient, the Price Impact, and a Trading Fee. Trading Fee goes to all the COFI
                    holders.
                  </Trans>
                </p>
              </section>
            </>
          }
        >
          {swap && (
            <div className={`${classPrefix}-trading-price-container`}>
              <ul>
                <li>
                  <span>
                    <Trans>NEST Oracle Price</Trans>
                  </span>
                  <span>{`1 ${src.symbol} = ${swap?.amount?.oracleFormat || '--'} ${dest.symbol}`}</span>
                </li>

                <li>
                  <span>
                    <Trans>Price Spread</Trans>
                  </span>
                  <span>{`${swap?.amount?.spreadFormat || '--'} ${dest.symbol}`}</span>
                </li>
              </ul>

              <div className={`${classPrefix}-trading-price-tip`}>
                <span>
                  <Trans>Includes Risk Compensation,Trading Fee and Price Impact</Trans>
                </span>

                <Popup
                  on="hover"
                  trigger={
                    <span className="link">
                      <Trans>How is this calculated?</Trans>
                    </span>
                  }
                >
                  <div className={`${classPrefix}-trading-price-popup`}>
                    <section>
                      <h1>
                        <Trans>Trade Price Calculation</Trans>
                      </h1>
                    </section>

                    <section>
                      <p>
                        <Trans>
                          The Trade Price is calculated based on the Decentralised NEST Oracle Price, the Computable
                          Risk Compensation Coefficient, the Price Impact, and a Trading Fee. Trading Fee goes to all
                          the COFI holders.
                        </Trans>
                      </p>
                    </section>
                  </div>
                </Popup>
              </div>
            </div>
          )}
        </Field>

        <Field
          name={t`Oracle Call Fee`}
          value={`+ ${swap?.oracleCallFee?.format || '--'} ETH`}
          tooltip={
            <>
              <h1>
                <Trans>Oracle Call Fee</Trans>
              </h1>

              <section>
                <p>
                  <Trans>
                    Oracle Fee is what you pay to the NEST protocol for providing accurate market price data to the
                    smart contract.
                  </Trans>
                </p>
              </section>
            </>
          }
        />

        <TransactionButtonGroup
          approve={{
            transactionType: TransactionType.Swap,
            token: [src.symbol, dest.symbol],
          }}
          disabled={!src.amount || toBigNumber(src.amount).lte(0) || !swap.ratio || insufficient}
          onClick={async () => {
            try {
              await checkRisk(RiskAction.Swap)
              setConfirm(true)
            } catch (_) {
              // comment for eslint
            }
          }}
        >
          <Trans>Exchange</Trans>
        </TransactionButtonGroup>
      </Card>
    </section>
  )

  const paths = useMemo(() => {
    if (swap.paths) {
      return swap.paths.map((p) => api?.getTokenByAddress(p)?.symbol).join(' > ')
    } else {
      return [src.symbol, dest.symbol].join(' > ')
    }
  }, [swap.paths])

  const sectionConfirm = (
    <section>
      <Card title={t`Confirm Swap`} backward onBackwardClick={() => setConfirm(false)}>
        <Field name={t`FROM`} value={`${src.amount} ${src.symbol}`} />
        <Field name={t`TO(ESTIMATED)`} value={`${dest.amount} ${dest.symbol}`} />
        <Field name={t`Swap Rate`} value={`1 ${src.symbol} = ${swap?.amount?.finalFormat || '--'} ${dest.symbol}`} />
        <Field name={t`Swap Route`} value={paths} />
        {swap?.swapInfo?.fee && (
          <Field
            name={t`FEE(ESTIMATED)`}
            value={
              <>
                {Object.keys(swap.swapInfo.fee).map((token) => (
                  <div key={token}>
                    {toBigNumber(swap?.swapInfo?.fee[token] || '').toFixed(18)} {token}
                  </div>
                ))}
              </>
            }
          />
        )}
        <Field
          name={t`Oracle Call Fee`}
          value={`+ ${swap?.oracleCallFee?.format || '--'} ETH`}
          tooltip={
            <>
              <h1>
                <Trans>Oracle Call Fee</Trans>
              </h1>

              <section>
                <p>
                  <Trans>
                    Oracle Fee is what you pay to the NEST protocol for providing accurate market price data to the
                    smart contract.
                  </Trans>
                </p>
              </section>
            </>
          }
        />
        <Field
          tooltip={
            <>
              <section>
                <p>
                  <Trans>If you receive less than this amount, the transaction will be rejected</Trans>
                </p>
              </section>
            </>
          }
          name={t`Minimum Received`}
          value={`${swap.amountOutMinFormat} ${dest.symbol}`}
        />
        <Field
          tooltip={
            <>
              <section>
                <p>
                  <Trans>
                    If your actual exchange rate is {`${slippageTolerance * 100} %`} higher than the current page, the
                    transaction will be rejected
                  </Trans>
                </p>
              </section>
            </>
          }
          name={t`Slippage Tolerance`}
          value={`${slippageTolerance * 100} %`}
        />

        <TransactionButtonGroup
          approve={{
            transactionType: TransactionType.Swap,
            token: [src.symbol, dest.symbol],
          }}
          disabled={!src.amount || !swap.ratio}
          onClick={swap.handler}
        >
          <Trans>Exchange</Trans>
        </TransactionButtonGroup>
      </Card>
    </section>
  )

  return (
    <div className={`cofi-page ${classPrefix}`}>
      {confirm ? sectionConfirm : sectionSwap}

      <section>
        <CollapseCard title={t`What is CoFiX Swap?`}>
          <section>
            <p>
              <Trans>CoFiX Dapp is the most efficient Token Swap on Ethereum.</Trans>
            </p>
            <p>
              <Trans>Traders always get market prices at the smallest spread.</Trans>
            </p>
            <p>
              <Trans>Reversing trade in CoFiX can mining COFI Tokens by hedging.</Trans>
            </p>
          </section>

          <section>
            <p>
              <a
                href="https://github.com/Computable-Finance/Doc#5-trading-mechanism"
                target="_blank"
                rel="noreferrer"
                className="link"
              >
                <Trans>Read More about CoFiX Mining</Trans>
              </a>
            </p>
          </section>
        </CollapseCard>
      </section>
    </div>
  )
}

export default Swap
