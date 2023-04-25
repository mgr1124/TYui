<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="Main">
    <MainCarousel />
    <!-- main_service -->
    <div class="main_service">
      <div class="main_service_menu">
        <el-menu  class="el-menu-demo" mode="horizontal" background-color="#545c64"
          text-color="#fff" active-text-color="#ffd04b" @select="handleSelect"  justify-content: center 
          :ellipsis="false" >
          <el-menu-item index="1" @click="router.push('logistics/:logistics_id')">运单追踪 </el-menu-item>
          <el-menu-item index="2" @click="router.push('orders/OrderListPay')">我要寄件</el-menu-item>
          <el-menu-item index="3" @click="router.push('orders/OrderListMe')">订单查询</el-menu-item>
          <el-menu-item index="4">收寄范围查询</el-menu-item>
        </el-menu>
      </div>
      <div class="main_service_detail">
        <h1 style="padding: 0.5em 0em;">&emsp;&emsp;核心服务</h1>
        <span>&emsp;&emsp;中国领先的技术驱动的供应链解决方案及物流服务供应商</span>
      </div>
      <div class="main_service_MainCard">
        <MainCard />
      </div>
      <div class="main_service_introduce">
        <div class="main_service_detail">
          <h1 style="padding: 0.5em 0em;">&emsp;&emsp;行业解决方案</h1>
          <span>&emsp;&emsp;实现各行业商业模型打造 提供有竞争力的行业解决方案</span>
        </div>
        <MainIntroducedetail />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import MainCard from '../components/Main/MainCard.vue';
  import MainIntroducedetail from '../components/Main/MainIntroducedetail.vue'
  import MainCarousel from '../components/Main/MainCarousel.vue'
  import { useRouter } from "vue-router"

  const router = useRouter()
  const components = {
    MainCard,
    MainIntroducedetail,
    MainCarousel
  }
  const handleSelect = () => {
    // console.log("handleSelect");
  }

</script>

<style scoped>
  .el-menu-demo {
    display: flex;
  }
  .el-menu-demo > .el-menu-item {
    flex: 1;
    text-align: center;
  }
  .el-menu-demo > .el-menu-item:not(:last-child) {
    border-right: 1px solid var(--el-border-color);
  }
  .el-menu--horizontal > .el-menu-item {
    border-bottom: none;
    text-decoration: none;
  }
  .main_service_detail{
    width: 75rem;
    margin: 0 auto;
  }
  .main_service_MainCard{
    width: 75rem;
    margin: 3.125rem auto;
    background-color: white;
  }
  .main_service_introduce{
    background-image: url("/src/assets/main/card/02.jpg");
    color: aliceblue;
  }
</style>