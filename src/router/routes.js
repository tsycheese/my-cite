import About from '@/views/About';
import Blog from '@/views/Blog';
import BlogDetail from '@/views/Blog/Detail';
import Home from '@/views/Home';
import Message from '@/views/Message';
import Project from '@/views/Project';

export default [
  {
    name: 'Home',
    path: '/',
    component: Home,
    meta: {
      title: '首页',
    },
  },
  {
    name: 'About',
    path: '/about',
    component: About,
    meta: {
      title: '关于',
    },
  },
  {
    name: 'Blog',
    path: '/blog',
    component: Blog,
    meta: {
      title: '博客',
    },
  },
  {
    name: 'CategoryBlog',
    path: '/blog/cate/:categoryId',
    component: Blog,
    meta: {
      title: '博客',
    },
  },
  {
    name: 'BlogDetail',
    path: '/blog/:blogId',
    component: BlogDetail,
    meta: {
      title: '博客详情',
    },
  },
  {
    name: 'Message',
    path: '/message',
    component: Message,
    meta: {
      title: '留言',
    },
  },
  {
    name: 'Project',
    path: '/project',
    component: Project,
    meta: {
      title: '项目',
    },
  },
];
