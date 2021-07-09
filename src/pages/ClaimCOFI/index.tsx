import { FC, useState } from 'react'
import { t, Trans } from '@lingui/macro'
import TokenPairSelector from 'src/components/TokenPairSelector'
import Card from 'src/components/Card'
import TokenInput from 'src/components/TokenInput'
import Field from 'src/components/Field'
import ButtonGroup from 'src/components/Button/Group'
import Button from 'src/components/Button'
import CollapseCard from 'src/components/CollapaseCard'
import useTokenUSDTAmount from 'src/hooks/useTokenUSDTAmount'
import useEarnedCOFI from 'src/hooks/useEarnedCOFI'
import useClaimCOFI from 'src/libs/web3/hooks/useClaimCOFI'

const ClaimCOFI: FC = () => {
  const [pair, setPair] = useState<[string, string]>(['ETH', 'USDT'])
  const cofiUSDTAmount = useTokenUSDTAmount('COFI')
  const earnedCOFI = useEarnedCOFI(pair[0], pair[1])
  const handleClaimCOFI = useClaimCOFI({
    amount: earnedCOFI?.formatAmount,
    token0: pair[0],
    token1: pair[1],
  })

  const classPrefix = 'cofi-page-claim'

  return (
    <div className={`cofi-page ${classPrefix}`}>
      <section>
        <TokenPairSelector value={pair} onChange={(pair) => setPair(pair)} />
      </section>

      <section>
        <Card title={t`Claim COFI`}>
          <TokenInput
            title={t`Available COFI Amount to Claim`}
            symbol="COFI"
            value={earnedCOFI ? earnedCOFI.formatAmount : ''}
            selectable={false}
            editable={false}
            noExtra
          />

          <Field
            name={t`COFI Market Price (Coingecko)`}
            value={`
          ${cofiUSDTAmount ? cofiUSDTAmount.formatAmount : '--'} USD
          `}
          />

          <ButtonGroup block responsive>
            <Button block gradient primary onClick={handleClaimCOFI?.handler}>
              <Trans>Claim XToken</Trans>
            </Button>
          </ButtonGroup>
        </Card>
      </section>

      <section>
        <CollapseCard title={t`Helpful Tips`}>
          <section>
            <p>
              <Trans>The amount of XToken you deposited to the mining Pool impacts the number of COFI mined.</Trans>
            </p>
            <p>
              <Trans>You can claim new mined COFI Tokens any time.</Trans>
            </p>
          </section>

          <section>
            <p>
              <Trans>CoFiX DAO contract address:</Trans>
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

export default ClaimCOFI
