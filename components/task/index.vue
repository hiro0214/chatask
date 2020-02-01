<template>
  <div class="task-container">
    <ul>
      <li v-for="task in $store.state.task.tasks" :key="task.id">{{ task.title }}</li>
    </ul>
  </div>

</template>

<style lang="scss" scoped>

.task-container {
  width:60%;
  height:100%;
  background:rgb(183, 183, 255);
}

</style>

<script>
export default {
  
}
</script>