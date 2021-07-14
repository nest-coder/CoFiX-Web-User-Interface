import { FC, useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import CollapseCard from 'src/components/CollapaseCard'
import { Trans, t } from '@lingui/macro'

import loadable from '@loadable/component'
import { RiskAction, useRiskModal } from '../shared/RiskModal'

const Index = loadable(() => import('./pages/Index'))
const AddLiquidity = loadable(() => import('./pages/AddLiquidity'))
const RemoveLiquidity = loadable(() => import('./pages/RemoveLiquidity'))

const Pool: FC = () => {
  const { checkRisk } = useRiskModal()
  useEffect(() => {
    ;(async () => {
      try {
        await checkRisk(RiskAction.Pool)
      } catch (_) {
        // comment for eslint
      }
    })()
  }, [])

  const classPrefix = 'cofi-page-pool'

  return (
    <div className={`cofi-page ${classPrefix}`}>
      <Switch>
        <Route path="/pool" exact>
          <Index />
        </Route>

        <Route path="/pool/add-liquidity/:token0/:token1?" exact>
          <AddLiquidity />
        </Route>

        <Route path="/pool/remove-liquidity/:token0/:token1?" exact>
          <RemoveLiquidity />
        </Route>

        <Redirect to="/pool" />
      </Switch>

      <section>
        <CollapseCard title={t`How it works?`}>
          <section>
            <p>
              <Trans>
                Add assets (ETH, USDT, etc.) to the asset pool, you will receive XToken, deposit XToken in the mining
                pool, and you can start mining, get COFI rewards. Although COFI 2.0 introduces the mining mechanism of
                reversing trade to help liquidity providers hedge and reduce risks, However, when the market fluctuates
                or there are no user to do reversing trade for a long time, the ratio of holding assets will be
                unbalanced, which may cause losses, please understand the market-making rules and the risks involved
                thoroughly before providing liquidity.
              </Trans>
            </p>
          </section>

          <section>
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

export default Pool
