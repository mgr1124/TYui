<template>
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

