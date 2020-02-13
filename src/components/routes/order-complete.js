import React from 'react'
import Cart from '../cart/cart'

function OrderCompletePage() {
  return (
    <div>
      <h1>Order sent...</h1>
      <h3>You have just ordered:</h3>
      <Cart action={null} />
    </div>
  )
}

export default OrderCompletePage
