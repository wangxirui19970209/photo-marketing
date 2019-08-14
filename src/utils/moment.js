import moment from 'moment'

export default {
  install: function (Vue) {
    Object.defineProperty(Vue.prototype, '$moment', {
      value: moment
    })
    Object.defineProperty(Vue, '$moment', {
      value: moment
    })
  }
}