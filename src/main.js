import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import store from './store'
import Vuex from 'vuex'

import { postRequest, putRequest, getRequest, deleteRequest } from './utils/api'

Vue.config.productionTip = false

Vue.use(ElementUI)

Vue.use(Vuex)

Vue.prototype.postRequest = postRequest
Vue.prototype.putRequest = putRequest
Vue.prototype.getRequest = getRequest
Vue.prototype.deleteRequest = deleteRequest

// 路由跳转之前
router.beforeEach((to, from, next) => {
  const user = sessionStorage.getItem('user')
  // 注销
  if (to.path === '/logout') {
    sessionStorage.clear()
    next({ path: '/' })
  } else if (to.path === '/') {
    if (user) {
      next({ path: '/home' })
    }
  } else if (user === null) {
    next({ path: '/' })
  }
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
