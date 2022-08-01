import { RouteRecordRaw } from 'vue-router'
import Login from '../views/login/index.vue'
import Layout from '@/layout/index.vue'
import Forbidden from '../views/errorPage/403.vue'
import NotFound from '../views/errorPage/404.vue'

export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Login
    // component: () => import(/* webpackChunkName: "about" */ '../views/login.vue')
  },
  {
    path: "/403",
    component: Forbidden
  },
  {
    path: '/404',
    component: NotFound
  },
  // vue2 使用 *
  // vue3 使用 '/:catchAll(.*)' 或 '/:pathMatch(.*)'
  {
    path: '/:catchAll(.*)', // 不识别的path自动匹配404
    redirect: '/404',
  },
  {
    path: '/',
    name: 'Home',
    component: Layout,
    // redirect: '/dashboard',
    children: []
  }
]