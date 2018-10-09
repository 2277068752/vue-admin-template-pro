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
##### Git commit中使用 emoji
emoji | emoji 代码 | commit说明 
---|---|---
（庆祝:tada:）| :tada:| 初次提交
（火花）| :sparkles:| 引入新功能
（bug）| :bug:| 修复bug
（书签）| :bookmark:| 发行/版本标签
（急救车）| :ambulance:| 重要补丁
（口红）| :lipstick:| 更新 UI 和样式文件
（扳手）| :wrench:| 修改配置文件
（加号）| :heavy_plus_sign:| 增加一个依赖
（减号）| :heavy_minus_sign:| 减少一个依赖
（上升箭头）| :arrow_up:| 升级依赖
（下降箭头）| :arrow_down:| 降级依赖
（闪电）| :zap:| 提升性能
（火箭）| :rocket:| 部署功能
（备忘录）| :memo:| 撰写文档
（锤子）| :hammer:| 重大重构
（调色板）| :art:| 改进代码结构/代码格式
（火焰）| :fire:| 移除代码或文件
（施工）| :construction:| 工作进行中
（苹果）| :apple:| 修复 macOS 下的问题
（企鹅）| :penguin:| 修复 Linux 下的问题
（旗帜）| :checkered_flag:| 修复 Windows 下的问题

 优点：
- 统一团队Git Commit标准，便于后续代码review、版本发布、自动化生成change log
- 可以提供更多有效的历史消息，方便快速预览合并代码
- 团队其他成员进行类git blame时可以快速明白代码用意
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
