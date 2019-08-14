export default [
  {
    path: '/offers',
    meta: {
      title: '服务报价'
    },
    component: () => import('views/offers')
  },
  {
    path: '/offers/detail',
    meta: {
      title: '套餐详情'
    },
    component: () => import('views/offers/detail')
  }
]
