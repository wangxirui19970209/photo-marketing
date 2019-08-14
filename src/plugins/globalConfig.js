import api from 'api'
const methodList = {
  // ajax
  api
}
function objBuilder (obj, modifier = '') {
  const o = {}
  for (const key in obj) {
    o[modifier + key] = {
      value: obj[key],
      writable: false
    }
  }
  return o
}
export default function (Vue) {
  Object.defineProperties(Vue, {
    ...objBuilder(methodList)
  })
  Object.defineProperties(Vue.prototype, {
    ...objBuilder(methodList, '$')
  })
}
