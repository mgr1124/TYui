<template>
  <div class="train-city">
    <!-- <h3>父组件传给子组件的toCity:{{sendData}}</h3>  -->
    <br/><button @click='select(`大连`)'>点击此处将‘大连’发射给父组件</button>
  </div>
</template>
 

<script lang="ts" setup>
import { defineEmits } from 'vue'

const emits = defineEmits(['showCityName'])

const select = (cityname: string) => {
  emits('showCityName', { cityname })
}
</script>
