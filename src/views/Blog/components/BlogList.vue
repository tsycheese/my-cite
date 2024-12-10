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
                blogId: item.id,
              },
            }"
          >
            <img
              v-lazy="SERVER_URL + item.thumb"
              :title="SERVER_URL + item.title"
            />
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
                  categoryId: item.category ? item.category.id : -1,
                },
              }"
              >{{ item.category ? item.category.name : '未分类' }}</RouterLink
            >
          </div>
          <p class="desc">
            {{ item.description }}
          </p>
        </div>
      </li>
    </ul>

    <!-- 分页器 -->
    <div class="pager" v-show="!isLoading && data.rows.length !== 0">
      <Pager
        :total="data.total"
        :current="routeInfo.page"
        :limit="routeInfo.limit"
        @pageChange="handlePageChange"
      />
    </div>

    <!-- 空数据展示 -->
    <Empty v-show="!isLoading && data.total === 0" />
  </div>
</template>

<script>
/*
  博客列表页面
    - 页面展示博客列表
    - 用户可以通过点击博客标题，改变路由，跳转到博客详情页面
    - 页面监听路由变化，重新请求数据
*/

import { SERVER_URL } from '@/config';

import Pager from '@/components/Pager';
import Empty from '@/components/Empty';

import fetchData from '@/mixins/fetchData';
import mainScroll from '../../../mixins/mainScroll';
import { formatDate } from '@/utils';
import { getBlogs } from '@/api/blog';

export default {
  mixins: [fetchData([]), mainScroll('container')],
  components: {
    Pager,
    Empty,
  },
  data() {
    return {
      SERVER_URL,
    };
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
  scroll-behavior: smooth;
}

.blog-list {
  .blog {
    max-width: 1000px;
    margin: 10px auto;
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
