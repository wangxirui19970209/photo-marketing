import Tip from 'components/tip'
import Vue from 'vue'
const tip = (title = '提示') => {
  const Component = Vue.extend(Tip)
  const instance = new Component({
    el: document.createElement('div'),
  })
  document.body.appendChild(instance.$el)
  instance.title = title
  instance.visible = true
}
tip.install = (Vue) => {
  Vue.tip = Vue.prototype.$tip = tip
}

export default tip