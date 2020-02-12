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

      <groupDialog />

      <taskDialog />

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

</style>

<script>
import groupDialog from '~/components/chat/groupDialog.vue'
import taskDialog from '~/components/chat/taskDialog.vue'

export default {
  components: {
    groupDialog,
    taskDialog
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
      this.$store.dispatch('group/currentGroupUserList', groupData)
    },
  }
}
</script>