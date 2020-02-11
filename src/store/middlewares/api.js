export default store => next => action => {
  const {callAPI, beforeAction, ...rest} = action
  if (!callAPI) {
    return next(rest)
  }
  if (beforeAction) {
    store.dispatch(beforeAction)
  }
  fetch(callAPI)
    .then(res => res.json())
    .then(data => {
      next({
        ...rest,
        response: data,
      })
    })
    .catch(e => console.warn(e))
}
