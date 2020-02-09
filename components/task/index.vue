<template>
  <div class="task-container">
    <taskMain />
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
  }
}
</script>