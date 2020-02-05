<template>
  <div class="chat-container">
    <chatHeader />

    <chatMain />

    <chatForm />
  </div>
</template>


<style lang="scss" scoped>

.chat {
  &-container {
    width:40%;
    height:100%;
    margin-left:20px;
  }
}

</style>

<script>
import chatHeader from '~/components/chat/header.vue'
import chatMain from '~/components/chat/main.vue'
import chatForm from '~/components/chat/form.vue'

export default {
  components: {
    chatHeader,
    chatMain,
    chatForm
  },
  mounted () {
    this.$store.dispatch('chat/initMessage')
  }
}
</script>