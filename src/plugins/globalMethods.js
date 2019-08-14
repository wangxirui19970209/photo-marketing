import Alert from 'utils/alert'
import Tip from 'utils/tip'
import Moment from 'utils/moment'

export default function (Vue) {
  // 引入通用工具组件的Vue全局或Vue实例方法
  ;[Alert, Tip, Moment].forEach(_ => Vue.use(_))
}
