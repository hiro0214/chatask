<template>
  <div class="group">
    <v-card>
      <p>新規グループ作成</p>
      <v-form>
        <v-text-field label="グループネーム" v-model="groupName" />
        <!-- <v-text-field label="ユーザー" v-model="user" /> -->
        <div class="user-result"></div>
        <v-btn @click="groupCreate">作成</v-btn>
      </v-form>
    </v-card>
  </div>

</template>

<style lang="scss" scoped>

.group {
  height:100%;
  background:rgb(235, 254, 255);
  padding-top:60px;
  .v-card {
    width:40%;
    margin:0 auto;
    padding:30px 0;
    text-align:center;
    > p {
      font-size:22px;
      font-weight:600;
    }
    .v-form {
      width:70%;
      margin:0 auto;
      .user-result {
        background:rgb(221, 220, 220);
        width:100%;
        height:200px;
      }
    }
  }
}
</style>

<script>
export default {
  data () {
    return {
      groupName: '',
      userList: [ this.$store.state.user.loginUser.id ]
    }
  },
  methods: {
    groupCreate () {
      const data = {
        group_name: this.groupName,
        user_id: this.userList
      }
      this.$store.dispatch('group/create', data)
    }
  }
}
</script>