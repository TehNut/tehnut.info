import Vue from 'vue';
import App from './App';
import Router from 'vue-router';
import Home from '@/components/Home';

Vue.config.productionTip = false;
Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
});

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
