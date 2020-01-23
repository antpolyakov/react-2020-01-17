import React from 'react'
import ReviewRating from './review-rating'

function Review(props) {
  return (
    <div>
      <h3>
        {props.user}: <ReviewRating value={props.rating} />
      </h3>
      <p>{props.text}</p>
    </div>
  )
}

export default Review
