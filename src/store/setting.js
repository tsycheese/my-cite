import { getSetting } from '../api/setting';
import loading from '../directives/loading';

export default {
  namespaced: true,
  state: {
    loading: false,
    data: null,
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload;
    },
    setData(state, payload) {
      state.data = payload;
    },
  },
  actions: {
    async getSetting(ctx) {
      if (ctx.state.loading || ctx.state.data) return;
      ctx.commit('setLoading', true);
      const resp = await getSetting();
      ctx.commit('setData', resp);
      ctx.commit('setLoading', false);
      if (resp.favicon) {
        const link = document.createElement('link');
        link.rel = 'shortcut icon';
        link.href = resp.favicon;
        document.head.appendChild(link);
      }
    },
  },
};
