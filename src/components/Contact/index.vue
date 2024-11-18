<template>
  <div class="contact-container">
    <!-- github -->
    <a class="contact-item">
      <div class="contact-icon">
        <Icon type="github"></Icon>
      </div>
      <div class="contact-text">梗小姐最好了</div>
    </a>
    <!-- email -->
    <a class="contact-item">
      <div class="contact-icon">
        <Icon type="mail"></Icon>
      </div>
      <div class="contact-text">1787129710@qq.com</div>
    </a>
    <!-- qq -->
    <a
      class="contact-item"
      href="tencent://message/?Menu=yes&uin=1787129710&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45"
    >
      <div class="contact-icon">
        <Icon type="qq"></Icon>
      </div>
      <div class="contact-text">1787129710</div>
      <div class="dialog">
        <img src="@/assets/qq.png" alt="QQ 联系二维码" />
      </div>
    </a>
    <!-- weixin -->
    <a class="contact-item">
      <div class="contact-icon">
        <Icon type="weixin"></Icon>
      </div>
      <div class="contact-text">1787129710</div>
    </a>
  </div>
</template>

<script>
import Icon from '@/components/Icon';

export default {
  components: {
    Icon,
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
@import url('~@/styles/global.less');

.contact-container {
  display: flex;
  flex-direction: column;
  gap: 10px 0;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0 8px;
  color: white;
  cursor: pointer;
  line-height: 40px;
  position: relative;
  width: 200px;

  &:hover {
    color: @primary;
  }

  .contact-icon {
    font-size: 25px;
  }
}

.dialog {
  position: absolute;
  bottom: 100%;
  left: 0;
  width: 200px;
  height: 200px;
  border-radius: 4px;
  background-color: white;
  transform: scaleY(0);
  transform-origin: center bottom;
  transition: 0.3s;

  img {
    width: 90%;
    height: 90%;
    object-fit: cover;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &::before {
    content: '';
    width: 10px;
    height: 10px;
    background-color: white;
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
  }
}

.contact-item:hover .dialog {
  transform: scaleY(1);
}
</style>
