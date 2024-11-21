<template>
  <div class="test-container">
    <RightList :list="list" @select="handleSelect" />
  </div>
</template>

<script>
import '@/styles/global.less';

import RightList from './RightList';
export default {
  components: {
    RightList,
  },
  data() {
    return {
      list: [
        {
          title: '1',
          desc: 'I am the greatest',
          acitve: true,
        },
        {
          title: '2',
          desc: '',
          acitve: false,
        },
        {
          title: '3',
          desc: '',
          acitve: false,
          children: [
            {
              title: '3-1',
              desc: '',
              acitve: false,
            },
            {
              title: '3-2',
              desc: '',
              acitve: false,
              children: [
                {
                  title: '3-2-1',
                  desc: '',
                  acitve: false,
                },
                {
                  title: '3-2-2',
                  desc: '',
                  acitve: false,
                },
              ],
            },
            {
              title: '3-3',
              desc: '',
              acitve: false,
            },
          ],
        },
        {
          title: '4',
          desc: '',
          acitve: false,
        },
      ],
    };
  },
  methods: {
    handleSelect(item) {
      console.log(item);
    },
  },
};
</script>

<style lang="less" scoped>
.test-container {
  margin: 100px;
  font-size: 16px;
}
</style>
