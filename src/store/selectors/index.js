import {createSelector} from 'reselect'

export const selectId = (state, ownProps) => ownProps.id

export const selectCart = state => state.cart

export const selectRestaurantList = state => state.restaurants

export const selectDishes = state => state.dishes

export const selectDish = createSelector(
  selectDishes,
  selectId,
  (dishes, id) => {
    return dishes[id]
  }
)

export const selectAmountFromCart = createSelector(
  selectCart,
  selectId,
  (cart, id) => {
    return cart[id] || 0
  }
)

export const selectCartInfo = createSelector(
  selectCart,
  selectRestaurantList,
  selectDishes,
  (cart, restaurants, dishes) => {
    const orderedDishes = restaurants.reduce(
      (result, restaurant) => {
        restaurant.menu.forEach(dishId => {
          const dish = dishes[dishId]
          const amount = cart[dishId]
          if (amount) {
            const totalDishPrice = amount * dish.price
            result.totalPrice += totalDishPrice
            result.dishes.push({
              dish,
              amount,
              totalDishPrice,
            })
          }
        })
        return result
      },
      {
        dishes: [],
        totalPrice: 0,
      }
    )

    return {
      orderedDishes,
    }
  }
)

export const selectUsers = state => state.users

export const selectReviews = state => state.reviews

export const selectReview = createSelector(
  selectReviews,
  selectId,
  selectUsers,
  (reviews, id, users) => {
    const review = reviews[id]
    return {
      ...review,
      user: users[review.userId].name,
    }
  }
)

export const selectRestaurantReviewIds = (state, props) => props.reviews

export const selectAvgRating = createSelector(
  selectReviews,
  selectRestaurantReviewIds,
  (allReviews, restaurantReviewIds) =>
    restaurantReviewIds.reduce(
      (acc, reviewId) => acc + allReviews[reviewId].rating,
      0
    ) / restaurantReviewIds.length
)
