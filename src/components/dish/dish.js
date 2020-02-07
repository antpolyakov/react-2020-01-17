import React, {useCallback} from 'react'
import PropTypes from 'prop-types'
import {Card, Typography, Button, Row, Col} from 'antd'
import styles from './dish.module.css'
import {connect, useSelector} from 'react-redux'
import {addToCart, removeFromCart} from '../../store/action-creators'
import {selectAmountFromCart, selectDish} from '../../store/selectors'

function Dish(props) {
  const {
    // id,

    // from store
    amount,
    increase,
    decrease,
  } = props

  const selectDishMemo = useCallback(state => selectDish(state, props), [props])

  const dish = useSelector(selectDishMemo)

  return (
    <Card className={styles.productDetailedOrderCard}>
      <Row type="flex" justify="space-between">
        <Col xs={16} md={16} lg={20} align="left">
          <Typography.Title
            level={4}
            className={styles.title}
            data-automation-id="DISH_NAME"
          >
            {dish.name}
          </Typography.Title>
          <Typography.Paragraph className={styles.description}>
            {dish.ingredients.join(', ')}
          </Typography.Paragraph>
          <div className={styles.price}>{dish.price} $</div>
        </Col>
        <Col xs={8} md={6} lg={4} align="right">
          <div className={styles.counter}>
            <div className={styles.count} data-automation-id="AMOUNT">
              {amount}
            </div>
            <Button.Group>
              <Button
                className={styles.button}
                icon="minus"
                onClick={() => decrease(dish.id)}
                data-automation-id="DECREASE"
              />
              <Button
                className={styles.button}
                icon="plus"
                onClick={() => increase(dish.id)}
                data-automation-id="INCREASE"
              />
            </Button.Group>
          </div>
        </Col>
      </Row>
    </Card>
  )
}

export const DishProps = {
  id: PropTypes.string.isRequired,
  dish: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    ingredients: PropTypes.arrayOf(PropTypes.string),
    price: PropTypes.number,
  }),
}

Dish.propTypes = DishProps

const mapStateToProps = (state, ownProps) => {
  return {
    amount: selectAmountFromCart(state, ownProps),
  }
}

const mapDispatchToProps = {
  increase: addToCart,
  decrease: removeFromCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(Dish)
