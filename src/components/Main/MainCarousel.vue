<template>
    <div class="Carousel">
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in items" :key="item" >
          <img :src="item.imageSrc" fit="scale-down" style="width: 100%; " alt="carousel image" />
          <!-- <h1>{{ item.des }}</h1> -->
        </el-carousel-item>
      </el-carousel>
      <div class="input_container">
        <el-input size="large" placeholder="物流查询" v-model="searchText" clearable style="width: 20em;"></el-input>
        <el-button size="large" round @click="search">搜索</el-button>
      </div>
    </div>
</template>
    
<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from "vue-router"
const router = useRouter()

const items = [
  {imageSrc: 'main/pexels-nataliya-vaitkevich.jpg',des:"提供优质服务，以及优质服务生态"},
  {imageSrc: 'main/pexels-liza-summer.jpg',des:"提供优质服务，以及优质服务生态"},
  {imageSrc: 'main/pexels-tiger-lily.jpg',des:"提供优质服务，以及优质服务生态"},
  {imageSrc: 'main/pexels-paul-ijsendoorn.jpg',des:"提供优质服务，以及优质服务生态"},
]
const searchText = ref("")

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
.input_container{
  position: absolute; /* 使用绝对定位 */
  top: 5em;
  left: 4em;
}
@media (orientation:portrait)  {
  .input_container{
   display: none;
}
}
</style>

<style>
/* 主页轮播 */
.Carousel .el-carousel--horizontal .el-carousel__container {
height: 80vh;
/* min-height: 10rem; */
}
.Carousel .el-carousel--horizontal .el-carousel__indicators {
  position: absolute; /* 使用绝对定位 */
  bottom: 2em;
  left: calc(50% - 4.75rem);
}
.input_container .el-input .el-input__wrapper{
border-radius:  var(--el-border-radius-round) !important;
}

@media (orientation:portrait)  {
  .Carousel .el-carousel--horizontal .el-carousel__container {
  height: 10rem;
/* min-height: 10rem; */
}
.Carousel .el-carousel--horizontal .el-carousel__indicators {
  position: absolute; /* 使用绝对定位 */
  bottom: 1em;
  left: calc(50% - 4.75rem);
}
}
</style>

