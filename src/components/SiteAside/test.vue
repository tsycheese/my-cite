<template>
  <div class="test-container">
    <SiteAside></SiteAside>
  </div>
</template>

<script>
import '@/styles/global.less';
import SiteAside from './';

export default {
  components: {
    SiteAside,
  },
};
</script>

<style lang="less" scoped>
.test-container {
  background-color: black;
  width: 300px;
  height: 800px;
  margin: 0 auto;
}
</style>
