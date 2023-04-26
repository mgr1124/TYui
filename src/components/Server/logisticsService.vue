<template>
    <div class="HomeOrderList">
      <div class="HomeOrderListMain">
        <el-row class="HomeOrderListMainTac">
          <el-col :span="12">
            <el-menu default-active="/orders/OrderListPay" class="el-menu-vertical-demo"
              @open="handleOpen" @close="handleClose" router>
            <el-menu-item index="/orders/OrderListPay">
                <el-icon><icon-menu /></el-icon>
                <span>在线下单</span>
              </el-menu-item>
              <el-menu-item index="/orders/OrderListMe">
                <el-icon><icon-menu /></el-icon>
                <span>我的订单</span>
              </el-menu-item>
              <el-menu-item index="3" >
                <el-icon><document /></el-icon>
                <span>地址管理</span>
              </el-menu-item>
              <el-menu-item index="4">
                <el-icon><setting /></el-icon>
                <span>账单管理</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
        <div>
          <router-view />
        </div>
        
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { Document, Menu as IconMenu, Location, Setting, } from '@element-plus/icons-vue'
  
  
  const handleOpen = (key: string, keyPath: string[]) => {
    // console.log(key, keyPath)
  }
  const handleClose = (key: string, keyPath: string[]) => {
    // console.log(key, keyPath)
  }
  </script>
  
  
  <style scoped>
  .HomeOrderList{
    background-image: url("/main/card/02.jpg");
  }.HomeOrderListMain{
    display: flex;
    width: 80rem;
    margin: 0 auto;
  } .HomeOrderListMainTac{
    padding: 1rem;
    display: flex;
    flex-wrap: nowrap
  } .el-menu-item{
   width: 15rem;
  }
   
  .HomeOrderListMainTac > .el-col{
    max-width: 100% !important;
  }
  </style>
  
  
  