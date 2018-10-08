<template>
  <div id="app" style="height: 100%;">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  components: {},
  data () {
    return {}
  },
  computed: {
    ...mapState({})
  },
  methods: {}
}
</script>

<style lang="less">
@import "./styles/common";
@import "./styles/custom";
</style>
