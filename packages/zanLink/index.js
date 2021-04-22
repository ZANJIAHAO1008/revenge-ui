import zanLink from './src';

// 提供 install 安装方法，供按需引入
zanLink.install = function (Vue) {
    // 注册组件
    Vue.component(zanLink.name, zanLink)
}
// 暴露组件
export default zanLink
