import {arrayToMap} from '../utils'
import {ADD_REVIEW, FETCH_REVIEWS_START, FETCH_REVIEWS} from '../common'
import {Map} from 'immutable'

const initialState = new Map({})

export const reviewsReducer = (reviewsState = initialState, action) => {
  switch (action.type) {
    case FETCH_REVIEWS_START: {
      return initialState
    }
    case FETCH_REVIEWS: {
      return new Map(arrayToMap(action.response))
    }
    case ADD_REVIEW: {
      return reviewsState.set(action.generatedId, {
        id: action.generatedId,
        userId: action.userId,
        text: action.payload.text,
        rating: action.payload.rating,
      })
    }
    default:
      return reviewsState
  }
}
