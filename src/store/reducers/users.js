import {normalizedUsers} from '../../fixtures'
import {ADD_USER} from '../common'

const initialState = normalizedUsers.reduce((users, user) => {
  return {
    ...users,
    [user.id]: user,
  }
}, {})

export const usersReducer = (usersState = initialState, action) => {
  if (action.type === ADD_USER) {
    const userData = action.payload
    return {
      ...usersState,
      [userData.id]: userData,
    }
  }
  return usersState
}
