import './styles'
import { FC, useState } from 'react'
import useToken from 'src/hooks/useToken'
import PoolSelector from 'src/pages/shared/PoolSelector'
import { t, Trans } from '@lingui/macro'
import Card from 'src/components/Card'
import useStakeInfo from 'src/hooks/useStakeInfo'
import ButtonGroup from 'src/components/Button/Group'
import Button from 'src/components/Button'
import { Link } from 'react-router-dom'
import TokenInput from 'src/components/TokenInput'
import useEarnedCOFI from 'src/hooks/useEarnedCOFI'
import useTokenUSDTAmount from 'src/hooks/useTokenUSDTAmount'
import Field from 'src/components/Field'
import useClaimCOFI from 'src/libs/web3/hooks/useClaimCOFI'

const Mining: FC = () => {
  const [pair, setPair] = useState(['ETH', 'USDT'])
  const [token0, token1] = [useToken(pair[0]), useToken(pair[1])]
  const pairStakeInfo = useStakeInfo(pair[0], pair[1])
  const pairEarnedCOFI = useEarnedCOFI(pair[0], pair[1])
  const cofiUSDTAmount = useTokenUSDTAmount('COFI')
  const handlePairClaimCOFI = useClaimCOFI({
    token0: pair[0],
    token1: pair[1],
  })

  const [symbol, setSymbol] = useState('USDT')
  const token = useToken(symbol)
  const anchorStakeInfo = useStakeInfo(symbol)
  const anchorEarnedCOFI = useEarnedCOFI(symbol)
  const handleAnchorClaimCOFI = useClaimCOFI({
    token0: symbol,
  })

  const classPrefix = 'cofi-page-mining-index'

  const sectionPairPool = token0 && token1 && (
    <section className={`${classPrefix}-mining`}>
      <PoolSelector symbol={pair} onChange={(p) => setPair(p)} />

      <div className={`${classPrefix}-info`}>
        <div className={`${classPrefix}-info-container`}>
          <h1 className={`${classPrefix}-h1`}>{`${token0.symbol}-${token1.symbol} ${t`Pool`}`}</h1>

          <Card>
            <div className={`${classPrefix}-section`}>
              <ul className={`${classPrefix}-simple-ul`}>
                <li>
                  <span>
                    <Trans>XToken In Mining Pool</Trans>
                  </span>
                  <span>{pairStakeInfo ? pairStakeInfo.xTokenInPool.formatAmount : '--'} XToken</span>
                </li>

                <li>
                  <span>
                    <Trans>XToken Staked</Trans>
                  </span>
                  <span>{pairStakeInfo ? pairStakeInfo.stakedXToken.formatAmount : '--'} XToken</span>
                </li>

                <li>
                  <span>
                    <Trans>Percentage</Trans>
                  </span>
                  <span>{pairStakeInfo ? pairStakeInfo.stakedRatio : '--'}</span>
                </li>

                <li>
                  <span>
                    <Trans>Estimated Daily Mined</Trans>
                  </span>
                  <span>{pairStakeInfo ? pairStakeInfo.dailyMined.toString() : '--'} COFI</span>
                </li>
              </ul>
            </div>
          </Card>

          <ButtonGroup block responsive>
            <Button block gradient primary>
              <Link to={`/mining/stake-xtoken/${token0.symbol}/${token1.symbol}`}>
                <Trans>Stake XToken</Trans>
              </Link>
            </Button>

            <Button block gradient>
              <Link to={`/mining/withdraw-xtoken/${token0.symbol}/${token1.symbol}`}>
                <Trans>Withdraw XToken</Trans>
              </Link>
            </Button>
          </ButtonGroup>
        </div>

        <div className={`${classPrefix}-info-container`}>
          <h1 className={`${classPrefix}-h1`}>{t`Claim COFI`}</h1>

          <TokenInput
            title={t`Available COFI Amount to Claim`}
            symbol="COFI"
            value={pairEarnedCOFI?.amount.toFixed(4) || ''}
            selectable={false}
            editable={false}
            noExtra
            className={`${classPrefix}-token-input`}
          />

          <Field
            name={t`COFI Market Price (Coingecko)`}
            value={`
          ${cofiUSDTAmount ? cofiUSDTAmount.formatAmount : '--'} USD
          `}
          />

          <ButtonGroup block responsive>
            <Button block gradient primary onClick={handlePairClaimCOFI.handler}>
              <Trans>Claim COFI</Trans>
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </section>
  )

  const sectionAnchorPool = token && (
    <section className={`${classPrefix}-mining`}>
      <PoolSelector symbol={[symbol]} onChange={(t) => setSymbol(t[0])} />

      <div className={`${classPrefix}-info`}>
        <div className={`${classPrefix}-info-container`}>
          <h1 className={`${classPrefix}-h1`}>{`${token.symbol} ${t`Pool`}`}</h1>

          <Card>
            <div className={`${classPrefix}-section`}>
              <ul className={`${classPrefix}-simple-ul`}>
                <li>
                  <span>
                    <Trans>XToken In Mining Pool</Trans>
                  </span>
                  <span>{anchorStakeInfo ? anchorStakeInfo.xTokenInPool.formatAmount : '--'} XToken</span>
                </li>

                <li>
                  <span>
                    <Trans>XToken Staked</Trans>
                  </span>
                  <span>{anchorStakeInfo ? anchorStakeInfo.stakedXToken.formatAmount : '--'} XToken</span>
                </li>

                <li>
                  <span>
                    <Trans>Percentage</Trans>
                  </span>
                  <span>{anchorStakeInfo ? anchorStakeInfo.stakedRatio : '--'}</span>
                </li>

                <li>
                  <span>
                    <Trans>Estimated Daily Mined</Trans>
                  </span>
                  <span>{anchorStakeInfo ? anchorStakeInfo.dailyMined.toString() : '--'} COFI</span>
                </li>
              </ul>
            </div>
          </Card>

          <ButtonGroup block responsive>
            <Button block gradient primary>
              <Link to={`/mining/stake-xtoken/${token.symbol}`}>
                <Trans>Stake XToken</Trans>
              </Link>
            </Button>

            <Button block gradient>
              <Link to={`/mining/withdraw-xtoken/${token.symbol}`}>
                <Trans>Withdraw XToken</Trans>
              </Link>
            </Button>
          </ButtonGroup>
        </div>

        <div className={`${classPrefix}-info-container`}>
          <h1 className={`${classPrefix}-h1`}>{t`Claim COFI`}</h1>

          <TokenInput
            title={t`Available COFI Amount to Claim`}
            symbol="COFI"
            value={anchorEarnedCOFI?.amount.toFixed(4) || ''}
            selectable={false}
            editable={false}
            noExtra
            className={`${classPrefix}-token-input`}
          />

          <Field
            name={t`COFI Market Price (Coingecko)`}
            value={`
          ${cofiUSDTAmount ? cofiUSDTAmount.formatAmount : '--'} USD
          `}
          />

          <ButtonGroup block responsive>
            <Button block gradient primary onClick={handleAnchorClaimCOFI.handler}>
              <Trans>Claim COFI</Trans>
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </section>
  )

  return (
    <div className="cofi-page">
      {sectionPairPool}
      {sectionAnchorPool}
    </div>
  )
}

export default Mining
