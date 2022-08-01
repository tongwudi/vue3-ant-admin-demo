// 动态路由
export const dynamicRoutes: any = [
  {
    path: '/dashboard',
    name: 'dashboard',
    meta: { name: '首页', icon: 'dashboard' },
    component: () => import('@/views/dashboard/index.vue')
  },
  {
    path: '/order',
    name: 'order-manage',
    meta: { name: '订单管理', icon: '' },
    // component: '/layout/index.vue',
    children: [
      {
        path: 'order-list',
        name: 'order-list',
        meta: { name: '订单列表', icon: '' },
        component: () => import('@/views/order/list.vue')
      },
      {
        path: 'order-audit',
        name: 'order-audit',
        meta: { name: '订单审核', icon: '' },
        component: () => import('@/views/order/audit.vue')
      }
    ]
  },
  {
    path: '/goods',
    name: 'goods-manage',
    meta: { name: '商品管理', icon: '' },
    // component: '/layout/index.vue',
    children: [
      {
        path: 'goods-list',
        name: 'goods-list',
        meta: { name: '商品列表', icon: '' },
        component: () => import('@/views/goods/list.vue')
      },
      {
        path: 'goods-audit',
        name: 'goods-audit',
        meta: { name: '商品审核', icon: '' },
        component: () => import('@/views/goods/audit.vue')
      }
    ]
  },
  {
    path: '/news',
    name: 'news-manage',
    meta: { name: '新闻管理', icon: '' },
    // component: '/layout/index.vue',
    children: [
      {
        path: 'news-list',
        name: 'news-list',
        meta: { name: '新闻列表', icon: '' },
        component: () => import('@/views/news/list.vue')
      }
    ]
  },
  {
    path: '/user',
    name: 'user-manage',
    meta: { name: '用户管理', icon: '' },
    // component: '/layout/index.vue',
    children: [
      {
        path: 'user-list',
        name: 'user-list',
        meta: { name: '用户列表', icon: '' },
        component: () => import('@/views/user/list.vue')
      }
    ]
  },
  {
    path: '/system',
    name: 'system',
    meta: { name: '系统配置', icon: '' },
    component: () => import('@/views/system/index.vue')
  },
  {
    path: '/about',
    name: 'about',
    meta: { name: '关于', icon: '' },
    component: () => import('@/views/about/index.vue')
  }
]
