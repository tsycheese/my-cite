<template>
  <div>
    <h1>App 组件</h1>
    <Pager
      :current="currentPage"
      :total="total"
      @pageChange="handlePageChange"
    />
  </div>
</template>

<script>
import Icon from './components/Icon.vue';
import Pager from './components/Pager';

export default {
  name: 'App', // 如果组件没有在注册时命名，则使用该名称
  components: {
    Icon,
    Pager,
  },
  data() {
    return {
      currentPage: 1,
      total: 302,
    };
  },
  methods: {
    handlePageChange(newPage) {
      this.currentPage = newPage;
      console.log('新的页码:' + newPage);
    },
  },
};
</script>

<style lang="less" scoped>
.iconfont {
  font-size: 30px;
  color: #008c8c;
}
</style>
