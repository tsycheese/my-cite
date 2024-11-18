<template>
  <div class="container">
    <div class="content">
      <Contact />
    </div>
  </div>
</template>

<script>
import Contact from './';
import '@/styles/global.less';

export default {
  name: 'App', // 如果组件没有在注册时命名，则使用该名称
  components: {
    Contact,
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
  padding: 20px;
  background-color: black;
}
</style>
