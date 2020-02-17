import React from 'react'

import Logo from './logo'
import styles from './header.module.css'
import CartBadge from '../cart-badge'
import LangSwitch from '../lang-switch'

import {LOCALES} from '../../i18n'

function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <LangSwitch locales={LOCALES} />
      <CartBadge />
    </header>
  )
}

export default Header
