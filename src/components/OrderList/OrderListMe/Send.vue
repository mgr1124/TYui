<!-- eslint-disable vue/multi-word-component-names -->
  <template>
    <div class="SendFormType">
        <el-input size="large" placeholder="订单号" v-model="pagination.orderId" clearable style="width: 20em;"></el-input>
        <el-button size="large" round @click="getAll">搜索</el-button>
        <div  style="height: 1rem;"/>
        <el-radio-group fill="#DC4C3F" label="orderType" v-model="pagination.orderType" @change="getAll">
          <el-radio-button label="全部">全部</el-radio-button>
          <el-radio-button label="待揽件">待揽件</el-radio-button>
          <el-radio-button label="运输中">运输中</el-radio-button>
          <el-radio-button label="已签收">已签收</el-radio-button>
          <el-radio-button label="未成交">未成交</el-radio-button>
        </el-radio-group>
    </div>
    <div class="SendFormType">
        <el-table
        ref="multipleTableRef"
        :data="SendDateList"
        style="width: 100%" stripe border 
        >
        <el-table-column type="selection" width="55" />
        <el-table-column label="单号" width="120">
            <template #default="scope">{{ scope.row.order_id }}</template>
        </el-table-column>
        <el-table-column property="senderaddr_linkman" label="寄" width="120" />
        <el-table-column property="consigneeaddr_linkman" label="收" width="120" />
        <el-table-column property="order_type" label="订单状态" width="120" />
        <el-table-column property="pay_time" label="下单时间" width="240" show-overflow-tooltip />
            <el-table-column fixed="right" label="操作" width="100">
              <template #default>
                <el-button link type="primary" size="small" @click="handleClick">详情</el-button>
                <el-button link type="primary" size="small">Edit</el-button>
              </template>
            </el-table-column>
        </el-table>
        <div style="margin-top: 20px">
        <!-- <el-button @click="toggleSelection()">Clear selection</el-button> -->
        </div>
        <div class="pagination-container">
            <el-pagination class="pagiantion" @current-change="handleCurrentChange"
                :current-page="pagination.currentPage" :page-size="pagination.pageSize"
                 layout="total, prev, pager, next, jumper" :total="pagination.total">
            </el-pagination>
        </div>
    </div>
    
  </template>
  
  <script lang="ts" setup>
  import { ref,onMounted } from 'vue'
  import { ElTable } from 'element-plus'
  import axios from 'axios';
  import { useStore } from 'vuex'

  const input = ref('')
  const store = useStore();
  const SendDateList = ref(null)
  const pagination = ref({//分页相关模型数据
                currentPage: 1,//当前页码
                pageSize:5,//每页显示的记录数
                total:0,//总记录数
                orderId: "",
                orderType: "全部",
                name: "",
                description: ""
            })

  const multipleTableRef = ref<InstanceType<typeof ElTable>>()
  const handleClick = () => {
  console.log('click')
}
const handleCurrentChange = (currentPage) => {
    pagination.value.currentPage = currentPage;
    //执行查询
    getAll();
}
const getAll = () => {
        let param = "?orderUserid="+store.state.userId;
        param +="&orderId="+pagination.value.orderId;
        param +="&orderType="+pagination.value.orderType;
        console.log("pagination.value.orderType"+pagination.value.orderType)
        axios.get("/api/orders/"+pagination.value.currentPage+"/"+pagination.value.pageSize+param).then((res)=>{
            SendDateList.value = res.data.data.records;
            pagination.value.pageSize = res.data.data.size;
            pagination.value.currentPage = res.data.data.current;
            pagination.value.total = res.data.data.total;
            // console.log(res.data.data.records);
        });
    }
  onMounted(() => {
    getAll();
  })
  </script>

<style scoped>
.SendFormType{
  padding: 2rem 1rem;
  border-top: 1px solid #ccc!important; 
}
</style>
  