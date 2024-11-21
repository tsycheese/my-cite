import './mock';
import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import '@/styles/global.less';
import router from '@/router';
import { showMessage } from '@/utils';
import vLoading from '@/directives/loading';

Vue.use(VueRouter);

// 在 Vue 实例中添加全局消息弹窗方法
Vue.prototype.$showMessage = showMessage;

// 注册全局指令 v-loading
Vue.directive('loading', vLoading);

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');

require('./test.js');
