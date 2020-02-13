import React, {useCallback} from 'react'
import PropTypes from 'prop-types'
import {Badge, Button} from 'antd'
import './cart-badge.css'
import {connect} from 'react-redux'
import {selectCart} from '../../store/selectors'
import {useHistory} from 'react-router-dom'
import {CART_PAGE_PATH} from '../routes/common'

function CartBadge(props) {
  const history = useHistory()
  const go = useCallback(url => history.push(url), [history])
  return (
    <Badge count={props.totalAmount} className={'cart-button-container'}>
      <Button
        icon="shopping-cart"
        size="large"
        type="primary"
        className="cart-button"
        onClick={() => go(CART_PAGE_PATH)}
      />
    </Badge>
  )
}

CartBadge.defaultProps = {
  totalAmount: 0,
}

CartBadge.propTypes = {
  totalAmount: PropTypes.number.isRequired,
}

export default connect(state => {
  return {
    totalAmount: Object.values(selectCart(state)).reduce(
      (acc, amount) => acc + amount,
      0
    ),
  }
})(CartBadge)
