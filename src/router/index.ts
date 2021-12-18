import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/sign_up',
    name: 'SignUp',
    component: () => import('@/views/sign-up/index.vue')
  },
  {
    path: '/column/:id',
    name: 'ColumnDetail',
    component: () => import('@/views/column-detail/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
