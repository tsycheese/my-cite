<template>
  <ul class="data-list-container">
    <li v-for="(item, index) in list" :key="index">
      <Avatar :url="item.avatar" :size="40"></Avatar>
      <div class="main">
        <div class="header">
          <div class="nickname">{{ item.nickname }}</div>
          <div class="time">{{ formatDate(item.createDate, true) }}</div>
        </div>
        <div class="content">
          {{ item.content }}
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import Avatar from '@/components/Avatar';
import { formatDate } from '@/utils';

export default {
  components: {
    Avatar,
  },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    formatDate,
  },
};
</script>

<style lang="less" scoped>
@import url(~@/styles/var.less);

.data-list-container {
  li {
    display: flex;
    align-items: flex-start;
    margin-bottom: 40px;
    position: relative;

    .main {
      margin-left: 15px;
      flex: 1 1 auto;

      .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 5px;

        .nickname {
          font-size: 16px;
          font-weight: bold;
          color: @primary;
        }
        .time {
          font-size: 12px;
          color: @gray;
        }
      }

      .content {
        font-size: 14px;
        line-height: 1.5em;
      }
    }

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: calc(100% + 20px);
      width: 100%;
      height: 1px;
      background-color: #ccc;
    }
  }
}
</style>
