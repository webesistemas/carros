const Marcas = () => import('./../views/Marcas.vue')

export default [
  {
    path: 'marcas',
    name: 'Marcas',
    component: Marcas,
    meta: { requiresAuth: true }
  }
]
