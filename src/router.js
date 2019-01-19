import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

import EntryPoint from '@/components/EntryPoint';
import EnterIDPage from '@/components/EnterIDPage';

export default new Router({
  routes: [
    {
      path: '/',
      name: 'enterId',
      component: EnterIDPage,
    },
    {
      path: '/interview/:id',
      name: 'home',
      component: EntryPoint,
    },
    {
      path: '*',
      redirect: () => {
        window.location.href =
          process.env.VUE_APP_LANDINGPAGE || 'https://chartr.me/';
      },
    },
  ],
});
