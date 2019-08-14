// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import plugins from './plugins'
import 'amfe-flexible'
import 'styles/index.less'
import VueAwesomeSwiper from 'vue-awesome-swiper/dist/ssr'
import store from './store'

Vue.use(plugins)
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

// 自定义指令，点击时滚动到对应的位置
Vue.directive('anchor', {
  inserted (el, binding) {
    el.onclick = () => {
      document.documentElement.scrollTop = document.getElementById('anchor-' + binding.value).offsetTop - 100
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
