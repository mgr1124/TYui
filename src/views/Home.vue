<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="common-layout">
    <el-container>
      <HomeHander />
      <el-main>
        <RouterView />
      </el-main>
      <el-footer>
        <HomeFooter />
      </el-footer>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
  import  HomeHander  from '../components/Home/HomeHander.vue'
  import HomeFooter from '../components/Home/HomeFooter.vue';
  const components = {
    HomeHander,
    HomeFooter,
  }
  
</script>

<style>
.common-layout .el-footer{
  height: auto !important;
  background-color: #373737 !important;
}
</style>
