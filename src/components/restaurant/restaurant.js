import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Dishes from '../dishes'
import AverageRating from '../average-rating'
import Reviews from '../reviews'
import Hero from '../hero'
import styles from './restaurant.module.css'
import {Col, Row} from 'antd'
import Cart from '../cart'
import {fetchReviews} from '../../store/action-creators'
import {connect} from 'react-redux'

class Restaurant extends Component {
  state = {
    error: null,
  }

  componentDidMount() {
    const {
      fetchReviews,
      restaurant: {id},
    } = this.props
    fetchReviews && fetchReviews(id)
  }

  componentDidUpdate(prevProps) {
    const {id} = this.props.restaurant
    if (id !== prevProps.restaurant.id) {
      const {fetchReviews} = this.props
      fetchReviews && fetchReviews(id)
    }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({error})
  }

  render() {
    const {
      restaurant: {id, name, menu},
    } = this.props
    return (
      <div>
        <Hero heading={name}>
          {this.state.error ? null : <AverageRating id={id} />}
        </Hero>
        <Row>
          <Col span={18} className={styles.restaurantContent}>
            <Reviews id={id} />
            <Dishes menu={menu} />
          </Col>
          <Col span={6}>
            <Cart />
          </Col>
        </Row>
      </div>
    )
  }
}

Restaurant.propTypes = {
  restaurant: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    menu: PropTypes.array,
  }),
}

const mapDispatchToProps = {
  fetchReviews,
}

export default connect(null, mapDispatchToProps)(Restaurant)
