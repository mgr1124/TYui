<template>
  <div class="page">
    <div class="page-header">
      <h1>books </h1>
    </div>

    <div class="page-container">
      <div class="filter-container">
          <el-input v-model="pagination.name" placeholder="name" class="filterinput" />
          <el-input v-model="pagination.type" placeholder="type" class="filterinput" />
          <el-input v-model="pagination.description" placeholder="des" class="filterinput" />
          <el-button @click="getAll()" class="dalfBut">查询</el-button>
          <el-button type="primary" class="butT"  @click="handleCreate()">新建</el-button>

          <!-- table -->
          <el-table size="small" current-row-key="id" :data="dataList" stripe highlight-current-row>
          <el-table-column type="index" align="center" label="序号"></el-table-column>
          <el-table-column prop="type" label="图书类别" align="center"></el-table-column>
          <el-table-column prop="name" label="图书名称" align="center"></el-table-column>
          <el-table-column prop="description" label="描述" align="center"></el-table-column>
            <el-table-column label="操作" align="center">
              <template #default="scope">
                <el-button type="primary"  @click="handleUpdate(scope.row)">编辑</el-button>
                <el-button type="danger"  @click="handleDelete(scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>

          <!-- 分页 -->
          <div class="pagination-container">
                <el-pagination
                        class="pagiantion"
                        @current-change="handleCurrentChange"
                        :current-page="pagination.currentPage"
                        :page-size="pagination.pageSize"
                        layout="total, prev, pager, next, jumper"
                        :total="pagination.total">
                </el-pagination>
            </div>

            
            <!-- 新增标签弹层 -->
            <div class="add-form" >
                <el-dialog title="新增图书" v-model="dialogFormVisible" width="30%" append-to-body>
                    <el-form ref="dataAddForm" :model="formData" :rules="rules" label-position="right" label-width="100px">
                        <el-row>
                            <el-col :span="12">
                                <el-form-item label="图书类别" prop="type">
                                    <el-input v-model="formData.type"/>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="图书名称" prop="name">
                                    <el-input v-model="formData.name"/>
                                </el-form-item>
                            </el-col>
                        </el-row>

                        <el-row>
                            <el-col :span="24">
                                <el-form-item label="描述">
                                    <el-input v-model="formData.description" type="textarea"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click="cancel()">取消</el-button>
                        <el-button type="primary" @click="handleAdd()">确定</el-button>
                    </div>
                </el-dialog>
            </div>

            <!-- 编辑标签弹层 -->
            <div class="add-form">
                <el-dialog title="编辑检查项" v-model="dialogFormVisible4Edit" width="30%" append-to-body>
                    <el-form ref="dataEditForm" :model="formData" :rules="rules" label-position="right" label-width="100px">
                        <el-row>
                            <el-col :span="12">
                                <el-form-item label="图书类别" prop="type">
                                    <el-input v-model="formData.type"/>
                                </el-form-item>
                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="图书名称" prop="name">
                                    <el-input v-model="formData.name"/>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="24">
                                <el-form-item label="描述">
                                    <el-input v-model="formData.description" type="textarea"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click="cancel()">取消</el-button>
                        <el-button type="primary" @click="handleEdit()">确定</el-button>
                    </div>
                </el-dialog>
            </div>
                

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page',
  data() {
    return {
      dataList: [],//当前页要展示的列表数据
      dialogFormVisible: false,//添加表单是否可见
      dialogFormVisible4Edit:false,//编辑表单是否可见
      formData: {},//表单数据
      rules: {//校验规则
          type: [{ required: true, message: '图书类别为必填项', trigger: 'blur' }],
          name: [{ required: true, message: '图书名称为必填项', trigger: 'blur' }]
      },
      pagination: {//分页相关模型数据
          currentPage: 1,//当前页码
          pageSize:10,//每页显示的记录数
          total:0,//总记录数
          type: "",
          name: "",
          description: ""
      },
     
    };
    
  },
  mounted() {
    this.getAll()
  },
  // created() {
  //     //调用查询全部数据的操作
  //     this.getAll();
  // },
  methods: {
    getAll() {
        this.$axios.defaults.baseURL = 'http://localhost:82';
        //组织参数，拼接url请求地址
        // console.log(this.pagination.type);
        
        var param = "?type="+this.pagination.type;
        param +="&name="+this.pagination.name;
        param +="&description="+this.pagination.description;
        // console.log(param);

        //发送异步请求
        this.$axios.get("/books/"+this.pagination.currentPage+"/"+this.pagination.pageSize+param).then((res)=>{
            this.pagination.pageSize = res.data.data.size;
            this.pagination.currentPage = res.data.data.current;
            this.pagination.total = res.data.data.total;

            this.dataList = res.data.data.records;
        });
    },

    //切换页码
    handleCurrentChange(currentPage) {
        //修改页码值为当前选中的页码值
        this.pagination.currentPage = currentPage;
        //执行查询
        this.getAll();
    },

    //弹出添加窗口
    handleCreate() {
        this.dialogFormVisible = true;
        this.resetForm();
    },

    //重置表单
    resetForm() {
        this.formData = {};
    },

    //添加
    handleAdd () {
        this.$axios.defaults.baseURL = 'http://localhost:82',
        this.$axios.post("/books",this.formData).then((res)=>{
            //判断当前操作是否成功
            if(res.data.flag){
                //1.关闭弹层
                this.dialogFormVisible = false;
                this.$message.success(res.data.msg);
            }else{
                this.$message.error(res.data.msg);
            }
        }).finally(()=>{
            //2.重新加载数据
            this.getAll();
        });
    },

    //取消
    cancel(){
        this.dialogFormVisible = false;
        this.dialogFormVisible4Edit = false;
        this.$message.info("当前操作取消");
    },

    // 删除
    handleDelete(row) {
        this.$axios.defaults.baseURL = 'http://localhost:82',
        // console.log(row);
        this.$confirm("此操作永久删除当前信息，是否继续？","提示",{type:"info"}).then(()=>{
            this.$axios.delete("/books/"+row.id).then((res)=>{
                if(res.data.flag){
                    this.$message.success("删除成功");
                }else{
                    this.$message.error("数据同步失败，自动刷新");
                }
            }).finally(()=>{
                //2.重新加载数据
                this.getAll();
            });
        }).catch(()=>{
            this.$message.info("取消操作");
        });
    },

    //弹出编辑窗口
    handleUpdate(row) {
        this.$axios.defaults.baseURL = 'http://localhost:82',
        this.$axios.get("/books/"+row.id).then((res)=>{
            if(res.data.flag && res.data.data != null ){
                this.dialogFormVisible4Edit = true;
                this.formData = res.data.data;
            }else{
                this.$message.error("数据同步失败，自动刷新");
            }
        }).finally(()=>{
            //2.重新加载数据
            this.getAll();
        });
    },

    //修改
    handleEdit() {
        this.$axios.defaults.baseURL = 'http://localhost:82',
        this.$axios.put("/books",this.formData).then((res)=>{
            //判断当前操作是否成功
            if(res.data.flag){
                //1.关闭弹层
                this.dialogFormVisible4Edit = false;
                this.$message.success("修改成功");
            }else{
                this.$message.error("修改失败");
            }
        }).finally(()=>{
            //2.重新加载数据
            this.getAll();
        });
    },

    //条件查询
  }
}
</script>

<style>
/* .page-header{
  background-color:aquamarine;
} */
@media (min-width: 1024px) {
  .page {
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .page-header {
  /* background-color: aqua; */
  width:100%;
  height:fit-content;

  }
  .page-container {
  /* background-color: rgb(218, 227, 227); */
  width:100%;
  height:fit-content;
  display:block;
  /* flex-direction: column; */
  }
  .filterinput{
    width: 10vh;
  }
}

</style>

