<template>
  <div class="test-container">
    <Layout>
      <template v-slot:left>
        <div class="left">Left sidebar</div>
      </template>
      <template v-slot:main>
        <div class="main">Main Area</div>
      </template>
      <template v-slot:right>
        <div class="right">Right Area</div>
      </template>
    </Layout>
  </div>
</template>

<script>
import '@/styles/global.less';
import Layout from './';

export default {
  components: {
    Layout,
  },
};
</script>

<style lang="less" scoped>
.test-container {
  width: 60%;
  height: 400px;
  margin: 0 auto;

  .left {
    width: 200px;
    height: 100%;
    background-color: antiquewhite;
  }

  .main {
    height: 100%;
    background-color: aquamarine;
  }

  .right {
    width: 200px;
    height: 100%;
    background-color: lightcoral;
  }
}
</style>
