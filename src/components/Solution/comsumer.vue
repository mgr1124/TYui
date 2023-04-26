<template>
    <div class="solutionmain">
      <div class="service">
        <div class="service-body">
          <h1>快消行业解决方案</h1><br/>
        </div>      
      </div>
      <div class="service2">
        <div class="service-body">
          <div class="service-body-hand">
            <el-breadcrumb :separator-icon="ArrowRight">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>解决方案</el-breadcrumb-item>
              <el-breadcrumb-item>快消行业解决方案</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <div class="service-body-body">
            
          </div>
        </div>
      </div>
      <div class="service2">
        <div class="service-body">

          <div class="service-body-bodyproduct">
            <div class="bodyproduct">
              <el-image  src='/public/solution/pexels-chanaka.jpg'></el-image>
              <h3>消费品行业智能供应链解决方案</h3>
              <span>为消费品行业客户提供数字化、可视化、智能化的一体解决方案，将基础物流与创新科技深度绑定，通过京东物流强大的网络加持，向传统消费品行业客户提供全渠道E2E服务，实现供应链升级。</span>
            </div>
            <div class="bodyproduct">
              <el-image  src='/public/solution/pexels-tom-fisk.jpg'></el-image>
              <h3>高端消费品行业仓配一体服务</h3>
              <span>为高端消费品企业提供安全可靠的专业仓储服务及全程可视化运输配送管理，确保货物安全；依托网络优化、5G园区、自动化技术，提供科技赋能。</span>
            </div>
            <div class="bodyproduct">
              <el-image  src='/public/solution/pexels-quang-nguyen-vinh.jpg'></el-image>
              <h3>消费品多渠道整合</h3>
              <span>借助订单中台，为品牌商提供多渠道信息整合、库存共享、B&C融合的一体化物流服务，降低供应链管理成本。</span>
            </div>
            <div class="bodyproduct">
              <el-image  src='/public/solution/pexels-tiger-lily.jpg'></el-image>
              <h3>消费品多场景配送</h3>
              <span>满足消费品行业各渠道配送需求，提供线下门店、商超卖场、线上渠道、O2O及社交电商等多场景配送服务，助力品牌商多方触达终端消费者。</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </template>
  
  
    <script lang="ts" setup>
    import { ArrowRight  } from '@element-plus/icons-vue'
    import './solution.css'
    </script>
    
    