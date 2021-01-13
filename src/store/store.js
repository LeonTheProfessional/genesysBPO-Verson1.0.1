/**
 * Created by superman on 17/2/16.
 */
import Vuex from 'vuex'
import Vue from 'vue'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    token: '',
    routeList: [],
    loginUser: {},
    menuCd: ''
  },
  mutations: {
    saveToken (state, token) {
      this.state.token = token
    },
    saveRouteList: (state, data) => {
      state.routeList = data
    },
    usrKbn (state, value) {
      this.state.usrKbn = value
    },
    saveLoginUser (state, value) {
      this.state.loginUser = value
      // let data = Object.assign({},this.state.loginUser,value);
    },
    saveMenuCd (state, value) {
      this.state.menuCd = value
    },
    remove (state) {
      state = {
        token: '',
        routeList: [],
        loginUser: {},
        menuList: []
      }
    }
  },
  getters: {
    token: state => () => {
      return state.token
    },
    loginUser: state => () => {
      return state.loginUser
    },
    routeList: state => () => {
      return state.routeList
    },
    menuCd: state => () => {
      return state.menuCd
    }
  },
  actions: {
    logout (context) {
      context.commit('remove')
    }
  },
  plugins: [
    createPersistedState({
      key: 'state',
      storage: window.sessionStorage
    })
  ]
})
