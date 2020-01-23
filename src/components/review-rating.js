import React from 'react'
import {Rate} from 'antd'

function ReviewRating({allowHalf = true, disabled = true, ...restProps}) {
  return <Rate allowHalf={allowHalf} disabled={disabled} {...restProps} />
}

export default ReviewRating
