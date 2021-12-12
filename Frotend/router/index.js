import { createRouter, createWebHistory } from 'vue-router'
import Factura from '../views/factura'//coloco la ruta
import Login from '../views/login'
import Lugares from '../views/lugares'
import Registro from '../views/registro'


const routes = [
  {
    path: '/factura',
    name: 'factura',
    component: Factura,//mismo nombre de import
  },
  {
    path: '/login',//nombre de la ruta
    name: 'login',
    component: Login//importación de una vista
  },
  {
    path: '/lugares',
    name: 'lugares',
    component: Lugares,
   
  },
  {
    path: '/registro',
    name:'registro',
    component: Registro,
    
  },
  
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
