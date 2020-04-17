// axios 配置
import Vue from 'vue'
import axios from 'axios'

/**
 * 修改接口请求
 * 1、修改 baseUrl 地址
 * 2、每次请求携带 token
 */

// 设置 axios 请求 baseUrl
axios.defaults.baseURL = 'http://api.imooc.hybrid.lgdsunday.club/'

/**
 * 设置拦截器，interceptos 响应处理
 * 所有使用 axios 发送的请求，在请求发送出去之前，都会进入到这个方法
 * 在这里，为所有的请求添加上 token
 */

axios.interceptors.request.use(config => {
  if (config.params) {
    config.params.token = 'da2e4bd0-8069-11ea-be50-5ba804756465'
  } else {
    config.params = {
      token: 'da2e4bd0-8069-11ea-be50-5ba804756465'
    }
  }
  return config
})

/**
* 设置拦截器，interceptos 响应处理，
* 所有使用 axios 的请求响应，都会优先回调到拦截器中
* 在正确的返回情况下，数据会优先进入第一个回调方法，
* 在请求错误的情况下，错误会进入第二个回调方法
*/
axios.interceptors.response.use((response) => {
  // 统一处理数据，使组件中的请求只获取到需要的业务数据，而不需要去关注返回的状态码等与业务无关的数据
  return response.data.data
}, (error) => {
  // 处理错误的响应
  return Promise.reject(error)
})

// 绑定到 vue 原型中，组件中：this.$http -> axios
Vue.prototype.$http = axios
