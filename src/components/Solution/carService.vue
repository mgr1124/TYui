<template>
    <div class="solutionmain">
      <div class="service">
        <div class="service-body">
          <h1>汽车行业解决方案</h1><br/>
        </div>      
      </div>
      <div class="service2">
        <div class="service-body">
          <div class="service-body-hand">
            <el-breadcrumb :separator-icon="ArrowRight">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>解决方案</el-breadcrumb-item>
              <el-breadcrumb-item>汽车行业解决方案</el-breadcrumb-item>
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
              <el-image  src='/src/assets/solution/pexels-chanaka.jpg'></el-image>
              <h3>汽车备件核心城市极速达模式</h3>
              <span>依托京东物流网络能力，通过前置仓在城市核心区域多点备货，实现对4S店/快修店的1-2小时极速覆盖，快速响应客户订单，提升客户体验</span>
            </div>
            <div class="bodyproduct">
              <el-image  src='/src/assets/solution/pexels-tom-fisk.jpg'></el-image>
              <h3>汽车售后备件行业全链路信息一体化服务</h3>
              <span>通过京东订单协同平台系统，打通备件全链路信息流，基于一套系统实现采购、销售全过程的信息化、可视化管理；数字化运营，全面提升供应链运作效率。</span>
            </div>
            <div class="bodyproduct">
              <el-image  src='/src/assets/solution/pexels-quang-nguyen-vinh.jpg'></el-image>
              <h3>汽车备件产销一盘货+直配送服务</h3>
              <span>发挥京东物流仓网布局的优势, 整合主机厂、零部件制造商、经销商库存, 实现一盘货管理, 避免无效的物流及库存。利用京东平台整合的10万家快修店和汽配城拓展销售渠道。智能补货与补货, 有效控制库存水平, 提升订单满足率</span>
            </div>
            <div class="bodyproduct">
              <el-image  src='/src/assets/solution/pexels-tiger-lily.jpg'></el-image>
              <h3>油站便利店O2O服务</h3>
              <span>打通便利店线上、线下销售渠道，以社区/商圈为半径（3km）实现1小时即时配。</span>
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
    
    