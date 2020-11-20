import Vue from 'vue'
loadStyle('https://unpkg.com/element-ui@2.14.1/lib/theme-chalk/index.css')


import App from './app.vue'
import { isDev } from './config'
import { loadStyle } from './utils'
import router from './router'
import './styles/global.scss'


const id = `app_vue_${Date.now()}`
const root = document.createElement('div')
root.id = id
document.body.appendChild(root)

if (isDev) {
  const ElementUI = require('element-ui')
  Vue.use(ElementUI)
}

new Vue({
  el: `#${id}`,
  router,
  render: h => h(App)
})