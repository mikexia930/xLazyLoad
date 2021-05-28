import XLazyLoad from './src/index.vue';

// 为组件提供 install 安装方法，供按需引入
XLazyLoad.install = function (Vue) {
  Vue.component(XLazyLoad.name, XLazyLoad);
};

// 导出组件
export default XLazyLoad;
