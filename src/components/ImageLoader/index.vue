<template>
  <div class="image-loader">
    <img
      v-if="!everythingOK"
      :src="SERVER_URL + placeholder"
      class="placeholder"
    />
    <img
      :src="SERVER_URL + src"
      class="original"
      :style="{ opacity: originalOpacity, transition: duration + 'ms' }"
      @load="handleOriginalLoad"
    />
  </div>
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
    this.SERVER_URL = SERVER_URL;
    console.log(this.SERVER_URL);
  },
  props: {
    src: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 500, // 过渡时间，默认500ms
    },
  },
  data() {
    return {
      originalOpacity: 0,
      everythingOK: false,
    };
  },
  methods: {
    // 原图加载完成后设置状态
    handleOriginalLoad() {
      this.originalOpacity = 1; // 原图加载完成后将透明度设为1
      setTimeout(() => {
        this.everythingOK = true;
      }, this.duration);
      this.$emit('load'); // 触发 load事件，父组件可以监听并进行后续操作
    },
  },
};
</script>

<style lang="less" scoped>
@import url(~@/styles/mixin.less);

.image-loader {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  img {
    .self-fill();
    object-fit: cover;
  }

  .placeholder {
    filter: blur(2vw);
  }
}
</style>
