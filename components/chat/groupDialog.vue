<template>
  <div>
    <v-tooltip bottom>
      <template v-show="false" v-slot:activator="{ on }">
        <v-btn icon @click="editDialogOpen" :disabled="(currentGroup.group_id) ? false : true " v-on="on">
          <v-icon>library_books</v-icon>
        </v-btn>
      </template>
      <span>グループを編集</span>
    </v-tooltip>

    <v-dialog v-model="editDialog" max-width="600" persistent>
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
            <p>現在のメンバー : <b v-for="user in $store.state.group.currentGroupUserList" :key="user">{{ user }} </b></p>
            <v-btn v-if="groupUserBtn == true" @click="groupUserBtn == false">メンバーを編集する</v-btn>
          </div>
        </v-card-text>
        <v-card-actions :class="`d-flex justify-center`">
          <v-btn color="error" @click="groupNameInit()" class="font-weight-bold">
            キャンセル
          </v-btn>
          <v-btn color="success" @click="editSubmit()" class="font-weight-bold">
            更新
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>


<style lang="scss" scoped>

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
      groupUserBtn: true,
    }
  },
  computed: {
    currentGroup () {
      return this.$store.state.group.currentGroup
    }
  },
  methods: {
    groupNameInit () {
      this.groupNameBtn = true
      this.newGroupName = ''
      this.editDialog = false
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

  }
}
</script>