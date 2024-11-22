<template>
  <div class="blog-container">
    <Layout>
      <template #main>
        <BlogList />
      </template>
      <template #right>
        <BlogTypes />
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from '@/components/Layout';
import BlogList from './components/BlogList';
import BlogTypes from './components/BlogTypes';

export default {
  components: {
    Layout,
    BlogList,
    BlogTypes,
  },
};
</script>

<style lang="less" scoped>
.blog-container {
  width: 100%;
  height: 100%;
}
</style>
