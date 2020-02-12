<template>
  <div>
    <v-tooltip bottom>
      <template v-show="false" v-slot:activator="{ on }">
        <v-btn icon @click="taskDialog = true" :disabled="(currentGroup.group_id) ? false : true " v-on="on">
          <v-icon>today</v-icon>
        </v-btn>
      </template>
      <span>タスクを作成</span>
    </v-tooltip>

    <v-dialog v-model="taskDialog" max-width="700" persistent>
      <v-card>
        <v-card-title class="justify-center font-weight-bold">新規タスク作成</v-card-title>
        <v-form>
          <div>
            <v-text-field v-model="task.title" label="タスク名" />
            <v-menu bottom>
              <template v-slot:activator="{ on: {click} }">
                <v-btn icon @click="click" class="mt-3">
                  <v-icon size="30">color_lens</v-icon>
                </v-btn>
              </template>
              <v-list class="py-0" width="70">
                <v-list-item v-for="(item, index) in $store.state.chat.coloritems" :key="index" @click="taskColor(index)" class="px-1">
                  <v-list-item-content :class=item></v-list-item-content>
                </v-list-item>
              </v-list>
            </v-menu>

            <div ref="colorbox" class="color-box"></div>
          </div>
          <v-textarea v-model="task.detail" label="詳細" />
          <v-select v-model="task.worker" :items="$store.state.group.currentGroupUserList" label="担当者" multiple chips persistent-hint />
        </v-form>
        <v-card-actions :class="`d-flex justify-center`">
          <v-btn color="error" @click="taskClear()" class="font-weight-bold">
            キャンセル
          </v-btn>
          <v-btn color="success" @click="taskCreate()" class="font-weight-bold">
            作成
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<style lang="scss" scoped>

.v-form {
  width:80%;
  margin:0 auto;
  > div {
    display:flex;
    .color-box {
      width:20px;
      height:20px;
      border:solid 2px;
      margin-top:20px;
    }
  }
}

</style>

<script>
export default {
  data () {
    return {
      taskDialog: false,
      task: [],
    }
  },
  computed: {
    currentGroup () {
      return this.$store.state.group.currentGroup
    }
  },
  methods: {
    taskCreate () {
      const taskData = {
        creator: this.$store.state.user.loginUser.name,
        group_id: this.$store.state.group.currentGroup.group_id,
        title: this.task.title,
        worker: String(this.task.worker),
        detail: this.task.detail,
        state: 'Todo',
        label: this.task.label
      }
      this.$store.dispatch('task/create', taskData)
      this.taskClear()
    },
    taskColor (i) {
      this.task.label = this.coloritems[i]
      this.$refs.colorbox.style.backgroundColor = this.coloritems[i]
    },
    taskClear () {
      this.taskDialog = false
      this.task = []
      this.$refs.colorbox.style.backgroundColor = ''
    }
  }
}
</script>