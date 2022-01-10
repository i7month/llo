<template>
  <div class="home">
    <lButton @click="send" size="large">我是测试的按钮</lButton>
    <l-input v-model="value" label="文本" placeholder="请输入用户名"></l-input>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      value: "",
    };
  },
  methods: {
    send(e) {
      console.log(e);
    },
  },
};
</script>
