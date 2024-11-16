<template>
  <img class="avatar-container" :src="url" :style="{ width: size + 'px' }" />
</template>

<script>
export default {
  props: {
    url: {
      type: String, // 类型
      required: true, // 属性必传
    },
    size: {
      type: Number,
      default: 50,
    },
  },
};
</script>

<style lang="less" scoped>
.avatar-container {
  border-radius: 50%;
  object-fit: cover;
  display: block;
}
</style>
