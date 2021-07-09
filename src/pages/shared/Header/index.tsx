import { FC } from 'react'
import './styles'

import classNames from 'classnames'
import { Link, useLocation } from 'react-router-dom'
import { CoFiXLogoWithText, CoFiXLogoSmall } from 'src/components/Icon'
import { Trans } from '@lingui/macro'
import WalletConnect from 'src/pages/shared/WalletConnect'
import { MenuButton } from 'src/pages/shared/Menu'

const Nav: FC = () => {
  const location = useLocation()

  const routes = [
    { path: '/swap', content: <Trans>Swap</Trans> },
    { path: '/pool', content: <Trans>Pool</Trans> },
    { path: '/mining', content: <Trans>Mining</Trans> },
    { path: '/repurchase', content: <Trans>Repurchase</Trans> },
  ].map((r) => (
    <li
      key={r.path}
      className={classNames({
        active: location.pathname.indexOf(r.path) === 0,
      })}
    >
      <Link to={r.path}>{r.content}</Link>
    </li>
  ))

  const classPrefix = 'cofi-nav'
  return (
    <nav className={`${classPrefix}`}>
      <ul>
        <li className={`${classPrefix}-logo`}>
          <CoFiXLogoSmall />
        </li>
        {routes}
      </ul>
    </nav>
  )
}

const Header: FC = () => {
  const classPrefix = 'cofi-header'

  return (
    <div className="container">
      <header className={`${classPrefix}`}>
        <Link to="/">
          <CoFiXLogoWithText className={`${classPrefix}-logo`} />
        </Link>

        <Nav />

        <div className={`${classPrefix}-extra`}>
          <WalletConnect />
          <MenuButton />
        </div>
      </header>
    </div>
  )
}

export default Header
