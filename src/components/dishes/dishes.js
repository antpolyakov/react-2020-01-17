import React, {Component} from 'react'
import Dish from '../dish'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fetchDishes} from '../../store/action-creators'
import {selectDishes} from '../../store/selectors'
import {Spin} from 'antd'

class Dishes extends Component {
  componentDidMount() {
    this.props.fetchDishes && this.props.fetchDishes()
  }

  renderDishesList = menu => {
    return menu.map(dishId => <Dish key={dishId} id={dishId} />)
  }

  renderLoadProgress = () => {
    return (
      <h3>
        <Spin /> loading dishes...
      </h3>
    )
  }

  render() {
    const {menu, dishesLoaded} = this.props
    return (
      <div>
        {dishesLoaded ? this.renderDishesList(menu) : this.renderLoadProgress()}
      </div>
    )
  }
}

export const DishesPropTypes = {
  menu: PropTypes.arrayOf(PropTypes.string),
}

Dishes.propTypes = DishesPropTypes

export default connect(
  state => ({
    dishesLoaded: selectDishes(state).length > 0,
  }),
  {
    fetchDishes,
  }
)(Dishes)
