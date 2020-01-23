import React from 'react'
import Review from './review'

function Reviews(props) {
  return (
    <div>
      {props.restaurant.reviews.map(review => {
        const {id, ...reviewProps} = review
        return <Review key={id} {...reviewProps} />
      })}
    </div>
  )
}

export default Reviews
