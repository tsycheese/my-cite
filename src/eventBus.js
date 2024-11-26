import Vue from 'vue';

/**
 * 事件总线
 * 用于组件间通信
 * @type {Vue}
 *
 * 事件：mainScroll
 * 含义：主区域滚动条位置变化后触发
 * 参数：
 * - 滚动的dom元素
 */
Vue.prototype.$bus = new Vue({});
