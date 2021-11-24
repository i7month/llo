<template>
  <div class="home">
    <lButton @click="send"/>
    <l-input></l-input>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    send (e) {
      console.log(e);
    }
  }
}
</script>
