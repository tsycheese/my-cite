<template>
  <div class="container">
    <div v-for="(type, i) in types" :key="i" class="item">
      <Icon :type="type" />
      <label> {{ type }}</label>
    </div>
  </div>
</template>

<script>
import '@/styles/global.less';
import Icon, { types } from './';

export default {
  name: 'App', // 如果组件没有在注册时命名，则使用该名称
  components: {
    Icon,
  },
  data() {
    return {
      types,
    };
  },
};
</script>

<style lang="less" scoped>
.container {
  font-size: 30px;
  width: 500px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  // .item {
  //   margin: 10px 20px;
  // }
}
</style>
