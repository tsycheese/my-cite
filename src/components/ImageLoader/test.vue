<template>
  <div class="container">
    <div class="image">
      <ImageLoader
        src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
        placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
      />
    </div>
  </div>
</template>

<script>
import ImageLoader from './';
import '@/styles/global.less';

export default {
  name: 'App', // 如果组件没有在注册时命名，则使用该名称
  components: {
    ImageLoader,
  },
};
</script>

<style lang="less" scoped>
.container {
  height: 100vh;
}

.image {
  width: 500px;
  height: 300px;
  background-color: antiquewhite;
  margin: 50px auto;
  padding: 20px;
}
</style>
