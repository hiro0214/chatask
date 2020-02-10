<template>
  <div class="task-container">
    <taskMain  v-if="currentGroup.group_id" />
  </div>
</template>

<style lang="scss" scoped>

.task-container {
  width:60%;
  height:100%;
  padding-right:20px;
  border-right:solid 1px;
}

</style>

<script>
import taskMain from '~/components/task/main.vue'

export default {
  components: {
    taskMain
  },
  computed: {
    currentGroup () {
      return this.$store.state.group.currentGroup
    }
  },
  watch: {
    currentGroup(val) {
      const groupId = {
        group_id: val.group_id
      }
      this.$store.dispatch('task/init', groupId)
    }
  }
}
</script>