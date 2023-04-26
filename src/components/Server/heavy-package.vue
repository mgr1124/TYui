<template>
    <div class="servermain">
      <div class="service">
        <div class="service-body">
          <h1>快运服务</h1><br/>
          <span>提供单票20KG+大件托运服务。</span> 
        </div>      
      </div>
      <div class="service2">
        <div class="service-body">
          <div class="service-body-hand">
            <el-breadcrumb :separator-icon="ArrowRight">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>物流服务</el-breadcrumb-item>
            <el-breadcrumb-item>快运服务</el-breadcrumb-item>
          </el-breadcrumb>
          </div>
          <div class="service-body-hand">
            <h1>顺丰卡航</h1>
          </div>
          <div class="service-body-body">
            <div class="bodyleft">
              <el-image  src="/main/card/pexels-tom-fisk.jpg" fit="cover" />
            </div>
            <div class="bodyright">
              <div class="bodyright-main">
                <span>提供单票20KG+大件托运服务，满足B2C电商大包裹、B2B门店调拨场景、B2B零担托盘货与批量件场景发货需求，全程提供高品质物流服务。</span><div />
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
              <h5>报价清晰透明</h5>
              <h5>首续重分段，采用快递化报价模式</h5>
            </div>
            <div class="bodyproduct">
              <el-icon style="padding-top: 3rem; margin: 0 auto;" :size="100"><Promotion /></el-icon>
              <h5>具有竞争力的时效</h5>
              <h5>顺丰全程强管控运输资源，时效有承诺，提供更快更稳定的大件物流服务</h5>
            </div>
            <div class="bodyproduct">
              <el-icon style="padding-top: 3rem; margin: 0 auto;" :size="100"><Switch /></el-icon>
              <h5>服务范围覆盖广</h5>
              <h5>中国内地及港澳地区，超过300个城市</h5>
            </div>
            <div class="bodyproduct">
              <el-icon style="padding-top: 3rem; margin: 0 auto;" :size="100"><User /></el-icon>
              <h5>客制化专业增值服务</h5>
              <h5>个人客户：提供大件上楼、送装安装等 企业客户：提供大件预约入仓、打木架、打托等</h5>
            </div>

          </div>
          <heavypackagestandard />
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
    import heavypackagestandard from './standard/heavypackagestandard.vue';
    import { useRouter } from "vue-router"
  
    const router = useRouter()
    const components = {
      heavypackagestandard,
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
      flex-wrap: nowrap;
      margin-bottom: 2rem;
    }
    .service-body-bodyproduct > .bodyproduct{
      width: 23rem;
      height: 15rem;
      text-align: center;    
      box-shadow: 5px 5px 10px 5px #EDEDED; 
      padding: 0 1rem;
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
    
    
    