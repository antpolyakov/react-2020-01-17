import {ADD_REVIEW, FETCH_USERS} from '../common'
import {arrayToMap} from '../utils'

export const usersReducer = (usersState = null, action) => {
  switch (action.type) {
    case FETCH_USERS: {
      return arrayToMap(action.response)
    }
    case ADD_REVIEW: {
      if (!usersState[action.userId]) {
        return {
          ...usersState,
          [action.userId]: {
            id: action.userId,
            name: action.payload.userName,
          },
        }
      } else {
        return usersState
      }
    }
    default:
      return usersState
  }
}
