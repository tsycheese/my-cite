<template>
  <ul class="right-list-container">
    <li v-for="(item, i) in list" :key="i">
      <p @click="handleClick(item)" :class="{ active: item.isSelect }">
        <span class="title">{{ item.name }}</span>
        <span class="desc">{{ item.desc }}</span>
      </p>
      <RightList
        v-if="item.children"
        :list="item.children"
        @select="handleClick"
      />
    </li>
  </ul>
</template>

<script>
export default {
  name: 'RightList',
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
  methods: {
    handleClick(item) {
      this.$emit('select', item);
    },
  },
};
</script>

<style lang="less" scoped>
@import url(~@/styles/var.less);

.right-list-container {
  .right-list-container {
    margin-left: 1em;
  }

  p {
    cursor: pointer;
    min-height: 40px;
    line-height: 40px;

    &.active {
      color: @warn;
    }
  }

  .desc {
    margin-left: 1em;
    color: @gray;
    font-size: 0.8em;
  }
}
</style>
