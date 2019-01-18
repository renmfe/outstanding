import Vue from 'vue';
import Vuex from 'vuex';

import List from './modules/list';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    List,
  },

});
