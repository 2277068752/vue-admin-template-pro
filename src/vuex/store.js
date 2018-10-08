/**
 * @Author : ChangJun
 * @Date : 2018/10/8
 * @Version : 1.0
 * @Content : 持久化信息
 */
import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import config from '../../config/index'
import localStorage from '../assets/utils/localStorage'

Vue.use(Vuex)

export default new Vuex.Store({
  // 模块
  modules: {},
  // 插件
  plugins: [createPersistedState({
    key: config.build.assetsPublicPath + 'vuex',
    paths: [''], // 只缓存service里的state
    getState: (key) => localStorage.get(key),
    setState: (key, state) => localStorage.set(key, state)
  })]
})
