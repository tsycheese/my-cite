<template>
  <div class="blog-types-container" v-loading="isLoading">
    <h3>文章分类</h3>
    <RightList :list="list" @select="handleSelect" v-show="!isLoading" />
  </div>
</template>

<script>
import fetchData from '@/mixins/fetchData';

import RightList from './RightList.vue';
import { getBlogTypes } from '@/api/blog';

export default {
  mixins: [fetchData([])],
  components: {
    RightList,
  },
  data() {
    return {
      isLoading: true,
    };
  },
  computed: {
    routeInfo() {
      const categoryId = +this.$route.params.categoryId;
      const page = +this.$route.query.page;
      const limit = +this.$route.query.limit;
      return {
        categoryId: categoryId || -1,
        page: page || 1,
        limit: limit || 10,
      };
    },
    list() {
      const totalArticleCount = this.data.reduce((prev, cur) => {
        return prev + cur.articleCount;
      }, 0);

      const list = [
        {
          id: -1,
          name: '全部',
          articleCount: totalArticleCount,
        },
        ...this.data,
      ];
      return list.map((item) => {
        return {
          ...item,
          title: item.name,
          desc: item.articleCount,
        };
      });
    },
  },
  methods: {
    async fetchData() {
      const result = await getBlogTypes();
      return result;
    },
    handleSelect(item) {
      if (item.id === this.routeInfo.categoryId) return;

      const query = {
        page: 1,
        limit: this.routeInfo.limit,
      };

      if (item.id === -1) {
        this.$router.push({
          name: 'Blog',
          query,
        });
      } else {
        this.$router.push({
          name: 'CategoryBlog',
          params: {
            categoryId: item.id,
          },
          query,
        });
      }
    },
  },
  // 种类固定，无需在路由变化时重新获取数据
  watch: {
    async $route() {
      this.isLoading = true;
      this.data = await this.fetchData();
      this.isLoading = false;
    },
  },
};
</script>

<style lang="less" scoped>
.blog-types-container {
  width: 300px;
  height: 100%;
  padding: 20px;
  font-size: 16px;
  position: relative;

  h3 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }
}
</style>
