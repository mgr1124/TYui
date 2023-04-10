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
            <el-menu-item index="/logistics">logistics</el-menu-item>
            <el-menu-item index="/login">login</el-menu-item>
            <el-menu-item index="/test">test</el-menu-item>
            <div class="flex-grow" style="flex-grow: 1;"></div>
            <el-sub-menu index="2">
              <template #title><el-avatar /></template>
              <el-menu-item index="/" @click="dialogVisible = true">登录</el-menu-item>
              <el-menu-item index="/">item two</el-menu-item>
              <el-menu-item index="/">item three</el-menu-item>
            </el-sub-menu>
          </el-menu>
        </div>
      </el-header>

      <el-main>
        <!-- 登录窗口 -->
        <el-dialog v-model="dialogVisible" title="登录" width="50%"  >


          <span>输入信息：</span><br>
          <span>id</span>
          <el-input v-model="input_id" placeholder="Please input id" />
          <span>password</span>
          <el-input v-model="input_password" type="password" placeholder="Please input password" show-password />

          <template #footer>
            <span class="dialog-footer">
              <el-button @click="dialogVisible = false">注册</el-button>
              <el-button type="primary" @click="dialogVisible = false">登录</el-button>
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

export default {
  name: 'main',
  data() {
    return {
      activeIndex : 1,
      dialogVisible : false,
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
    }
  }
}
</script>

<style>
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
</style>



