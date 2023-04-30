

import Vue from 'vue';
import App from './App';
import store from './store';
import router from './router';
import plugins from './plugin';

import './assets/css/pageStyle.css';
//import "./assets/css/sideMenu.css";
import './assets/css/popup.css';

Vue.config.productionTip = false;

import common from "./plugins/common.js";
Vue.use(common, { someOption: true });

import VueLodash from "vue-lodash";
import lodash from "lodash";
Vue.use(VueLodash, { name: "$_", lodash: lodash });

import Fragment from "vue-fragment";
Vue.use(Fragment.Plugin);

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

import Element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(Element);

import "@/common/$mcore.js";

import global from "./mixin/biz.util.js";
Vue.mixin(global);

import vueMoment from "moment";
Vue.use(vueMoment);

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify);

// 모든 페이지에서 안드로이드 백키에 대한 공통처리
const exit_pages = ["/"];
let EXIT_DELAY = true;
const EXIT_DELAY_TIME = 1000;
const exitApp = () => {
  if (EXIT_DELAY) {
    EXIT_DELAY = false;
    M.pop.instance("한번 더 누르시면 앱이 종료 됩니다.");
    setTimeout(() => {
      EXIT_DELAY = true;
    }, EXIT_DELAY_TIME);
  } else {
    M.sys.exit();
  }
};

$mcore.MCommon("onback", function () {
  const currentPath = router.currentRoute.path.toLocaleLowerCase();
  if (exit_pages.includes(currentPath)) {
    // 종료 페이지
    exitApp();

    return;
  }
  router.back();
});

new Vue({
  render: (h) => h(App),
  store,
  router,
}).$mount("#app");