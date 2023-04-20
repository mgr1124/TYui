<!-- eslint-disable vue/multi-word-component-names -->
  <template>
    <div class="SendFormType">
        <el-input size="large" placeholder="订单号" v-model="searchText" clearable style="width: 20em;"></el-input>
        <el-button size="large" round @click="search">搜索</el-button>
    </div>
    <div class="SendFormType">
        <el-table
        ref="multipleTableRef"
        :data="SendDateList"
        style="width: 100%"
        @selection-change="handleSelectionChange" stripe border 
        >
        <el-table-column type="selection" width="55" />
        <el-table-column label="单号" width="120">
            <template #default="scope">{{ scope.row.orderId }}</template>
        </el-table-column>
        <el-table-column property="name" label="寄" width="120" />
        <el-table-column property="name" label="收" width="120" />
        <el-table-column property="type" label="订单状态" width="120" />
        <el-table-column property="description" label="下单时间" width="240" show-overflow-tooltip />
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

  const store = useStore();
  const SendDateList = ref(null)

  const pagination = {//分页相关模型数据
                currentPage: 1,//当前页码
                pageSize:10,//每页显示的记录数
                total:0,//总记录数
                type: "",
                name: "",
                description: ""
            }
//   const tableData: {}

  const multipleTableRef = ref<InstanceType<typeof ElTable>>()

  const handleClick = () => {
  console.log('click')
}
const handleCurrentChange = (currentPage) => {
    //修改页码值为当前选中的页码值
    pagination.currentPage = currentPage;
    //执行查询
    getAll();
}
const getAll = () => {
        //组织参数，拼接url请求地址
        // console.log(pagination.type);
        let param = "?type="+pagination.type;
        param +="&name="+pagination.name;
        param +="&description="+pagination.description;
        // console.log(param);

        //发送异步请求
        axios.get("/api/books/"+pagination.currentPage+"/"+pagination.pageSize+param).then((res)=>{
            pagination.pageSize = res.data.data.size;
            pagination.currentPage = res.data.data.current;
            pagination.total = res.data.data.total;

            SendDateList.value = res.data.data.records;
            console.log(SendDateList.value);

        });
        // axios.get("/api/orders/"+pagination.currentPage+"/"+pagination.pageSize+store.state.userId).then((res)=>{
        //     pagination.pageSize = res.data.data.size;
        //     pagination.currentPage = res.data.data.current;
        //     pagination.total = res.data.data.total;

        //     SendDateList.value = res.data.data.records;
        //     console.log(SendDateList.value);

        // });
    }
  onMounted(() => {
    console.log("1");
    getAll();
  })
  </script>

<style scoped>
.SendFormType{
  padding: 2rem 1rem;
  border-top: 1px solid #ccc!important; 
}
</style>
  