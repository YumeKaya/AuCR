import Vue from 'vue'
import AuCR from './components/AuCR/index.vue'
import store from "./store"

const components = [
  AuCR
]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component);
  })
  Vue.prototype.$aucr = AuCR
  Vue.prototype.$aucr_api = AuCR.AuCR_API.methods
}

store.commit('SetEVENT', !window.Vue ? new Vue() : window.Vue)

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  AuCR,
}
