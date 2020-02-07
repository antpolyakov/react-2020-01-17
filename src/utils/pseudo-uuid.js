export const genPseudoUuid = () => {
  let buffer = []
  ;[8, 4, 4, 4, 12].map(len =>
    buffer.push(
      Math.random()
        .toString(16)
        .substring(2, 2 + len)
    )
  )
  return buffer.join('-')
}
