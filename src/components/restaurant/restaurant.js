import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Dishes from '../dishes'
import AverageRating from '../average-rating'
import Reviews from '../reviews'
import Hero from '../hero'
import styles from './restaurant.module.css'
import {Col, Row} from 'antd'
import Order from '../order'

export const RestaurantProps = {
  restaurant: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    menu: PropTypes.array,
    reviews: PropTypes.array,
  }).isRequired,
}

class Restaurant extends Component {
  static propTypes = RestaurantProps

  state = {
    error: null,
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
    })
  }

  render() {
    const {
      restaurant: {id, name, menu, reviews},
    } = this.props
    return (
      <div data-automation-id="RESTAURANT_CONTAINER">
        <Hero heading={name}>{<AverageRating reviews={reviews} />}</Hero>
        <Row>
          <Col span={18} className={styles.restaurantContent}>
            <Reviews restaurantId={id} reviews={reviews} />
            <Dishes menu={menu} />
          </Col>
          <Col span={6}>
            <Order />
          </Col>
        </Row>
      </div>
    )
  }
}

export default Restaurant
