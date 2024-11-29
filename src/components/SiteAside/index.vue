<template>
  <div class="site-aside-container" v-loading="loading">
    <template v-if="data">
      <div class="avatar">
        <Avatar :url="data.avatar" :size="100" />
      </div>
      <h1>{{ data.siteTitle }}</h1>
      <div class="menu">
        <Menu />
      </div>
      <div class="concact">
        <Contcat />
      </div>
    </template>
  </div>
</template>

<script>
import Avatar from '@/components/Avatar';
import Contcat from './Contact';
import Menu from './Menu';
import { mapState } from 'vuex';

export default {
  components: {
    Avatar,
    Contcat,
    Menu,
  },
  computed: {
    ...mapState('setting', ['data', 'loading']),
  },
};
</script>

<style lang="less" scoped>
@import url('~@/styles/global.less');
@import url('~@/styles/var.less');

.site-aside-container {
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  width: 100%;
  height: 100%;
  background-color: @dark;
  align-items: center;
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;

  h1 {
    margin-top: 20px;
    color: #ccc;
    font-size: 20px;
    font-weight: normal;
  }

  .menu {
    width: 100%;
    margin-top: 10px;
  }

  .concact {
    width: 100%;
    margin-top: 40px;
  }
}
</style>
