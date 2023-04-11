import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import OrderList from '../views/OrderList.vue'
import Payments from '../views/Payments.vue'
import Login from '../views/Login.vue'
import Logistics from '../views/Logistics.vue'
import Test from '../views/Test.vue'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/orders',
    name: 'OrderList',
    component: OrderList
  },
  {
    path: '/payments',
    name: 'Payments',
    component: Payments
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/logistics',
    name: 'Logistics',
    component: Logistics
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router