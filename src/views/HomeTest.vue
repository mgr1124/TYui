<template>
  <div>
    <div>父组件的toCity{{text.inputtext1}}</div>
    <div>父组件的toCity{{text.inputtext2}}</div>
      <div>父组件的toCity{{state.inputtext}}</div>
      <train-city @showCityName="updateCity" :sendData="state.inputtext"></train-city>
  </div>
</template>

<script lang="ts" setup>
import TrainCity from "./HomePayments.vue";
import { reactive} from 'vue';
const components = { TrainCity }
const state = reactive({ inputtext:"北京" })
const text = reactive({
  inputtext1 : '',
  inputtext2 : ''
})

const updateCity = (data) => {
    text.inputtext1 = data.text.inputtext1;//改变了父组件的值
    text.inputtext2 = data.text.inputtext2;//改变了父组件的值
    console.log('toCity:' + state.inputtext)
}

</script>