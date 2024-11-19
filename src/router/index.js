import VueRouter from 'vue-router';

import routes from './routes';

const router = new VueRouter({
  routes,
  mode: 'history', // 路由匹配规则
});

export default router;
