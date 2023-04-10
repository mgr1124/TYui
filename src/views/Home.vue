

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <div class="home"> 
          <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          router
        >
          <el-menu-item index="/">首页</el-menu-item>
          <el-menu-item index="/orders">orders</el-menu-item>
          <el-menu-item index="/payments">payments</el-menu-item>
          <el-menu-item index="/logistics">logistics</el-menu-item>
          <el-menu-item index="/login">login</el-menu-item>
          <el-menu-item index="/test">test</el-menu-item>
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
.common-layout{
  width: auto;
  height: auto;
  background-color: aqua;
}
.home {
  width: 100vh;
  height: 1em;
  background-color: #101723;
}
.el-header{
  background-color: antiquewhite;
}
.el-footer{
  background-color: antiquewhite;
}
</style>



<script lang="ts" setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>
