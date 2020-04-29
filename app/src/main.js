import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@js/rem'
import '@js/axios.config.js'
import '@js/filters.js'
import '@js/IsIphoneX.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
