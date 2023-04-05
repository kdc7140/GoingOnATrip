import Vue from 'vue';
import Router from "vue-router";
import Define from "@/common/define";
import EventBus from "@/common/EventBus";

const login = () => import("../views/Login/login.vue");
const intro = () => import("../views/Login/intro.vue");
const chPw = () => import("../views/Login/changePw.vue");
const regMb = () => import("../views/Login/regMember.vue");

const main = () => import("../views/Main/mainBoard.vue");
const main2 = () => import("../views/Main/home.vue");

const hotel = () => import("../views/Accom/searchHotel.vue");

const selectLoc = () => import("../views/Event/selectLoc.vue");
const eventInfo = () => import("../views/Event/eventInfo.vue");
const eventMap = () => import("../views/Event/eventMap.vue");

const map = () => import("../views/Map/locMap.vue");

const rent = () => import("../views/Rent/rentCar.vue");

const setting = () => import("../views/Setting/setting.vue");

Vue.use(Router);

const router = new Router({
  mode: "hash",
  // base: '/', // only history mode
  routes: [
    //{
    //  path: "/",
    //  redirect: "/intro",
    //},
    {
      path: "/",
      name: "인트로",
      component: intro,
    },
    {
      path: "/인트로",
      name: "intro page",
      component: intro,
      //meta: {
      //  layout: Define.LAYOUT_TYPE.EMPTY,
      //  className: "dashboard",
      //},
    },
    {
      path: "/login",
      name: "로그인",
      component: login,
      //meta: {
      //  layout: Define.LAYOUT_TYPE.EMPTY,
      //  className: "dashboard",
      //},
    },
    {
      path: "/chpw",
      name: "비밀번호 변경",
      component: chPw,
      meta: {
        layout: Define.LAYOUT_TYPE.DEFAULT,
        className: "chpw",
      },
    },
    {
      path: "/regMb",
      name: "회원가입",
      component: regMb,
      meta: {
        layout: Define.LAYOUT_TYPE.DEFAULT,
        className: "regMb",
      },
    },
    {
      path: "/main",
      name: "메인",
      component: main2,
      meta: {
        layout: Define.LAYOUT_TYPE.DEFAULT,
        className: "main",
      },
    },
    {
      path: "/hotel",
      name: "숙소 알아보기",
      component: hotel,
      meta: {
        layout: Define.LAYOUT_TYPE.DEFAULT,
        className: "hotel",
      },
    },
    {
      path: "/selectLoc",
      name: "행사정보 찾기",
      component: selectLoc,
      meta: {
        layout: Define.LAYOUT_TYPE.DEFAULT,
        className: "selectLoc",
      },
    },
    {
      path: "/eventInfo",
      name: "행사정보",
      component: eventInfo,
      meta: {
        layout: Define.LAYOUT_TYPE.DEFAULT,
        className: "eventInfo",
      },
    },
    {
      path: "/eventMap",
      name: "행사 지도보기",
      component: eventMap,
      meta: {
        layout: Define.LAYOUT_TYPE.DEFAULT,
        className: "eventMap",
      },
    },
    {
      path: "/rent",
      name: "렌터카 찾기",
      component: rent,
      meta: {
        layout: Define.LAYOUT_TYPE.DEFAULT,
        className: "rent",
      },
    },
    {
      path: "/setting",
      name: "설정",
      component: setting,
      meta: {
        layout: Define.LAYOUT_TYPE.DEFAULT,
        className: "dashboard",
      },
    },
  ],
});

// 전역 네비게이션
router.beforeEach((to, from, next) => {
  next();
});

export default router;
