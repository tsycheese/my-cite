export default function (refContainer) {
  return {
    methods: {
      handleMainScroll() {
        this.$bus.$emit('mainScroll', this.$refs[refContainer]);
      },
      handleSetMainScroll(top) {
        this.$refs[refContainer].scrollTop = top;
      },
    },
    created() {
      this.$bus.$on('setMainScroll', this.handleSetMainScroll);
    },
    mounted() {
      this.$refs[refContainer].addEventListener(
        'scroll',
        this.handleMainScroll
      );
    },
    beforeDestroy() {
      this.$refs[refContainer].removeEventListener(
        'scroll',
        this.handleMainScroll
      );
      this.$bus.$emit('mainScroll', null); // 通知 ToTop 组件不要再显示了
      this.$bus.$off('setMainScroll', this.handleSetMainScroll);
    },
  };
}
