<template>
  <div
    id="blog-comment-container"
    class="blog-comment-container"
    v-loading="isLoading"
  >
    <MessageArea
      v-if="data"
      title="评论数量"
      :subTitle="`(${data.total})`"
      :list="data.rows"
      :isListLoading="isLoading"
      @submit="handleSubmit"
    />
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
      isLoading: true,
    };
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
  },
};
</script>

<style lang="less" scoped>
.blog-comment-container {
  position: relative;
}
</style>
