import { createRouter, createWebHistory } from 'vue-router';
import Votes from '../views/Votes.vue';
import Feed from '../views/Feed.vue';
import Discussions from '../views/Discussions.vue';
import Archieves from '../views/Archieves.vue';
import Login from '../views/Login.vue';
import CreatePost from '@/views/CreatePost.vue';

const routes = [
  { path: '/login', 
  component: Login },

  { path: '/create', 
  component: CreatePost,
  meta: { requiresAuth: true } 
},
  {
    path: '/votes',
    name: 'votes',
    component: Votes,
    meta: { requiresAuth: true }
  },
  {
    path: '/feed',
    name: 'feed',
    component: Feed,
    meta: { requiresAuth: true }
  },
  {
    path: '/archieves',
    name: 'archieves',
    component: Archieves,
    meta: { requiresAuth: true }
  },
  {
    path: '/discussions',
    name: 'discussions',
    component: Discussions,
    meta: { requiresAuth: true }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('name');

  if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
      next('/login');
  } else {
      next();
  }
});

export default router;