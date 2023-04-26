<template>
  <div class="OrderListpay">
    <div class="OrderListType">
      <el-radio-group fill="#DC4C3F" v-model="orderList.order.ordertype" label="OrderListType" >
        <el-radio-button label="快递">寄快递</el-radio-button>
        <el-radio-button label="重物">寄重物</el-radio-button>
        <el-radio-button label="生鲜">寄生鲜</el-radio-button>
      </el-radio-group>
    </div>
    <br />
    <div class="OrderForm">
      <div class="FormLeft">
        <OrderFormSender ref="FormSender" />
      </div>
      <div class="FormRight">
        <OrderFormConsignee ref="FormConsignee"/>
      </div>
    </div>
    <div class="FromSendType">
      <OrderFormType ref="FormConType" />     
    </div>
      <el-button style="width: 10rem;margin: 0 auto;" @click="Submit" >提交订单</el-button>
  </div>
  </template>
  
  <script lang="ts" setup>
  import { reactive, ref ,computed } from 'vue'
  import axios from 'axios';
  import OrderListpaylinkman from './Form/OrderListpaylinkman.vue'
  import OrderFormSender from './Form/OrderFormSender.vue'
  import OrderFormConsignee from './Form/OrderFormConsignee.vue'
  import OrderFormType from './Form/OrderFormType.vue'
  import { ElNotification,ElMessageBox,ElMessage  } from 'element-plus'
  import { useStore } from 'vuex'

  const store = useStore();
  const FormSender = ref(null);
  const FormConsignee = ref(null);
  const FormConType = ref(null);

  const components = {
    OrderListpaylinkman,
    OrderFormSender,
    OrderFormConsignee,
    OrderFormType
  }
  const orderList =reactive({
    order:{
      orderUserid:store.state.userId,
      ordertype:'',
      orderPickuptime:'',
      orderSendtype:'',
      orderCouriernumber:'',
      orderCommodity:'',
      orderWeight:'',
      orderVolume:'',
      orderDesc:'',
      orderCost:''
    },
    addressSender:{},
    addressConsignee:{},
    payment:{
      payType:'',
      payCost:''
    }
  })

  const Submit = () => {
    orderList.addressSender = FormSender.value.addressSender;  //FormSender.value.addressSender
    orderList.addressConsignee = FormConsignee.value.addressConsignee;  //FormConsignee.value.linkman
    let msgSendTypee = FormConType.value.sendType;  //FormConType.value.sendType;
    orderList.order.orderPickuptime = String(msgSendTypee.date1).slice(4,16) + String(msgSendTypee.date2).slice(16,24);
    orderList.order.orderSendtype = msgSendTypee.orderSendtype;
    orderList.order.orderCouriernumber = msgSendTypee.orderCouriernumber;
    orderList.order.orderCommodity = msgSendTypee.orderCommodity;
    orderList.order.orderWeight = msgSendTypee.orderWeight;
    orderList.order.orderVolume = msgSendTypee.orderVolume;
    orderList.order.orderDesc = msgSendTypee.orderDesc;
    orderList.order.orderCost = msgSendTypee.orderCost;
    orderList.payment.payType = msgSendTypee.payType;
    orderList.payment.payCost = msgSendTypee.orderCost;
    if(orderList.order.orderUserid != ''){
        axios.post("/api/orders",orderList).then((res)=>{
        let flag;
        if(res.data.flag)flag = '下单成功';else flag = '下单成功';
        ElMessageBox.alert(flag, '提示', {
          confirmButtonText: 'OK',
        })
      })
    }else{
        ElNotification({
        title: 'Warning',
        message: '-------------请先登入账号-------------',
        type: 'warning',
      })
    }
  };
  </script>
  
  <style scoped>
   .dialog-footer button:first-child {
    margin-right: 10px;
  }
  .OrderListpay{
    background-color:white;
    margin-top: 1rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
  }  
  .OrderListType > el-radio-group{
    margin: 0 auto;
  }
  .OrderForm{
    display: flex;
    flex-wrap: nowrap
  }
  .FormRight{
    margin-left: 2rem;
  }
  </style>
