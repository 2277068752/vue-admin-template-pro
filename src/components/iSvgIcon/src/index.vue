<template lang="html">
  <svg aria-hidden="true" :class="classArr">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
export default {
  components: {},
  props: {
    name: {
      type: String,
      default: ''
    }, // 图标的id
    className: {
      type: String,
      default: ''
    } // 附加样式
  },
  data () {
    return {}
  },
  created () {
  },
  mounted () {
  },
  computed: {
    iconName () {
      return this.name ? `#icon-${this.name}` : ''
    },
    classArr () {
      return this.className ? `${this.className} svg-font-icon` : 'svg-font-icon'
    }
  },
  methods: {}
}
</script>

<style lang="less">
.svg-font-icon {
  width: 20px;
  height: 20px;
  vertical-align: -4px;
  fill: currentColor;
  overflow: hidden;
}
</style>
