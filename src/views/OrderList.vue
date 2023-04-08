<template>
  <div>
    <h1>订单列表</h1>
    <el-table :data="orders"
        style="width: 100%; margin-top: 20px;"
        :header-cell-style="{background: '#f5f7fa', color: '#303133'}"
        stripe
        border
        fit
        highlight-current-row
        @row-click="handleEdit"
        table-class-name="orders-table">
      <el-table-column prop="orderId" label="订单号"></el-table-column>
      <el-table-column prop="expressCompany" label="快递公司"></el-table-column>
      <el-table-column prop="receiverName" label="收件人"></el-table-column>
      <el-table-column prop="receiverPhone" label="收件人电话"></el-table-column>
      <el-table-column prop="receiverAddress" label="收件人地址"></el-table-column>
      <el-table-column prop="orderTime" label="下单时间"></el-table-column>
      <el-table-column prop="deliveryTime" label="发货时间"></el-table-column>
      <el-table-column prop="status" label="状态"></el-table-column>
      <el-table-column label="操作">
        <template #default="{ row }">
          <el-button type="text" size="small" @click="handleEdit(row)">编辑</el-button>
          <el-button type="text" size="small" @click="handleDelete(row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog :visible.sync="dialogVisible" title="编辑订单">
      <el-form :model="currentOrder" label-position="left" label-width="100px">
        <el-form-item label="订单号">
          <el-input v-model="currentOrder.orderId"></el-input>
        </el-form-item>
        <el-form-item label="快递公司">
          <el-input v-model="currentOrder.expressCompany"></el-input>
        </el-form-item>
        <el-form-item label="收件人">
          <el-input v-model="currentOrder.receiverName"></el-input>
        </el-form-item>
        <el-form-item label="收件人电话">
          <el-input v-model="currentOrder.receiverPhone"></el-input>
        </el-form-item>
        <el-form-item label="收件人地址">
          <el-input v-model="currentOrder.receiverAddress"></el-input>
        </el-form-item>
        <el-form-item label="下单时间">
          <el-date-picker v-model="currentOrder.orderTime" type="datetime"></el-date-picker>
        </el-form-item>
        <el-form-item label="发货时间">
          <el-date-picker v-model="currentOrder.deliveryTime" type="datetime"></el-date-picker>
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="currentOrder.status">
            <el-option label="待发货" value="待发货"></el-option>
            <el-option label="已发货" value="已发货"></el-option>
            <el-option label="已完成" value="已完成"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleSave">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";

export default {
  name: "Orders",
  setup() {
    const orders = ref([]);
    const currentOrder = ref({});
    const dialogVisible = ref(false);

const fetchData = async () => {
  try {
    const response = await axios.get("/api/orders");
    orders.value = response.data;
  } catch (error) {
    console.log(error);
  }
};

const handleEdit = (row) => {
  currentOrder.value = { ...row };
  dialogVisible.value = true;
};

const handleSave = async () => {
  try {
    const response = await axios.put(
      `/api/orders/${currentOrder.value.orderId}`,
      currentOrder.value
    );
    dialogVisible.value = false;
    fetchData();
  } catch (error) {
    console.log(error);
  }
};

const handleDelete = async (row) => {
  try {
    const response = await axios.delete(`/api/orders/${row.orderId}`);
    fetchData();
  } catch (error) {
    console.log(error);
  }
};

fetchData();

return {
  orders,
  currentOrder,
  dialogVisible,
  handleEdit,
  handleSave,
  handleDelete,
};
},
};
</script>


<style>

.orders-table {
  font-size: 14px;
  color: #606266;
}

.orders-table td {
  padding-top: 15px;
  padding-bottom: 15px;
}

.orders-table th {
  font-weight: bold;
}
</style>