import router from './index'
import store from '@/store/index'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
NProgress.configure({ showSpinner: false }) // 进度环显示/隐藏


const whiteList = ['/login']

router.beforeEach(async (to, from, next) => {
  // 打开进度条
  NProgress.start()

  const hasToken = store.getters.hasToken
  const hasRoutes = store.getters.hasRoutes
  if (hasToken) {
    // 登录成功，跳转到首页
    if (to.path === '/login') {
      next('/')
    } else {
      if (!hasRoutes) {
        try {
          const accessRoutes = await store.dispatch('generateRoutes')

          accessRoutes.forEach((route: any) => {
            router.addRoute(route)
          })

          next({ ...to, replace: true })
        } catch (err) {
          // 移除 token 并跳转登录页
          await store.dispatch('logout')
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      } else {
        next()
      }
    }
  } else {
    // 未登录可以访问白名单页面(登录页面)
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // 关闭进度条
  NProgress.done()
})
