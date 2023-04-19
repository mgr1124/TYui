<template>
    <div class="OrderFormType" >
      <span>寄件方式</span>
    </div>
    <div class="OrderFormTypemain" >
        <el-form-item label="寄件方式：" >
        <el-radio-group v-model="sendType.orderSendtype" @change="typeChange">
          <el-radio border label="上门取件" />
          <el-radio border label="自邮" />
        </el-radio-group>
        </el-form-item>
        <!-- 时间选择器 -->
        <div id="timeSelect">
            <el-form-item label="时间:">
            <el-col :span="5" :offset="1">
                <el-date-picker v-model="sendType.date1" type="date"
                label="Pick a date" placeholder="选择日期" style="width: 10rem" />
            </el-col>
            <el-col :span="5" :offset="1">
                <el-time-picker  v-model="sendType.date2" label="Pick a time"
                placeholder="选择时间"  style="width: 10rem" />
            </el-col>
            </el-form-item>
        </div>
        <div id="codeInputSelect">
            <el-form-item label="邮寄单号:">
                <el-input :span="10" v-model="sendType.orderCouriernumber" placeholder="邮寄单号" />
            </el-form-item>
        </div>
    </div>
    <div class="OrderFormType" >
        <span>物品信息</span>
    </div>
    <div class="OrderFormTypemain">
        <el-form label-width="auto" label-position="right">
            <el-form-item label="邮寄物品：" >
                <el-radio-group v-model="sendType.orderCommodity" >
                <el-radio border label="文件" />
                <el-radio border label="服装" />
                <el-radio border label="茶叶" />
                <el-radio border label="手机" />
                <el-radio border label="酒水" />
                <el-radio border label="面霜乳液" />
                <el-radio border label="化妆品" />
                <el-radio border label="其他日用品" />
                </el-radio-group>
            </el-form-item>
            <el-form-item  >
                <el-form-item  label="重量：">
                    <el-input v-model="sendType.orderWeight" placeholder="重量：kg，例：“5”"  style="width: 13rem;" >
                        <template #append>kg</template>
                    </el-input>
                </el-form-item>
                <el-form-item  label="体积：">
                    <el-input v-model="sendType.orderVolume" placeholder="体积：m³，例：“1”" style="width: 13rem;" >
                        <template #append>m³</template>    
                    </el-input>
                </el-form-item>
            </el-form-item>
        </el-form>
    </div>
    <div class="OrderFormType" >
        <span>付款方式及备注</span>
    </div>
    <div class="OrderFormTypemain">
        <el-form label-width="auto" label-position="right">
            <el-form-item label="付款方式：" >
                <el-radio-group v-model="sendType.payType" >
                <el-radio border label="寄付现结" />
                <el-radio border label="到付" />
                </el-radio-group>
            </el-form-item>
            <el-form-item label="备注：" >
                <el-input v-model="sendType.orderDesc" placeholder="写给快递小哥哥的话。例：“需要箱子”" style="width: 25rem;" />
            </el-form-item>
        </el-form>
    </div>
    <div class="OrderFormType" >
        <span>运费</span>
        <h1 style="color: crimson;">合计：{{ sendType.orderCost }}</h1>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

const sendType = reactive({
    orderSendtype:'',
    date1:'',
    date2:'',
    orderCouriernumber:'',
    orderCommodity:'',
    orderWeight:'',
    orderVolume:'',
    payType:'',
    orderDesc:'',
    orderCost:'10'
})

const typeChange = () =>{
    var styleElementTS = document.getElementById('timeSelect'); 
    var styleElementCI = document.getElementById('codeInputSelect'); 
    if(sendType.orderSendtype === "上门取件"){
        if (styleElementTS !== null){styleElementTS.style.display='block'}
        if (styleElementCI !== null){styleElementCI.style.display='none'}
    }else{
        if (styleElementTS !== null){styleElementTS.style.display='none'}
        if (styleElementCI !== null){styleElementCI.style.display='block'}
    }
}

defineExpose({
    sendType,
});
</script>

<style scoped>
.OrderFormType{
  padding: 0.5rem 1rem;
  border-top: 1px solid #ccc!important; 
}
.OrderFormTypemain{
  padding: 0.5rem 2rem;
} 
.OrderFormTypemain .el-radio{
    margin-bottom: 1.5rem;
}
#timeSelect{
    display:block;
}
#codeInputSelect{
    display:none;
    width: 26.65rem;
}
</style>