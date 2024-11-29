import Vue from 'vue';
import Vuex from 'vuex';
import banner from './banner';
import setting from './setting';

Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    banner,
    setting,
  },
  usestrict: true,
});

export default store;
