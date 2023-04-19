<!--子组件名称  child.vue -->
<template>
  <div class="itxst">
    {{ state.title }}
  </div>
</template>
<script setup>
import { ref, reactive } from "vue";
//定义一个变量
const state = reactive({
  title: "www.itxst.com",
});
//定义一个方法
const play = () => {
  state.title = "你调用了子组件的方法";
};
 
//暴露state和play方法
defineExpose({
  state,
  play,
});
</script>
