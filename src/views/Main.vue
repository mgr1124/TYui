<template>
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

</template>

<script>
export default {
  data() {
    return {
      items: [
          {imageSrc: '/src/assets/main/b1.jpg',},
          {imageSrc: '/src/assets/main/b2.jpg',},
          {imageSrc: '/src/assets/main/b3.jpg',},
          {imageSrc: '/src/assets/main/b4.jpg',},
        ],
      searchText : "",
    };
    
  },
  // mounted() {
  //   this.getAll()
  // },
  methods: {
    search() {
      console.log("search");
      const logistics_id = this.searchText // 参数值，可以根据实际情况设置
      this.$router.push({ name: 'logistics', params: { logistics_id }})
    },

    

  }
}
</script>

<style scoped>
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
.Carousel .el-carousel--horizontal .el-carousel__container {
  height: 30rem !important;
  min-height: 90vh;
  /* min-height: 200px !important; */
}
.input_container .el-input .el-input__wrapper{
  border-radius:  var(--el-border-radius-round) !important;
}
</style>
 


