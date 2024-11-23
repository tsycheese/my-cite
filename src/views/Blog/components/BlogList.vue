<template>
  <div class="blog-list-container" ref="container" v-loading="isLoading">
    <!-- 博客列表 -->
    <ul class="blog-list" v-show="!isLoading">
      <li v-for="(item, i) in data.rows" :key="item.id" class="blog">
        <div class="thumb" v-if="item.thumb">
          <RouterLink
            :to="{
              name: 'BlogDetail',
              params: {
                blogId: 1,
              },
            }"
          >
            <img :src="item.thumb" />
          </RouterLink>
        </div>
        <div class="main">
          <RouterLink
            :to="{
              name: 'BlogDetail',
              params: {
                blogId: item.id,
              },
            }"
            class="title"
          >
            <h2>{{ item.title }}</h2>
          </RouterLink>
          <div class="aside">
            <span>日期 : {{ formatDate(item.createDate) }}</span>
            <span>浏览量 : {{ item.scanNumber }}</span>
            <span>评论量 : {{ item.commentNumber }}</span>
            <RouterLink
              :to="{
                name: 'CategoryBlog',
                params: {
                  categoryId: item.category.id,
                },
              }"
              >{{ item.category.name }}</RouterLink
            >
          </div>
          <p class="desc">
            {{ item.description }}
          </p>
        </div>
      </li>
    </ul>

    <!-- 分页器 -->
    <div class="pager" v-show="!isLoading">
      <Pager
        :total="data.total"
        :current="routeInfo.page"
        :limit="routeInfo.limit"
        @pageChange="handlePageChange"
      />
    </div>
  </div>
</template>

<script>
/*
  博客列表页面
    - 页面展示博客列表
    - 用户可以通过点击博客标题，改变路由，跳转到博客详情页面
    - 页面监听路由变化，重新请求数据
*/

import Pager from '@/components/Pager';

import fetchData from '@/mixins/fetchData';
import { formatDate } from '@/utils';
import { getBlogs } from '@/api/blog';

export default {
  mixins: [fetchData([])],
  components: {
    Pager,
  },
  computed: {
    // 路由信息，用于请求数据
    routeInfo() {
      const categoryId = +this.$route.params.categoryId;
      const page = +this.$route.query.page;
      const limit = +this.$route.query.limit;
      return {
        page: page || 1,
        limit: limit || 10,
        categoryId: categoryId || -1,
      };
    },
  },
  methods: {
    formatDate,
    async fetchData() {
      return await getBlogs(
        this.routeInfo.page,
        this.routeInfo.limit,
        this.routeInfo.categoryId
      );
    },
    handlePageChange(newPage) {
      if (this.routeInfo.categoryId === -1) {
        this.$router.push({
          name: 'Blog',
          query: {
            page: newPage,
            limit: this.routeInfo.limit,
          },
        });
      } else {
        this.$router.push({
          name: 'CategoryBlog',
          params: {
            categoryId: this.routeInfo.categoryId,
          },
          query: {
            page: newPage,
            limit: this.routeInfo.limit,
          },
        });
      }
    },
  },
  watch: {
    // 路由变化时重新获取数据
    async $route() {
      this.isLoading = true;
      this.$refs.container.scrollTop = 0;
      this.data = await this.fetchData();
      this.isLoading = false;
    },
  },
};
</script>

<style lang="less" scoped>
@import url(~@/styles/var.less);

.blog-list-container {
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
}

.blog-list {
  .blog {
    margin: 10px 0;
    padding: 10px;
    display: flex;
    position: relative;

    &::before {
      content: '';
      width: 100%;
      height: 2px;
      background-color: #ddd;
      position: absolute;
      top: calc(100% + 5px);
    }

    .thumb {
      width: 200px;
      height: 150px;
      border-radius: 4px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .main {
      flex: 1;
      margin-left: 10px;

      .title {
        color: @words;
        cursor: pointer;

        &:hover {
          color: @primary;
        }
      }

      .aside {
        margin-top: 5px;
        color: @lightWords;
        span {
          margin-right: 15px;
        }

        a {
          color: @lightWords;
          cursor: pointer;

          &:hover {
            color: @primary;
          }
        }
      }

      .desc {
        margin-top: 18px;
        line-height: 1.5;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 3; /* 表示显示的行数 */
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
      }
    }
  }
}

.pager {
  margin: 50px 0 50px 0;
}
</style>
