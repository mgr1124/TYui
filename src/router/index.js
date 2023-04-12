import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import OrderList from '../views/OrderList.vue'
import Payments from '../views/Payments.vue'
import Login from '../views/Login.vue'
import Logistics from '../views/Logistics.vue'
import Test from '../views/Test.vue'
import ComponentA from '@/components/ComponentA.vue'
import ComponentB from '@/components/ComponentB.vue'

const routes = [
  {
    path: '/component-a',
    name: 'component-a',
    component: ComponentA,
  },
  {
    path: '/component-b/:id',
    name: 'component-b',
    component: ComponentB,
  },
  {
    path: '/',
    name: 'main',
    component: Main
  },
  {
    path: '/orders',
    name: 'orderList',
    component: OrderList
  },
  {
    path: '/payments',
    name: 'payments',
    component: Payments
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/logistics/:logistics_id',
    name: 'logistics',
    component: Logistics
  },
  {
    path: '/test/:id',
    name: 'test',
    component: Test
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router