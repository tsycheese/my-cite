import 'nprogress/nprogress.css';
import { start, done, configure } from 'nprogress';

configure({
  trickleSpeed: 20,
  // showSpinner: false,
});

function delay(duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}

function getPageComponent(pageCompResolver) {
  return async () => {
    start();
    if (process.env.NODE_ENV === 'development') {
      await delay(2000);
    }
    const pageComp = await pageCompResolver();
    done();
    return pageComp;
  };
}

export default [
  {
    name: 'Home',
    path: '/',
    component: getPageComponent(() =>
      import(/* webpackChunkName: "home" */ '@/views/Home')
    ),
    meta: {
      title: '首页',
    },
  },
  {
    name: 'About',
    path: '/about',
    component: getPageComponent(() =>
      import(/* webpackChunkName: "about" */ '@/views/About')
    ),
    meta: {
      title: '关于',
    },
  },
  {
    name: 'Blog',
    path: '/blog',
    component: getPageComponent(() =>
      import(/* webpackChunkName: "blog" */ '@/views/Blog')
    ),
    meta: {
      title: '博客',
    },
  },
  {
    name: 'CategoryBlog',
    path: '/blog/cate/:categoryId',
    component: getPageComponent(() =>
      import(/* webpackChunkName: "blog" */ '@/views/Blog')
    ),
    meta: {
      title: '博客',
    },
  },
  {
    name: 'BlogDetail',
    path: '/blog/:blogId',
    component: getPageComponent(() =>
      import(/* webpackChunkName: "blogdetail" */ '@/views/Blog/Detail')
    ),
    meta: {
      title: '博客详情',
    },
  },
  {
    name: 'Message',
    path: '/message',
    component: getPageComponent(() =>
      import(/* webpackChunkName: "message" */ '@/views/Message')
    ),
    meta: {
      title: '留言',
    },
  },
  {
    name: 'Project',
    path: '/project',
    component: getPageComponent(() =>
      import(/* webpackChunkName: "project" */ '@/views/Project')
    ),
    meta: {
      title: '项目&效果',
    },
  },
];
