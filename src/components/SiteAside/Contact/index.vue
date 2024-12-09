<template>
  <div class="contact-container">
    <!-- github -->
    <a class="contact-item" href="https://github.com/tsycheese" target="_blank">
      <div class="contact-icon">
        <Icon type="github"></Icon>
      </div>
      <div class="contact-text">{{ data.githubName }}</div>
    </a>
    <!-- email -->
    <a class="contact-item" :href="`mailto:${data.mail}`">
      <div class="contact-icon">
        <Icon type="mail"></Icon>
      </div>
      <div class="contact-text">{{ data.mail }}</div>
    </a>
    <!-- qq -->
    <a
      class="contact-item"
      :href="`tencent://message/?Menu=yes&uin=${data.qq}&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45`"
    >
      <div class="contact-icon">
        <Icon type="qq"></Icon>
      </div>
      <div class="contact-text">{{ data.qq }}</div>
      <div class="pop">
        <img :src="SERVER_URL + data.qqQrCode" alt="QQ 联系二维码" />
      </div>
    </a>
    <!-- weixin -->
    <a class="contact-item">
      <div class="contact-icon">
        <Icon type="weixin"></Icon>
      </div>
      <div class="contact-text">{{ data.weixin }}</div>
      <div class="pop">
        <img :src="SERVER_URL + data.weixinQrCode" alt="微信联系二维码" />
      </div>
    </a>
  </div>
</template>

<script>
import { SERVER_URL } from '@/config';
import Icon from '@/components/Icon';
import { mapState } from 'vuex';

export default {
  components: {
    Icon,
  },
  data() {
    return {
      SERVER_URL,
    };
  },
  computed: {
    ...mapState('setting', ['data']),
  },
};
</script>

<style lang="less" scoped>
@import url('~@/styles/global.less');

.contact-container {
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 10px 0;
  @itemHeight: 30px;
  padding: 0 20px;

  .contact-item {
    display: flex;
    align-items: center;
    gap: 0 8px;
    color: @gray;
    cursor: pointer;
    line-height: @itemHeight;
    position: relative;
    font-size: 14px;

    .contact-icon {
      font-size: 20px;
    }

    /* 弹窗 */
    .pop {
      position: absolute;
      bottom: @itemHeight + 4px;
      left: 0;
      width: 160px;
      height: 160px;
      border-radius: 4px;
      background-color: white;
      transform: scaleY(0);
      transform-origin: center bottom;
      transition: 0.3s;

      img {
        width: 150px;
        height: 150px;
        object-fit: cover;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      /* 箭头 */
      &::before {
        content: '';
        width: 8px;
        height: 8px;
        background-color: white;
        position: absolute;
        bottom: -4px;
        left: 50%;
        transform: translateX(-50%) rotate(45deg);
      }
    }

    &:hover {
      color: @primary;
    }

    &:hover .pop {
      transform: scaleY(1);
    }
  }
}
</style>
