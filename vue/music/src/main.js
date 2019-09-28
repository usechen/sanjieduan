import Vue from "vue";
import App from "./App.vue";
// import App from './demo/App.vue';  //  这是demo的App
// import store from './demo/vuexdemo/store' //  这是demo练习的store
// import stroe from './demo/vuextodolist/store.js'  //  这是vuex的todolist
import store from './store/store.js';
import router from "./router";
import './style/reset.css'
import VueLazyload from 'vue-lazyload'
import axios from './base/axios'


Vue.config.productionTip = false;

Vue.prototype.$axios=axios

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '/favicon.ico',
  loading: '/loading.gif',
  attempt: 1
})

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount("#app");
