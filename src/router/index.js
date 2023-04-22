import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import HomeMain from '../views/HomeMain.vue'
import HomeOrderList from '../views/HomeOrderList.vue'
import HomePayments from '../views/HomePayments.vue'
import HomeLogin from '../views/HomeLogin.vue'
import HomeLogistics from '../views/HomeLogistics.vue'
import HomeTest from '../views/HomeTest.vue'
import OrderListPay from '../components/OrderList/OrderListPay.vue';
import OrderListMe from '../components/OrderList/OrderListMe.vue';
import WarehouseServices from '../components/Server/WarehouseServices.vue';

const routes = [
  {
    path: '/',
    name: 'main',
    component: HomeMain
  },
  {
    path: '/orders',
    name: 'orderList',
    component: HomeOrderList,
      children: [
        { path: 'OrderListPay', component: OrderListPay },
        { path: 'OrderListMe', component: OrderListMe },
      ]
  },
  {
    path: '/server',
    name: 'server',
    component: WarehouseServices,

  },
  {
    path: '/payments',
    name: 'payments',
    component: HomePayments
  },
  {
    path: '/login',
    name: 'login',
    component: HomeLogin
  },
  {
    path: '/logistics/:logistics_id',
    name: 'logistics',
    component: HomeLogistics
  },
  {
    path: '/test',
    name: 'test',
    component: HomeTest
  },

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router