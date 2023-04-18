<template>
  <div class="train-city">
    <!-- <h3>父组件传给子组件的toCity:{{sendData}}</h3>  -->
    <!-- <br/><button  @click='select()'>点击此处将‘大连’发射给父组件</button> -->
    <el-input v-model="text.inputtext1"></el-input>
    <el-input v-model="text.inputtext2"></el-input>
    
  </div>
</template>



<script lang="ts" setup>
import { defineEmits , ref , watch ,reactive} from 'vue'
const inputtext1 = ref('')
const inputtext2 = ref('')
const text = reactive({
  inputtext1 : '',
  inputtext2 : ''
})
const emits = defineEmits(['showCityName'])

// const select = () => {
//   emits('showCityName', { inputtext1 })
// }
watch(text, (newinputtext1,  oldinputtext1) => {
	console.log('watch 已触发: name', newinputtext1)
	console.log('watch 已触发: nums', oldinputtext1)
  emits('showCityName', { text })
})
</script>
