<template>
  <div class="common-layout">
    <el-container>

      <el-header>
        <div class="home"> 
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false"
          @select="handleSelect" router >
            <el-menu-item index="/">首页</el-menu-item>
            <el-menu-item index="/orders">orders</el-menu-item>
            <el-menu-item index="/payments">payments</el-menu-item>
            <el-menu-item index="/logistics">物流订单</el-menu-item>
            <el-menu-item index="/login">login</el-menu-item>
            <el-menu-item index="/test">test</el-menu-item>
            <div class="flex-grow" style="flex-grow: 1;"></div>
            <el-sub-menu index="2">
              <template #title><el-avatar />{{ this.user.userName }}</template>
              <el-menu-item index="/" @click="dialogVisible = true">登录</el-menu-item>
              <el-menu-item index="/">item two</el-menu-item>
              <el-menu-item index="/">item three</el-menu-item>
            </el-sub-menu>
          </el-menu>
        </div>
      </el-header>

      <el-main>
        <!-- 登录窗口 -->
        <el-dialog class="main_dia" v-model="dialogVisible" title="登录" width="35%"  >
          <el-input v-model="input_id" placeholder="输入账号" />
          <el-input v-model="input_password" type="password" placeholder="输入密码" show-password />
          <el-button type="primary" @click="main_dia_login">登录</el-button>
          <template #footer>
            <span class="dialog-footer">
              <el-button @click="dialogVisible = false">注册</el-button>
            </span>
          </template>
        </el-dialog>
        <RouterView />
      </el-main>

      <el-footer>
        Footer
      </el-footer>

    </el-container>
  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import { ElMessageBox } from 'element-plus'
import { ref } from 'vue';

export default {
  name: 'main',
  data() {
    return {
      user:[],
      activeIndex : 1,
      dialogVisible : ref(false),
      input_id : "",
      input_password : "",
    };
    
  },
  methods: {
    handleSelect() {
      console.log("handleSelect");
    },
    handleClose() {
      ElMessageBox.confirm('Are you sure to close this dialog?').then(() => {
        done()
      })
      .catch(() => {
        // catch error
      })
    },
    main_dia_login() {
      console.log("main_dia_login");
      this.dialogVisible = ref(false);
      this.$axios.get("/api/users/"+this.input_id+"/"+this.input_password).then((res)=>{
          this.user = res.data.data;
          console.log(res);
        });
    },
    // main_dia_login() {
    //     param = "?id="+this.input_id;
    //     param +="&password="+this.input_password;

    //     axios.get("/api/users/"+param).then((res)=>{
    //       this.user = res.data.data;
    //     });
    // },
       
    
  }
}
</script>

<style>
.el-main{
  background: #F8F8F8
}
.common-layout .el-menu--horizontal{
  border-bottom: 0px !important;
}
.el-icon{
  margin-right: 0px !important;
}
.el-footer{
  background-color: black;
}
.common-layout .el-main{
  padding: 0px !important;
}
.main_dia .el-input {
  padding: 1rem !important;
}
.main_dia .el-button {
  margin: 1rem ;
  width: calc(100% - 2rem);
}
</style>



