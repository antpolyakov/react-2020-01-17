import {Button, Card, Col, Form, Input, Row, Typography, Rate} from 'antd'
import React, {useState} from 'react'
import cx from 'classnames'

import styles from './review-form.module.css'
import {useDispatch} from 'react-redux'
import {ADD_REVIEW} from '../../store/common'

const ReviewForm = ({restaurantId}) => {
  const [userName, setUserName] = useState()
  const [reviewText, setReviewText] = useState()
  const [rating, setRating] = useState(0)
  const dispatch = useDispatch()

  const handleSubmit = event => {
    event.preventDefault()
    // TODO real validation
    // TODO how many ratings are accepted from a single user?
    if (userName && rating) {
      dispatch({
        type: ADD_REVIEW,
        payload: {
          restaurantId,
          user: userName,
          text: reviewText,
          rating,
        },
      })
      setUserName()
      setReviewText()
      setRating(0)
    }
  }

  const disabled = !userName || !rating

  return (
    <Card className={styles.reviewForm}>
      <Row type="flex" align="middle">
        <Col xs={24} md={18} align="left">
          <Typography.Title className={styles.addReviewTitle} level={4}>
            Leave your review
          </Typography.Title>
          <Form onSubmit={handleSubmit}>
            <Input
              placeholder="Your name"
              value={userName}
              className={cx(styles.inputName)}
              onChange={e => setUserName(e.target.value)}
            />
            <Input.TextArea
              rows={3}
              value={reviewText}
              size="large"
              onChange={e => setReviewText(e.target.value)}
            />
            <div>
              Rating: <Rate value={rating} onChange={setRating} />
            </div>
            <Button
              htmlType="submit"
              className={styles.submitButton}
              disabled={disabled}
            >
              PUBLISH REVIEW
            </Button>
          </Form>
        </Col>
      </Row>
    </Card>
  )
}

export default ReviewForm
