import Vue from 'vue';
import Router from 'vue-router';

// lazyload 적용
// () => import(/* webpackChunkName: "intro" */'views/intro');

Vue.use(Router);

const router = new Router({
  mode: 'hash',
  // base: '/', // only history mode
  routes: [
    // { path: '/', name: 'intro', component: intro },
  ],
});

// 전역 네비게이션
router.beforeEach((to, from, next) => {
  next();
});

export default router;
