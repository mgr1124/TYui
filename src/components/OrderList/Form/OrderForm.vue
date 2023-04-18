<template>
    <div>
        <el-form
        ref="form"
        :model="sizeForm"
        label-width="auto"
        label-position="right"
        >
        <el-form-item label="寄件人">
            <el-button text @click="dialogVisible = true"> 地址簿 </el-button>
        </el-form-item>
        <el-form-item label="寄件人名字">
            <el-input v-model="sizeForm.name"  style="width: 20rem;"/>
        </el-form-item>
        <el-form-item label="寄件人电话号">
            <el-input v-model="sizeForm.telephone"  style="width: 20rem;"/>
        </el-form-item>
        <el-form-item label="寄件人地址">
            <el-input v-model="sizeForm.des"  style="width: 20rem;"/>
        </el-form-item>
        <el-form-item label="地址标签">
            <el-input v-model="sizeForm.tag"  style="width: 20rem;"/>
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
import OrderListpaylinkman from '@/components/OrderList/Form/OrderListpaylinkman.vue'
import { ElMessageBox } from 'element-plus'

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
// const size = ref('ordertype')
const labelPosition = ref('right')

const sizeForm = ref({
  ordertype:'',
  name: '',
  telephone: '',
  des: '',
  tag: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

function onSubmit() {
  console.log('submit!')
}
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
