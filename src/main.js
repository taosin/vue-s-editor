import Vue from 'vue';
import Router from 'vue-router';
import {
  sync
} from 'vuex-router-sync';
import App from './App.vue';
import store from './vuex/store';
window.Vue = Vue;
Vue.use(Router);
const router = new Router({
  hashbang: false,
  history: false,
  saveScrollPosition: false
});

window.router = router;
Vue.use(require('vue-resource'));
Vue.http.options.root = '/root';
router.map({
  '/': {
    name: 'index',
    component(resolve) {
      require(['./views/index.vue'], resolve);
    }
  },
});
sync(store, router);
router.start(App, '#app');

