<template>
  <div class="task-container">
      <span>{{ $store.state.user.loginUser }}</span><br>
      <span>{{ $store.state.group.currentGroup }}</span>

  </div>

</template>

<style lang="scss" scoped>

.task-container {
  width:60%;
  height:100%;
  border-right:solid 1px;
}

</style>

<script>
export default {
  
}
</script>