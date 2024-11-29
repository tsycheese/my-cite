<template>
  <div class="about-container" v-loading="loading || !srcLoaded">
    <iframe
      :src="data"
      class="about-content"
      scrolling="no"
      border="0"
      frameborder="no"
      framespacing="0"
      @load="hanleLoad"
    ></iframe>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      srcLoaded: false,
    };
  },
  methods: {
    hanleLoad() {
      this.srcLoaded = true;
    },
  },
  computed: {
    ...mapState('about', ['data', 'loading']),
  },
  created() {
    this.$store.dispatch('about/fetchAbout');
  },
};
</script>

<style lang="less" scoped>
.about-container {
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;

  .about-content {
    height: 100%;
    width: 100%;
  }
}
</style>
