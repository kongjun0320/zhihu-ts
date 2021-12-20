import store from '@/store'
import axios from 'axios'

const ICODE = '4E38F29ED81BBB22'

const http = axios.create({
  baseURL: 'http://apis.imooc.com/api/',
  timeout: 10000
})

http.interceptors.request.use(
  (config) => {
    config.params = { ...config.params, icode: ICODE }
    // FormData
    if (config.data instanceof FormData) {
      config.data.append('icode', ICODE)
    } else {
      // 普通的 body 对象，添加到 data 中
      config.data = { ...config.data, icode: ICODE }
    }

    store.commit('setLoading', true)
    return config
  },
  (error) => {
    store.commit('setLoading', false)
    return Promise.reject(error)
  }
)

http.interceptors.response.use(
  (res) => {
    store.commit('setLoading', false)
    return res.data
  },
  (error) => {
    const { message } = error.response.data
    store.commit('setLoading', false)
    store.commit('setError', {
      status: true,
      message
    })
    return Promise.reject(error)
  }
)

export default http
