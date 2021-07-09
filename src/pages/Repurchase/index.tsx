import { FC, useState } from 'react'
import CollapseCard from 'src/components/CollapaseCard'
import { t, Trans } from '@lingui/macro'
import './styles'
import RepurchaseCard from './Card'
import { GrayTokenETH, GrayTokenUSDT, GrayTokenCOFI } from 'src/components/Icon'
import Card from 'src/components/Card'
import TokenInput from 'src/components/TokenInput'
import Field from 'src/components/Field'
import useDAOInfo from 'src/hooks/useDAOInfo'
import TokenRadioGroup from './TokenRadioGroup'
import { TransactionType } from 'src/libs/web3/hooks/useTransaction'
import useRepurchase from 'src/libs/web3/hooks/useRepurchase'
import useTokenBalance from 'src/hooks/useTokenBalance'
import useWeb3 from 'src/libs/web3/hooks/useWeb3'
import TransactionButtonGroup from '../shared/TransactionButtonGroup'

const Repurchase: FC = () => {
  const { account } = useWeb3()
  const daoInfo = useDAOInfo()

  const [amount, setAmount] = useState('')
  const [symbol, setSymbol] = useState('ETH')
  const ethBalance = useTokenBalance('ETH', account || '')

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
              title={t`Current amount locked in DAO (ETH)`}
              value={daoInfo ? daoInfo.ethAmount.toFixed(6) : '--'}
              icon={<GrayTokenETH />}
              // icon={<TokenETH height={110} width={68} style={{ opacity: 0.08 }} />}
            />
          </li>
          <li>
            <RepurchaseCard
              title={t`Current amount locked in DAO (USDT)`}
              value={daoInfo ? daoInfo.usdtAmount.toFixed(6) : '--'}
              icon={<GrayTokenUSDT />}
            />
          </li>
          <li>
            <RepurchaseCard
              title={t`Accumulated repurchase amount in DAO (COFI)`}
              value={daoInfo ? daoInfo.cofiAmount.toFixed(6) : '--'}
              icon={<GrayTokenCOFI />}
            />
          </li>
          <li>
            <RepurchaseCard
              title={t`Current Circulation (COFI)`}
              value={daoInfo ? daoInfo.cofiCirculationAmount.toFixed(6) : '--'}
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

          <TokenRadioGroup
            tokens={['ETH', 'USDT']}
            value={symbol}
            onChange={(t) => {
              setSymbol(t)
            }}
            amounts={
              handleRepurchase.ethAmount && handleRepurchase.usdtAmount
                ? [handleRepurchase.ethAmount.formatAmount, handleRepurchase.usdtAmount.formatAmount]
                : []
            }
          />

          <Field name={t`Oracle Call Fee`} value="+0.01 ETH" />
          <Field name={t`Current available amount of repurchase`} value={daoInfo ? daoInfo.quota.toFixed(0) : `--`} />
          <Field
            name={t`Current Repurchase Price (COFI/ETH)`}
            value={daoInfo ? `${daoInfo.cofiETHAmount?.toFixed(8)} ETH` : '-- ETH'}
          />
          <Field name={t`ETH Balance in your wallet`} value={`${ethBalance ? ethBalance.formatAmount : '--'} ETH`} />

          <TransactionButtonGroup
            approve={{
              transactionType: TransactionType.Repurchase,

              token: ['COFI', 'COFI'],
            }}
            disabled={!amount}
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
