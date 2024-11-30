import Vue from 'vue';
import { Store, install } from 'vuex';
import banner from './banner';
import setting from './setting';
import project from './project';
import about from './about';

if (!window.Vuex) {
  install(Vue);
}

const store = new Store({
  modules: {
    banner,
    setting,
    about,
    project,
  },
  usestrict: true,
});

export default store;
