import Button from 'antd/es/button'
import cx from 'classnames'
import React, {useCallback} from 'react'
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import {useHistory} from 'react-router-dom'

import styles from './cart.module.css'
import CartRow from './cart-row'
import CartItem from './cart-item'
import {connect} from 'react-redux'
import './cart.css'
import {selectOrderedDishes} from '../../store/selectors'
import {CART_PAGE_PATH} from '../routes/common'

function Cart({className, orderedDishes}) {
  const history = useHistory()
  const go = useCallback(url => history.push(url), [history])

  const {dishes, totalPrice} = orderedDishes
  if (dishes.length === 0) {
    return null
  }

  return (
    <div className={cx(styles.cart, className)}>
      <TransitionGroup>
        {dishes.map(({dish, amount, restaurant}) => (
          <CSSTransition
            timeout={500}
            classNames="cart-item-animation"
            key={dish.id}
          >
            <CartItem
              dish={dish}
              amount={amount}
              restaurant={restaurant}
              key={dish.id}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
      <hr />

      <CartRow leftContent={'Sub-total'} rightContent={`${totalPrice} $`} />
      <CartRow leftContent={'Delivery costs'} rightContent="FREE" />
      <CartRow leftContent={'Total'} rightContent={`${totalPrice} $`} />
      <Button
        type="primary"
        size="large"
        block
        onClick={() => go(CART_PAGE_PATH)}
      >
        Order
      </Button>
    </div>
  )
}

export default connect(state => {
  return {
    orderedDishes: selectOrderedDishes(state),
  }
})(Cart)
