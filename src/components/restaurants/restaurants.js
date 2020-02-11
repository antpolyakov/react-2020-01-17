import React, {useCallback, useEffect, useMemo, useState} from 'react'
import Restaurant from '../restaurant'
import RestaurantsNavigation from '../restaurants-navigation'
import {connect} from 'react-redux'
import {
  selectDishes,
  selectRestaurants,
  selectUserList,
} from '../../store/selectors'
import {
  fetchDishes,
  fetchRestaurants,
  fetchUsers,
} from '../../store/action-creators'
import {Progress} from 'antd'

const defaultLoadProgressState = {
  restaurants: 'рестораны',
  users: 'пользователи',
  dishes: 'блюда',
}

function Restaurants(props) {
  const [currentId, setCurrentId] = useState(null)
  const {
    restaurants,
    usersLoaded,
    dishesLoaded,
    fetchRestaurants,
    fetchUsers,
    fetchDishes,
  } = props

  useEffect(() => {
    fetchRestaurants && fetchRestaurants()
    fetchUsers && fetchUsers()
    fetchDishes && fetchDishes()
  }, [fetchRestaurants, fetchUsers, fetchDishes])

  useEffect(() => {
    !currentId && restaurants.length && setCurrentId(restaurants[0].id)
  }, [restaurants, currentId])

  const handleRestaurantChange = useCallback(id => setCurrentId(id), [
    setCurrentId,
  ])

  const [loadProgress, setLoadProgress] = useState(defaultLoadProgressState)

  if (loadProgress.restaurants && restaurants.length > 0) {
    setLoadProgress({
      ...loadProgress,
      restaurants: false,
    })
  }
  if (loadProgress.users && usersLoaded) {
    setLoadProgress({
      ...loadProgress,
      users: false,
    })
  }
  if (loadProgress.dishes && dishesLoaded) {
    setLoadProgress({
      ...loadProgress,
      dishes: false,
    })
  }

  const [loadProgressList, loadProgressPercent] = useMemo(() => {
    const list = Object.values(loadProgress)
    const inProgressList = list.filter(item => item)
    // TODO calculate 'loadProgressPercent'
    console.log(
      `+load progress: ${list.length - inProgressList.length}/${list.length}`
    )
    return [inProgressList, 100]
  }, [loadProgress])

  const restaurant = useMemo(
    () => restaurants.find(restaurant => restaurant.id === currentId),
    [restaurants, currentId]
  )

  if (loadProgressList.length) {
    return (
      <div>
        <h3>Загрузка</h3>
        <Progress
          percent={loadProgressPercent}
          showInfo={false}
          status="active"
        />
        <div>{loadProgressList.join(', ')}...</div>
      </div>
    )
  }

  return (
    <div data-automation-id="RESTAURANTS">
      <RestaurantsNavigation
        restaurants={restaurants}
        onRestaurantChange={handleRestaurantChange}
      />
      {restaurant && <Restaurant restaurant={restaurant} />}
    </div>
  )
}

const mapStateToProps = state => ({
  restaurants: selectRestaurants(state),
  usersLoaded: !!selectUserList(state),
  dishesLoaded: selectDishes(state).length > 0,
})

const mapDispatchToProps = {
  fetchRestaurants,
  fetchUsers,
  fetchDishes,
}

export default connect(mapStateToProps, mapDispatchToProps)(Restaurants)
