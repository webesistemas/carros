import Vue from 'vue'
import VueRouter from 'vue-router'

import { isLoggedIn } from '../auth/service/auth-service'

import pagesRoutes from '../templates/pages/router'
import marcasRoutes from '../components/marcas/router'
import categoriasRoutes from '../components/categorias/router'

const Dashboard = () => import('./../templates/dashboard/Dashboard.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/dashboard',
    component: Dashboard,
    meta: { requiresAuth: true },
    children: [
      ...categoriasRoutes,
      ...marcasRoutes
    ]
  },
  ...pagesRoutes

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name === 'login' && isLoggedIn()) {
    next({ path: '/' })
  } else if (to.meta.requiresAuth && !isLoggedIn()) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next() // senao continua fluxo não barrando
  }
})

export default router
