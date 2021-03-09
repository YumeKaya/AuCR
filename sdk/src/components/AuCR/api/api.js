import api_implement from './api_implement'

const api = api_implement.methods

export default {
  methods: {
    init(initObject) {
      return api.init(initObject)
    },
    stop() {
      return api.stop()
    },
    registerEvent(callbackFunction) {
      return api.registerEvent(callbackFunction)
    }
  }
}
