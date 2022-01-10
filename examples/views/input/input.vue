<template>
  <div class="input">
    <l-input v-model="value" label="文本" placeholder="请输入用户名"></l-input>
  </div>
</template>

<script>
export default {
  data(){
    return {
      value: "",
    }
  }
};
</script>
<style lang="scss" scoped>
.input{}
</style>