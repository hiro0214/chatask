<template>
  <div class="task-main">
    <div v-for="(taskList, index) in $store.state.task.taskContainer" :key="index">

      <v-toolbar height="30" color="green lighten-1 mb-2">
        <v-toolbar-title class="subtitle-1 font-weight-bold">{{ taskList.containerName }}</v-toolbar-title>
      </v-toolbar>

      <v-list>
        <v-list-item v-for="(task, index) in taskList.list" :key="index" @click="taskShow(task)" class="px-1">
          <v-list-item-content class="pa-1">
            <v-card>
              <v-system-bar :class=task.label height="10"></v-system-bar>
              <v-card-text>{{ task.title }}</v-card-text>
            </v-card>
          </v-list-item-content>
        </v-list-item>
      </v-list>

    </div>
  </div>
</template>


<style lang="scss" scoped>

  .task-main {
    height:calc(100vh - 110px);
    display:flex;
    justify-content: center;
    > div {
      width:32%;
      margin:0 8px;
      > .v-list {
        background:transparent;
        max-height:95%;
        padding:0;
        overflow: scroll;
        overflow-x: hidden;
        &::-webkit-scrollbar {
          // display:none;
        }
      }
    }
  }

</style>


<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    taskShow(task) {
      this.$store.dispatch('task/show', task)
    }
  }
}
</script>