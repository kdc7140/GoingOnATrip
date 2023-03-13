import _ from "lodash";

export const state = () => ({
	MEMBER_INFO: [
		{id:"kdc7140", pw:"1234"}
	],
});

export const actions = {};
export const mutations = {
  FIRST_INFO(state, payload) {
    state["FIRST_INFO"] = payload;
  },

};

export const getters = {
  FIRST_INFO: (st) => {
    return st["FIRST_INFO"];
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
