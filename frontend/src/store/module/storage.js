import _ from "lodash";

export const state = () => ({
	MEMBER_INFO: [
		{id:"kdc7140", pw:"1234"}
	],
});

export const actions = {};
export const mutations = {
  MEMBER_INFO(state, payload) {
    state["MEMBER_INFO"] = payload;
  },
};

export const getters = {
  MEMBER_INFO: (st) => {
    return st["MEMBER_INFO"];
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
