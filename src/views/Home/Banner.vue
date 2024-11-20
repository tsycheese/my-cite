<template>
  <div class="banner-container">
    <div class="img">
      <ImageLoader
        :src="banner.bigImg"
        :placeholder="banner.midImg"
        @load="handleImageLoaded"
      />
    </div>
    <div class="title" ref="title">{{ banner.title }}</div>
    <div class="desc" ref="desc">{{ banner.description }}</div>
  </div>
</template>

<script>
import ImageLoader from '@/components/ImageLoader';

export default {
  components: {
    ImageLoader,
  },
  props: {
    banner: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      titleWidth: 0,
      descWidth: 0,
    };
  },
  mounted() {
    this.titleWidth = this.$refs.title.offsetWidth;
    this.descWidth = this.$refs.desc.offsetWidth;
  },
  methods: {
    handleImageLoaded() {
      // 标题渐变动画
      this.$refs.title.style.opacity = 1;
      this.$refs.title.style.width = 0;
      this.$refs.title.style.transition = '1s';
      this.$refs.title.offsetHeight; // 触发重绘
      this.$refs.title.style.width = this.titleWidth + 'px';

      // 描述渐变动画
      this.$refs.desc.style.opacity = 1;
      this.$refs.desc.style.width = 0;
      this.$refs.desc.style.transition = '2s 1s';
      this.$refs.desc.offsetHeight; // 触发重绘
      this.$refs.desc.style.width = this.descWidth + 'px';
    },
  },
};
</script>

<style lang="less" scoped>
.banner-container {
  width: 100%;
  height: 100%;
  position: relative;

  .img {
    width: 100%;
    height: 100%;
  }

  .title,
  .desc {
    position: absolute;
    letter-spacing: 3px;
    left: 5%;
    color: #fff;
    opacity: 0;
    white-space: nowrap;
    overflow: hidden;
    // 文字描边
    text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5), 0 1px 0 rgba(0, 0, 0, 0.5),
      -1px 0 0 rgba(0, 0, 0, 0.5), 0 -1px 0 rgba(0, 0, 0, 0.5);
  }
  .title {
    font-size: 40px;
    font-weight: bold;
    top: 50%;
    transform: translateY(-50%);
  }
  .desc {
    font-size: 18px;
    top: calc(50% + 50px);
    transform: translateY(-50%);
  }
}
</style>
