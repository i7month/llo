<template>
  <button class="l-button" @click="$emit('click',$event)">我是测试的按钮组件</button>
</template>

<script>
export default {
  name: "lButton",
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  created() {},
  mounted() {},
  computed: {},
  methods: {
  },
};
</script>
<style lang="scss" scoped>
.l-button {
  background: green;
}
</style>