<template>
  <div class="chat-header">
    <div class="chat-header-title">
      <span>グループ名 :  <b>{{ $store.state.group.currentGroup.group_name }}</b></span>
    </div>
    <div class="chat-header-info">
      <v-menu>
        <template v-slot:activator="{ on: {click} }">
          <v-btn icon @click="click">
            <v-icon>transform</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="group in $store.state.group.groupList" :key="group.id" @click="changeGroup(group)" >
            <v-list-item-content>{{ group.group_name }}</v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn icon @click="editDialog = true">
        <v-icon>library_books</v-icon>
      </v-btn>

      <v-dialog v-model="editDialog" max-width="500" persistent>
        <v-card>
          <v-card-title class="justify-center font-weight-bold">グループ編集</v-card-title>
          <v-card-text>
            <div class="edit-name">
              <p>グループ名 : <b>メルカリチームC</b></p>
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
}

</style>

<script>
export default {
  data () {
    return {
      editDialog: false,
      newGroupName: '',
      groupNameBtn: true,
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
  methods: {
    changeGroup (group) {
      const groupData = {
        group_id: group.group_id,
        group_name: group.group_name,
      }
      this.$store.dispatch('group/changeGroup', groupData)
    },
    groupNameInit () {
      this.groupNameBtn = true
      this.newGroupName = ''
    },
    editSubmit(){
      this.editDialog = false

      // コールバック axios post
      this.groupNameInit();
    }
  }
}
</script>