<template>
  <div class="home-container" @wheel="handleWheel">
    <!-- 轮播图 -->
    <ul
      class="banners"
      ref="banners"
      :style="{ marginTop: -index * itemHeight + 'px' }"
      @transitionend="handleTransitionEnd"
    >
      <li v-for="(item, i) in banners" :key="item.id">
        <Banner :banner="item" />
      </li>
    </ul>

    <!-- 箭头 -->
    <div class="icon icon-up" v-if="index > 0" @click="switchBanner(index - 1)">
      <Icon type="arrowUp" />
    </div>
    <div
      class="icon icon-down"
      v-if="index < banners.length - 1"
      @click="switchBanner(index + 1)"
    >
      <Icon type="arrowDown" />
    </div>

    <!-- 指示器 -->
    <ul class="indicator">
      <li
        v-for="(item, i) in banners"
        :key="item.id"
        :class="{ active: i === index }"
        @click="switchBanner(i)"
      ></li>
    </ul>
  </div>
</template>

<script>
import { getBanners } from '../../api/banner';

import Icon from '@/components/Icon';
import Banner from './Banner.vue';

export default {
  components: {
    Banner,
    Icon,
  },
  data() {
    return {
      banners: [],
      index: 0,
      itemHeight: 0,
      switching: false,
    };
  },
  methods: {
    // 轮播图切换
    switchBanner(index) {
      this.switching = true;
      this.index = index;
    },
    // 鼠标滚轮切换
    handleWheel(e) {
      if (this.switching) return;

      if (e.deltaY > 20 && this.index < this.banners.length - 1) {
        this.switching = true;
        this.index++;
      } else if (e.deltaY < -20 && this.index > 0) {
        this.switching = true;
        this.index--;
      }
    },
    handleTransitionEnd() {
      this.switching = false;
    },
    // 窗口大小改变时，重新获取轮播图高度
    handleResize() {
      this.itemHeight = this.$refs.banners.clientHeight;
    },
  },
  async created() {
    this.banners = await getBanners();
  },
  mounted() {
    // 获取轮播图高度
    this.itemHeight = this.$refs.banners.clientHeight;
    window.addEventListener('resize', this.handleResize);
  },
  destroyed() {
    // 移除窗口大小改变事件监听器
    window.removeEventListener('resize', this.handleResize);
  },
};
</script>

<style lang="less" scoped>
@import url(~@/styles/var.less);

.home-container {
  background-color: @dark;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;

  // // 测试用
  // width: 60%;
  // height: 40%;
  // margin: 100px auto;
  // border: 2px solid #008c8c;
}

// 轮播图样式
.home-container {
  .banners {
    width: 100%;
    height: 100%;
    transition: 500ms;

    li {
      width: 100%;
      height: 100%;
    }
  }
}

// 箭头样式
.home-container {
  .icon {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: 60px;
    color: @gray;
    cursor: pointer;

    &.icon-up {
      top: 10px;
      animation: jump-up 2s infinite;
    }

    &.icon-down {
      bottom: 10px;
      animation: jump-down 2s infinite;
    }

    @jump: 10px;
    @keyframes jump-up {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-@jump);
      }
      100% {
        transform: translateY(0);
      }
    }

    @keyframes jump-down {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(@jump);
      }
      100% {
        transform: translateY(0);
      }
    }
  }
}

// 指示器样式
.home-container {
  .indicator {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 20px;
    display: flex;
    flex-direction: column;

    li {
      width: 10px;
      height: 10px;
      margin: 8px 0;
      border-radius: 50%;
      background-color: @gray;

      &.active {
        background-color: @primary;
      }
    }
  }
}
</style>
