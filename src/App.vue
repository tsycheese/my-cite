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
  </div>
</template>

<script>
import Layout from '@/components/Layout';
import SiteAside from '@/components/SiteAside';

export default {
  components: {
    Layout,
    SiteAside,
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
}
</style>
