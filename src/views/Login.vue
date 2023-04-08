<template>
    <el-button text @click="dialogVisible = true">
      click to open the Dialog
    </el-button>
  
    <el-dialog
      v-model="dialogVisible"
      title="Tips"
      width="30%"
      :before-close="handleClose"
    >
      <span>This is a message</span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="dialogVisible = false">
            Confirm
          </el-button>
        </span>
      </template>
    </el-dialog>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  import { ElMessageBox } from 'element-plus'
  
  const dialogVisible = ref(false)
  
  const handleClose = (done: () => void) => {
    ElMessageBox.confirm('Are you sure to close this dialog?')
      .then(() => {
        done()
      })
      .catch(() => {
        // catch error
      })
  }
  </script>
  <style scoped>
  .dialog-footer button:first-child {
    margin-right: 10px;
  }
  </style>

<!-- <template>
    <div>
      <el-button type="primary" @click="showLoginDialog">Login</el-button>
  
      <el-dialog title="Login" v-model="loginDialogVisible" width="30%">
        <el-form ref="loginForm" :model="loginForm" :rules="loginRules" label-position="left" label-width="80px">
          <el-form-item label="Username" prop="username">
            <el-input v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item label="Password" prop="password">
            <el-input type="password" v-model="loginForm.password"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="loginDialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="submitLoginForm">Submit</el-button>
        </div>
      </el-dialog>
    </div>
  </template>
  
  <script>
  import { ElDialog, ElForm, ElInput, ElFormItem, ElButton } from 'element-plus';
  import { reactive } from 'vue';
  
  export default {
    components: {
      ElDialog,
      ElForm,
      ElInput,
      ElFormItem,
      ElButton,
    },
  
    setup() {
      const state = reactive({
        loginDialogVisible: false,
        loginForm: {
          username: '',
          password: '',
        },
        loginRules: {
          username: [{ required: true, message: 'Username is required', trigger: 'blur' }],
          password: [{ required: true, message: 'Password is required', trigger: 'blur' }],
        },
        qrCodeVisible: false,
        qrCodeUrl: '',
        smsCodeSent: false,
        smsCode: '',
      });
  
      const showLoginDialog = () => {
        state.loginDialogVisible = true;
        console.log(state.loginDialogVisible);
      };
  
      const wechatLogin = () => {
        // TODO: Add WeChat login logic
        state.qrCodeVisible = true;
        state.qrCodeUrl = 'https://example.com/qrcode.png';
      };
  
      const sendSmsCode = () => {
        // TODO: Add SMS code sending logic
        state.smsCodeSent = true;
      };
  
      const submitLoginForm = () => {
        const form = state.$refs.loginForm;
        form.validate(async (valid) => {
          if (valid) {
            // TODO: Add login logic
            state.loginDialogVisible = false;
            form.resetFields();
          }
        });
      };
  
      return {
        ...state,
        showLoginDialog,
        wechatLogin,
        sendSmsCode,
        submitLoginForm,
      };
    },
  };
  </script>
   -->