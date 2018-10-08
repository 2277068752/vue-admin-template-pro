import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import ElementUI from 'element-ui'
import { sync } from 'vuex-router-sync'
import UtilsPlugin from './assets/utils'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
router.beforeEach((to, from, next) => {
  next()
})
router.afterEach((to) => {
})
sync(store, router)
Vue.use(UtilsPlugin)
/* eslint-disable no-new */
window.$globalHub = new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
