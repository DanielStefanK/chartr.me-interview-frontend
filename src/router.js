import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

import EntryPoint from '@/components/EntryPoint';

export default new Router({
  routes: [
    {
      path: '/:id',
      name: 'home',
      component: EntryPoint,
    },
  ],
});
