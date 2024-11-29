import Vue from 'vue';
import Vuex from 'vuex';
import banner from './banner';
import setting from './setting';
import project from './project';
import about from './about';

Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    banner,
    setting,
    about,
    project,
  },
  usestrict: true,
});

export default store;
