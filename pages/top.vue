<template>
  <section>
    <p>top</p>
    <ul>
      <li v-for="task in $store.state.task.tasks" :key="task.id">{{ task.title }}</li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>

</style>

<script>
export default {
  created () {
    this.$store.dispatch('task/init')
  }
}
</script>