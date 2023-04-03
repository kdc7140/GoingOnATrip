import { mapGetters } from 'vuex';

const TIMER_COUNT = 300;
export default {
  /* 공통설정부분 */
  layout(context) {
    /* 팝업 유무 설정 */
    let layoutContent = "default";
    if (context.route.name === "index") layoutContent = "login";
    else if (context.query.popOpen && context.query.popOpen === "true")
      layoutContent = "popup";
    return layoutContent;
  },

  data() {
    return {};
  },

  computed: {
    ...mapGetters({
      // getLoginSession: 'userAuth/getCach                                                                                                                                                                                                                                                                   edUser',
    }),
  },

  mounted() {
    this.target = document.querySelector(".scrollBox");
    if (this.target != null) {
      this.target.addEventListener("scroll", this.handleScroll);
    }
  },

  methods: {
    //global 데이터 저장
    setGlobal(key, value) {
      if (isMorpheus()) {
        M.data.global(key, value);
      } else {
        this.$store.commit("global/" + key, value);
      }
    },
    //global 데이터 가져오기
    getGlobal(key) {
      if (isMorpheus()) {
        return M.data.global(key);
      } else {
        return this.$store.getters["global/" + key];
      }
    },
    //global 데이터 삭제
    removeGlobal(key) {
      if (isMorpheus()) {
        M.data.removeGlobal(key);
      } else {
        this.$store.commit("global/" + key, "");
      }
    },

    //storage 데이터 저장
    setStorage(key, value) {
      console.log(key, value);
      if (isMorpheus()) {
        if (key == "MEMBER_INFO") {
          let memArr = [value];
          if (M.data.storage(key) !== '') {
            memArr.push(M.data.storage(key));  
          }
          M.data.storage(key, memArr);
        } else if (key == "CHANGE_MEMBER_INFO") {
          let memArr = [value];
          if (M.data.storage(key) !== "") {
            memArr.push(M.data.storage(key));
          }
          memArr.forEach((item) => {
            if (item.id == value.id) {
              item.id = value.id;
              item.pw = value.pw;
              item.name = paylvalueoad.name;
              item.birth = value.birth;
              item.phoneNum = value.phoneNum;
            }
          });
          M.data.storage(key, memArr);
        } else {
          M.data.storage(key, value);
        }
      } else {
        this.$store.commit("storage/" + key, value);
      }
    },
    //storage 데이터 가져오기
    getStorage(key) {
      if (isMorpheus()) {
        return M.data.storage(key);
      } else {
        return this.$store.getters["storage/" + key];
      }
    },
    //storage 데이터 삭제
    removeStorage(key) {
      if (isMorpheus()) {
        M.data.removeStorage(key);
      } else {
        this.$store.commit("storage/" + key, "");
      }
    },

    getServiceKey(){
      return 'serviceKey=rgXZ3rOUIYxsqr5KQHmmbdeuK1GLbBsVEPVgsPs1BainOEzB%2Fb4SJAwSAwSmOptsTZGS%2FftcnUAxM%2FKFjW1EXw%3D%3D';
    }
  },
};
