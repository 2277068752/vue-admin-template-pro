/* eslint-disable no-undef */
/**
 * Created by changJun on 2018/9/30
 * 路由配置
 */
// 生产/测试环境，使用路由懒加载
const _import = process.env.NODE_ENV === 'development'
  ? file => require(`@/views/${file}.vue`).default
  : file => () => System.import(`@/pages/${file}.vue`).then(m => m.default)

export default [
  { path: '/', component: _import('index/index') }
]
