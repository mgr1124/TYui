<template>

</template>
<!-- 
<template>
    <div>
      <el-button type="primary" @click="showLoginDialog">Login</el-button>
  
      <el-dialog title="Login" :visible.sync="loginDialogVisible" width="30%">
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
  
      <el-dialog title="Scan QR Code" :visible.sync="qrCodeVisible" width="50%">
        <img :src="qrCodeUrl" alt="QR Code" width="100%">
        <div v-if="!smsCodeSent">
          <p>Scan the QR code with your WeChat app to log in.</p>
          <el-button type="primary" @click="wechatLogin">Resend QR Code</el-button>
        </div>
        <div v-else>
          <p>We have sent a SMS verification code to your mobile phone.</p>
          <el-form :model="smsForm" label-position="left" label-width="80px">
            <el-form-item label="SMS Verification Code" prop="smsCode">
              <el-input v-model="smsForm.smsCode"></el-input>
            </el-form-item>
          </el-form>
          <el-button type="primary" @click="submitSmsCode">Submit</el-button>
        </div>
      </el-dialog>
    </div>
  </template>
  
  <script lang="ts">
  import { ElDialog, ElForm, ElInput, ElFormItem, ElButton } from 'element-plus';
  import { reactive, ref } from 'vue';
  
  interface LoginForm {
    username: string;
    password: string;
  }
  
  interface SmsForm {
    smsCode: string;
  }
  
  export default {
    components: {
      ElDialog,
      ElForm,
      ElInput,
      ElFormItem,
      ElButton,
    },
  
    setup() {
      const loginDialogVisible = ref(false);
      const loginForm = reactive<LoginForm>({
        username: '',
        password: '',
      });
      const loginRules = {
        username: [{ required: true, message: 'Username is required', trigger: 'blur' }],
        password: [{ required: true, message: 'Password is required', trigger: 'blur' }],
      };
      const qrCodeVisible = ref(false);
      const qrCodeUrl = ref('');
      const smsCodeSent = ref(false);
      const smsForm = reactive<SmsForm>({
        smsCode: '',
      });
  
      const showLoginDialog = () => {
        loginDialogVisible.value = true;
      };
  
      const wechatLogin = () => {
        // TODO: Add WeChat login logic
        qrCodeVisible.value = true;
        qrCodeUrl.value = 'https://example.com/qrcode.png';
      };
  
      const sendSmsCode = () => {
        // TODO: Add SMS code sending logic
        smsCodeSent.value = true;
      };
  
      const submitLoginForm = () =>
        (async () => {
        try {
        await (this.$refs.loginForm as any).validate();
        // TODO: Add login API call logic
        loginDialogVisible.value = false;
        } catch (error) {
        console.error(error);
        }
    })();

    const submitSmsCode = () => {
        (async () => {
            try {
            // TODO: Add SMS verification API call logic
            qrCodeVisible.value = false;
            } catch (error) {
            console.error(error);
            }
        })();
    };

    return {
    loginDialogVisible,
    loginForm,
    loginRules,
    qrCodeVisible,
    qrCodeUrl,
    smsCodeSent,
    smsForm,
    showLoginDialog,
    wechatLogin,
    sendSmsCode,
    submitLoginForm,
    submitSmsCode,
    };
},
};
</script> -->