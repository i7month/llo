<template>
  <van-button v-bind="customizedAttrs" :size="size" v-on="$listeners" type="primary"><slot /></van-button>
</template>
<script>
export default {
  name: "lButton",
  inheritAttrs: false,
  props: {
    size: {
      type: String,
      default: "large",
    },
  },
  computed: {
    customizedAttrs() {
      return {
        // 支持传过来的size覆盖默认的size
        ...this.$attrs,
      };
    },
  }
};
</script>
<style lang="scss" scoped>
</style>