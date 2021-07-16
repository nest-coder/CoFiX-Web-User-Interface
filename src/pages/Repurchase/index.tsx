import { FC, useEffect, useState } from 'react'
import CollapseCard from 'src/components/CollapaseCard'
import { t, Trans } from '@lingui/macro'
import './styles'
import RepurchaseCard from './Card'
import { GrayTokenETH, GrayTokenUSDT, GrayTokenCOFI } from 'src/components/Icon'
import Card from 'src/components/Card'
import TokenInput from 'src/components/TokenInput'
import Field from 'src/components/Field'
import useDAOInfo from 'src/hooks/useDAOInfo'
import { TransactionType } from 'src/libs/web3/hooks/useTransaction'
import useRepurchase from 'src/libs/web3/hooks/useRepurchase'
import useTokenBalance from 'src/hooks/useTokenBalance'
import useWeb3 from 'src/libs/web3/hooks/useWeb3'
import TransactionButtonGroup from 'src/pages/shared/TransactionButtonGroup'
import AnchorSelector from './AnchorSelector'
import { RiskAction, useRiskModal } from '../shared/RiskModal'
import { toBigNumber } from 'src/libs/web3/util'

const Repurchase: FC = () => {
  const { checkRisk } = useRiskModal()
  useEffect(() => {
    ;(async () => {
      try {
        await checkRisk(RiskAction.Repurchase)
      } catch (_) {
        // comment for eslint
      }
    })()
  }, [])

  const { account, api } = useWeb3()
  const daoInfo = useDAOInfo()

  const [amount, setAmount] = useState('')
  const [symbol, setSymbol] = useState('ETH')
  const ethBalance = useTokenBalance('ETH', account || '')
  const anchorPool = api?.CoFixAnchorPools[symbol]

  const handleRepurchase = useRepurchase({
    amount,
    symbol,
  })

  const classPrefix = 'cofi-page-repurchase'

  return (
    <div className={`cofi-page ${classPrefix}`}>
      <section className={`${classPrefix}-summary`}>
        <ul>
          <li>
            <RepurchaseCard
              title={t`Current locked in DAO (ETH-Anchor)`}
              value={daoInfo ? api?.Tokens.ETH.format(daoInfo.ethAmount) : '--'}
              icon={<GrayTokenETH />}
              // icon={<TokenETH height={110} width={68} style={{ opacity: 0.08 }} />}
            />
          </li>
          <li>
            <RepurchaseCard
              title={t`Current locked in DAO (USDT-Anchor)`}
              value={daoInfo ? api?.Tokens.USDT.format(daoInfo.usdtAmount) : '--'}
              icon={<GrayTokenUSDT />}
            />
          </li>
          <li>
            <RepurchaseCard
              title={t`Accumulated repurchase in DAO (COFI)`}
              value={daoInfo ? api?.Tokens.COFI.format(daoInfo.cofiAmount) : '--'}
              icon={<GrayTokenCOFI />}
            />
          </li>
          <li>
            <RepurchaseCard
              title={t`Current Circulation (COFI)`}
              value={daoInfo ? api?.Tokens.COFI.format(daoInfo.cofiCirculationAmount) : '--'}
              icon={<GrayTokenCOFI />}
            />
          </li>
        </ul>
      </section>

      <section>
        <Card title={t`Repurchase`}>
          <TokenInput
            title={t`Input Repurchase Amount`}
            symbol="COFI"
            selectable={false}
            value={amount}
            onChange={(v) => setAmount(v)}
          />

          <AnchorSelector symbol={symbol} onChange={(s) => setSymbol(s)} />

          <TokenInput
            title={t`Estimated Receive:`}
            value={
              (anchorPool?.anchorToken === 'ETH'
                ? handleRepurchase.ethAmount?.formatAmount
                : handleRepurchase.usdtAmount?.formatAmount) || '--'
            }
            symbol={symbol}
            selectable={false}
            noExtra
            editable={false}
          />

          <Field
            name={t`Oracle Call Fee`}
            value={`${handleRepurchase.oracleFee ? handleRepurchase.oracleFee.formatAmount : '--'}  ETH`}
          />
          <Field name={t`Current available amount of repurchase`} value={daoInfo ? daoInfo.quota.toFixed(0) : `--`} />
          {anchorPool?.anchorToken === 'ETH' ? (
            <Field
              name={t`Current Repurchase Price` + ` (COFI/ETH)`}
              value={
                daoInfo
                  ? `${daoInfo.cofiETHAmount ? api?.Tokens.ETH.format(daoInfo.cofiETHAmount) : '--'} ETH`
                  : '-- ETH'
              }
            />
          ) : (
            <Field
              name={t`Current Repurchase Price` + ` (COFI/USDT)`}
              value={
                daoInfo
                  ? `${daoInfo.cofiUSDTAmount ? api?.Tokens.USDT.format(daoInfo.cofiUSDTAmount) : '--'} USDT`
                  : '-- ETH'
              }
            />
          )}
          <Field name={t`ETH Balance in your wallet`} value={`${ethBalance ? ethBalance.formatAmount : '--'} ETH`} />

          <TransactionButtonGroup
            approve={{
              transactionType: TransactionType.Repurchase,
              token: ['COFI', 'COFI'],
            }}
            disabled={!amount || toBigNumber(amount).lte(0)}
            onClick={handleRepurchase.handler}
          >
            <Trans>Repurchase</Trans>
          </TransactionButtonGroup>
        </Card>
      </section>

      <section>
        <CollapseCard title={t`About Repurchase`}>
          <section>
            <p>
              <Trans>
                When the user uses the CoFiX protocol, a certain transaction fee will be locked in the CoFiX DAO;
              </Trans>
            </p>
            <p>
              <Trans>
                CoFiX Repurchase means that users can exchange COFI Token and DAO contract transactions into ETH, thus
                reducing the circulation of COFI Token and enhancing its intrinsic value.
              </Trans>
            </p>
          </section>

          <section>
            <p>
              <Trans>CoFiX DAO contract address:</Trans>
            </p>
            <p>
              <a
                href="https://github.com/Computable-Finance/Doc#4-market-maker-mechanism"
                target="_blank"
                rel="noreferrer"
                className="link"
              >
                <Trans>Read More</Trans>
              </a>
            </p>
          </section>
        </CollapseCard>
      </section>
    </div>
  )
}

export default Repurchase
