import Vue from 'vue'
import Vuex from 'vuex'

import sdk from "./modules/sdk"
import event from "./modules/event"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  modules: {
    sdk,
    event
  }
})
