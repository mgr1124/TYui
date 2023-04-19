import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import axios from '@/plugins/axiosInstance.js'
import store from './store'

import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.use(store)

app.mount('#app')
app.config.globalProperties.$axios=axios;  //配置axios的全局引用
app.config.globalProperties.$appUser = 'user'