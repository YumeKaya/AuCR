const sdk = {
  state: {
    sdk_51world: undefined
  },
  getters: {
    GetSDK: state => {
      return state.sdk_51world
    },
  },
  mutations: {
    SetSDK(state, data) {
      state.sdk_51world = data
    },
  }
}

export default sdk
