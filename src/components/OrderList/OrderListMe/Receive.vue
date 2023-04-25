<!-- eslint-disable vue/multi-word-component-names -->
<template>
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
      <div style="margin-top: 1.25rem">
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
import { ElTable,ElNotification} from 'element-plus'
import axios from 'axios';
import { useStore } from 'vuex'

const store = useStore();
const SendDateList = ref(null)

const pagination = {//分页相关模型数据
              currentPage: 1,//当前页码
              pageSize:5,//每页显示的记录数
              total:0,//总记录数
              type: "",
              name: "",
              description: ""
          }

const multipleTableRef = ref<InstanceType<typeof ElTable>>()

const handleClick = () => {
// console.log('click')
}
const handleCurrentChange = (currentPage) => {
  pagination.currentPage = currentPage;
  getAll();
}
const getAll = () => {
    if(store.state.userName === ""){
      ElNotification({
          title: 'Warning',
          message: '-------------请先登入-------------',
          type: 'warning',
        })
    }else{
      let param = "?consigneeaddrLinkman="+store.state.userName;
          axios.get("/api/orders/"+pagination.currentPage+"/"+pagination.pageSize+param).then((res)=>{
            SendDateList.value = res.data.data.records;
              pagination.pageSize = res.data.data.size;
              pagination.currentPage = res.data.data.current;
              pagination.total = res.data.data.total;
          });
    }
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
