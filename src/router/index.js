import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: Home },
    {
      path: "/personatge/:id", 
      name: "personatge-detall", component: () => import("../views/PersonatgesDetall.vue"),
    },
    {
      path: "/notfound",
      name: "notfound", 
      component: () => import('../views/NotFound.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: { name: 'notfound' }
    }
  ],
})

export default router

