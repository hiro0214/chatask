<template>
  <div class="task-container">
    <template v-if="currentGroup.group_id">
      <taskMain v-if="$store.state.task.taskInfo == 'taskList'" />
      <taskShow v-if="$store.state.task.taskInfo == 'taskShow'" />
    </template>
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
import taskShow from '~/components/task/show.vue'

export default {
  components: {
    taskMain,
    taskShow,
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