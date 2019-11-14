import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import capitalize from './filters/Capitalize'
import './registerServiceWorker'

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'



Vue.use(Buefy)
Vue.filter('cap', capitalize)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
