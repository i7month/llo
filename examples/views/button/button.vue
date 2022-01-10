<template>
  <div class="button">
    <lButton @click="send" size="large">我是测试的按钮</lButton>
  </div>
</template>

<script>
export default {
  methods: {
    send(e) {
      console.log(e);
    },
  },
};
</script>
<style lang="scss" scoped>
.button{}
</style>