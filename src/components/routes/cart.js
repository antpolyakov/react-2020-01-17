import React from 'react'
import Cart from '../cart'
import {ORDER_COMPLETE_PAGE_PATH} from './common'

const action = {
  url: ORDER_COMPLETE_PAGE_PATH,
  text: 'Send Order',
}

function CartPage() {
  return (
    <div>
      <h1>Cart</h1>
      <Cart action={action} />
    </div>
  )
}

export default CartPage
