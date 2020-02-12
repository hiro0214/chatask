<template>
  <div class="group">
    <v-card>
      <b>新規グループ作成</b>
      <v-form>
        <div class="form-top">
          <v-text-field label="グループネーム" v-model="groupName" />
        </div>

        <div class="form-bottom">
          <v-card class="add-user">
            <p>ユーザーの追加</p>
            <v-text-field label="ユーザーIDで検索" v-model="searchId" />
            <v-list>
              <v-list-item v-for="user in $store.state.user.searchUser" :key="user.id">
                <v-list-item-content>{{ user.name }}</v-list-item-content>
                <v-list-item-action>
                  <v-btn v-if="user.id" color="info" @click="addUser(user)">追加</v-btn>
                </v-list-item-action>
              </v-list-item>
            </v-list>
          </v-card>
          <v-card class="user-list">
            <p>現在のユーザーリスト<span>({{ userList.length }}人)</span></p>
            <v-list>
              <v-list-item v-for="(user,index) in userList" :key="user.user_id">
                <v-list-item-content>{{ user.user_name }}</v-list-item-content>
                <v-list-item-action>
                  <v-btn v-if="(index == 0) ? false : true " color="error" @click="removeUser(user)">削除</v-btn>
                </v-list-item-action>
              </v-list-item>
            </v-list>
          </v-card>
        </div>

        <v-btn @click="groupCreate" :disabled=" groupName ? false : true ">作成</v-btn>
      </v-form>
    </v-card>
  </div>

</template>

<style lang="scss" scoped>

.group {
  height:100%;
  background:rgb(235, 254, 255);
  padding-top:40px;
  .v-card {
    width:70%;
    margin:0 auto;
    padding:30px 0;
    text-align:center;
    > b {
      font-size:22px;
    }
    > p {
      font-weight:600;
      margin:0 auto 10px;
      padding-bottom:20px;
      border-bottom:solid 1px rgb(201, 201, 201);
    }
    .v-form {
      width:100%;
      margin:0 auto;
      .form-top {
        width:50%;
        margin:0 auto;
      }
      .form-bottom {
        width:100%;
        margin-bottom:20px;
        display:flex;
        justify-content: center;
        align-items: center;
        > div {
          width:40%;
          height:400px;
          margin:20px 25px;
          padding:30px 50px;
        }
        .v-list {
          overflow: scroll;
          &::-webkit-scrollbar {
            display:none;
          }
          .v-list-item {
            border-bottom:solid 1px rgb(230, 230, 230);
          }
        }
        .add-user > .v-list {
          height:65%;
        }
        .user-list > .v-list {
          height:85%;
        }
        .v-btn {
          font-weight:bold;
        }
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
      searchId: '',
      userList: [
        { user_id: this.$store.state.user.loginUser.id, user_name: this.$store.state.user.loginUser.name }
      ]
    }
  },
  created () {
    this.inputName = _.debounce(this.searchUser, 1000)
  },
  destroyed () {
    this.$store.dispatch('user/searchClear')
  },
  watch: {
    searchId () {
      this.inputName()
    }
  },
  methods: {
    searchUser () {
      if (this.searchId.length > 0) {
        const data = {
          id: this.searchId,
          current: this.$store.state.user.loginUser.id
        }
        this.$store.dispatch('user/searchUser', data)
      } else {
        this.$store.dispatch('user/searchClear')
      }
    },
    addUser(user) {
      this.userList.push({
        user_id: user.id,
        user_name: user.name
      })
    },
    groupCreate () {
      const data = {
        group_name: this.groupName,
        user_data: this.userList
      }
      this.$store.dispatch('group/create', data)
    }
  }
}
</script>