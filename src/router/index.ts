import store from '@/store'
import http from '@/utils/request'
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
  const { user, token } = store.state
  const { redirectAlreadyLogin, requiredLogin } = to.meta

  if (!user.isLogin) {
    if (token) {
      http.defaults.headers.common.Authorization = `Bearer ${token}`
      store
        .dispatch('fetchCurrentUser')
        .then(() => {
          if (redirectAlreadyLogin) {
            next('/')
          } else {
            next()
          }
        })
        .catch(() => {
          store.commit('logout')
          next('/login')
        })
    } else {
      if (requiredLogin) {
        next('/login ')
      } else {
        next()
      }
    }
  } else {
    if (redirectAlreadyLogin) {
      next('/')
    } else {
      next()
    }
  }
})

export default router
