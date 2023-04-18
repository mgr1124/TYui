<template>
  <el-row class="login-el-row">
    <el-col  v-for="(item, index) in cards" :key="item" :span="8" :offset="index > 0 ? 2 : 0"  >
      <el-card :body-style="{ padding: '0px' }" shadow="hover">
        <img :src="item.imageSrc" class="image" style="height: 12.5rem width: 13.75rem;;object-fit: fill;"/>
        <div style="padding: .875rem">
          <span>{{ item.hander }}</span>
          <div class="bottom">
            <span class="time">{{ item.text }}</span>
            <el-button text class="button">Operating</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
const cards = [
    {imageSrc: '/src/assets/main/card/01.jpg',hander:'仓配服务',text:"面向企业客户的综合性、一体化及可定制的仓配服务"},
    {imageSrc: '/src/assets/main/card/02.jpg',hander:'快递快运服务',text:"向企业及个人客户提供安全可靠、时效领先、专业贴心的快递及快运服务，以及在此基础上的多种增值服务"},
    {imageSrc: '/src/assets/main/card/03.jpg',hander:'大件服务',text:"面向企业及个人客户的一站式大件仓储、运输、配送及安装服务. "},
    {imageSrc: '/src/assets/main/card/04.jpg',hander:'跨境服务',text:"物流帮助中国制造通向全球，全球商品进入中国。同时，为商家提供一站式跨境供应链服务"},
  ]
</script>

<style>
.time {
  font-size: .75rem;
  color: #999;
}
.bottom {
  margin-top: .8125rem;
  line-height: .75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.button {
  padding: 0;
  min-height: auto;
}
.image {
  width: 100%;
  display: block;
}
.login-el-row{
  width: 62.5rem;
  margin: 0 auto;
}
.login-el-row .el-col{
  max-width: 13.75rem ;
  margin-left: .625rem ;
  margin-right : .625rem ;
  max-height: 31.25rem;
}
.login-el-row .el-card:hover{
transform: scale(1.2);
}
</style>
