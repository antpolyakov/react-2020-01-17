import {ADD_REVIEW, ADD_USER} from '../common'
import {genPseudoUuid} from '../../utils/pseudo-uuid'

export const dataManage = store => next => action => {
  if (action.type === ADD_REVIEW) {
    const {user: userName, ...reviewData} = action.payload
    let user = getUserByName(store.getState(), userName)
    // ad-hoc user "auto-creation"
    if (!user) {
      user = {
        id: createUid(),
        name: userName,
      }
      store.dispatch({
        type: ADD_USER,
        payload: user,
      })
    }
    action.payload = {
      id: createUid(),
      userId: user.id,
      ...reviewData,
    }
  }

  next(action)
}

const getUserByName = (state, userName) => {
  return Object.values(state.users).find(user => user.name === userName)
}

const createUid = () => genPseudoUuid()
