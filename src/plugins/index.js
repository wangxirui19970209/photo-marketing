import globalConfig from './globalConfig'
import globalMethods from './globalMethods'

export default function (Vue) {
  Vue.use(globalMethods)
  Vue.use(globalConfig)
}
