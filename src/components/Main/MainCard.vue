<template>
  <el-row class="login-el-row">
    <el-col  v-for="(item, index) in cards" :key="item" :span="8" :offset="index > 0 ? 2 : 0"  >
      <el-card :body-style="{ padding: '0px' }" shadow="hover" @click="router.push('server')">
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
  import { useRouter } from "vue-router"

const router = useRouter()
const cards = [
    {imageSrc: '/src/assets/main/card/01.jpg',hander:'即时配',text:"面向所有客户的全场景同城物流配送，专人专送，为客户提供全城范围内的点到点急速配送服务。"},
    {imageSrc: '/src/assets/main/card/02.jpg',hander:'快递快运服务',text:"为您提供“快速、准时、稳定”或“价格更优、时效稳定、托寄无忧、服务范围广”的高品质、门到门的标准快递服务。"},
    {imageSrc: '/src/assets/main/card/03.jpg',hander:'快运服务',text:"提供单票20KG+大件托运服务，满足B2C电商大包裹、B2B门店调拨场景、全程提供高品质物流服务。"},
    {imageSrc: '/src/assets/main/card/04.jpg',hander:'跨境服务',text:"为满足客户紧急物品寄递需求，各环节均以最快速度进行发运、中转和派送的高品质门到门国际快件服务。"},
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
