<template>
    <div class="servermain">
      <div class="service">
        <div class="service-body">
          <h1>跨境服务</h1><br/>
          <span>为满足客户紧急物品寄递需求的国际快件服务</span> 
        </div>      
      </div>
      <div class="service2">
        <div class="service-body">
          <div class="service-body-hand">
            <el-breadcrumb :separator-icon="ArrowRight">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>物流服务</el-breadcrumb-item>
            <el-breadcrumb-item>跨境服务</el-breadcrumb-item>
          </el-breadcrumb>
          </div>
          <div class="service-body-hand">
            <h1>国际标快</h1>
          </div>
          <div class="service-body-body">
            <div class="bodyleft">
              <el-image  src="/src/assets/main/card/pexels-kai-pilger.jpg" fit="cover" />
            </div>
            <div class="bodyright">
              <div class="bodyright-main">
                <span>为满足客户紧急物品寄递需求，各环节均以最快速度进行发运、中转和派送的高品质门到门国际快件服务</span><div />
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
              <h5>高效便捷</h5>
              <h5>快捷收件、直飞航班</h5>
            </div>
            <div class="bodyproduct">
              <el-icon style="padding-top: 3rem; margin: 0 auto;" :size="100"><Promotion /></el-icon>
              <h5>专业稳定</h5>
              <h5>阳光清关、时效稳定</h5>
            </div>
            <div class="bodyproduct">
              <el-icon style="padding-top: 3rem; margin: 0 auto;" :size="100"><Switch /></el-icon>
              <h5>价格实惠 客制服务</h5>
              <h5>免D类出口报关服务费，提供多样化增值服务</h5>
            </div>
          </div>
          <intstandardstandard />
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
    import intstandardstandard from './standard/intstandardstandard.vue';
    import { useRouter } from "vue-router"
  
    const router = useRouter()
    const components = {
      intstandardstandard,
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
      flex-wrap: nowrap;
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
    
    
    