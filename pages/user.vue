<template>
  <div class="user-page">
    <p>ログインユーザー<br>{{ currentUser }}</p>
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
  computed: {
    currentUser () {
      return this.$store.state.user.loginUser
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('user/signOut')
      this.$store.dispatch('group/signOut')
      this.$store.dispatch('chat/signOut')
      this.$router.push('/auth')
    }
  }
}
</script>