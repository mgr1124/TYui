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
import rush from '../components/Server/rush.vue';
import heavypackage from '../components/Server/heavy-package.vue';
import sameday from '../components/Server/same-day.vue';
import intstandard from '../components/Server/int-standard.vue';
import comsumer from '../components/Solution/comsumer.vue'
import carService from '../components/Solution/carService.vue'
import digital from '../components/Solution/digital.vue'
import dress from '../components/Solution/dress.vue'
import freshSolution from '../components/Solution/freshSolution.vue'
import homeAppliances from '../components/Solution/homeAppliances.vue'

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
    children: [
      { path: 'rush', component: rush },
      { path: 'heavypackage', component: heavypackage },
      { path: 'sameday', component: sameday },
      { path: 'intstandard', component: intstandard },
    ]

  },
  {
    path: '/solution',
    name: 'solution',
    children: [
      { path: 'comsumer', component: comsumer },
      { path: 'carService', component: carService },
      { path: 'digital', component: digital },
      { path: 'dress', component: dress },
      { path: 'freshSolution', component: freshSolution },
      { path: 'homeAppliances', component: homeAppliances },

    ]

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