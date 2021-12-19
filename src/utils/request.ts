import store from '@/store'
import axios from 'axios'

const http = axios.create({
  baseURL: 'http://apis.imooc.com/api/',
  timeout: 10000
})

http.interceptors.request.use((config) => {
  config.params = { ...config.params, icode: '4E38F29ED81BBB22' }
  store.commit('setLoading', true)
  return config
})

http.interceptors.response.use((res) => {
  store.commit('setLoading', false)
  return res.data
})

export default http
