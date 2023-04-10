

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <div class="home"> 
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false"
          @select="handleSelect" router >
            <el-menu-item index="/">首页</el-menu-item>
            <el-menu-item index="/orders">orders</el-menu-item>
            <el-menu-item index="/payments">payments</el-menu-item>
            <el-menu-item index="/logistics">logistics</el-menu-item>
            <el-menu-item index="/login">login</el-menu-item>
            <el-menu-item index="/test">test</el-menu-item>
            <div class="flex-grow" style="flex-grow: 1;"></div>
            <el-sub-menu index="2">
              <template #title><el-avatar :icon="UserFilled" /></template>
              <el-menu-item index="2-1">item one</el-menu-item>
              <el-menu-item index="2-2">item two</el-menu-item>
              <el-menu-item index="2-3">item three</el-menu-item>
            </el-sub-menu>
          </el-menu>
        </div>
      </el-header>
      <el-main>
        <RouterView />
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<style>
.common-layout .el-menu--horizontal{
  border-bottom: 0px !important;
}
.el-icon{
  margin-right: 0px !important;
}
.el-footer{
  background-color: black;
}
.common-layout .el-main{
  padding: 0px !important;
}
</style>



<script lang="ts" setup>
import { RouterLink, RouterView } from 'vue-router'
import { UserFilled } from '@element-plus/icons-vue'
import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>
