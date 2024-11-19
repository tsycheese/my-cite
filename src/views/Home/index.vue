<template>
  <div class="home-container" ref="home">
    <h1>首页</h1>
    <button @click="handleClick">来点弹窗</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$showMessage({
        type: '',
        content: '这是一条成功消息',
        duration: 2000,
        container: this.$refs.home,
        callBack: () => {
          console.log('弹窗关闭了');
        },
      });
    },
  },
};
</script>

<style lang="less" scoped>
.home-container {
  padding: 20px;
  height: 500px;
  background-color: lightblue;
}
</style>
