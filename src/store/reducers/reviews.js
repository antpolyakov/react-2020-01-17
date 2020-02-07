import {normalizedReviews} from '../../fixtures'
import {ADD_REVIEW} from '../common'

const initialState = normalizedReviews.reduce((reviews, review) => {
  return {
    ...reviews,
    [review.id]: review,
  }
}, {})

export const reviewsReducer = (reviewsState = initialState, action) => {
  if (action.type === ADD_REVIEW) {
    const {restaurantId, ...reviewData} = action.payload
    return {
      ...reviewsState,
      [reviewData.id]: reviewData,
    }
  }
  return reviewsState
}
