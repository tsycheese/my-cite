import request from './request';

export async function getBlogTypes() {
  return await request.get('/api/blogtype');
}

/**
 * 获取博客文章列表
 * @param {number} page - 页码，默认为 1
 * @param {number} limit - 每页显示的文章数量，默认为 10
 * @param {number} categoryId - 分类 ID，默认为 -1，表示获取所有分类的文章
 * @returns {Promise} - 返回一个 Promise，解析为包含文章列表的响应数据
 */
export async function getBlogs(page = 1, limit = 10, categoryId = -1) {
  return await request.get('/api/blog', {
    params: {
      page,
      limit,
      categoryId,
    },
  });
}

export async function getBlog(blogId) {
  return await request.get(`/api/blog/${blogId}`);
}

export async function postComment(commentInfo) {
  return await request.post('/api/comment', commentInfo);
}

export async function getComments(blogid, page = 1, limit = 10) {
  return await request.get(`/api/comment`, {
    params: {
      blogid,
      page,
      limit,
    },
  });
}
