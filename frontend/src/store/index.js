import Vue from 'vue';
import Vuex from 'vuex';

import global from '@/store/module/global';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    global,
  },
  // plugins: [
  //   // https://github.com/robinvdvleuten/vuex-persistedstate#api
  //   createPersistedState({
  //     storage: {
  //       getItem: key => ls.get(key),
  //       setItem: (key, value) => {
  //         if(key === 'vuex' && isMorpheus()){
  //           M.data.storage("Vuex", value);
  //         }
  //         if (timeout != null) clearTimeout(timeout);
  //         timeout = null;
  //         timeout = setTimeout(function() {
  //           timeout = null;
  //           ls.set(key, value);
  //           } , 1);
  //       },
  //       removeItem: key => ls.remove(key)
  //     }
  //   })
  // ]
});
