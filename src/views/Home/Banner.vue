<template>
  <div
    class="banner-container"
    ref="banner"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <div class="img" ref="img" :style="imgPos">
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
import { SERVER_URL } from '@/config';

export default {
  data() {
    return {
      SERVER_URL,
    };
  },
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
      bannerSize: {
        width: 0,
        height: 0,
      },
      imgSize: {
        width: 0,
        height: 0,
      },
      mousePos: {
        x: 0,
        y: 0,
      },
    };
  },
  computed: {
    // 计算图片位置
    imgPos() {
      const x =
        (this.imgSize.width / this.bannerSize.width) * this.mousePos.x -
        this.mousePos.x;
      const y =
        (this.imgSize.height / this.bannerSize.height) * this.mousePos.y -
        this.mousePos.y;
      return {
        transform: `translate(${-x}px, ${-y}px)`,
      };
    },
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
    // 记录 banner 大小和图片大小
    setSize() {
      this.bannerSize.width = this.$refs.banner.clientWidth;
      this.bannerSize.height = this.$refs.banner.clientHeight;

      this.imgSize.width = this.$refs.img.clientWidth;
      this.imgSize.height = this.$refs.img.clientHeight;
    },
    // 鼠标移动事件
    handleMouseMove(e) {
      this.mousePos.x = e.clientX - this.$refs.banner.getBoundingClientRect().x;
      this.mousePos.y = e.clientY - this.$refs.banner.getBoundingClientRect().y;
      if (this.mousePos.x < 0) this.mousePos.x = 0;
      if (this.mousePos.x > this.bannerSize.width)
        this.mousePos.x = this.bannerSize.width;
      if (this.mousePos.y < 0) this.mousePos.y = 0;
      if (this.mousePos.y > this.bannerSize.height)
        this.mousePos.y = this.bannerSize.height;
    },
    // 鼠标离开, 将位置居中
    handleMouseLeave() {
      this.$refs.img.style.transition = '0.3s';
      this.mousePos.x = this.bannerSize.width / 2;
      this.mousePos.y = this.bannerSize.height / 2;
      setTimeout(() => {
        this.$refs.img.style.transition = '0.05s';
      }, 300);
    },
  },
  mounted() {
    this.titleWidth = this.$refs.title.offsetWidth;
    this.descWidth = this.$refs.desc.offsetWidth;
    this.setSize();
    window.addEventListener('resize', this.setSize);
  },
  destroyed() {
    window.removeEventListener('resize', this.setSize);
  },
};
</script>

<style lang="less" scoped>
.banner-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  .img {
    width: 110%;
    height: 110%;
    position: absolute;
    top: 0;
    left: 0;
    transition: 0.05s;
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
