import { FC } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import CollapseCard from 'src/components/CollapaseCard'
import { Trans, t } from '@lingui/macro'

import loadable from '@loadable/component'

const Index = loadable(() => import('./pages/Index'))
const StakeXToken = loadable(() => import('./pages/StakeXToken'))
const WithdrawXToken = loadable(() => import('./pages/WithdrawXToken'))

const Mining: FC = () => {
  const classPrefix = 'cofi-page-mining'

  return (
    <div className={`cofi-page ${classPrefix}`}>
      <Switch>
        <Route path="/mining" exact>
          <Index />
        </Route>

        <Route path="/mining/stake-xtoken/:token0/:token1?" exact>
          <StakeXToken />
        </Route>

        <Route path="/mining/withdraw-xtoken/:token0/:token1?" exact>
          <WithdrawXToken />
        </Route>

        <Redirect to="/mining" />
      </Switch>

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

export default Mining
