import axios from 'axios'
import qs from 'qs'
import router from '@/router'
import store from '@/store'
const config = {
  // baseURL: 'http://localhost:3000/',
  timeout: 60000,
  // withCredentials: true, //表示跨域请求时是否需要使用凭证，默认为false
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  transformRequest: [function (body) {
    const adminToken = window.localStorage['shAdmin'] ? JSON.parse(window.localStorage['shAdmin']) : null
    let data = body || {}
    if (adminToken) {
      data.token = data.token || adminToken.token
    }
    return qs.stringify(data)
  }]
}
const axiosInstance = axios.create(config)

// 添加响应拦截器
axiosInstance.interceptors.response.use(response => {
  response.data = response.data || {}
  if (response.data.code === 3004) {
    store.commit('SET_IS_LOGIN', false)
    store.commit('SET_SHADMIN', {})
    window.localStorage.removeItem('shAdmin')
    router.push('/login/login')
  }
  // 对响应数据做些事
  if (response.status >= 200 && response.status < 300 || response.status == 304 ) {
    return response.data
  }
}, error => {
  // 请求错误时做些事
  alert('网络请求错误，请重试')
  return Promise.reject(error)
})

export default axiosInstance
