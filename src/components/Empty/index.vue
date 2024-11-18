<template>
  <div class="empty-container">
    <div class="empty-content">
      <div class="empty-icon">
        <Icon type="empty"></Icon>
      </div>
      <p class="empty-text">{{ text }}</p>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/Icon';

export default {
  components: {
    Icon,
  },
  props: {
    text: {
      type: String,
      default: '无数据',
    },
  },
};
</script>

<style lang="less" scoped>
@import url('~@/styles/mixin.less');
@import url('~@/styles/var.less');

.empty-container {
  .self-center(); // 设置居中
  color: @gray;
  text-align: center;
}

.empty-icon {
  font-size: 72px;
}

.empty-text {
  margin-top: 10px;
  font-weight: bold;
}
</style>
