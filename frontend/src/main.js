import './assets/css/style.css';

import Vue from 'vue';
import App from './App';
import store from './store';
import router from './router';

import plugins from './plugin';
import GlobalComponent from './common/global.component';

Vue.config.productionTip = false;

Vue.use(GlobalComponent);
Vue.use(plugins);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
