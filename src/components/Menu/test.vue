<template>
  <div class="container">
    <div class="content">
      <Menu />
    </div>
  </div>
</template>

<script>
import Menu from './';
import '@/styles/global.less';

export default {
  name: 'App', // 如果组件没有在注册时命名，则使用该名称
  components: {
    Menu,
  },
};
</script>

<style lang="less" scoped>
.container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  width: 400px;
  height: 400px;
  background-color: black;
}
</style>
