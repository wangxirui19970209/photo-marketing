export default [
  {
    path: '/login/:type',
    meta: {
      title: '瑞瑞大人'
    },
    component: () => import('views/login')
  }
]
