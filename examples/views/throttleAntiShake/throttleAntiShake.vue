<template>
  <div class="about">
    <h1 v-for="item in 100" :key="item" @click="send">This is an about page</h1>
  </div>
</template>
<script>
import _ from "../../../utils";
export default {
  name:'throttleAntiShake',
  mounted() {
    // 监听滚动条滚动
    // window.addEventListener("scroll", util.debounce((props) => {
    //   console.log(props);
    // },1000,scroll));
    window.addEventListener("scroll", this.send);
  },
  destroyed() {
    // 删除滚动条监听
    window.removeEventListener("scroll", this.send);
  },
  methods: {
    send: _.betterDebounce((props) => {
      console.log(props);
    }, 1000),
  },
};
</script>

<style scoped>
.about {
  height: 5000px;
}
</style>
