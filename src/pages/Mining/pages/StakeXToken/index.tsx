import { FC, useState, useEffect } from 'react'
import './styles'
import Card from 'src/components/Card'
import { useHistory, useParams } from 'react-router-dom'
import { t } from '@lingui/macro'
import TokenInput from 'src/components/TokenInput'
import Field from 'src/components/Field'
import ButtonGroup from 'src/components/Button/Group'
import Button from 'src/components/Button'
import { Trans } from '@lingui/macro'
import useStakeInfo from 'src/hooks/useStakeInfo'
import usePoolInfo from 'src/hooks/usePoolInfo'
import useApprove from 'src/libs/web3/hooks/useApprove'
import useStakeXToken from 'src/libs/web3/hooks/useStakeXToken'
import { TransactionType } from 'src/libs/web3/hooks/useTransaction'
import useWeb3 from 'src/libs/web3/hooks/useWeb3'
import useXToken from 'src/libs/web3/hooks/useXToken'
import { PoolInfo } from 'src/libs/web3/api/CoFiXPair'

const StakeXToken: FC = () => {
  const history = useHistory()
  const params = useParams<{
    token0: string
    token1: string
  }>()

  const { api } = useWeb3()
  const [symbol, setSymbol] = useState(['', ''])
  const poolInfo = usePoolInfo(symbol[0], symbol[1]) as PoolInfo
  const stakeInfo = useStakeInfo(symbol[0], symbol[1])
  const [amount, setAmount] = useState('')
  const xtoken = useXToken(symbol[0], symbol[1])

  useEffect(() => {
    if (!api) {
      return
    }

    setSymbol([params.token0, params.token1])
    const token0 = api.Tokens[params.token0]
    if (!token0) {
      history.push('/mining')
      return
    }
    const token1 = api.Tokens[params.token1]
    if (params.token1 && !token1) {
      history.push('/mining')
      return
    }
  }, [api, params])

  const handleApprove = useApprove({
    transactionType: TransactionType.StakeXToken,
    token: [symbol[0], symbol[1]],
  })

  const handleStakeXToken = useStakeXToken({
    token0: symbol[0],
    token1: symbol[1],
    amount,
  })

  if (!xtoken) {
    return <></>
  }

  return (
    <Card backward onBackwardClick={() => history.push('/mining')} title={t`Stake XToken`}>
      <TokenInput
        selectable={false}
        maximize={false}
        symbol={xtoken.symbol}
        title={`${t`Input Stake Amount (XToken)`}`}
        balance={poolInfo?.xtokenBalance}
        value={amount}
        onChange={(v) => setAmount(v)}
      />

      <Field
        name={t`XToken In Mining Pool`}
        value={`${stakeInfo ? stakeInfo.xTokenInPool.formatAmount : '--'} XToken`}
      />
      <Field name={t`Estimated Daily Mined`} value={`${stakeInfo ? stakeInfo.dailyMined.toString() : '--'} COFI`} />

      <ButtonGroup block responsive>
        {!handleApprove?.allowance && (
          <Button block gradient primary onClick={handleApprove?.handler}>
            <Trans>Approve</Trans>
          </Button>
        )}

        <Button
          block
          gradient
          primary={!!amount && handleApprove?.allowance}
          disabled={!amount || !handleApprove?.allowance}
          onClick={handleStakeXToken?.handler}
        >
          <Trans>Stake XToken</Trans>
        </Button>
      </ButtonGroup>
    </Card>
  )
}

export default StakeXToken
