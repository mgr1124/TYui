<template>
  <div class="main_service_introducedetail">
    <el-tabs tab-position="left"  class="introducedetail-tabs" >
    <el-tab-pane label="快消"><h2>快消行业解决方案</h2>
      <span>消费品行业智能供应链解决方案</span>
      <br><span>高端消费品行业仓配一体服务</span>
      <br><span>消费品多渠道整合</span>
      <br><span>消费品多场景配送</span>
      <br><el-button round size="large" color="#F56C6C" class="detail-button" @click="router.push('/solution/comsumer')" >更多详情</el-button>
    </el-tab-pane>  
    <el-tab-pane label="服装"><h2>服装行业解决方案</h2>
      <span>门店场景一体化配送服务</span>
      <br><span>线上线下全渠道仓储服务</span>
      <br><span>正逆向增值服务</span>
      <br><span>供应链网络升级</span>
      <br><el-button round size="large" color="#F56C6C" class="detail-button" @click="router.push('/solution/dress')">更多详情</el-button>
    </el-tab-pane>
    <el-tab-pane label="家电"><h2>家电行业解决方案</h2>
      <span>家电行业供应链解决方案</span>
      <br><span>家电品牌商多渠道库存融合</span>
      <br><span>正逆向一体化服务</span>
      <br><span>产销协同</span>
      <br><el-button round size="large" color="#F56C6C" class="detail-button" @click="router.push('/solution/homeAppliances')">更多详情</el-button>
    </el-tab-pane>
    <el-tab-pane label="3C"><h2>3C行业解决方案</h2>
      <span>消费电子供应链解决方案</span>
      <br><span>电子产品逆向回收处置能力</span>
      <br><span>工业电子设备运输服务</span>
      <br><span>3C品牌商多渠道库存融合</span>
      <br><el-button round size="large" color="#F56C6C" class="detail-button" @click="router.push('/solution/digital')">更多详情</el-button>
    </el-tab-pane>
    <el-tab-pane label="汽车"><h2>汽车行业解决方案</h2>
      <span>汽车备件核心城市极速达模式</span>
      <br><span>汽车售后备件行业全链路信息一体化服务</span>
      <br><span>汽车备件产销一盘货+直配送服务</span>
      <br><span>油站便利店O2O服务</span>
      <br><el-button round size="large" color="#F56C6C" class="detail-button" @click="router.push('/solution/carService')">更多详情</el-button>
    </el-tab-pane>
    <el-tab-pane label="生鲜"><h2>生鲜行业解决方案</h2>
      <span>社会化冷链协同网络</span>
      <br><span>标准化产品矩阵</span>
      <br><span>智能化供应链管理</span>
      <br><span>行业化解决方案</span>
      <br><el-button round size="large" color="#F56C6C" class="detail-button" @click="router.push('/solution/freshSolution')">更多详情</el-button>
    </el-tab-pane>

  </el-tabs>
</div>
</template>
<script setup>
  import { useRouter } from "vue-router"

const router = useRouter()

</script>
<style scoped>
  .main_service_introducedetail{
    height: auto;
    width: 75rem;
    padding-top: 2rem;
    margin: 0 auto;
    font-size: 0.9rem;
    line-height: 2.5rem;
    text-indent: 1em
  }
  .introducedetail-tabs{
    height: 20rem 
  }
 .detail-button{
  margin-top: 1em;
  color:azure;
 }

 @media (orientation:portrait)  {
  .main_service_introducedetail{
    height: auto;
    width: auto;
    padding-top: 2rem;
    margin: 0 auto;
    font-size: 0.7rem;
    line-height: 1.5rem;
    text-indent: 1em
  }
}
</style>

<style>
  .main_service_introducedetail .el-tabs__item{
     color: aliceblue ;
  }
  .introducedetail-tabs > .el-tabs__content {
    padding: 0 7rem;
  }
  .introducedetail-tabs > .el-tabs__content > .el-tab-pane > h2{
    margin: 0 -0.7em;
  }

@media (orientation:portrait)  {
  .introducedetail-tabs > .el-tabs__content {
    padding: 0 1rem;
  }
}
</style>

