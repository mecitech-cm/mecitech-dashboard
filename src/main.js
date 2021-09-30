import * as Vue from 'vue';
import App from './App.vue'
import * as VueRouter from 'vue-router';
import Dashboard from '@/components/Dashboard'
import DashboardHome from '@/pages/Home'

import "@/assets/styles/main.css";
const routes = [
  { path: '/', redirect: { name: 'DashboardHome' } },
  { path: '/dashboard', component: Dashboard, children: [
      { path: '/', redirect: { name: 'DashboardHome' } },
      { path: 'home', name: 'DashboardHome', component: DashboardHome }
    ]
  }

];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
  
});

Vue.createApp(App).use(router).mount('#app');
//import "@/assets/styles/main.css";