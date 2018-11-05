import Vue from 'vue'
import VueResourse from 'vue-resource'
import VueRouter from 'vue-router';
import App from './App.vue'
import { routes } from './routes';
import store from './store/store'

Vue.use(VueRouter);
Vue.use(VueResourse);

Vue.http.options.root = 'https://vue-example-96d34.firebaseio.com/';

Vue.filter('currency', (value) => {
  return '$'+ value.toLocaleString();
});

const router = new VueRouter ({
  mode: 'history',
  routes,
  
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
