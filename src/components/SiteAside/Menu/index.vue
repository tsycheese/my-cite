<template>
  <div class="menu-container">
    <RouterLink
      v-for="item in menuItems"
      :to="{ name: item.name }"
      :key="item.path"
      :exact="item.exact"
      active-class="selected"
      class="menu-item"
    >
      <div class="menu-icon">
        <Icon :type="item.icon" />
      </div>
      <div class="menu-text">{{ item.title }}</div>
    </RouterLink>
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
          name: 'Home',
          title: '首页',
          icon: 'home',
          exact: true,
        },
        {
          name: 'Blog',
          title: '文章',
          icon: 'blog',
          exact: false,
        },
        {
          name: 'About',
          title: '关于我',
          icon: 'about',
          exact: true,
        },
        {
          name: 'Project',
          title: '项目&成果',
          icon: 'code',
          exact: true,
        },
        {
          name: 'Message',
          title: '留言板',
          icon: 'chat',
          exact: true,
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
  font-size: 16px;
  width: 100%;
}

.menu-item {
  line-height: 40px;
  display: flex;
  cursor: pointer;
  border-radius: 8px;
  color: @gray;
}

.menu-icon {
  margin: 0 8px 0 40px;
}

.menu-item:hover {
  color: white;
}

.menu-item.selected {
  background-color: #2d2d2d;
}
</style>
