<template>
    <div class="home"> 
        <el-menu default-active="1" class="el-menu-demo" mode="horizontal" :ellipsis=ellipsisVisible
        @select="handleSelect" router >
        <el-menu-item index="/">首页</el-menu-item>
        <el-sub-menu index="2-4">
            <template #title>物流服务</template>
            <el-menu-item index="/server/rush">即时配</el-menu-item>
            <el-menu-item index="/server/sameday">快递服务</el-menu-item>
            <el-menu-item index="/server/heavypackage">快运服务</el-menu-item>
            <el-menu-item index="/server/intstandard">跨境服务</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="/orders/OrderListPay">邮寄下单</el-menu-item>
        <el-menu-item index="/logistics/:logistics_id">物流运单</el-menu-item>
        <!-- <el-menu-item index="/login">login</el-menu-item> -->
        <!-- <el-menu-item index="/payments">payments</el-menu-item>
        <el-menu-item index="/test">test</el-menu-item> -->
        <div class="flex-grow" style="flex-grow: 1;"></div>
        <el-sub-menu index="2">
            <template #title><el-avatar :icon="UserFilled"  /> {{user.userName}} </template>
            <el-menu-item index="/" @click="dialogVisible = true">登录</el-menu-item>
            <el-menu-item index="/">个人信息</el-menu-item>
            <el-menu-item index="/"  @click="PushOut">退出</el-menu-item>
        </el-sub-menu>
        </el-menu>
        
  </div>

    <el-dialog class="main_dia" v-model="dialogVisible" title="登录" width="35%"  >
        <el-input v-model="input_id" placeholder="输入账号" />
        <el-input v-model="input_password" type="password" placeholder="输入密码" show-password />
        <el-button type="primary" @click="UserLogin">登录</el-button>
        <template #footer>
        <span class="dialog-footer">
            <el-button @click="dialogVisible = false">注册</el-button>
        </span>
        </template>
    </el-dialog>
</template>

<script lang="ts" setup>
  import { ref,onMounted } from 'vue';
  import axios from 'axios';
  import { UserFilled,ArrowDown,Check,  CircleCheck,  CirclePlus,  CirclePlusFilled,  Plus, } from '@element-plus/icons-vue'
  import { useStore } from 'vuex'
  import { ElNotification  } from 'element-plus'
  const store = useStore();
  const user = ref({
    userName:"登录",
    userId:""
  })
  const dialogVisible = ref(false)
  const input_id = ref('')
  const input_password = ref('')
  const ellipsisVisible = ref(false)
  const handleSelect = () => {
    // console.log("handleSelect");
  }
  const UserLogin = () =>{
    dialogVisible.value = false;
    axios.get("http://123.249.101.68:8080/users/"+input_id.value+"/"+input_password.value).then((res)=>{
      // console.log(res.data);
      if(res.data.flag){
        user.value = res.data.data;
        store.state.userId = user.value.userId;
        store.state.userName = user.value.userName;
      }else{
        ElNotification({
        title: 'Warning',
        message: '-------------登入失败-------------',
        type: 'warning',
      })
      }
    }).catch(err => {
      // console.log(err);
    })
  }
  const PushOut = () =>{
    user.value = { userName:"登录", userId:"" }
    store.state.userId = "";
    store.state.userName = "";
  }
  const watchwidth = () =>{
    if(window.screen.width < 500){
      ellipsisVisible.value = true
      console.log(window.screen.width); 
    }
  }
  onMounted(() => {
      watchwidth();
  })

</script>

<style scoped>
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
@media (orientation:portrait)  {
  .home{
    width: auto;
  }
  .el-menu-demo{
    width: 10rem;
  }
}

</style>
