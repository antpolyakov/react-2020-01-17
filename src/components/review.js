import React from 'react'

function Review(props) {
  return (
    <div>
      <h3>{props.user}</h3>
      <div>{props.rating}</div>
      <p>{props.text}</p>
    </div>
  )
}

export default Review
