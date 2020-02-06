import React from 'react'
import Enzyme, {mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Reviews from './reviews'
import Review from './review'
import {restaurants} from '../../fixtures'

const reviewsMock = restaurants[0].reviews

Enzyme.configure({adapter: new Adapter()})

describe('Reviews', function() {
  const nodes = {
    reviewsContainer: null,
  }

  beforeEach(() => {
    const wrapper = mount(<Reviews reviews={reviewsMock} />)
    nodes.reviewsContainer = wrapper.find(
      'div[data-automation-id="REVIEWS_CONTAINER"]'
    )
  })

  it('should be exact number of reviews', function() {
    const {reviewsContainer} = nodes
    expect(reviewsContainer.children()).toHaveLength(reviewsMock.length)
  })

  it('each item is a Review', function() {
    const {reviewsContainer} = nodes
    expect(reviewsContainer.children().every(Review)).toBe(true)
  })
})
