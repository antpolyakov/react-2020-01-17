import {normalizedRestaurants} from '../../fixtures'
import {ADD_REVIEW} from '../common'

export const restaurantsReducer = (
  restaurantsState = [...normalizedRestaurants],
  action
) => {
  if (action.type === ADD_REVIEW) {
    const {restaurantId, id: reviewId} = action.payload
    restaurantsState = [...restaurantsState]
    const index = restaurantsState.findIndex(
      restaurant => restaurant.id === restaurantId
    )
    const restaurant = restaurantsState[index]
    restaurantsState[index] = {
      ...restaurant,
      reviews: [...restaurant.reviews, reviewId],
    }
  }

  return restaurantsState
}
