import Vue from 'vue'
import VueRouter from 'vue-router'

import { isLoggedIn } from '../auth/service/auth-service'
import Home from '../views/Home.vue'

import authRoutes from '../auth/router'
const Categorias = () => import('../components/categorias/categorias.vue')
const Marcas = () => import('../components/marcas/marcas.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    alias: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

  {
    path: '/categorias',
    name: 'Categorias',
    component: Categorias,
    meta: { requiresAuth: true }
  },
  {
    path: '/marcas',
    name: 'Marcas',
    component: Marcas,
    meta: { requiresAuth: true }
  },
  ...authRoutes
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
