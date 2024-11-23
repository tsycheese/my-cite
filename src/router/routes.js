import About from '@/views/About';
import Blog from '@/views/Blog';
import BlogDetail from '@/views/Blog/Detail';
import Home from '@/views/Home';
import Message from '@/views/Message';
import Project from '@/views/Project';

export default [
  { name: 'Home', path: '/', component: Home },
  { name: 'About', path: '/about', component: About },
  { name: 'Blog', path: '/blog', component: Blog },
  {
    name: 'CategoryBlog',
    path: '/blog/cate/:categoryId',
    component: Blog,
  },
  {
    name: 'BlogDetail',
    path: '/blog/:blogId',
    component: BlogDetail,
  },
  { name: 'Message', path: '/message', component: Message },
  { name: 'Project', path: '/project', component: Project },
];
