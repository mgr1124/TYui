<template>
  <div class="OrderListpay">
    <div class="OrderListType">
      <el-radio-group fill="#DC4C3F" v-model="sizeForm.ordertype" label="OrderListType" >
        <el-radio-button label="快递">寄快递</el-radio-button>
        <el-radio-button label="重物">寄重物</el-radio-button>
        <el-radio-button label="生鲜">寄生鲜</el-radio-button>
      </el-radio-group>
    </div>
    <br />
    <div class="OrderForm">
      <div class="FormLeft">
        <OrderForm ref="OrderForm1" />
      </div>
      <div class="FormRight">
        <OrderForm ref="OrderForm2"/>
      </div>
    </div>
    <!-- <el-form-item label="Activity time">
        <el-col :span="11">
          <el-date-picker
            v-model="sizeForm.date1"
            type="date"
            label="Pick a date"
            placeholder="Pick a date"
            style="width: 100%"
          />
        </el-col>
        <el-col class="text-center" :span="1" style="margin: 0 0.5rem">-</el-col>
        <el-col :span="11">
          <el-time-picker
            v-model="sizeForm.date2"
            label="Pick a time"
            placeholder="Pick a time"
            style="width: 100%"
          />
        </el-col>
      </el-form-item> -->
      <!-- <el-form-item label="Activity type">
        <el-checkbox-group v-model="sizeForm.type">
          <el-checkbox-button label="Online activities" name="type" />
          <el-checkbox-button label="Promotion activities" name="type" />
        </el-checkbox-group>
      </el-form-item> -->
      <!-- <el-form-item label="Resources">
        <el-radio-group v-model="sizeForm.resource">
          <el-radio border label="Sponsor" />
          <el-radio border label="Venue" />
        </el-radio-group>
      </el-form-item> -->
    
  </div>
  </template>
  
  <script lang="ts" setup>
  import { reactive, ref ,computed } from 'vue'
  import OrderListpaylinkman from '@/components/OrderList/Form/OrderListpaylinkman.vue'
  import OrderForm from '@/components/OrderList/Form/OrderForm.vue'
  
  const components = {
    OrderListpaylinkman,
    OrderForm
  }
  
  const sizeForm ={}
  
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
    margin-left: 2rem;
    /* width: 2rem  ;
    height: 2rem;
    background-color:antiquewhite; */
  }
  </style>
