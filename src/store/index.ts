import { createStore } from 'vuex'
import { getColumn, getColumns, getCurrentUser, getPosts, login } from '@/api'
import {
  ColumnProps,
  GlobalErrorProps,
  PostProps,
  UserProps
} from './store-type'
import http from '@/utils/request'

export interface GlobalDataProps {
  columns: ColumnProps[]
  posts: PostProps[]
  user: UserProps
  loading: boolean
  token: string
  error: GlobalErrorProps
}

const store = createStore<GlobalDataProps>({
  state: {
    user: { isLogin: false },
    columns: [],
    posts: [],
    loading: false,
    token: localStorage.getItem('zhihu-token') || '',
    error: {
      status: false
    }
  },
  getters: {
    getColumnById: (state) => (id: string) => {
      return state.columns.find((c) => c._id === id)
    },
    getPostsByCid: (state) => (cId: string) => {
      return state.posts.filter((post) => post.column === cId)
    }
  },
  mutations: {
    fetchColumns(state, rawData) {
      state.columns = rawData.list
    },
    fetchColumn(state, rawData) {
      state.columns = [rawData]
    },
    fetchPosts(state, rawData) {
      state.posts = rawData.list
    },
    setLoading(state, status) {
      state.loading = status
    },
    login(state, rawData) {
      const { token } = rawData
      state.token = token
      localStorage.setItem('zhihu-token', token)
      http.defaults.headers.common.Authorization = `Bearer ${token}`
    },
    fetchCurrentUser(state, rawData) {
      state.user = { isLogin: true, ...rawData }
    },
    setError(state, e: GlobalErrorProps) {
      state.error = e
    }
  },
  actions: {
    async fetchColumns({ commit }) {
      const res = await getColumns({})
      commit('fetchColumns', res.data)
    },
    async fetchColumn({ commit }, cId) {
      const res = await getColumn({ cId })
      commit('fetchColumn', res.data)
    },
    async fetchPosts({ commit }, cId) {
      const res = await getPosts({ cId })
      commit('fetchPosts', res.data)
    },
    async login({ commit }, payload) {
      const res = await login(payload)
      commit('login', res.data)
    },
    async fetchCurrentUser({ commit }) {
      const res = await getCurrentUser({})
      commit('fetchCurrentUser', res.data)
    },
    loginAndFetch({ dispatch }, loginData) {
      return dispatch('login', loginData).then(() => {
        return dispatch('fetchCurrentUser')
      })
    }
  }
})

export default store
