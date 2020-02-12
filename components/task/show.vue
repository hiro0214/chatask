<template>
  <v-card>
    <v-system-bar :class=currentTask.label>
      <v-spacer />
      <v-btn icon @click="backList"><v-icon>clear</v-icon></v-btn>
    </v-system-bar>

    <v-card-title>
      <v-icon class="mr-3">web</v-icon>

      <template v-if="taskEditInfo == false">
        {{ currentTask.title }}
      </template>
      <template v-if="taskEditInfo == true">
        <v-text-field v-model="taskEdit.title" label="新しいタスク名" />
      </template>

      <v-spacer />

      <template v-if="taskEditInfo == false">
        <v-btn icon @click="taskEditBtn(currentTask)"><v-icon>edit</v-icon></v-btn>
      </template>
      <template v-if="taskEditInfo == true">
        <v-btn @click="taskUpdate()" class="info font-weight-bold">保存</v-btn>
      </template>

    </v-card-title>

    <v-card-text>
      <div class="top-info">
        <p><v-icon>person</v-icon>作成者: {{ currentTask.creator }}</p>
        <p><v-icon>date_range</v-icon>作成日: {{ currentTask.created_at }}</p>
        <p v-if="currentTask.created_at !== currentTask.updated_at"><v-icon>update</v-icon>更新日: {{ currentTask.updated_at }}</p>
      </div>
      <p><v-icon>subject</v-icon>詳細</p>
      <div v-if="taskEditInfo == false" class="detail-box">
        {{ currentTask.detail }}
      </div>
      <div v-if="taskEditInfo == true" class="textarea-box">
        <v-textarea v-model="taskEdit.detail" />
      </div>
      <template v-if="taskEditInfo == false">
        <p><v-icon>group</v-icon>担当者: {{ currentTask.worker }}</p>
      </template>
      <template v-if="taskEditInfo == true">
        <v-select v-model="taskEdit.worker" :items="$store.state.group.currentGroupUserList" label="担当者" multiple chips persistent-hint />
      </template>
      <p><v-icon>local_offer</v-icon>現在の状態: {{ currentTask.state }}</p>
    </v-card-text>

    <v-card-actions>
      <template v-if="currentTask.state == 'Todo'">
        <v-spacer />
        <v-btn @click="rightMove(currentTask.state)">実行中に移動</v-btn>
      </template>
      <template v-if="currentTask.state == 'Doing'">
        <v-btn @click="leftMove(currentTask.state)">リストに戻す</v-btn>
        <v-spacer />
        <v-btn @click="rightMove(currentTask.state)">完了に移動</v-btn>
      </template>
      <template v-if="currentTask.state == 'Fin'">
        <v-btn @click="leftMove(currentTask.state)">実行中に戻す</v-btn>
        <v-spacer />
      </template>
    </v-card-actions>
  </v-card>
</template>

<style lang="scss" scoped>

.v-card {
  width:80%;
  margin:0 auto;
  .top-info {
    display:flex;
    > p {
      margin-right:20px;
      font-size:14px;
    }
  }
  .detail-box {
    width:85%;
    min-height:100px;
    margin:0 auto 20px;
    padding:10px;
    border:solid 1px rgb(110, 110, 110);
  }
  .textarea-box {
    width:85%;
    min-height:100px;
    margin:0 auto;
    padding:10px;
  }
  .v-card__actions {
    width:70%;
    margin:0 auto;
  }
}

</style>

<script>
export default {
  data () {
    return {
      taskEditInfo: false,
      taskEdit: [],
      groupUserList: [
        "田中", "山田", "佐藤"
      ]
    }
  },
  computed: {
    currentTask() {
      return this.$store.state.task.taskShow
    }
  },
  methods: {
    backList () {
      this.$store.dispatch('task/backList')
    },
    taskEditBtn(task) {
      this.taskEditInfo = true
      this.taskEdit.title = task.title
      this.taskEdit.detail = task.detail
    },
    leftMove (state) {
      if (state == 'Doing') {
        this.$store.dispatch('task/stateChange', 'Todo')
      } else if (state == 'Fin') {
        this.$store.dispatch('task/stateChange', 'Doing')
      }
    },
    rightMove (state) {
      if (state == 'Todo') {
        this.$store.dispatch('task/stateChange', 'Doing')
      } else if (state == 'Doing') {
        this.$store.dispatch('task/stateChange', 'Fin')
      }
    },
    taskUpdate() {
      console.log(this.taskEdit)
      // Api task Update
      
       // task Init
      this.taskEditInfo == false
      this.backList()
    }
  }
}
</script>