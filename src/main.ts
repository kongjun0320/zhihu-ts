import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as api from '@/api'
console.log('api >>> ', api)

import 'bootstrap/dist/css/bootstrap.min.css'

const app = createApp(App)

app.config.globalProperties.$api = api
app.use(router).use(store)

app.mount('#app')
