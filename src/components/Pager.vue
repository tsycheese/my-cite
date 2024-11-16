<template>
  <div class="pager-container">
    <a v-if="current > 1" @click="handleClick(1)">首页</a>
    <a v-if="current > 1" @click="handleClick(current - 1)">上一页</a>
    <a
      v-for="(page, i) in pages"
      :key="i"
      :class="{ active: page === current }"
      @click="handleClick(page)"
    >
      {{ page }}
    </a>
    <a v-if="current < total" @click="handleClick(current + 1)">下一页</a>
    <a v-if="current < total" @click="handleClick(pageNumber)">末页</a>
  </div>
</template>

<script>
export default {
  props: {
    // 当前页码
    current: {
      type: Number,
      default: 1,
    },
    // 总数据量
    total: {
      type: Number,
      default: 0,
    },
    // 每页数据量
    limit: {
      type: Number,
      default: 10,
    },
  },
  computed: {
    // 总页码数
    pageNumber() {
      return Math.ceil(this.total / this.limit);
    },
    visibleMin() {
      let min = this.current - Math.floor(this.limit / 2);
      if (min < 1) {
        min = 1;
      }
      return min;
    },
    visibleMax() {
      let max = this.visibleMin + this.limit - 1;
      if (max > this.pageNumber) {
        max = this.pageNumber;
      }
      return max;
    },
    pages() {
      const pages = [];
      for (let i = this.visibleMin; i <= this.visibleMax; i++) {
        pages.push(i);
      }
      return pages;
    },
  },
  methods: {
    handleClick(newPage) {
      if (newPage === this.current) return;
      if (newPage < 1) newPage = 1;
      if (newPage > this.pageNumber) newPage = this.pageNumber;
      console.log(newPage);
      this.$emit('pageChange', newPage);
    },
  },
};
</script>

<style lang="less" scoped>
@import url('../styles/var.less');

.pager-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;
  text-align: center;
}

a {
  box-sizing: border-box;
  margin: 0 8px;
  height: 40px;
  min-width: 40px;
  line-height: 40px;
  padding: 0 10px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  cursor: pointer;

  &:hover {
    background-color: @primary;
    color: #fff;
  }

  &.disabled {
    color: #ccc;
    background-color: #fff;
    cursor: not-allowed;
  }

  &.active {
    background-color: @primary;
    color: #fff;
    cursor: default;
  }
}
</style>
