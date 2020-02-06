import React from 'react'
import Enzyme, {mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Dish from './dish'
import {restaurants} from '../../fixtures'

const dishMock = restaurants[0].menu[0]

const CLICKS_COUNT = 3

Enzyme.configure({adapter: new Adapter()})

describe('Dish', function() {
  const nodes = {
    increaseButton: null,
    decreaseButton: null,
    amountNode: null,
  }

  beforeEach(() => {
    const wrapper = mount(<Dish dish={dishMock} />)
    nodes.increaseButton = wrapper.find('button[data-automation-id="INCREASE"]')
    nodes.decreaseButton = wrapper.find('button[data-automation-id="DECREASE"]')
    nodes.amountNode = wrapper.find('[data-automation-id="AMOUNT"]')
  })

  it('should increase cart amount when click on plus button', function() {
    const {increaseButton, amountNode} = nodes
    _repeat(CLICKS_COUNT, () => increaseButton.simulate('click'))
    expect(amountNode.text()).toBe(CLICKS_COUNT.toString())
  })

  it('should decrease cart amount when click on minus button', function() {
    const {increaseButton, decreaseButton, amountNode} = nodes
    _repeat(CLICKS_COUNT, () => increaseButton.simulate('click'))
    _repeat(CLICKS_COUNT, () => decreaseButton.simulate('click'))
    expect(amountNode.text()).toBe('0')
  })

  it('should NOT decrease cart amount when amount is zero', function() {
    const {increaseButton, decreaseButton, amountNode} = nodes
    _repeat(CLICKS_COUNT, () => increaseButton.simulate('click'))
    _repeat(CLICKS_COUNT + 1, () => decreaseButton.simulate('click'))
    expect(amountNode.text()).toBe('0')
  })
})

// TODO replace by _.times()
const _repeat = (count, action) => {
  for (let c = 0; c < count; c++) {
    action()
  }
}
