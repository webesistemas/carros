import authRoutes from '@/auth/router'

const Index = () => import('./../Index.vue')
const About = () => import('./../About.vue')
const Contato = () => import('./../Contato.vue')
const Veiculos = () => import('./../Veiculos.vue')
const Home = () => import('./../Home.vue')

export default [

  {
    path: '/',
    alias: '',
    component: Index,
    children: [
      {
        path: 'about',
        name: 'About',
        component: About
      },
      {
        path: 'home',
        alias: '/',
        name: 'Home',
        component: Home
      },
      {
        path: 'veiculos',
        alias: 'carros',
        name: 'Veiculos',
        component: Veiculos
      },
      {
        path: 'contato',
        name: 'Contato',
        component: Contato
      },
      ...authRoutes
    ]
  }

]
