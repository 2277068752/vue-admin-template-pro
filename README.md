# vue-admin-element-pro

> 个人维护的管理平台，如有改善，敬请 fork

### Git 规范

#### Git 版本规范

##### 分支

- master 分支为主分支（保护分支）不能直接在master分支上进行修改代码和提交；且master分支为线上版本分支，代码只能从develop分支merge，且每次merge需要加上Tag 版本号；
- develop 分支为开发分支，是各功能分支的合并总分支，各功能分支统一merge到develop；
- feature 分支为功能性分支，根据不同需求创建独立的功能分支，开发完成后merge到develop分支；
- hotfix 分支为bug修复分支，即测试分支

Tag 采用三段式，v版本.里程碑.序号；如：v1.2.1

### 平台技术整理

#### Vuex

##### 和 localStorage 结合，持久化 vuex 中的数值
```
  plugins: [createPersistedState({
    key: config.build.assetsPublicPath + 'vuex',
    paths: [''], // 只缓存service里的state
    getState: (key) => localStorage.get(key),
    setState: (key, state) => localStorage.set(key, state)
  })]
```
##### 统一配置 vuex 中 mutations 名称
```
const GLOBAL_MUTATIONS = {
  setLoading: 'SET_LOADING'
} // global
export default {
  GLOBAL_MUTATIONS
}
```
