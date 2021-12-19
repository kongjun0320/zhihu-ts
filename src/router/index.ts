import store from '@/store'
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
    component: () => import('@/views/login/index.vue'),
    meta: { redirectAlreadyLogin: true }
  },
  {
    path: '/sign_up',
    name: 'SignUp',
    component: () => import('@/views/sign-up/index.vue'),
    meta: { redirectAlreadyLogin: true }
  },
  {
    path: '/create',
    name: 'create',
    component: () => import('@/views/create-post/index.vue'),
    meta: { requiredLogin: true }
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

router.beforeEach((to, from, next) => {
  if (to.meta.requiredLogin && !store.state.user.isLogin) {
    next({ name: 'Login' })
  } else if (to.meta.redirectAlreadyLogin && store.state.user.isLogin) {
    next({ name: 'Home' })
  } else {
    next()
  }
})

export default router
