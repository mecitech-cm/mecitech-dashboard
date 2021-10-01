import { createRouter, createWebHistory } from 'vue-router';

// layouts

import Default from '@/layouts/Default.vue';
import Auth from '@/layouts/Auth.vue';

// views for Admin layout

import Dashboard from '@/views/admin/Dashboard.vue';

// views for Auth layout

import Login from '@/views/auth/Login.vue';
import Register from '@/views/auth/Register.vue';

// views without layouts

import Home from '@/views/Home.vue';

const routes = [
  {
    path: '/admin',
    redirect: '/admin/dashboard',
    component: Default,
    children: [
      {
        path: '/admin/dashboard',
        component: Dashboard,
      },
    ],
  },
  {
    path: '/auth',
    redirect: '/auth/login',
    component: Auth,
    children: [
      {
        path: '/auth/login',
        component: Login,
      },
      {
        path: '/auth/register',
        component: Register,
      },
    ],
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '@/views/About.vue'),
  },
  { path: '/:pathMatch(.*)*', redirect: '/' },
];

const router = createRouter({
  // history: createWebHashHistory(),
  history: createWebHistory(),
  routes,
});

export default router;
