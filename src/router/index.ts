import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import store from '@/store/index'
import { constantRoutes as routes } from './constant-routes'

const router = createRouter({
  // history: createWebHashHistory(process.env.BASE_URL),
  // history: createWebHashHistory(),
  history: createWebHistory(),
  routes,
  // 刷新时，滚动条始终滚动到顶部
  scrollBehavior: () => ({ top: 0 })
})


// 重置路由
export const resetRouter = () => {
  const { routes } = store.state
  routes.forEach((route: any) => {
    const name = route.name
    if (name && router.hasRoute(name)) {
      router.removeRoute(name);
    }
  })
}

// 过滤权限路由
export const filterAsyncRoutes = (asyncRouter: any[], dynamicRouter: any[]) => {
  const routes: any = []
  dynamicRouter.forEach(route => {
    asyncRouter.forEach(item => {
      if (item.name === route.meta.name) {
        if (item.children?.length) {
          route.children = filterAsyncRoutes(item.children, route.children)
        }
        routes.push(route)
      }
    })
  })
  return routes
}

// export const setDefaultRoute = (routes: any[]) => {
//   routes.forEach(v => {
//     if (v.children && v.children.length > 0) {
//       v.redirect = { name: v.children[0].name }
//       setDefaultRoute(v.children)
//     }
//   })
// }

export default router
