<template>
  <div class="not-found-container">
    <img :src="NotFoundImg" alt="" />
  </div>
</template>

<script>
import NotFoundImg from '@/assets/404.jpg';
export default {
  data() {
    return {
      NotFoundImg,
    };
  },
};
</script>

<style lang="less" scoped>
@import url(~@/styles/var.less);

.not-found-container {
  width: 100%;
  height: 100%;
  display: flex;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
</style>
