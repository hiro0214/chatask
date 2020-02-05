<template>
  <div class="user-page">
    <p>ログインユーザー<br>{{ $store.state.user.loginUser }}</p>
    <v-btn @click="logout">ログアウト</v-btn>
  </div>
</template>

<style scoped lang="scss">

.user-page {
  height:100%;
  background:rgb(235, 254, 255);
}
</style>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch('user/signOut')
      this.$router.push('/auth')
    }
  }
}
</script>