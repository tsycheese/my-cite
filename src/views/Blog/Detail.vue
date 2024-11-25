<template>
  <Layout>
    <template #main>
      <div class="blog-main-area">
        <BlogDetail :blog="data" v-if="data" />
      </div>
    </template>
    <template #right>
      <div class="blog-right-area">
        <BlogTOC :toc="data.toc" v-if="data" />
      </div>
    </template>
  </Layout>
</template>

<script>
import fetchData from '@/mixins/fetchData';
import { getBlog } from '@/api/blog';

import Layout from '@/components/Layout';
import BlogDetail from './components/BlogDetail';
import BlogTOC from './components/BlogTOC';

export default {
  mixins: [fetchData(null)],
  components: {
    Layout,
    BlogDetail,
    BlogTOC,
  },
  methods: {
    async fetchData() {
      const res = await getBlog(this.$route.params.id);
      return res;
    },
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
}

.blog-right-area {
  width: 300px;
  height: 100%;
}
</style>
