<template>
  <div class="train-city">
    <!-- <h3>父组件传给子组件的toCity:{{sendData}}</h3>  -->
    <br/><button  @click='select()'>点击此处将‘大连’发射给父组件</button>
    <el-input v-model="inputtext"></el-input>
  </div>
</template>



<script lang="ts" setup>
import { defineEmits , ref } from 'vue'
const inputtext = ref('')
const emits = defineEmits(['showCityName'])

const select = () => {
  emits('showCityName', { inputtext })
}

</script>
