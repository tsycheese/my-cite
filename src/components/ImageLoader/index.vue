<template>
  <div class="image-loader">
    <!-- 占位图始终显示，直到原图加载完成 -->
    <img :src="placeholder" v-show="!isLoaded" class="placeholder" />

    <!-- 使用动态样式绑定过渡动画 -->
    <img
      :src="src"
      class="original"
      :style="originalStyle"
      @load="handleOriginalLoad"
    />
  </div>
</template>

<script>
export default {
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
      isLoaded: false, // 用于跟踪原图是否已加载
    };
  },
  computed: {
    // 动态计算原图的样式
    originalStyle() {
      return {
        filter: this.isLoaded ? 'blur(0)' : 'blur(10px)', // 加载完成后移除模糊
        transition: `filter ${this.duration}ms ease-in-out`, // 动态设置过渡效果
      };
    },
  },
  methods: {
    // 原图加载完成后设置状态
    handleOriginalLoad() {
      this.isLoaded = true;
    },
  },
};
</script>

<style lang="less" scoped>
.image-loader {
  width: 100%;
  height: 100%;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute; // 保证图片重叠
    top: 0;
    left: 0;
  }

  .placeholder {
    z-index: 1; // 占位图始终在上层
  }

  .original {
    z-index: 2; // 原图加载完成后覆盖占位图
  }
}
</style>
