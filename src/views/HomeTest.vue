<!-- 父组件 app.vue -->
<template>
  <div class="itxst">
    <!-- 使用 ref  指令关联子组件 -->
    <child ref="childComp"/>
    <button @click="onTry">点击试一试</button>
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";
import child from "./HomePayments.vue";
//定义子组件实例，名称要和上面的ref相同
const childComp = ref(null);
 
//访问demo组件的方法或对象
const onTry = () => {
  //获取到子组件的 title 数据 
  let msg = childComp.value.state.title;
  //调用子组件的 play方法
  childComp.value.play();
};
</script>
