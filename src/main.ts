import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import * as Icons from "@ant-design/icons-vue"
const data: any = Icons
for (const i in data) {
  app.component(i, data[i])
}

import '@/assets/styles/index.scss'
import '@/router/permission'

app
  .use(router)
  .use(store)
  .use(Antd)
  .mount('#app')
