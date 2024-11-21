import { getBlogs } from './api/blog';

(async function () {
  const res = await getBlogs();
  console.log(res);
})();
