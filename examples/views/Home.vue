<template>
  <div class="home">
    <div class="nav">
      <button @click="$router.push('/button')">button</button>
      <br>
      <button @click="$router.push('/input')">input</button>
      <br>
      <button @click="$router.push('/throttleAntiShake')">节流防抖</button>
      <br>
      <button @click="$router.push('/waterfall')">瀑布流</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>
<style lang="scss" scoped>
.nav{
  display: flex;
  flex-wrap: wrap;
}
</style>
