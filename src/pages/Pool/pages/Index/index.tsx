import { FC, useState } from 'react'
import './styles'
import Card from 'src/components/Card'
import Tag from 'src/components/Tag'
import { t, Trans } from '@lingui/macro'
import { DollarOutline, PercentageSignOutline, DashboardOutline, BarGraphOutline } from 'src/components/Icon'
import Button from 'src/components/Button'
import { Link } from 'react-router-dom'
import usePoolInfo from 'src/hooks/usePoolInfo'
import useToken from 'src/hooks/useToken'
import PoolSelector from 'src/pages/shared/PoolSelector'
import { Empty } from 'src/components/Icon'
import { AnchorPoolInfo } from 'src/libs/web3/api/CoFiXAnchorPool'
import { PoolInfo } from 'src/libs/web3/api/CoFiXPair'

const Pool: FC = () => {
  const [pair, setPair] = useState(['ETH', 'USDT'])
  const [symbol, setSymbol] = useState('USDT')
  const poolInfo = usePoolInfo(pair[0], pair[1]) as PoolInfo
  const anchorPoolInfo = usePoolInfo(symbol) as AnchorPoolInfo

  const [token0, token1] = [useToken(pair[0]), useToken(pair[1])]
  const token = useToken(symbol)

  const classPrefix = 'cofi-page-pool-index'

  const empty = (
    <div className={`${classPrefix}-empty`}>
      <Empty />
      <div>
        <Trans>Empty Liquidity</Trans>
      </div>
    </div>
  )

  const sectionPairPool = token0 && token1 && (
    <section className={`${classPrefix}-pool`}>
      <PoolSelector symbol={pair} onChange={(p) => setPair(p)} />

      <div className={`${classPrefix}-info`}>
        <div className={`${classPrefix}-info-container`}>
          <h1 className={`${classPrefix}-h1`}>{`${token0.symbol}-${token1.symbol} ${t`Pool`}`}</h1>
          <Card>
            <div className={`${classPrefix}-section`}>
              <div className={`${classPrefix}-header`}>
                <div className={`${classPrefix}-title`}>
                  <span>{`${token0.symbol}-${token1.symbol} ${t`Pool`}`}</span>
                  <Tag>{`${t`Mining`} x2`}</Tag>
                </div>
              </div>

              <ul className={`${classPrefix}-ul responsive`}>
                <li>
                  <DollarOutline />
                  <div>
                    <span>
                      <Trans>TVL</Trans>
                    </span>
                    <span>{poolInfo ? poolInfo.totalFunds.toFormat(2) : '--'}</span>
                  </div>
                </li>
                <li>
                  <PercentageSignOutline />
                  <div>
                    <span>
                      <Trans>Net worth</Trans>
                    </span>
                    <span>{poolInfo ? poolInfo.nav.toFormat(8) : '--'}</span>
                  </div>
                </li>
                <li>
                  <token0.Icon />
                  <div>
                    <span>{`${token0.symbol} ${t`Amount`}`}</span>
                    <span>{poolInfo ? poolInfo.formatAmounts[0] : '--'}</span>
                  </div>
                </li>
                <li>
                  <token1.Icon />
                  <div>
                    <span>{`${token1.symbol} ${t`Amount`}`}</span>
                    <span>{poolInfo ? poolInfo.formatAmounts[1] : '--'}</span>
                  </div>
                </li>
                <li>
                  <DashboardOutline />
                  <div>
                    <span>
                      <Trans>Mining Speed</Trans>
                    </span>
                    <span>{`${poolInfo ? poolInfo.miningSpeed : '--'} COFI / ${t`Block`}`}</span>
                  </div>
                </li>
                <li>
                  <BarGraphOutline />
                  <div>
                    <span>
                      <Trans>Current APY</Trans>
                    </span>
                    <span>{poolInfo ? poolInfo.apy : '--'}</span>
                  </div>
                </li>
              </ul>
            </div>
          </Card>

          <Button block gradient primary>
            <Link to={`/pool/add-liquidity/${token0.symbol}/${token1.symbol}`}>
              <Trans>Add Liquidity</Trans>
            </Link>
          </Button>
        </div>

        <div className={`${classPrefix}-info-container`}>
          <h1 className={`${classPrefix}-h1`}>{t`My Pool`}</h1>
          {!poolInfo || poolInfo.emptyLiquidity ? (
            empty
          ) : (
            <Card>
              <div className={`${classPrefix}-section`}>
                <div className={`${classPrefix}-header`}>
                  <div className={`${classPrefix}-title`}>
                    <span>{`${token0.symbol}-${token1.symbol} ${t`Pool`}`}</span>
                    <Tag>{`${t`Mining`} x2`}</Tag>
                  </div>

                  <div className={`${classPrefix}-extra`}>
                    <Trans>Amount | Percentage</Trans>
                  </div>
                </div>

                <ul className={`${classPrefix}-ul`}>
                  <li>
                    <token0.Icon />
                    <div>
                      <span>{token0.symbol}</span>
                      <span>{poolInfo ? `${poolInfo.myPoolAmounts[0]} | ${poolInfo.myPoolRatio}` : '--'}</span>
                    </div>
                  </li>
                  <li>
                    <token1.Icon />
                    <div>
                      <span>{token1.symbol}</span>
                      <span>{poolInfo ? `${poolInfo.myPoolAmounts[1]} | ${poolInfo.myPoolRatio}` : '--'}</span>
                    </div>
                  </li>
                </ul>
              </div>
            </Card>
          )}

          {poolInfo?.emptyLiquidity && (
            <Button block gradient>
              <Link to={`/pool/remove-liquidity/${token0.symbol}/${token1.symbol}`}>
                <Trans>Remove Liquidity</Trans>
              </Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  )

  const sectionAnchorPool = token && (
    <section className={`${classPrefix}-pool`}>
      <PoolSelector symbol={[symbol]} onChange={(t) => setSymbol(t[0])} />

      <div className={`${classPrefix}-info`}>
        <div className={`${classPrefix}-info-container`}>
          <h1 className={`${classPrefix}-h1`}>{`${token.symbol} ${t`Pool`}`}</h1>
          <Card>
            <div className={`${classPrefix}-section`}>
              <div className={`${classPrefix}-header`}>
                <div className={`${classPrefix}-title`}>
                  <span>{`${token.symbol} ${t`Pool`}`}</span>
                  <Tag>{`${t`Mining`}`}</Tag>
                </div>
              </div>

              <ul className={`${classPrefix}-ul responsive`}>
                <li>
                  <DollarOutline />
                  <div>
                    <span>
                      <Trans>TVL</Trans>
                    </span>
                    <span>{anchorPoolInfo ? anchorPoolInfo.totalFunds.toFormat(2) : '--'}</span>
                  </div>
                </li>

                <li>
                  <token.Icon />
                  <div>
                    <span>{`${token.symbol} ${t`Amount`}`}</span>
                    <span>{anchorPoolInfo ? anchorPoolInfo.formatAmount : '--'}</span>
                  </div>
                </li>

                <li>
                  <PercentageSignOutline />
                  <div>
                    <span>{t`Total Supply`}</span>
                    <span>{anchorPoolInfo ? anchorPoolInfo.xtokenTotalSupply.formatAmount : '--'}</span>
                  </div>
                </li>

                <li>
                  <DashboardOutline />
                  <div>
                    <span>
                      <Trans>Mining Speed</Trans>
                    </span>
                    <span>{`${anchorPoolInfo ? anchorPoolInfo.miningSpeed : '--'} COFI / ${t`Block`}`}</span>
                  </div>
                </li>

                <li>
                  <BarGraphOutline />
                  <div>
                    <span>
                      <Trans>Current APY</Trans>
                    </span>
                    <span>{anchorPoolInfo ? anchorPoolInfo.apy : '--'}</span>
                  </div>
                </li>
              </ul>
            </div>
          </Card>

          <Button block gradient primary>
            <Link to={`/pool/add-liquidity/${token.symbol}`}>
              <Trans>Add Liquidity</Trans>
            </Link>
          </Button>
        </div>

        <div className={`${classPrefix}-info-container`}>
          <h1 className={`${classPrefix}-h1`}>{t`My Pool`}</h1>
          {!anchorPoolInfo || anchorPoolInfo.emptyLiquidity ? (
            empty
          ) : (
            <Card>
              <div className={`${classPrefix}-section`}>
                <div className={`${classPrefix}-header`}>
                  <div className={`${classPrefix}-title`}>
                    <span>{`${token.symbol} ${t`Pool`}`}</span>
                    <Tag>{`${t`Mining`}`}</Tag>
                  </div>

                  <div className={`${classPrefix}-extra`}>
                    <Trans>Amount | Percentage</Trans>
                  </div>
                </div>

                <ul className={`${classPrefix}-ul`}>
                  <li>
                    <token.Icon />
                    <div>
                      <span>{token.symbol}</span>
                      <span>
                        {anchorPoolInfo ? `${anchorPoolInfo.myPoolFormatAmount} | ${anchorPoolInfo.myPoolRatio}` : '--'}
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </Card>
          )}

          {anchorPoolInfo?.emptyLiquidity && (
            <Button block gradient>
              <Link to={`/pool/remove-liquidity/${token.symbol}`}>
                <Trans>Remove Liquidity</Trans>
              </Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  )

  return (
    <>
      {sectionPairPool}
      {sectionAnchorPool}
    </>
  )
}

export default Pool
