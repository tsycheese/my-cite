<template>
  <div class="message-container" ref="messageContainer">
    <div class="message-content">
      <MessageArea
        title="留言板"
        :subTitle="`(${data.total})`"
        :list="data.rows"
        :isListLoading="isLoading"
        @submit="handleSubmit"
      />
    </div>
    <div class="loading-area" v-loading="isLoading">
      <span v-show="!hasMore && data.rows.length">没有更多了</span>
    </div>
  </div>
</template>

<script>
import MessageArea from '@/components/MessageArea';
import fetchData from '@/mixins/fetchData';
import mainScroll from '@/mixins/mainScroll';
import { getMessage, postMessage } from '@/api/message';

export default {
  mixins: [fetchData({ total: 0, rows: [] }), mainScroll('messageContainer')],
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
      return await getMessage(this.page, this.limit);
    },
    async handleSubmit(formData, callback) {
      const resp = await postMessage({
        ...formData,
      });
      this.data.rows.unshift(resp);
      this.data.total++;
      callback('感谢您的留言！');
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
    async fecthMore() {
      if (!this.hasMore) return;
      this.isLoading = true;
      this.page++;
      const resp = await this.fetchData();
      this.data.rows = [...this.data.rows, ...resp.rows];
      this.data.total = resp.total;
      this.isLoading = false;
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

.message-container {
  height: 100%;
  overflow-y: scroll;
  scroll-behavior: smooth;

  .message-content {
    max-width: 700px;
    margin: 30px auto;
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
}
</style>
