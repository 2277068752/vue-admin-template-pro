import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/index/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: Home
    }
  ]
})
