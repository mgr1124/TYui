<template>
    <div class="servermain">
      <div class="service">
        <div class="service-body">
          <h1>快递服务</h1><br/>
          <span>为您提供当日寄件，当日送达的即日快递服务。</span> 
        </div>      
      </div>
      <div class="service2">
        <div class="service-body">
          <div class="service-body-hand">
            <el-breadcrumb :separator-icon="ArrowRight">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>物流服务</el-breadcrumb-item>
            <el-breadcrumb-item>即日服务</el-breadcrumb-item>
          </el-breadcrumb>
          </div>
          <div class="service-body-hand">
            <h1>即日服务</h1>
          </div>
          <div class="service-body-body">
            <div class="bodyleft">
              <el-image  src="/src/assets/main/card/01.jpg" fit="cover" />
            </div>
            <div class="bodyright">
              <div class="bodyright-main">
                <span>为您提供当日寄件，当日送达的即日快递服务。</span><div />
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
              <el-icon style="padding-top: 3rem; margin: 0 auto;" :size="100"><Switch /></el-icon>
              <h5>时效优先，精准承诺，稳定</h5>
              <h5>优势资源保障，各环节通过专属流程进行优先发运、中转和派送，提供今天寄今天到的寄递服务体验</h5>
            </div>
            <div class="bodyproduct">
              <el-icon style="padding-top: 3rem; margin: 0 auto;" :size="100"><User  /></el-icon>
              <h5>客制化服务</h5>
              <h5>多款增值服务满足您各种寄递场景需求</h5>
            </div>
            <div class="bodyproduct">
              <el-icon style="padding-top: 3rem; margin: 0 auto;" :size="100"><Promotion /></el-icon>
              <h5>全程可追踪</h5>
              <h5>科技赋能实现网络透明化、智能化</h5>
            </div>
          </div>
          <samedaystandard />
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
    import samedaystandard from './standard/samedaystandard.vue';
    import { useRouter } from "vue-router"
  
    const router = useRouter()
    const components = {
      samedaystandard,
    }
    </script>
    
    
    <style scoped>
    .service{
      height: 25rem;
      background-image: url("/src/assets/main/card/02.jpg");
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
  
    </style>
    
    
    