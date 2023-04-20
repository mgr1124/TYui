<template>
    <div >
        <el-form
        ref="form"
        :rules="rules"
        :model="addressConsignee"
        label-width="auto"
        label-position="right"
        >
        <div style="padding: 0.5rem 1rem;">
          <span>收件人</span>
          <el-button text @click="dialogVisible = true">  地址簿  </el-button>
        </div>
        <el-form-item label="收件人名字" prop="addrLinkman">
            <el-input v-model="addressConsignee.addrLinkman"   style="width: 20rem;"/>
        </el-form-item>
        <el-form-item label="收件人电话号" prop="addrTelephone">
            <el-input v-model="addressConsignee.addrTelephone"  style="width: 20rem;"/>
        </el-form-item>
        <el-form-item label="收件人地址"  prop="addrDes">
            <el-input v-model="addressConsignee.addrDes"  style="width: 20rem;"/>
        </el-form-item>
        <el-form-item label="地址标签" prop="addrTag">
            <el-input v-model="addressConsignee.addrTag"  style="width: 20rem;"/>
        </el-form-item>
        </el-form>
    </div>
    
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
import { reactive, ref } from 'vue'
import OrderListpaylinkman from './OrderListpaylinkman.vue'
import { ElMessageBox } from 'element-plus'
import type { FormRules } from 'element-plus'
import { useStore } from 'vuex'

const store = useStore();
const components = {
  OrderListpaylinkman
}
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

const addressConsignee = reactive({
  userId : store.state.userId,
  addrLinkman: '',
  addrTelephone: '',
  addrDes: '',
  addrTag: '',
})

defineExpose({
  addressConsignee,
});
const rules = reactive<FormRules>({
  addrLinkman: [
    { required: true, message: '输入名字', trigger: 'blur' },
  ],
  addrTelephone: [
    { required: true, message: '输入电话号', trigger: 'blur' },
    { pattern: /^-?\d+\.?\d*$/, message: '输入数字' },
    { min: 3, max: 11, message: '长度在3-11', trigger: 'blur' },
  ],
  addrDes: [
    { required: true, message: '输入地址', trigger: 'blur' },
  ],
})

// const submitForm = async (formEl: FormInstance | undefined) => {
//   if (!formEl) return
//   await formEl.validate((valid, fields) => {
//     if (valid) {
//       console.log('submit!')
//     } else {
//       console.log('error submit!', fields)
//     }
//   })
// }
</script>

<style scoped>
 .dialog-footer button:first-child {
  margin-right: 10px;
}
.OrderListpay{
  background-color:white;
  margin-top: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
}  
.OrderListType > el-radio-group{
  margin: 0 auto;
}
.OrderForm{
  display: flex;
  flex-wrap: nowrap
}
.FormLeft{
  /* width: 2rem  ;
  height: 2rem; */
  /* background-color: aqua; */
}
.FormRight{
  width: 2rem  ;
  height: 2rem;
  background-color:antiquewhite;
}
</style>
