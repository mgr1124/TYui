<template>
  <div>
      <div>父组件的toCity{{state.inputtext}}</div>
      <train-city @showCityName="updateCity" :sendData="state.inputtext"></train-city>
  </div>
</template>

<script lang="ts" setup>
import TrainCity from "./HomePayments.vue";
import { reactive} from 'vue';
const components = { TrainCity }
const state = reactive({ inputtext:"北京" }) 
const updateCity = (data) => {
    state.inputtext = data.inputtext;//改变了父组件的值
    console.log('toCity:' + state.inputtext)
}

</script>