<template>
  <div class="blog-toc-container">
    <h3>目录</h3>
    <RightList :list="toc" @select="handleSelect" />
  </div>
</template>

<script>
import RightList from './RightList';

export default {
  components: {
    RightList,
  },
  props: {
    toc: {
      type: Array,
      required: true,
    },
  },
  methods: {
    handleSelect(item) {
      location.hash = `#${item.anchor}`;
    },
  },
};
</script>

<style lang="less" scoped>
.blog-toc-container {
  width: 100%;
  height: 100%;
  padding: 20px;
  font-size: 16px;
  position: relative;

  h3 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }
}
</style>
