<template>
  <Layout>
    <template #main>
      <div ref="blogMainContainer" class="blog-main-area" v-loading="isLoading">
        <BlogDetail :blog="data" v-if="data" />
        <BlogComment v-if="data" />
      </div>
    </template>
    <template #right>
      <div class="blog-right-area" v-loading="isLoading">
        <BlogTOC :toc="data.toc" v-if="data" />
      </div>
    </template>
  </Layout>
</template>

<script>
import fetchData from '@/mixins/fetchData';
import mainScroll from '@/mixins/mainScroll';
import { getBlog } from '@/api/blog';

import Layout from '@/components/Layout';
import BlogDetail from './components/BlogDetail';
import BlogComment from './components/BlogComment.vue';
import BlogTOC from './components/BlogTOC';

export default {
  mixins: [fetchData(null), mainScroll('blogMainContainer')],
  components: {
    Layout,
    BlogDetail,
    BlogTOC,
    BlogComment,
  },
  methods: {
    async fetchData() {
      const res = await getBlog(this.$route.params.id);
      setTimeout(() => {
        location.hash = this.hash;
      }, 50);
      return res;
    },
  },
  created() {
    this.hash = location.hash;
    location.hash = '';
  },
};
</script>

<style lang="less" scoped>
.blog-main-area {
  width: 100%;
  height: 100%;
  padding: 20px;
  overflow-y: scroll;
  scroll-behavior: smooth;
  position: relative;
}

.blog-right-area {
  width: 300px;
  height: 100%;
  position: relative;
}
</style>
