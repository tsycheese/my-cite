import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode: 'history', // 路由匹配规则
});

export default router;
