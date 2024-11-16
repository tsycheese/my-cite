<template>
  <i class="iconfont icon-container" :class="fontClass"></i>
</template>

<script>
const classMap = {
  home: 'icon-zhuye',
  success: 'icon-zhengqueshixin',
  error: 'icon-cuowu',
  close: 'icon-guanbi',
  warn: 'icon-jinggao',
  info: 'icon-xinxi',
  blog: 'icon-blog',
  code: 'icon-code',
  about: 'icon-set_about_hov',
  weixin: 'icon-weixin',
  mail: 'icon-email-fill',
  github: 'icon-github',
  qq: 'icon-QQ-circle-fill',
  arrowUp: 'icon-jiantou_liebiaoshouqi',
  arrowDown: 'icon-jiantou_liebiaozhankai',
  empty: 'icon-empty',
  chat: 'icon-liuyan',
};

export default {
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  computed: {
    fontClass() {
      return classMap[this.type];
    },
  },
};
</script>

<style lang="less" scoped>
@import url(//at.alicdn.com/t/c/font_4748072_75vgp5pjabi.css);

.iconfont {
  font-size: inherit;
  color: inherit;
}
</style>
