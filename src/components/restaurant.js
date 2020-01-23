import React from 'react'
import Menu from './menu'
import Reviews from './reviews'

function Restaurant(props) {
  return (
    <div>
      <h1>{props.name}</h1>
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
