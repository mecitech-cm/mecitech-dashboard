import { createWebHistory, createRouter } from "vue-router";
import Dashboard from '@/components/Dashboard'
import DashboardHome from '@/pages/Home'

const routes = [
    {
         path: '/',
        redirect: 
        { name: 'DashboardHome' }
    },
    {
         path: '/dashboard', 
         component: Dashboard, children: [
        { path: '/', redirect: { 
            name: 'DashboardHome' 
        }
     },
        { path: 'home',
         name: 'DashboardHome',
         component: DashboardHome }
      ]
    }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;