<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="SendFormType">
        <el-input size="large" placeholder="订单号" v-model="searchText" clearable style="width: 20em;"></el-input>
        <el-button size="large" round @click="search">搜索</el-button>
    </div>
    <div class="SendFormType">
        <el-table
        ref="multipleTableRef"
        :data="tableData"
        style="width: 100%"
        @selection-change="handleSelectionChange" stripe border 
        >
        <el-table-column type="selection" width="55" />
        <el-table-column label="单号" width="120">
            <template #default="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column property="name" label="寄" width="120" />
        <el-table-column property="name" label="收" width="120" />
        <el-table-column property="name" label="订单状态" width="120" />
        <el-table-column property="address" label="下单时间" width="240" show-overflow-tooltip />
            <el-table-column fixed="right" label="操作" width="100">
              <template #default>
                <el-button link type="primary" size="small" @click="handleClick">详情</el-button>
                <el-button link type="primary" size="small">Edit</el-button>
              </template>
            </el-table-column>
        </el-table>
        <div style="margin-top: 20px">
        <el-button @click="toggleSelection([tableData[1], tableData[2]])"
            >Toggle selection status of second and third rows</el-button
        >
        <el-button @click="toggleSelection()">Clear selection</el-button>
        </div>
    </div>
    
  </template>
  
  <script lang="ts" setup>
  import { ref,onMounted } from 'vue'
  import { ElTable } from 'element-plus'
  
  interface User {
    date: string
    name: string
    address: string
  }
  
  const multipleTableRef = ref<InstanceType<typeof ElTable>>()
  const multipleSelection = ref<User[]>([])
  const toggleSelection = (rows?: User[]) => {
    if (rows) {
      rows.forEach((row) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        multipleTableRef.value!.toggleRowSelection(row, undefined)
      })
    } else {
      multipleTableRef.value!.clearSelection()
    }
  }
  const handleSelectionChange = (val: User[]) => {
    multipleSelection.value = val
  }
  const handleClick = () => {
  console.log('click')
}
  const tableData: User[] = [
    {
      date: '2016-05-03',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-04',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-01',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-08',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-06',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-07',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
  ]
  onMounted(() => {
    console.log("1");
  })
  </script>

<style scoped>
.SendFormType{
  padding: 2rem 1rem;
  border-top: 1px solid #ccc!important; 
}
</style>
  