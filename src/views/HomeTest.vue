<template>
  <div>
      <div>父组件的toCity{{state.toCity}}</div>
      <train-city @showCityName="updateCity" :sendData="state.toCity"></train-city>
  </div>
</template>

<script lang="ts" setup>
import TrainCity from "./HomePayments.vue";
import { reactive} from 'vue';
const components = { TrainCity }
const state = reactive({ toCity:"北京" }) 
const updateCity = (data) => {
    state.toCity = data.cityname;//改变了父组件的值
    console.log('toCity:' + state.toCity)
}
</script>