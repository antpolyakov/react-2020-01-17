import React, {useMemo, useState} from 'react'
import RestaurantsNavigation from './restaurants-navigation'
import Menu from './menu'
import Reviews from './reviews'

function Restaurants(props) {
  const [activeRestaurantId, setActiveRestaurant] = useState(
    props.restaurants[0].id
  )
  const activeRestaurant = useMemo(() => {
    return props.restaurants.find(
      restaurant => restaurant.id === activeRestaurantId
    )
  }, [activeRestaurantId, props.restaurants])
  return (
    <div>
      <RestaurantsNavigation
        restaurants={props.restaurants}
        onRestaurantChange={id => setActiveRestaurant(id)}
      />
      <hr />
      <h2>Reviews</h2>
      <Reviews restaurant={activeRestaurant} />
      <hr />
      <h2>Menu</h2>
      <Menu restaurant={activeRestaurant} />
    </div>
  )
}

export default Restaurants
