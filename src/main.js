import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import '@/styles/global.less';
import router from '@/router';
import { showMessage } from '@/utils';

Vue.use(VueRouter);
Vue.prototype.$showMessage = showMessage; // 在 Vue 实例中添加全局消息弹窗方法

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');

require('./test.js');
