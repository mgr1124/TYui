<template>
  <div>
    <button @click="navigateToComponentB">Go to Component B</button>
  </div>
</template>

<script>
export default {
  methods: {
    navigateToComponentB() {
      const id = "参数值" // 参数值，可以根据实际情况设置
      this.$router.push({ name: 'component-b', params: { id }})
    }
  }
}
</script>
