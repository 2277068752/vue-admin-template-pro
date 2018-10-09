import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import AntDesignUI from 'ant-design-vue'
import { sync } from 'vuex-router-sync'
import UtilsPlugin from './assets/utils'
import 'ant-design-vue/dist/antd.css'
import './components/iSvgIcon/index'
Vue.config.productionTip = false
Vue.use(AntDesignUI)
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
