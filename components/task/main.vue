<template>
  <div class="task-main">
    <div v-for="(taskList, index) in taskContainer" :key="index">

      <v-toolbar height="30" color="green lighten-1 mb-2">
        <v-toolbar-title class="subtitle-1 font-weight-bold">{{ taskList.containerName }}</v-toolbar-title>
      </v-toolbar>

      <v-list>
        <v-list-item v-for="(task, index) in taskList.list" :key="index" class="px-1">
          <v-list-item-content class="pa-1">
            <v-card class="task-contents">{{ task.title }}</v-card>
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
          &::-webkit-scrollbar {
          // display:none;
        }
        .task-contents {
          min-height:54px;
          padding:10px;
        }
      }
    }
  }


</style>

<script>
export default {
  data () {
    return {
      taskContainer: [
        { containerName: 'Todo',
          list: [
            { title: "aaaa"},
            { title: "bbbb"},
            { title: "cccc"},
            { title: "aaaa"},
            { title: "aaaa"},
            { title: "bbbb"},
            { title: "aaaa"},
            { title: "aaaa"},
            { title: "bbbb"},
            { title: "aaaa"},
            { title: "aaaa"},
            { title: "bbbb"},
            { title: "aaaa"},
            { title: "aaaa"},
            { title: "bbbb"},
            { title: "cccc"},
            { title: "dddd"}
          ]
        },
        { containerName: '実行中',
          list: [
            { title: "1111"},
            { title: "2222222222222222222222222222222222222222"},
            { title: "3333"},
            { title: "4444"}
          ]
        },
        { containerName: '完了',
          list: [
            { title: "ああああ"},
            { title: "いいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいい"},
            { title: "うううう"},
            { title: "ええええ"}
          ]
        },
      ]
    }
  }
}
</script>