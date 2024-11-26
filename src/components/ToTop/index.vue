<template>
  <div v-show="isShow" class="to-top-container" @click="handleClick">Top</div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    handleScroll(scrollDom) {
      if (!scrollDom) {
        this.isShow = false;
        return;
      }
      this.isShow = scrollDom.scrollTop > 500;
    },
    handleClick() {
      this.$bus.$emit('setMainScroll', 0);
    },
  },
  created() {
    this.$bus.$on('mainScroll', this.handleScroll);
  },
};
</script>

<style lang="less" scoped>
@import url(~@/styles/var.less);

.to-top-container {
  background-color: @primary;
  color: #fff;
  position: fixed;
  right: 350px;
  bottom: 25px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  line-height: 50px;
  text-align: center;
  cursor: pointer;
}
</style>
