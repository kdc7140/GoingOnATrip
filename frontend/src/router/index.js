import Vue from 'vue';
import Router from "vue-router";
import Define from "@/common/define";
import EventBus from "@/common/EventBus";

const login = () => import("../views/Login/login.vue");
const intro = () => import("../views/Login/intro.vue");
const chPw = () => import("../views/Login/changePw.vue");
const regMb = () => import("../views/Login/regMember.vue");

const main = () => import("../views/Main/mainBoard.vue");

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
      name: "intro",
      component: intro,
    },
    {
      path: "/intro",
      name: "intro page",
      component: intro,
      //meta: {
      //  layout: Define.LAYOUT_TYPE.EMPTY,
      //  className: "dashboard",
      //},
    },
    {
      path: "/login",
      name: "login page",
      component: login,
      //meta: {
      //  layout: Define.LAYOUT_TYPE.EMPTY,
      //  className: "dashboard",
      //},
    },
    {
      path: "/chpw",
      name: "change Password page",
      component: chPw,
      meta: {
        layout: Define.LAYOUT_TYPE.DEFAULT,
        className: "dashboard",
      },
    },
    {
      path: "/regMb",
      name: "register Member page",
      component: regMb,
      meta: {
        layout: Define.LAYOUT_TYPE.DEFAULT,
        className: "dashboard",
      },
    },
    {
      path: "/main",
      name: "main",
      component: main,
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
