const Categorias = () => import('./../views/Categorias.vue')

export default [
  {
    path: 'categorias',
    name: 'Categorias',
    component: Categorias,
    meta: { requiresAuth: true }
  }
]
