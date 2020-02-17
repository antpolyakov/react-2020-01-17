import React from 'react'

import Logo from './logo'
import styles from './header.module.css'
import CartBadge from '../cart-badge'
import LangSwitch from '../lang-switch'

function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <LangSwitch />
      <CartBadge />
    </header>
  )
}

export default Header
