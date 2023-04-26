<template>
  <div class="servermain">
    <div class="service">
      <div class="service-body">
        <h1>即时配</h1><br/>
        <span>面向所有客户的全场景同城物流配送，专人专送，为客户提供全城范围内的点到点急速配送服务。</span> 
      </div>      
    </div>
    <div class="service2">
      <div class="service-body">
        <div class="service-body-hand">
          <el-breadcrumb :separator-icon="ArrowRight">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>物流服务</el-breadcrumb-item>
          <el-breadcrumb-item>即时配</el-breadcrumb-item>
        </el-breadcrumb>
        </div>
        <div class="service-body-hand">
          <h1>同城急送</h1>
        </div>
        <div class="service-body-body">
          <div class="bodyleft">
            <el-image  src="/main/card/02.jpg" fit="cover" />
          </div>
          <div class="bodyright">
            <div class="bodyright-main">
              <span>面向所有客户的全场景同城物流配送，专人专送，为客户提供全城范围内的点到点急速配送服务。</span><div />
              <el-button color="#DC1E32" @click="router.push('orders/OrderListPay')" >我要寄件</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div class="service2">
        <div class="service-body">
          <div class="service-body-hand">
            <h1>产品优势</h1>
          </div>
          <div class="service-body-bodyproduct">
            <div class="bodyproduct">
              <el-icon style="padding-top: 3rem; margin: 0 auto;" :size="100"><User /></el-icon>
              <h5>客制化服务</h5>
              <h5>提供多元化增值服务满足不同场景需求</h5>
            </div>
            <div class="bodyproduct">
              <el-icon style="padding-top: 3rem; margin: 0 auto;" :size="100"><Promotion /></el-icon>
              <h5>全程可追踪</h5>
              <h5>科技赋能实现网络透明化、智能化</h5>
            </div>
            <div class="bodyproduct">
              <el-icon style="padding-top: 3rem; margin: 0 auto;" :size="100"><Switch /></el-icon>
              <h5>点到点直送</h5>
              <h5>多元运力融合满足订单接即拿即送，无需中转</h5>
            </div>
          </div>
          <rushstandard />
        </div>
      </div>
      <div class="service2">
        <div class="service-body">
          <div class="service-body-hand">
            <h1>了解更多</h1>
          </div>
        </div>
    </div>
  </div>
  </template>


  <script lang="ts" setup>
  import { ArrowRight , Switch , User , Promotion } from '@element-plus/icons-vue'
  import rushstandard from './standard/rushstandard.vue';
  import { useRouter } from "vue-router"

  const router = useRouter()
  const components = {
    rushstandard
  }
  </script>
  
<style scoped>
.service{
  height: 25rem;
  background-image: url("/main/card/02.jpg");
}
.service-body{
  display: flex;
  width: 80rem;
  margin: 0 auto;
  flex-direction: column;
} 
.service > .service-body{
  color: azure;
}
.service > .service-body > h1{
  padding-top: 7rem ;
  font-weight:bold;  
} 
.service > .service-body > span{
  padding-top: 4rem ;
}

.service2 > .service-body > .service-body-hand{
  padding: 2rem 2rem;
}
.service2 > .service-body > .service-body-hand h1{
  font-weight:bold;  
  color: black;
  text-align: center;
}
.service-body-body{
  display: flex;
  flex-wrap: nowrap
}
.service2 > .service-body > .service-body-body > .bodyleft{
  margin: auto 0;
}
.service2 > .service-body > .service-body-body > .bodyleft > .el-image{
  width: 32rem;height: 18rem;
}
.service2 > .service-body > .service-body-body > .bodyright{
  height: 20rem;
  width: 48rem;
  background-color: white;
  box-shadow: 5px 5px 10px 5px #EDEDED; 
}
.bodyright > .bodyright-main{
  width: 30rem;
  height: 10rem;
  padding: 0 auto;
  margin: 6rem auto;
}
.service-body-bodyproduct{
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
}
.service-body-bodyproduct > .bodyproduct{
  width: 23rem;
  height: 15rem;
  text-align: center;    
  box-shadow: 5px 5px 10px 5px #EDEDED; 
}


@media (orientation:portrait)  {
  .service{
  height: 15rem;
}
  .service-body{
  display: flex;
  width: auto  ;
  margin: 0 auto;
  flex-direction: column;
} 
.service > .service-body > h1{
  padding: 1rem 3rem ;
  font-weight:bold;  
} 
.service > .service-body > span{
  padding:1rem 3rem ;
}
.service2 > .service-body > .service-body-hand{
  padding: 1rem 2rem;
}
.service2 > .service-body > .service-body-hand h1{
  font-weight:bold;  
  color: black;
  text-align: center;
}
.service-body-body{
  display: flex;
  flex-wrap: nowrap
}
.service2 > .service-body > .service-body-body > .bodyleft{
  margin: auto 0;
}
.service2 > .service-body > .service-body-body > .bodyleft > .el-image{
  width: 8rem;height: 5.5rem;
}
.service2 > .service-body > .service-body-body > .bodyright{
  height: 8rem;
  width: 14rem;
  background-color: white;
  box-shadow: 5px 5px 10px 5px #EDEDED; 
}
.bodyright > .bodyright-main{
  width: 9rem;
  height: 4rem;
  padding: 0 auto;
  margin: 1rem auto;
}

}
</style>
 