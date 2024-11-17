<template>
  <div class="container">
    <Empty :size="50" />
  </div>
</template>

<script>
import Empty from './';
import '@/styles/global.less';

export default {
  name: 'App', // 如果组件没有在注册时命名，则使用该名称
  components: {
    Empty,
  },
};
</script>

<style lang="less" scoped>
.container {
  width: 500px;
  height: 500px;
  background-color: antiquewhite;
  margin: 100px auto;
  padding: 20px;
}

.a {
  width: 200px;
  height: 100px;
  background-color: #fff;
}
</style>
