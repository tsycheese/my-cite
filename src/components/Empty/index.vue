<template>
  <div class="empty-container">
    <div class="empty-content">
      <div class="empty-icon" :style="{ fontSize: iconSize }">
        <Icon type="empty"></Icon>
      </div>
      <div class="empty-text" :style="{ fontSize: textSize }">{{ text }}</div>
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
    size: {
      type: Number,
      default: 50,
    },
  },
  computed: {
    iconSize() {
      return this.size + 'px';
    },
    textSize() {
      return (this.size / 50) * 14 + 'px';
    },
  },
};
</script>

<style lang="less" scoped>
.empty-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.empty-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

// .empty-icon {
//   font-size: 50px;
// }

.empty-text {
  margin-top: 10px;
  // font-size: 16px;
  font-weight: bold;
}
</style>
