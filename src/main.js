import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iView from 'iview'
import axios from 'axios'
import 'iview/dist/styles/iview.css'    // 使用 CSS
Vue.use(iView)
Vue.prototype.axios = axios
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
