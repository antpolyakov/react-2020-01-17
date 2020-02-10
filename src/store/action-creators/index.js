import {
  ADD_REVIEW,
  ADD_TO_CART,
  DECREMENT,
  FETCH_DISHES,
  FETCH_RESTAURANTS,
  FETCH_REVIEWS,
  INCREMENT,
  REMOVE_FROM_CART,
} from '../common'
import {selectDishes} from '../selectors'

export const increment = () => {
  return {
    type: INCREMENT,
  }
}

export const decrement = () => {
  return {
    type: DECREMENT,
  }
}

export const addToCart = dishId => {
  return {
    type: ADD_TO_CART,
    payload: {
      id: dishId,
    },
  }
}

export const removeFromCart = dishId => {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      id: dishId,
    },
  }
}

export const addReview = (userName, rating, text, restaurantId) => ({
  type: ADD_REVIEW,
  payload: {
    userName,
    rating,
    text,
    restaurantId,
  },
  generateId: true,
  provideUserId: true,
})

export const fetchRestaurants = () => ({
  type: FETCH_RESTAURANTS,
  callAPI: '/api/restaurants',
})

export const fetchDishes = () => (dispatch, getState) => {
  if (selectDishes(getState()).length > 0) {
    return
  }
  fetch('/api/dishes')
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: FETCH_DISHES,
        response: data,
      })
    })
    .catch(e => console.warn(e))
}

export const fetchReviews = id => ({
  type: FETCH_REVIEWS,
  callAPI: id ? `/api/reviews?id=${id}` : '/api/reviews',
})
