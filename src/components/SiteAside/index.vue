<template>
  <div class="site-aside-container">
    <div class="avatar">
      <Avatar
        src="https://avatars.githubusercontent.com/u/150910201?v=4"
        :size="100"
      />
    </div>
    <h1>梗小姐最好了</h1>
    <div class="menu">
      <Menu />
    </div>
    <div class="concact">
      <Contcat />
    </div>
  </div>
</template>

<script>
import Avatar from '@/components/Avatar';
import Contcat from './Contact';
import Menu from './Menu';

export default {
  components: {
    Avatar,
    Contcat,
    Menu,
  },
};
</script>

<style lang="less" scoped>
@import url('~@/styles/global.less');

.site-aside-container {
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  width: 100%;
  height: 100%;
  align-items: center;
  overflow-x: hidden;
  overflow-y: auto;

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
