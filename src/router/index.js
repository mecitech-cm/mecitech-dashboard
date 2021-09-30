import { createRouter, createWebHistory } from "vue-router";
import DashboardHome from "../pages/Home.vue";
import Dashboard from "@/components/Dashboard";

const routes = [
  {
    path: "/",
    name: "Home",
    component: DashboardHome,
  },
  {
    path: "/dashboard",
    component: Dashboard,
    children: [
      { path: "/", redirect: { name: "Dashboard" } },
      { path: "home", name: "DashboardHome", component: DashboardHome },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
