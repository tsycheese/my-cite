<template>
  <div>
    <h1>App 组件</h1>
    <Icon type="success"></Icon>
  </div>
</template>

<script>
import Icon from './components/Icon.vue';

export default {
  name: 'App', // 如果组件没有在注册时命名，则使用该名称
  components: {
    Icon,
  },
};
</script>

<style lang="less" scoped>
.iconfont {
  font-size: 30px;
  color: #008c8c;
}
</style>
