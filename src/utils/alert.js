import Alert from 'components/alert'
import Vue from 'vue'
const alert = (title = '提示', content = '', positiveHide = '', positiveConfirm = '', onPositiveHide, onPositiveConfirm) => {
  const Component = Vue.extend(Alert)
  const instance = new Component({
    el: document.createElement('div'),
  })
  document.body.appendChild(instance.$el)
  instance.title = title
  instance.content = content
  instance.positiveHide = positiveHide
  instance.positiveConfirm = positiveConfirm
  instance.onPositiveHide = onPositiveHide || function () {}
  instance.onPositiveConfirm = onPositiveConfirm || function () {}
  instance.visible = true
}
alert.install = (Vue) => {
  Vue.alert = Vue.prototype.$alert = alert
}

export default alert