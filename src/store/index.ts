import { createStore } from 'vuex'

export default createStore({
  state: {
    collapsed: false,
  },
  getters: {
  },
  mutations: {
    toggleCollapse: (state, val) => {
      state.collapsed = val
    }
  },
  actions: {
  },
  modules: {
  }
})
