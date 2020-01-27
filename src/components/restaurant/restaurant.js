import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Dishes from '../dishes'
import AverageRating from '../average-rating'
import Reviews from '../reviews'
import Hero from '../hero'
import styles from './restaurant.module.css'

class Restaurant extends Component {
  static propTypes = {
    restaurant: PropTypes.shape({
      name: PropTypes.string.isRequired,
      menu: PropTypes.array.isRequired,
      reviews: PropTypes.array.isRequired,
    }).isRequired,
  }

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
      restaurant: {name, menu, reviews},
    } = this.props
    return (
      <div data-automation-id="RESTAURANT_CONTAINER">
        <Hero heading={name}>
          <AverageRating reviews={reviews} />
        </Hero>
        <div className={styles.restaurantContent}>
          <Reviews reviews={reviews} />
          {!this.state.error && <Dishes menu={menu} />}
        </div>
      </div>
    )
  }
}

export default Restaurant
