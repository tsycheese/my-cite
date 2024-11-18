<template>
  <div class="menu-container">
    <div
      v-for="item in menuItems"
      :key="item.path"
      class="menu-item"
      :class="{ active: item.matchCondition('/about') }"
    >
      <div class="menu-icon">
        <Icon :type="item.icon" />
      </div>
      <div class="menu-text">{{ item.name }}</div>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/Icon';

export default {
  components: {
    Icon,
  },
  data() {
    return {
      menuItems: [
        {
          name: '首页',
          icon: 'home',
          path: '/',
          matchCondition: (currentPath) => currentPath === '/',
        },
        {
          name: '文章',
          icon: 'blog',
          path: '/blog',
          matchCondition: (currentPath) => currentPath.startsWith('/blog'),
        },
        {
          name: '关于我',
          icon: 'about',
          path: '/about',
          matchCondition: (currentPath) => currentPath === '/about',
        },
        {
          name: '项目&成果',
          icon: 'code',
          path: '/project',
          matchCondition: (currentPath) => currentPath === '/project',
        },
        {
          name: '留言板',
          icon: 'chat',
          path: '/message',
          matchCondition: (currentPath) => currentPath === '/message',
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
@import url('~@/styles/global.less');

.menu-container {
  display: flex;
  flex-direction: column;
  color: @lightWords;
  width: 100%;
}

.menu-item {
  line-height: 40px;
  display: flex;
  cursor: pointer;
  border-radius: 8px;
}

.menu-icon {
  margin: 0 8px 0 30px;
}

.menu-item:hover,
.menu-item.active {
  color: white;
  background-color: #2d2d2d;
}
</style>
