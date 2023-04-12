<template>
  <div class="common-layout">
    <el-container>

      <el-header>
        <div class="home"> 
          <el-menu default-active="1" class="el-menu-demo" mode="horizontal" :ellipsis="false"
          @select="handleSelect" router >
            <el-menu-item index="/">首页</el-menu-item>
            <el-menu-item index="/orders">邮寄下单</el-menu-item>
            <el-menu-item index="/payments">payments</el-menu-item>
            <el-menu-item index="/logistics/:logistics_id">物流订单</el-menu-item>
            <el-menu-item index="/login">login</el-menu-item>
            <el-menu-item index="/test">test</el-menu-item>
            <el-menu-item index="/component-a">component-a</el-menu-item>
            <el-menu-item index="/component-b/:id">component-b/:id</el-menu-item>
            <div class="flex-grow" style="flex-grow: 1;"></div>
            <el-sub-menu index="2">
              <template #title><el-avatar :icon="UserFilled" /> {{user.userName}} </template>
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

<script lang="ts" setup>
  import { RouterLink, RouterView } from 'vue-router'
  import { ref } from 'vue';
  import axios from 'axios';
  import { UserFilled } from '@element-plus/icons-vue'
  const user = ref({
    userName:""
  })
  const dialogVisible = ref(false)
  const input_id = ref('')
  const input_password = ref('')
  const handleSelect = () => {
    console.log("handleSelect");
  }
  const main_dia_login = () =>{
    dialogVisible.value = false;
    axios.get("/api/users/"+input_id.value+"/"+input_password.value).then((res)=>{
      user.value = res.data.data;
    })
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



