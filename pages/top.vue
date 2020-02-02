<template>
  <section>
    <taskComp />
    <chatComp />
  </section>
</template>

<style lang="scss" scoped>

section {
  height:100%;
  padding:30px;
  display:flex;
  background:rgb(235, 254, 255);
}

</style>

<script>
import taskComp from '~/components/task/index.vue'
import chatComp from '~/components/chat/index.vue'

export default {
  components: {
    taskComp,
    chatComp
  },
  created () {
    this.$store.dispatch('task/init')
  }
}
</script>