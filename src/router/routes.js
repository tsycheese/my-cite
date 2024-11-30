export default [
  {
    name: 'Home',
    path: '/',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home'),
    meta: {
      title: '首页',
    },
  },
  {
    name: 'About',
    path: '/about',
    component: () => import(/* webpackChunkName: "about" */ '@/views/About'),
    meta: {
      title: '关于',
    },
  },
  {
    name: 'Blog',
    path: '/blog',
    component: () => import(/* webpackChunkName: "blog" */ '@/views/Blog'),
    meta: {
      title: '博客',
    },
  },
  {
    name: 'CategoryBlog',
    path: '/blog/cate/:categoryId',
    component: () => import(/* webpackChunkName: "blog" */ '@/views/Blog'),
    meta: {
      title: '博客',
    },
  },
  {
    name: 'BlogDetail',
    path: '/blog/:blogId',
    component: () =>
      import(/* webpackChunkName: "blogdetail" */ '@/views/Blog/Detail'),
    meta: {
      title: '博客详情',
    },
  },
  {
    name: 'Message',
    path: '/message',
    component: () =>
      import(/* webpackChunkName: "message" */ '@/views/Message'),
    meta: {
      title: '留言',
    },
  },
  {
    name: 'Project',
    path: '/project',
    component: () =>
      import(/* webpackChunkName: "project" */ '@/views/Project'),
    meta: {
      title: '项目&效果',
    },
  },
];
