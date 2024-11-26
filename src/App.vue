<template>
  <div class="main-container">
    <Layout>
      <template #left>
        <div class="aside">
          <SiteAside />
        </div>
      </template>
      <template #main>
        <div class="main-area">
          <RouterView></RouterView>
        </div>
      </template>
    </Layout>
    <ToTop />
  </div>
</template>

<script>
import Layout from '@/components/Layout';
import SiteAside from '@/components/SiteAside';
import ToTop from '@/components/ToTop';

export default {
  components: {
    Layout,
    SiteAside,
    ToTop,
  },
};
</script>

<style lang="less" scoped>
.main-container {
  height: 100vh;

  .aside {
    width: 250px;
    height: 100%;
  }

  .main-area {
    height: 100%;
  }
}
</style>
