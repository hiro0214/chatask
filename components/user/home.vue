<template>
  <div class="user-home">
    <p class="comp-header">{{ currentUser.name }}のマイページ</p>
  </div>
</template>

<style lang="sass" scoped>

</style>

<script>
export default {
  computed: {
    currentUser () {
      return this.$store.state.user.loginUser
    }
  },

}
</script>