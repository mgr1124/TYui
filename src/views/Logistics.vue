<template>
    <div class="logistics">
        <div class="logistics_hander">
            <el-input  placeholder="物流订单查询" v-model="searchText" clearable style="width: 20em;"></el-input>
            <el-button round @click="logisticsSearch" type="primary">搜索</el-button>
        </div>
        <div class="logistics_main">
            <div class="logistics_main_hander">
                <span class="logistics_main_span">物流号： {{this.logisticsData.logistics.logisticsId}} </span>
                <span class="logistics_main_span">发货时间： {{this.logisticsData.logistics.deliveryTime}} </span>
                <span class="logistics_main_span">收货时间： {{this.logisticsData.logistics.orderTime}} </span>
            </div>
            <div class="logistics_main_order">
                <div class="logistics_main_order_span">
                    <span class="logistics_main_span">订单号： {{this.logisticsData.order.orderId}} </span>
                    <span class="logistics_main_span">重量： {{this.logisticsData.order.orderWeight}} </span>
                    <span class="logistics_main_span">类型： {{this.logisticsData.order.orderType}} </span>
                    <span class="logistics_main_span">金额： {{this.logisticsData.order.orderCost}} </span>
                </div>
                <el-steps class="logistics_main_order_steps" :active="2" finish-status="success">
                    <el-step title="北京" />
                    <el-step title=" " />
                    <el-step title=" " />
                    <el-step title="大连" />
                </el-steps>
                <div class="logistics_main_order_linkman">
                    <div class="linkman">
                        <span >发件人： {{this.logisticsData.addressSender.addrLinkman}} </span>
                        <span >电话：  </span>
                        <span >地址： {{this.logisticsData.addressSender.addrDes}} </span>
                    </div>
                        
                    <div class="linkman">
                        <span >收件人： {{this.logisticsData.addressConsignee.addrLinkman}} </span>
                        <span >电话：  </span>
                        <span >地址： {{this.logisticsData.addressConsignee.addrDes}} </span>
                    </div>
                </div>


        </div>

    </div>

    </div>
</template>


<script>
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
    };
    
  },
  methods: {
    logisticsSearch() {
      console.log(this.searchText);
      this.$axios.get("/api/logistics/"+this.searchText).then((res)=>{
          this.logisticsData = res.data.data;
          console.log(res);
        });

    },
       
    
  }
}
</script>

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
  
