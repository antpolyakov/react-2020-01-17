import React, {useMemo} from 'react'
import Menu from './menu'
import Reviews from './reviews'

const RATING_PRECISION = 0.1

function Restaurant(props) {
  const avgRating = useMemo(() => {
    return (
      Math.round(
        props.reviews.length &&
          props.reviews.reduce((sum, review) => sum + review.rating, 0) /
            props.reviews.length /
            RATING_PRECISION
      ) * RATING_PRECISION
    )
  }, [props.reviews])
  return (
    <div>
      <h1>{props.name}</h1>
      <div>
        Average rating: <b>{avgRating}</b> ({props.reviews.length} reviews)
      </div>
      <hr />
      <h2>Menu</h2>
      <Menu items={props.menu} />
      <hr />
      <h2>Reviews</h2>
      <Reviews items={props.reviews} />
    </div>
  )
}

export default Restaurant
