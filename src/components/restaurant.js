import React from 'react'
import Menu from './menu'
import Reviews from './reviews'

function Restaurant(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <hr />
      <h2>Menu</h2>
      <Menu restaurant={props} />
      <hr />
      <h2>Reviews</h2>
      <Reviews restaurant={props} />
    </div>
  )
}

export default Restaurant
