import Button from 'antd/es/button'
import cx from 'classnames'
import React, {useContext} from 'react'
import {TransitionGroup, CSSTransition} from 'react-transition-group'

import styles from './cart.module.css'
import CartRow from './cart-row'
import CartItem from './cart-item'
import {connect} from 'react-redux'
import './cart.css'
import {selectOrderedDishes} from '../../store/selectors'
import {NavLink} from 'react-router-dom'
import I18nContext from '../../contexts/i18n'

function Cart({className, orderedDishes}) {
  const {dishes, totalPrice} = orderedDishes
  const {translate: __} = useContext(I18nContext)

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

      <CartRow leftContent={__('Sub-total')} rightContent={`${totalPrice} $`} />
      <CartRow leftContent={__('Delivery costs')} rightContent={__('FREE')} />
      <CartRow leftContent={__('Total')} rightContent={`${totalPrice} $`} />
      <NavLink to={'/order'} activeStyle={{display: 'none'}}>
        <Button type="primary" size="large" block>
          {__('Order')}
        </Button>
      </NavLink>
    </div>
  )
}

export default connect(state => {
  return {
    orderedDishes: selectOrderedDishes(state),
  }
})(Cart)
