import Vue from 'vue';
import Router from "vue-router";
import Define from "@/common/define";
import EventBus from "@/common/EventBus";

const login = () => import("../views/Login/login.vue");
const intro = () => import("../views/Login/intro.vue");
const chPw = () => import("../views/Login/changePw.vue");
const regMb = () => import("../views/Login/regMember.vue");

const main = () => import("../views/Main/mainBoard.vue");

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
        className: "dashboard",
      },
    },
    {
      path: "/regMb",
      name: "회원가입",
      component: regMb,
      meta: {
        layout: Define.LAYOUT_TYPE.DEFAULT,
        className: "dashboard",
      },
    },
    {
      path: "/main",
      name: "메인",
      component: main,
      meta: {
        layout: Define.LAYOUT_TYPE.DEFAULT,
        className: "dashboard",
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
