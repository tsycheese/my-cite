<template>
  <div class="menu-container">
    <div
      v-for="item in menuItems"
      :key="item.path"
      class="menu-item"
      :class="{ selected: isSelected(item) }"
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
        },
        {
          name: '文章',
          icon: 'blog',
          path: '/blog',
          startsWith: true,
        },
        {
          name: '关于我',
          icon: 'about',
          path: '/about',
        },
        {
          name: '项目&成果',
          icon: 'code',
          path: '/project',
        },
        {
          name: '留言板',
          icon: 'chat',
          path: '/message',
        },
      ],
    };
  },
  methods: {
    isSelected(item) {
      const link = item.path;
      const curPathname = location.pathname.toLowerCase();
      if (item.startsWith) {
        return curPathname.startsWith(link);
      }
      return link === curPathname;
    },
  },
};
</script>

<style lang="less" scoped>
@import url('~@/styles/global.less');

.menu-container {
  display: flex;
  flex-direction: column;
  color: @gray;
  font-size: 16px;
  width: 100%;
}

.menu-item {
  line-height: 40px;
  display: flex;
  cursor: pointer;
  border-radius: 8px;
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
