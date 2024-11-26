<template>
  <div id="blog-comment-container" class="blog-comment-container">
    <MessageArea
      v-if="data"
      title="评论数量"
      :subTitle="`(${data.total})`"
      :list="data.rows"
      :isListLoading="isLoading"
      @submit="handleSubmit"
    />
    <div class="loading-area" v-loading="isLoading">
      <span v-show="!hasMore">没有更多了</span>
    </div>
  </div>
</template>

<script>
import MessageArea from '@/components/MessageArea';
import { getComments, postComment } from '@/api/blog';
import fetchData from '@/mixins/fetchData';

export default {
  mixins: [fetchData(null)],
  components: {
    MessageArea,
  },
  data() {
    return {
      page: 1,
      limit: 10,
    };
  },
  computed: {
    hasMore() {
      return this.data && this.data.rows.length < this.data.total;
    },
  },
  methods: {
    async fetchData() {
      return await getComments(this.$route.params.id, this.page, this.limit);
    },
    async handleSubmit(formData, callback) {
      const resp = await postComment({
        ...formData,
        blogId: this.$route.params.id,
      });
      this.data.rows.unshift(resp);
      this.data.total++;
      callback('评论成功！');
    },
    async fecthMore() {
      if (!this.hasMore) return;
      this.isLoading = true;
      this.page++;
      const resp = await this.fetchData();
      this.data.rows = [...this.data.rows, ...resp.rows];
      this.data.total = resp.total;
      this.isLoading = false;
    },
    handleScroll(dom) {
      if (this.isLoading || !dom) return;
      const { scrollTop, clientHeight, scrollHeight } = dom;
      const dec = Math.abs(scrollTop + clientHeight - scrollHeight);
      const range = 100;
      if (dec < range) {
        this.fecthMore();
      }
    },
  },
  mounted() {
    window.fetchMore = this.fecthMore;
    this.$bus.$on('mainScroll', this.handleScroll);
  },
  beforeDestroy() {
    this.$bus.$off('mainScroll', this.handleScroll);
  },
};
</script>

<style lang="less" scoped>
@import url(~@/styles/var.less);

.blog-comment-container {
  position: relative;
}

.loading-area {
  position: relative;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: @warn;
}
</style>
