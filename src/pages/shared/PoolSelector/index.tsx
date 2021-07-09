import { FC, useState, memo } from 'react'
import './styles'
import useWeb3 from 'src/libs/web3/hooks/useWeb3'
import Popup from 'reactjs-popup'
import { useMemo } from 'react'
import { ArrowDownOutline } from 'src/components/Icon'
import { Trans, t } from '@lingui/macro'
import Tag from 'src/components/Tag'
import Card from 'src/components/Card'
import CoFiXPair from 'src/libs/web3/api/CoFiXPair'
import Button from 'src/components/Button'
import { useRef } from 'react'
import { useEffect } from 'react'
import useToken from 'src/hooks/useToken'

type Props = {
  symbol: Array<string>
  onChange?: (symbols: Array<string>) => any
}

const PoolSelector: FC<Props> = ({ ...props }) => {
  const { api } = useWeb3()
  const [symbol, setSymbol] = useState(props.symbol)

  useEffect(() => {
    if (props.onChange) {
      props.onChange(symbol)
    }
  }, [symbol])

  useEffect(() => {
    if (props.symbol !== symbol) {
      setSymbol(props.symbol)
    }
  }, [props.symbol])

  const token0 = useToken(symbol[0])
  const token1 = useToken(symbol[1] || '')

  const pairs = useMemo(() => {
    if (!api) {
      return []
    }

    const arr: Array<CoFiXPair> = []
    Object.values(api.CoFiXPairs).map((map) =>
      Object.values(map).map((p) => {
        arr.push(p)
      })
    )

    return Array.from(new Set(arr))
  }, [api])

  const pair = useMemo(() => {
    if (!api || !symbol[1]) {
      return
    }

    return api.CoFiXPairs[symbol[0]][symbol[1]]
  }, [api, symbol])

  const anchorPool = useMemo(() => {
    if (!api || symbol[1]) {
      return
    }

    return api.CoFixAnchorPools[symbol[0]]
  }, [api, symbol])

  if (!api) {
    return <></>
  }

  const classPrefix = 'cofi-pool-selector'
  if (pair && token0 && token1) {
    const ref = useRef<any>()

    return (
      <Popup
        modal
        ref={ref}
        trigger={
          <div className={`${classPrefix}-card`}>
            <div>
              <div>
                <token0.Icon />
                <token1.Icon />
              </div>

              <div>{`${token0.symbol}-${token1.symbol}`}</div>

              <ArrowDownOutline />
            </div>

            <Tag>
              <Trans>Pair Pool</Trans>
            </Tag>
          </div>
        }
      >
        <Card title={t`Select Pool`} closable onClose={() => ref.current.close()}>
          <div className={`${classPrefix}-modal`}>
            <ul>
              {pairs.map((p) => {
                const [t0, t1] = [p.pair[0], p.pair[1]]
                return (
                  <li
                    key={p.symbol}
                    onClick={() => {
                      setSymbol([t0.symbol, t1.symbol])
                      ref.current.close()
                    }}
                  >
                    <Button block primary={p.symbol === pair.symbol}>
                      <div>
                        <t0.Icon />
                        <t1.Icon />
                      </div>

                      <div>{`${t0.symbol}-${t1.symbol}`}</div>
                    </Button>
                  </li>
                )
              })}
            </ul>
          </div>
        </Card>
      </Popup>
    )
  } else if (anchorPool && token0) {
    const ref = useRef<any>()

    return (
      <Popup
        modal
        ref={ref}
        trigger={
          <div className={`${classPrefix}-card`}>
            <div>
              <div>
                <token0.Icon />
              </div>

              <div>{token0.symbol}</div>

              <ArrowDownOutline />
            </div>

            <Tag>
              <Trans>Anchor Pool</Trans>
            </Tag>
          </div>
        }
      >
        <Card title={t`Select Pool`} closable onClose={() => ref.current.close()}>
          <div className={`${classPrefix}-modal`}>
            {Array.from(new Set(Object.values(api.CoFixAnchorPools))).map((p) => {
              return (
                <div key={p.title}>
                  <h1>{p.title}</h1>

                  <ul>
                    {Object.values(p.tokens).map((s) => {
                      const t = api.Tokens[s]

                      return (
                        <li
                          key={t.symbol}
                          onClick={() => {
                            setSymbol([t.symbol])
                            ref.current.close()
                          }}
                        >
                          <Button block primary={t.symbol === symbol[0]}>
                            <div>
                              <t.Icon />
                            </div>

                            <div>{`${t.symbol}`}</div>
                          </Button>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              )
            })}
          </div>
        </Card>
      </Popup>
    )
  } else {
    return <></>
  }
}

export default memo(PoolSelector)
