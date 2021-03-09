const init = {
  state: {
    init: false,
    cloudUrl: 'https://vizservice.51hitech.com',
    projectId: '5f5994158ce8237490e458e2',
    username: 'testAppkss0rh',
    password: 'c3WLhNQW7YiIVldG',
  },
  getters: {
    GetInit: state => {
      return state.init
    },
    GetInitInfo: state => {
      return {
        cloudUrl: state.cloudUrl,
        projectId: state.projectId,
        username: state.username,
        password: state.password,
      }
    }
  },
  mutations: {
    SetInit(state, _init) {
      state.init = (!_init ? false : true)
    }
  }

};

export default init
