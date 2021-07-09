import { FC } from 'react'
import './styles'

import WalletConnect from 'src/pages/shared/WalletConnect'
import { MenuButton } from 'src/pages/shared/Menu'

const Footer: FC = () => {
  const classPrefix = 'cofi-footer'
  return (
    <footer className={`${classPrefix}`}>
      <WalletConnect />
      <MenuButton modal />
    </footer>
  )
}

export default Footer
