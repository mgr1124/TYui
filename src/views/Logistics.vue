<template>
    <div class="logistics">
        <div class="logistics_hander">
            <el-input  placeholder="物流订单查询" v-model="searchText" clearable style="width: 20em;"></el-input>
            <el-button round @click="logisticsSearch" type="primary">搜索</el-button>
        </div>
        <div class="logistics_main">
            <div class="logistics_main_hander">
                <span class="logistics_main_span">物流号： {{logisticsData.logistics.logisticsId}} </span>
                <span class="logistics_main_span">发货时间： {{logisticsData.logistics.deliveryTime}} </span>
                <span class="logistics_main_span">收货时间： {{logisticsData.logistics.orderTime}} </span>
            </div>
            <div class="logistics_main_order">
                <div class="logistics_main_order_span">
                    <span class="logistics_main_span">订单号： {{logisticsData.order.orderId}} </span>
                    <span class="logistics_main_span">重量： {{logisticsData.order.orderWeight}} </span>
                    <span class="logistics_main_span">类型： {{logisticsData.order.orderType}} </span>
                    <span class="logistics_main_span">金额： {{logisticsData.order.orderCost}} </span>
                </div>
                <el-steps class="logistics_main_order_steps" :active="2" finish-status="success">
                    <el-step :title="logisticsData.addressSender.addrDes" />
                    <el-step title=" " />
                    <el-step title=" " />
                    <el-step :title="logisticsData.addressConsignee.addrDes" />
                </el-steps>
                <div class="logistics_main_order_linkman">
                    <div class="linkman">
                        <span >发件人： {{logisticsData.addressSender.addrLinkman}} </span>
                        <span >电话：  {{logisticsData.addressSender.addrTelephone}}</span>
                        <span >地址： {{logisticsData.addressSender.addrDes}} </span>
                    </div>
                        
                    <div class="linkman">
                        <span >收件人： {{logisticsData.addressConsignee.addrLinkman}} </span>
                        <span >电话：  {{logisticsData.addressConsignee.addrTelephone}}</span>
                        <span >地址： {{logisticsData.addressConsignee.addrDes}} </span>
                    </div>
                </div>


        </div>

    </div>

    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import { useRoute } from "vue-router"
const testText = ref("")
const searchText = ref("")
const route = useRoute()
const logisticsData = ref({
        logistics: {
            logisticsId: "",
            orderTime: "",
            deliveryTime: "",
            logisticsAddr: "",
            orderId: "",
            userId: ""
        },
        order: {
            orderId: "",
            orderSender: "",
            orderConsignee: "",
            orderType: "",
            orderWeight: "",
            orderCost: "",
            orderState: ""
        },
        addressSender: {
            addrId: "",
            userId: "",
            addrLinkman: "",
            addrTelephone: "",
            addrDes: "",
            addrTag: ""
        },
        addressConsignee: {
            addrId: "",
            userId: "",
            addrLinkman: "",
            addrTelephone: "",
            addrDes: "",
            addrTag: ""
        }
    })

const logisticsSearch = async () => {
    try {
        const response = await axios.get("/api/logistics/"+searchText.value);
        logisticsData.value = response.data.data;
    } catch (error) {
        console.log(error);
    }
}

const logisticsSearchByMain = async () => {
    try {
        console.log(route.params.logistics_id);
        const response = await axios.get("/api/logistics/"+route.params.logistics_id);
        logisticsData.value = response.data.data;
    } catch (error) {
        console.log(error);
    }
}

onMounted(() => {
    if( route.params.logistics_id != "" ){
        logisticsSearchByMain();
    }
  })
</script>
<!-- 
<script lang="ts">
export default {
  name: 'main',
  data() {
    return {
      logisticsData: {
        logistics: {
            logisticsId: "",
            orderTime: "",
            deliveryTime: "",
            logisticsAddr: "",
            orderId: "",
            userId: ""
        },
        order: {
            orderId: "",
            orderSender: "",
            orderConsignee: "",
            orderType: "",
            orderWeight: "",
            orderCost: "",
            orderState: ""
        },
        addressSender: {
            addrId: "",
            userId: "",
            addrLinkman: "",
            addrDes: "",
            addrTag: ""
        },
        addressConsignee: {
            addrId: "",
            userId: "",
            addrLinkman: "",
            addrDes: "",
            addrTag: ""
        }
    },
      searchText : "",
      testText : "test",
    };
    
  },
    mounted() {
    logisticsSearchByMain()
  },
  methods: {
    logisticsSearch() {
      console.log(searchText);
      $axios.get("/api/logistics/"+searchText).then((res)=>{
          logisticsData = res.data.data;
          console.log(res);
        });

    },
    logisticsSearchByMain() {
      console.log($route.params.logistics_id);
      $axios.get("/api/logistics/"+$route.params.logistics_id).then((res)=>{
          logisticsData = res.data.data;
          console.log(res);
        });

    },
       
    
  }
}
</script> -->

<style scoped>

.logistics_hander{
    padding: 4em 5em ;
}
.logistics_main{
    background-color:white;
    margin: 0 5em 2em 5em;
    display: flex;
    flex-direction: column;
}
.logistics_main_hander{
    display: flex;
    width: 100%;
}
.logistics_main_order{
    display: flex;
    flex-direction: column;
    margin: 0 2em;
}
.logistics_main_order_span{
    display: flex;
    flex-wrap: nowrap
}
.logistics_main_order_steps{
    width:100%;
    padding: 1em 2em;
}
.logistics_main_order_linkman{
    display: flex;
    flex-wrap: nowrap
    
}
.logistics_main_order_linkman .linkman{
    display: flex;
    flex-direction: column;
    padding: 1em 2em;
}
</style>

<style>
.logistics_main_span{
    padding: 2em 3em 1em 2em;
}
</style>
  
