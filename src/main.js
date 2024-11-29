import './mock';
import Vue from 'vue';
import App from './App.vue';

import '@/styles/global.less';
import router from '@/router';
import store from '@/store';
import { showMessage } from '@/utils';
import vLoading from '@/directives/loading';
import vLazy from '@/directives/lazy';
import './eventBus';

// 在 Vue 实例中添加全局消息弹窗方法
Vue.prototype.$showMessage = showMessage;

// 注册全局指令 v-loading，v-lazy
Vue.directive('loading', vLoading);
Vue.directive('lazy', vLazy);

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount('#app');

require('./test.js');
