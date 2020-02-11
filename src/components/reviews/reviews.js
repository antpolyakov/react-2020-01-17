import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Review from './review'
import {Col, Row, Spin} from 'antd'
import ReviewForm from '../review-form'
import {connect} from 'react-redux'
import {selectReviews} from '../../store/selectors'

class Reviews extends Component {
  static defaultProps = {
    reviews: null,
  }

  renderReviewsList = reviews => {
    return reviews.map(review => <Review review={review} key={review.id} />)
  }

  renderLoadProgress = () => {
    return (
      <h3>
        <Spin /> loading reviews...
      </h3>
    )
  }

  render() {
    const {reviews, id} = this.props
    return (
      <Row type="flex" justify="center" gutter={{xs: 8, sm: 16, md: 24}}>
        <Col xs={24} md={16}>
          {reviews
            ? this.renderReviewsList(reviews)
            : this.renderLoadProgress()}
          <ReviewForm id={id} />
        </Col>
      </Row>
    )
  }
}

export const ReviewsPropTypes = {
  id: PropTypes.string,
}

Review.propTypes = ReviewsPropTypes

const mapStateToProps = (state, ownProps) => {
  return {
    reviews: selectReviews(state, ownProps),
  }
}

export default connect(mapStateToProps)(Reviews)
