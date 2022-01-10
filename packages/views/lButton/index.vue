<template>
  <van-button v-bind="$attrs"  v-on="$listeners" type="primary"><slot /></van-button>
</template>
<script>
export default {
  name: "lButton",
  inheritAttrs: false,
};
</script>
<style lang="scss" scoped>
</style>