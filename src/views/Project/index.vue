<template>
  <div class="project-container" ref="container" v-loading="loading || !data">
    <div class="project-content" v-if="data">
      <div class="project-item" v-for="(item, i) in data" :key="item.id">
        <a class="img-link" href="" target="_blank">
          <img :src="item.thumb" v-lazy="item.thumb" alt="" />
        </a>
        <div class="main">
          <a
            class="title-link"
            :href="item.url ? item.url : `javascript:alert('没有捏')`"
            target="_blank"
          >
            <h2>{{ item.name }}</h2>
          </a>
          <a
            class="github"
            v-if="item.github"
            :href="item.github ? item.github : `javascript:alert('没有捏')`"
            target="_blank"
            >Github
          </a>
          <p v-for="(p, i) in item.description" :key="i">
            {{ p }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex/dist/vuex.common.js';
import mainScroll from '@/mixins/mainScroll.js';

export default {
  mixins: [mainScroll('container')],
  computed: {
    ...mapState('project', ['data', 'loading']),
  },
  created() {
    this.$store.dispatch('project/fetchProject');
  },
};
</script>

<style lang="less" scoped>
@import url(~@/styles/var.less);

.project-container {
  height: 100%;
  width: 100%;
  overflow-y: auto;
  scroll-behavior: smooth;

  .project-content {
    max-width: 1200px;
    margin: 0 auto;

    .project-item {
      // outline: 1px solid;
      min-height: 150px;
      padding: 10px 20px;
      display: flex;
      margin-top: 30px;
      transition: 0.2s;
      border-radius: 12px;

      &:hover {
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
      }

      .img-link {
        width: 250px;
        height: 200px;
        border-radius: 12px;
        overflow: hidden;
        flex: 0 0 auto;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .main {
        margin-left: 30px;

        .title-link {
          font-size: 20px;
          color: @words;
          cursor: pointer;

          &:hover {
            color: @primary;
          }
        }

        .github {
          color: @lightWords;
          cursor: pointer;
          margin-bottom: 5px;

          &:hover {
            color: @primary;
          }
        }

        p {
          margin-top: 8px;
        }
      }
    }
  }
}
</style>
