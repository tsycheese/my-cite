<template>
  <div class="container">
    <div class="item">
      <!-- <Avatar
        url="https://avatars.githubusercontent.com/u/150910201?v=4"
      ></Avatar>
      <Avatar
        url="https://avatars.githubusercontent.com/u/150910201?v=4"
        :size="100"
      ></Avatar> -->
      <Avatar
        url="https://avatars.githubusercontent.com/u/150910201?v=4"
        :size="200"
      ></Avatar>
    </div>
  </div>
</template>

<script>
import '@/styles/global.less';
import Avatar from './';

export default {
  name: 'App', // 如果组件没有在注册时命名，则使用该名称
  components: {
    Avatar,
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.container {
  width: 500px;
  margin: 0 auto;
  padding: 100px;
  background-color: bisque;
}
</style>
