import { createStore } from 'vuex'
import { getColumn, getColumns, getPosts } from '@/api'
import { ColumnProps, PostProps, UserProps } from './store-type'

export interface GlobalDataProps {
  columns: ColumnProps[]
  posts: PostProps[]
  user: UserProps
  loading: boolean
}

const store = createStore<GlobalDataProps>({
  state: {
    user: { isLogin: false },
    columns: [],
    posts: [],
    loading: false
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
    login(state) {
      state.user = { ...state.user, isLogin: true, nickName: 'AiCherish' }
    },
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
    }
  }
})

export default store
