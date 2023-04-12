<template>

  <div class="Main">
    <!-- 主页轮播 -->
    <div class="Carousel">
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in items" :key="item" >
          <img :src="item.imageSrc" fit="scale-down" style="width: 100%; " alt="carousel image" />
          <el-button class="detail-button" >Details</el-button>
        </el-carousel-item>
      </el-carousel>
      <div class="input_container">
      <el-input size="large" placeholder="物流订单查询" v-model="searchText" clearable style="width: 20em;"></el-input>
      <el-button size="large" round @click="search">搜索</el-button>
      </div>
    </div> 
    <!-- main_service -->
    <div class="main_service">
      <div class="main_service_menu">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" background-color="#545c64"
          text-color="#fff" active-text-color="#ffd04b" @select="handleSelect"  justify-content: center 
          :ellipsis="false" >
          <el-menu-item index="1">运单追踪 </el-menu-item>
          <el-menu-item index="2">我要寄件</el-menu-item>
          <el-menu-item index="3" >订单查询</el-menu-item>
          <el-menu-item index="4">收寄范围查询</el-menu-item>
        </el-menu>
      </div>
      <div class="main_service_detail">
        <h1 style="padding: 0.5em 0em;">&emsp;&emsp;核心服务</h1>
        <span>&emsp;&emsp;中国领先的技术驱动的供应链解决方案及物流服务供应商</span>
      </div>
      <div class="main_service_card">
        
      </div>
    </div>
   
  </div>
  

</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { useRouter } from "vue-router"
  const items = [
    {imageSrc: '/src/assets/main/b1.jpg',},
    {imageSrc: '/src/assets/main/b2.jpg',},
    {imageSrc: '/src/assets/main/b3.jpg',},
    {imageSrc: '/src/assets/main/b4.jpg',},
  ]
  const searchText = ref("")
  const router = useRouter()
  const activeIndex = ref('1')
  const handleSelect = () => {
    console.log("handleSelect");
  }
  const search = () => {
    const logistics_id = searchText.value // 参数值，可以根据实际情况设置
    router.push({ name: 'logistics', params: { logistics_id }})
  }
</script>

<style scoped>
  /* 主页轮播 */
  .Carousel {
    position: relative; /* 使用相对定位 */
  }
  .detail-button {
    position: absolute; /* 使用绝对定位 */
    bottom: 2em;
    right: 2em;
  }
  .input_container{
    position: absolute; /* 使用绝对定位 */
    top: 5em;
    left: 4em;
  }
  /* main_service */
  /* .main_service{
    background-color: aqua;
  } */
  .el-menu-demo {
    display: flex;
  }
  .el-menu-demo > .el-menu-item {
    flex: 1;
    text-align: center;
  }
  .el-menu-demo > .el-menu-item:not(:last-child) {
    border-right: 1px solid var(--el-border-color);
  }
  .el-menu--horizontal > .el-menu-item {
    border-bottom: none;
    text-decoration: none;
  }
  .main_service_detail{
    width: 1200px;
    margin: 0 auto;
  }
  .main_service_card{
    width: 1200px;
    height: 200px;
    margin: 0 auto;
    background-color: white;
  }


</style>

<style>
/* 主页轮播 */
.Carousel .el-carousel--horizontal .el-carousel__container {
  height: 80vh;
  min-height: 10rem;
}
.Carousel .el-carousel--horizontal .el-carousel__indicators {
    position: absolute; /* 使用绝对定位 */
    bottom: 2em;
    left: calc(50% - 76px);
}
.input_container .el-input .el-input__wrapper{
  border-radius:  var(--el-border-radius-round) !important;
}

/* main_service */

</style>

