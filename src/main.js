import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import moment from 'moment'
moment.locale('zh-cn')
// import ViewUI from 'view-design'
// import 'view-design/dist/styles/iview.css'
// Vue.use(ViewUI)

import 'assets/styles/index.css'
import 'assets/styles/reset.css'
import 'assets/styles/animation.css'
Vue.config.productionTip = false



let vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
