import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router/routers'
import './router/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import AuCR from 'AuCR-sdk'

Vue.use(ElementUI)
Vue.use(AuCR)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
