<template>
  <div>
    <Pager
      :current="currentPage"
      :total="total"
      @pageChange="handlePageChange"
    />
  </div>
</template>

<script>
import Pager from './';
import '@/styles/global.less';

export default {
  name: 'App', // 如果组件没有在注册时命名，则使用该名称
  components: {
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
