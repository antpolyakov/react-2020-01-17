import React, {useMemo, useState} from 'react'
import RestaurantsNavigation from './restaurants-navigation'
import Restaurant from './restaurant'

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
      <Restaurant {...activeRestaurant} />
    </div>
  )
}

export default Restaurants
