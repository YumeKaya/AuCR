const event = {
  state: {
    event_51world: undefined,
  },
  getters: {
    GetEVENT: state => {
      return state.event_51world
    },
  },
  mutations: {
    SetEVENT(state, event) {
      state.event_51world = event
    }
  }
}

export default event
