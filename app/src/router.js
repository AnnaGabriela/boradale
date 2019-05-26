import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Groups from './views/Groups.vue';
import CreateGroup from './views/CreateGroup.vue';
import Profile from './views/Profile.vue';
import Search from './views/Search.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/grupos',
      name: 'groups',
      component: Groups,
    },
    {
      path: '/pesquisa',
      name: 'search',
      component: Search,
    },
    {
      path: '/criargrupo',
      name: 'create',
      component: CreateGroup,
    },
    {
      path: '/perfil',
      name: 'profile',
      component: Profile,
    },
  ],
});
