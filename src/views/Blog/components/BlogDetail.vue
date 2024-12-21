<template>
  <div class="blog-detail-container">
    <h1>{{ blog.title }}</h1>
    <aside class="aside">
      <span>日期 : {{ formatDate(+blog.createDate) }}</span>
      <span>浏览 : {{ blog.scanNumber }}</span>
      <a href="#blog-comment-container">评论 : {{ blog.commentNumber }}</a>
      <RouterLink
        :to="{
          name: 'CategoryBlog',
          params: {
            categoryId: blog.category?.id,
          },
        }"
        >{{ blog.category ? blog.category.name : '未分类' }}</RouterLink
      >
    </aside>
    <div class="markdown-body" v-html="blog.htmlContent"></div>
  </div>
</template>

<script>
import { formatDate } from '@/utils';
import '@/styles/markdown.css';
import 'highlight.js/styles/github.css';

export default {
  props: {
    blog: {
      type: Object,
      required: true,
    },
  },
  methods: {
    formatDate,
  },
};
</script>

<style lang="less" scoped>
@import url(~@/styles/var.less);

.aside {
  margin-top: 10px;
  color: @gray;

  span,
  a {
    margin-right: 12px;
  }

  a {
    color: @gray;
    cursor: pointer;
    &:hover {
      color: @primary;
    }
  }
}

.markdown-body {
  margin-top: 20px;
  padding: 20px;
}
</style>
