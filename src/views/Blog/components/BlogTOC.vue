<template>
  <div class="blog-toc-container">
    <h3>目录</h3>
    <RightList :list="tocWithSelect" @select="handleSelect" />
  </div>
</template>

<script>
import RightList from './RightList';
import { debounce } from '@/utils';

export default {
  components: {
    RightList,
  },
  props: {
    // toc[{ anchor, title, children }]
    toc: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      activeAnchor: 'article-md-title-1',
    };
  },
  computed: {
    tocWithSelect() {
      const getTOC = (toc = []) => {
        return toc.map((item) => {
          return {
            ...item,
            isSelect: this.activeAnchor === item.anchor,
            children: item.children && getTOC(item.children),
          };
        });
      };
      return getTOC(this.toc);
    },
    doms() {
      const doms = [];
      const getDoms = (toc = []) => {
        return toc.map((item) => {
          const dom = document.getElementById(item.anchor);
          if (dom) {
            doms.push(dom);
          }
          item.children && getDoms(item.children);
        });
      };
      getDoms(this.toc);
      return doms;
    },
  },
  methods: {
    handleSelect(item) {
      location.hash = `#${item.anchor}`;
      this.activeAnchor = item.anchor;
    },
    setSelect() {
      this.activeAnchor = '';
      const range = 200;
      for (const dom of this.doms) {
        if (!dom) {
          return;
        }
        const rect = dom.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= range) {
          this.activeAnchor = dom.id;
          return;
        } else if (rect.top < 0) {
          this.activeAnchor = dom.id;
          continue;
        } else if (rect.top > range) {
          return;
        }
      }
    },
  },
  mounted() {
    this.setSelectDebounce = debounce(this.setSelect, 50);
    this.$bus.$on('mainScroll', this.setSelectDebounce);
  },
  beforeDestroy() {
    this.$bus.$off('mainScroll', this.setSelectDebounce);
  },
};
</script>

<style lang="less" scoped>
.blog-toc-container {
  width: 100%;
  height: 100%;
  padding: 20px;
  font-size: 16px;
  position: relative;

  h3 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }
}
</style>
