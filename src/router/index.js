import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import OrderList from '../views/OrderList.vue'
import UserList from '../views/UserList.vue'
import Login from '../views/Login.vue'
import Test from '../views/Test.vue'

const routes = [
  {
    path: '/',
    name: 'Test',
    component: Test
  },
  {
    path: '/orders',
    name: 'OrderList',
    component: OrderList
  },
  {
    path: '/users',
    name: 'UserList',
    component: UserList
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router