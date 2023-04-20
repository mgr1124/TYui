<template>
    <div class="home"> 
        <el-menu default-active="1" class="el-menu-demo" mode="horizontal" :ellipsis="false"
        @select="handleSelect" router >
        <el-menu-item index="/">首页</el-menu-item>
        <el-sub-menu index="2-4">
            <template #title>物流服务</template>
            <el-menu-item index="2-4-1">仓配服务</el-menu-item>
            <el-menu-item index="2-4-2">快递快运服务</el-menu-item>
            <el-menu-item index="2-4-3">大件服务</el-menu-item>
            <el-menu-item index="2-4-3">跨境服务</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="/orders">邮寄下单</el-menu-item>
        <el-menu-item index="/logistics/:logistics_id">物流订单</el-menu-item>
        <el-menu-item index="/login">login</el-menu-item>
        <el-menu-item index="/payments">payments</el-menu-item>
        <el-menu-item index="/test">test</el-menu-item>
        <div class="flex-grow" style="flex-grow: 1;"></div>
        <el-sub-menu index="2">
            <template #title><el-avatar :icon="UserFilled" /> {{user.userName}} </template>
            <el-menu-item index="/" @click="dialogVisible = true">登录</el-menu-item>
            <el-menu-item index="/">item two</el-menu-item>
            <el-menu-item index="/">item three</el-menu-item>
        </el-sub-menu>
        </el-menu>
    </div>

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
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import axios from 'axios';
  import { UserFilled } from '@element-plus/icons-vue'
  import { useStore } from 'vuex'
  const store = useStore();
  const user = ref({
    userName:"",
    userId:""
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
      store.state.userId = user.value.userId;
      // console.log(res);
      // console.log("store.state.userId:  "+store.state.userId);
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
