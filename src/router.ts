import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Duel from './views/Duel.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      alias: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/duel',
      name: 'duel',
      component: Duel
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/phones',
      name: 'phones',
      component: () => import(/* webpackChunkName: "phones" */ './views/PhonesList.vue'),
    },
    {
      path: '/phones/:id',
      name: 'phones',
      component: () => import(/* webpackChunkName: "phones" */ './views/Phone.vue'),
    },
    {
      path: '/categories',
      name: 'categories',
      component: () => import(/* webpackChunkName: "categories" */ './views/CategoriesList.vue'),
    },
    {
      path: '/categories/:id',
      name: 'categories',
      component: () => import(/* webpackChunkName: "categories" */ './views/Category.vue'),
    },
  ],
});
