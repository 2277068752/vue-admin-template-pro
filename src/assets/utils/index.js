import LocalStorage from './localStorage.js'

export default function (Vue) {
  if (!Vue.$utils) {
    Vue.$utils = {
      LocalStorage
    }
  } else {
    Vue.$utils = {
      LocalStorage
    }
  }
  Vue.mixin({
    created () {
      this.$utils = {
        LocalStorage
      }
    }
  })
}
