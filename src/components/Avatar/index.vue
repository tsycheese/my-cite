<template>
  <img
    class="avatar-container"
    v-lazy="SERVER_URL + url"
    :src="SERVER_URL + url"
    :style="{ width: size + 'px', height: size + 'px' }"
  />
</template>

<script>
import { SERVER_URL } from '@/config';

export default {
  data() {
    return {
      SERVER_URL,
    };
  },
  created() {
    console.log(this.SERVER_URL);
  },
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
