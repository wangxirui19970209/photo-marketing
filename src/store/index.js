/**
 * Created by yjf on 2017/10/13.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import {
  SET_IS_LOGIN,
  SET_SHADMIN,
} from './mutationTypes'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    isLogin: false,
    shAdminState: {}
  },
  mutations: {
    [SET_IS_LOGIN](state, payload) {
      state.isLogin = payload
    },
    [SET_SHADMIN](state, payload) {
      state.shAdminState = payload
    }
  },
  getters: {
    shAdmin() {
      if (store.state.shAdminState.phone) {
        return store.state.shAdminState
      }
      return JSON.parse(window.localStorage.getItem('shAdmin')) || {}
    }
  },
  modules: {}
})

export default store
