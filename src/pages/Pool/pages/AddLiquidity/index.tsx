import './styles'
import { FC, useState, useEffect } from 'react'
import Card from 'src/components/Card'
import { useHistory, useParams } from 'react-router-dom'
import { t } from '@lingui/macro'
import TokenInput from 'src/components/TokenInput'
import Field from 'src/components/Field'
import { Trans } from '@lingui/macro'
import usePoolRatio from 'src/hooks/usePoolRatio'
import BigNumber from 'bignumber.js'
import useAddLiquidity from 'src/libs/web3/hooks/useAddLiquidity'
import { TransactionType } from 'src/libs/web3/hooks/useTransaction'
import useWeb3 from 'src/libs/web3/hooks/useWeb3'
import TransactionButtonGroup from 'src/pages/shared/TransactionButtonGroup'
import { toBigNumber } from 'src/libs/web3/util'

const AddLiquidity: FC = () => {
  const history = useHistory()
  const params = useParams<{
    token0: string
    token1: string
  }>()

  const { api } = useWeb3()
  const [autoStake, setAutoStake] = useState(true)
  const [symbol, setSymbol] = useState(['', ''])
  const [amount, setAmount] = useState(['', ''])
  const ratio = usePoolRatio(symbol[0], symbol[1])

  useEffect(() => {
    if (!api) {
      return
    }

    setSymbol([params.token0, params.token1])
    const token0 = api.Tokens[params.token0]
    if (!token0) {
      history.push('/pool')
      return
    }
    const token1 = api.Tokens[params.token1]
    if (params.token1 && !token1) {
      history.push('/pool')
      return
    }
  }, [api, params])

  const handleToken0AmountChange = (a0: string) => {
    if (a0 == amount[0]) {
      return
    }

    let a1 = amount[1]
    if (ratio) {
      a1 = new BigNumber(a0).multipliedBy(ratio).toString()
    }

    setAmount([a0, a1])
  }

  const handleToken1AmountChange = (a1: string) => {
    if (a1 == amount[1]) {
      return
    }

    let a0 = amount[0]
    if (ratio) {
      a0 = new BigNumber(a1).div(ratio).toString()
    }

    setAmount([a0, a1])
  }

  const handleAddLiquidity = useAddLiquidity({
    token0: { symbol: symbol[0], amount: amount[0] },
    token1: symbol[1] ? { symbol: symbol[1], amount: amount[1] } : undefined,
    autoStake,
  })

  return (
    <Card backward onBackwardClick={() => history.push(`/pool`)} title={t`Add Liquidity`}>
      <TokenInput
        selectable={false}
        maximize={false}
        symbol={symbol[0]}
        title={`${t`Input`} ${symbol[0]} ${t`Amount`}`}
        value={amount[0]}
        onChange={handleToken0AmountChange}
      />

      {symbol[1] && (
        <TokenInput
          selectable={false}
          maximize={false}
          symbol={symbol[1]}
          title={`${t`Input`} ${symbol[1]} ${t`Amount`}`}
          value={amount[1]}
          onChange={handleToken1AmountChange}
        />
      )}

      <Field name={t`Received Tokens (Estimated)`} value={`${handleAddLiquidity.liquidity || '--'} XToken`} />
      {handleAddLiquidity.oracleCallFee && (
        <Field name={t`Oracle Call Fee`} value={`+ ${handleAddLiquidity.oracleCallFee || '--'} ETH`} />
      )}
      <Field
        name={t`Deposit received XToken to the Mining Pool`}
        value={autoStake}
        onChange={(v) => setAutoStake(!!v)}
      />

      <TransactionButtonGroup
        approve={{
          transactionType: TransactionType.AddLiquidity,
          token: [symbol[0], symbol[1] || symbol[0]],
        }}
        onClick={handleAddLiquidity.handler}
        disabled={!amount[0] || toBigNumber(amount[0]).lte(0) || (!!symbol[1] && !ratio)}
      >
        <Trans>Add Liquidity</Trans>
      </TransactionButtonGroup>
    </Card>
  )
}

export default AddLiquidity
