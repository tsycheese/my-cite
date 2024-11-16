<template>
  <div>
    <h1>App 组件</h1>
    <Avatar :url="avatarUrl" :size="100"></Avatar>
  </div>
</template>

<script>
import Avatar from '@/components/Avatar';

export default {
  name: 'App', // 如果组件没有在注册时命名，则使用该名称
  components: { Avatar },
  data() {
    return {
      avatarUrl: 'https://avatars.githubusercontent.com/u/150910201?v=4',
    };
  },
};
</script>
