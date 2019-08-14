export default ((r) => {
  const cache = {}
  r.keys().forEach((key) => {
    const apis = r(key)
    Object.keys(apis).forEach((name) => {
      if (cache[name]) {
        throw new Error(`Api '${name}' conflict in '${key}'!`)
      }
      cache[name] = apis[name]
    })
  })

  return cache
})(require.context('./apiList/', false, /\.js/))
