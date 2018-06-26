import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

Vue.config.productionTip = false
require('promise.prototype.finally').shim() // promise.prototype.finally


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
