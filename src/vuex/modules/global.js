/**
 * @Author : ChangJun
 * @Date : 2018/10/8
 * @Version : 1.0
 * @Content : 全局配置项目
 */
import types from '../types'

const state = {
  loading: false
}

const getters = {
  loading: state => {
    return state.loading
  }
}
const mutations = {
  [types.GLOBAL_MUTATIONS.setLoading] (state, val) {}
}
const actions = {
  setLoading ({ commit }, val) {
    if (val) {
      commit(types.GLOBAL_MUTATIONS.setLoading, val)
    }
  }
}
export default {
  state,
  getters,
  mutations,
  actions
}
