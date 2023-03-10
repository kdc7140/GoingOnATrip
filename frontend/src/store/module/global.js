import _ from "lodash";
export const allClear = 'allClear';

export const state = () => ({
  USER_INFO: {},
});

export const actions = {
};

export const mutations = {
  [allClear](state,payload){
  },
  USER_INFO(state, payload) {
    state['USER_INFO'] = payload;
  },
};

export const getters = {
  USER_INFO: (st) => {
    return st['USER_INFO'];
  },
};

export default {
  namespaced: true,
  state,
  // 동기적 setter
  mutations,
  // 비동기적 setter
  actions,
  // getter
  getters,
};
