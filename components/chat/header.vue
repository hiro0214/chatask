<template>
  <div class="chat-header">
    <div class="chat-header-title">
      <span>グループ名 :  <b>{{ currentGroup.group_name }}</b></span>
    </div>
    <div class="chat-header-info">
      <v-menu>
        <template v-slot:activator="{ on: {click} }">
          <v-btn icon @click="click" :disabled="( $store.state.group.groupList[0] ) ? false : true ">
            <v-icon>transform</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="group in $store.state.group.groupList" :key="group.id" @click="changeGroup(group)" >
            <v-list-item-content>{{ group.group_name }}</v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>

      <!-- グループ編集ダイアログ -->
      <v-tooltip bottom>
        <template v-show="false" v-slot:activator="{ on }">
          <v-btn icon @click="editDialogOpen" :disabled="(currentGroup.group_id) ? false : true " v-on="on">
            <v-icon>library_books</v-icon>
          </v-btn>
        </template>
        <span>グループを編集</span>
      </v-tooltip>

      <v-dialog v-model="editDialog" max-width="500" persistent>
        <v-card>
          <v-card-title class="justify-center font-weight-bold">グループ編集</v-card-title>
          <v-card-text>
            <div class="edit-name">
              <p>グループ名 : <b>{{ currentGroup.group_name }}</b></p>
              <v-btn v-if="groupNameBtn == true" @click="groupNameBtn = false">グループ名を編集する</v-btn>
              <v-col v-if="groupNameBtn == false">
                <v-text-field label="新しいグループ名" v-model="newGroupName"></v-text-field>
              </v-col>
            </div>

            <div class="edit-member">
              <p>メンバー : <b>田中</b></p>
              <v-btn>メンバーを編集する</v-btn>
            </div>
          </v-card-text>
          <v-card-actions :class="`d-flex justify-center`">
            <v-btn color="error" @click="editDialog = false, groupNameInit()" class="font-weight-bold">
              キャンセル
            </v-btn>
            <v-btn color="success" @click="editSubmit()" class="font-weight-bold">
              更新
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <!-- タスクダイアログ -->
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
                  <v-list-item v-for="(item, index) in coloritems" :key="index" @click="taskColor(index)" class="px-1">
                    <v-list-item-content :class=item></v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-menu>

              <div ref="colorbox" class="color-box"></div>
            </div>
            <v-textarea v-model="task.detail" label="詳細" />
            <v-select v-model="task.worker" :items="groupUserList" label="担当者" multiple chips persistent-hint />
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
  </div>
</template>


<style lang="scss" scoped>

.chat {
  &-header {
    height:35px;
    font-size:14px;
    line-height:35px;
    padding:0 20px;
    color:rgb(53, 53, 53);
    background:rgb(170, 221, 255);
    display:flex;
    &-title {
      width:100%;
      overflow:hidden;
      span {
        display:block;
        text-overflow: ellipsis;
        overflow:hidden;
        white-space: nowrap;
      }
      b {
        font-size:16px;
      }
    }
    &-info {
      display:flex;
    }
  }
}

.v-dialog {
  .edit-name {
    margin:20px 0 30px;
    p {
      margin-bottom:10px;
    }
  }
  .edit-member {
    p {
      margin-bottom:10px;
    }
  }
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
}

</style>

<script>
export default {
  data () {
    return {
      editDialog: false,
      taskDialog: false,
      newGroupName: '',
      groupNameBtn: true,
      task: [],
      coloritems : ['red', 'blue', 'green', 'orange', 'purple'],
      groupUserList: [
        "田中", "山田", "佐藤"
      ]
    }
  },
  mounted () {
    setTimeout(() => {
      const userId = {
        user_id: this.$store.state.user.loginUser.id
      }
      this.$store.dispatch('group/groupListInit', userId)
    }, 0)
  },
  computed: {
    currentGroup () {
      return this.$store.state.group.currentGroup
    }
  },
  methods: {
    changeGroup (group) {
      const groupData = {
        group_id: group.group_id,
        group_name: group.group_name,
      }
      this.$store.dispatch('group/changeGroup', groupData)
    },

    // グループ編集メソッド
    groupNameInit () {
      this.groupNameBtn = true
      this.newGroupName = ''
    },
    editDialogOpen () {
      this.editDialog = true
      this.newGroupName = this.currentGroup.group_name
    },
    editSubmit(){
      this.editDialog = false

      // コールバック axios post
      this.groupNameInit();
    },

    // タスクメソッド
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