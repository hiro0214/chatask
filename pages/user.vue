<template>
  <div>
    <p>ログインユーザー<br>{{ $store.state.user.loginUser }}</p>
    <v-btn @click="logout">ログアウト</v-btn>
  </div>
</template>

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