/**
 * Created by superman on 17/2/16.
 * http配置
 */
import axios from 'axios'
import store from '@/store/store'
import router from '@/router'

// axios 配置
axios.defaults.timeout = 5000
axios.defaults.baseURL = '/api'

let loadinginstace
let uid

// http request 拦截器
axios.interceptors.request.use(config => {
  config.headers.common.authToken = `${store.state.token}`
  return config
},
error => {
  if (loadinginstace) {
    loadinginstace.close()
  }
  console.log(error)
  // return Promise.reject(error);
  return null
})

// http response 拦截器
axios.interceptors.response.use(
  response => {
    const result = response.data
    const resUid = response.config.headers.uid
    if (loadinginstace && uid === resUid) {
      loadinginstace.close()
    }
    if (result.retCode === 100 || response.config.responseType === 'arraybuffer') {
      return response
    } else if (result.retCode === 105) {
      window.onbeforeunload = function () {
      }
      window.onunload = function () {
      }
      store.dispatch('logout')
      router.push({ name: 'error-404' })
      return null
    } else {
      window.onbeforeunload = function () {
      }
      window.onunload = function () {
      }
      store.dispatch('logout')
      router.push({ name: 'error-500' })
      return null
    }
  },
  error => {
    if (loadinginstace) {
      loadinginstace.close()
    }
    if (error.response) {
      window.onbeforeunload = function () {
      }
      window.onunload = function () {
      }
      store.dispatch('logout')
      if (error.response.status >= 400 && error.response.status <= 500) {
        // window.location.href="error.html";
        router.push({ name: 'error-404' })
      }
      if (error.response.status >= 500 && error.response.status <= 600) {
        // window.location.href="nofind.html";
        router.push({ name: 'error-500' })
      }
    }
    // return Promise.reject(error.response.data)
    return null
  }
)

export default axios
