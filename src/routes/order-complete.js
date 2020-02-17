import React, {useContext} from 'react'
import {Consumer as UserConsumer} from '../contexts/user'
import I18nContext from '../contexts/i18n'

function OrderComplete() {
  const {translate: __} = useContext(I18nContext)

  return (
    <h1
      style={{
        textAlign: 'center',
        padding: '128px 0',
      }}
    >
      <UserConsumer>{user => `${__('Thanks')}, ${user.name}`}</UserConsumer>
      <span
        role={'img'}
        aria-label={'cook'}
        style={{
          padding: '0 12px',
        }}
      >
        👨‍🍳
      </span>
    </h1>
  )
}

export default OrderComplete
