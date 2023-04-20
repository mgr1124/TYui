<template>
    <div class="OrderListpay">
        <el-tabs
            v-model="activeName"
            type="card"
            class="demo-tabs"
            @tab-click="handleClick"
        >
            <el-tab-pane label="寄出快递" name="first"><Send /></el-tab-pane>
            <el-tab-pane label="收到快递" name="second"><Receive /></el-tab-pane>
        </el-tabs>

      <div class="FromSendType">
        <OrderFormType ref="FormConType" />     
      </div>
    </div>
    </template>
    
    <script lang="ts" setup>
    import { reactive, ref ,computed } from 'vue'
    import { useStore } from 'vuex'
    import type { TabsPaneContext } from 'element-plus'
    import Send from './OrderListMe/Send.vue'
    import Receive from './OrderListMe/Receive.vue'


    const activeName = ref('first')
    const store = useStore();
    const FormConType = ref(null);
    const components = {
        Send,
        Receive
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
    const handleClick = (tab: TabsPaneContext, event: Event) => {
        console.log(tab, event)
    }
    const Submit = () => {
        console.log(11);
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
    </style>
