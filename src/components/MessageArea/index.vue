<template>
  <div class="message-area-container">
    <div class="form">
      <DataForm v-on="$listeners" />
    </div>
    <h3 class="title">
      <span>{{ title }}</span>
      <span class="sub">{{ subTitle }}</span>
    </h3>
    <div class="list">
      <DataList :list="list" />
    </div>
    <div class="loading" v-loading="isListLoading"></div>
  </div>
</template>

<script>
import DataForm from './DataForm.vue';
import DataList from './DataList.vue';

export default {
  components: {
    DataForm,
    DataList,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    subTitle: {
      type: String,
      default: '',
    },
    list: {
      type: Array,
      default: () => [],
    },
    isListLoading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="less" scoped>
.title {
  margin: 20px 0;

  .sub {
    margin-left: 10px;
  }
}

.loading {
  position: relative;
  height: 100px;
}
</style>
