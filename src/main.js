import Vue from 'vue'
import './plugins/vue-inject'
import './plugins/vuetify'
import './plugins/vuex'
import './api'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
