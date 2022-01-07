<template>
  <van-field v-bind="customizedAttrs" v-on="$listeners" />
</template>

<script>
export default {
  name: 'lInput',
  computed: {
    customizedAttrs(){
      return {
        ...this.$attrs
      }
    }
  }
};
</script>
<style lang="scss" scoped>
</style>