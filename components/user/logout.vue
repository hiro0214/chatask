<template>
  <div class="user-logout">
    <p>ログアウトしてもよろしいですか</p>
    <v-btn @click="logout">ログアウト</v-btn>
  </div>
</template>

<script>
export default {
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