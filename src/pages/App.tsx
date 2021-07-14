import React from 'react'

import loadable from '@loadable/component'

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Header from 'src/pages/shared/Header'
import Footer from 'src/pages/shared/Footer'
import TransactionModal from 'src/pages/shared/TransactionModal'
import RiskModal from './shared/RiskModal'

const Swap = loadable(() => import('./Swap'))
const Pool = loadable(() => import('./Pool'))
const Mining = loadable(() => import('./Mining'))
const Repurchase = loadable(() => import('./Repurchase'))

function App() {
  return (
    <main>
      <TransactionModal />
      <RiskModal />

      <Router>
        <Header />

        <Switch>
          <Route path="/swap">
            <Swap />
          </Route>

          <Route path="/pool">
            <Pool />
          </Route>

          <Route path="/mining">
            <Mining />
          </Route>

          <Route path="/repurchase">
            <Repurchase />
          </Route>

          <Redirect to="/swap" />
        </Switch>

        <Footer />
      </Router>
    </main>
  )
}

export default App
