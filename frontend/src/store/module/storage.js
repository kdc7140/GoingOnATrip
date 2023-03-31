import _ from "lodash";

export const state = () => ({
	MEMBER_INFO: [
		{id:"kdc7140", pw:"1234", name:'김동창', birth:'920511', phoneNum:'01073367140'}
	],
});

export const actions = {};
export const mutations = {
  MEMBER_INFO(state, payload) {
    state["MEMBER_INFO"].push(payload);
  },
  CHANGE_MEMBER_INFO(state, payload) {
    state["CHANGE_MEMBER_INFO"].forEach((item, idx) => {
      if (item.id == payload.id) {
        item.id = payload.id;
        item.pw = payload.pw;
        item.name = payload.name;
        item.birth = payload.birth;
        item.phoneNum = payload.phoneNum;
      }
    });
  }
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
