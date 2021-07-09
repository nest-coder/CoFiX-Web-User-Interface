import React from 'react'
import ReactDOM from 'react-dom'
import './styles/global.scss'
import App from './pages/App'

import 'src/components/Icon'
import I18nProvider from 'src/libs/i18n/provider'
import Web3Provider from 'src/libs/web3/provider'

const rootElement = document.getElementById('root')
const app = (
  <React.StrictMode>
    <I18nProvider>
      <Web3Provider>
        <App />
      </Web3Provider>
    </I18nProvider>
  </React.StrictMode>
)

if (rootElement?.hasChildNodes()) {
  ReactDOM.hydrate(app, rootElement)
} else {
  ReactDOM.render(app, rootElement)
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
/* eslint-disable no-alert, no-console */
if (process.env.NODE_ENV === 'development') {
  import('./reportWebVitals').then((reportWebVitals) => {
    reportWebVitals.default(console.log)
  })
}
/* eslint-enable */
