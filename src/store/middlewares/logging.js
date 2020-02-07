export const logging = store => next => action => {
  console.group(`action ${action.type}`, action)
  console.log('before', store.getState())
  next(action)
  console.log('after', store.getState())
  console.groupEnd()
}
