import React, {useCallback, useMemo} from 'react'
import PropTypes from 'prop-types'
import {Rate} from 'antd'
import {useSelector} from 'react-redux'
import {selectAvgRating} from '../../store/selectors'

function AverageRating(props) {
  const selectAvgRatingMemo = useCallback(
    state => selectAvgRating(state, props),
    [props]
  )
  const avgRating = useSelector(selectAvgRatingMemo)
  const normalizedRating = useMemo(() => Math.floor(avgRating * 2) / 2, [
    avgRating,
  ])

  return (
    <div>
      <Rate value={normalizedRating} disabled allowHalf />
    </div>
  )
}

AverageRating.propTypes = {
  reviews: PropTypes.array.isRequired,
}

export default AverageRating
