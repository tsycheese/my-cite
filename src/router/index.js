import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import { titleController } from '../utils';

Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode: 'history', // 路由匹配规则
});

router.afterEach((to, from) => {
  titleController.setRouteTitle(to.meta.title);
});

export default router;
