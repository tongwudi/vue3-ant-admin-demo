import { createStore } from 'vuex'
import { setLocal, getLocal, clearLocal } from '@/utils/storage'
import { fetchMemu } from '@/api'
import { constantRoutes } from '@/router/constant-routes'
import { dynamicRoutes } from '@/router/dynamic-router'
import { filterAsyncRoutes, resetRouter } from '@/router'

export default createStore({
  state: {
    token: getLocal('token'),
    routes: [],
    collapsed: false
  },
  getters: {
    // 是否已登录
    hasToken: (state): boolean => {
      return !!state.token
    },
    // 是否已生成菜单
    hasRoutes(state): boolean {
      return state.routes.length > 0
    },
  },
  mutations: {
    setToken(state, val) {
      state.token = val
      setLocal('token', state.token)
    },
    clearToken(state: any) {
      state.token = null
      clearLocal('token')
    },
    setRoutes(state, routes) {
      state.routes = <any>constantRoutes.concat(routes)
    },
    toggleCollapse: (state, val) => {
      state.collapsed = val
    }
  },
  actions: {
    // 根据权限生成菜单
    async generateRoutes(context) {
      const { data: asyncRoutes } = <any>await fetchMemu()

      let routes = filterAsyncRoutes(asyncRoutes, dynamicRoutes)

      // let MainContainer = constantRoutes.find((v: any) => v.path === "/")

      // console.log(routes, MainContainer);

      // const children = MainContainer?.children || []
      // children.push(...routes)

      context.commit('setRoutes', routes)

      return routes
    },
    // 退出登录
    logout(context) {
      setTimeout(() => {
        context.commit('clearToken')
        context.commit('clearRoles')
        resetRouter()
      }, 500)
    },
  },
  modules: {
  }
})
