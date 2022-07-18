import { createStore } from 'vuex'

export default createStore({
  state: {
    isCollapse: false,
    device: 'desktop'
  },
  getters: {
  },
  mutations: {
    toggleCollapse: (state, val) => {
      state.isCollapse = val
    },
    toggleDevice(state, val) {
      state.device = val
    }
  },
  actions: {
  },
  modules: {
  }
})
