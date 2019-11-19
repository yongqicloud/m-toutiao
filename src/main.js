import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'assets/styles/index.css'
import 'assets/styles/reset.css'
import 'assets/styles/animation.css'

Vue.config.productionTip = false

let vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
