<template>
  <div class="index-page">
    <h1>Chatask</h1>
    <nuxt-link to="/auth">
      <v-btn>ENTER</v-btn>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  layout: 'index'
}
</script>

<style lang="scss" scoped>

.index-page {
  height:70%;
  left:45%;
  text-align: center;
  position:absolute;
  bottom:0;
  a {
    text-decoration: none;
  }
}
</style>