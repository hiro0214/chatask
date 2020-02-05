<template>
  <v-app>
    <v-card flat>
      <v-toolbar color="#296799" height="50px" class="px-5">
        <v-app-bar-nav-icon color="white" />
        <v-toolbar-title class="white--text headline font-weight-bold">Chatask</v-toolbar-title>
      </v-toolbar>
    </v-card>

    <section>
      <v-card class="sign_up">
        <p>新規登録</p>
        <p>はじめての方はこちら</p>
        <v-form>
          <v-text-field label="ニックネーム" v-model="signup.name" />
          <v-text-field label="メールアドレス" v-model="signup.mail" />
          <v-text-field type="password" label="パスワード" v-model="signup.pass" />
          <v-text-field type="password" label="パスワード(確認)" v-model="signup.pass_conf" />
          <v-btn @click="signUp">登録</v-btn>
        </v-form>
      </v-card>
      <v-card class="sign_in">
        <p>ログイン</p>
        <p>新規登録済みの方はこちら</p>
        <v-form>
          <v-text-field label="メールアドレス" v-model="signin.mail" />
          <v-text-field type="password" label="パスワード" v-model="signin.pass" />
          <v-btn @click="signIn">ログイン</v-btn>
        </v-form>
      </v-card>
    </section>
  </v-app>
</template>

<style scoped lang="scss">

section {
  background:rgb(235, 254, 255);
  height:100%;
  display:flex;
  justify-content: center;
  padding-top:80px;
  .v-card {
    width:35%;
    height:500px;
    background:#fff;
    text-align:center;
    margin:0 20px;
    p:first-child {
      font-size:24px;
      font-weight:600;
      padding-top:20px;
    }
    .v-form {
      width:70%;
      margin:0 auto;
    }
  }
}
</style>

<script>
export default {
  layout: 'index',
  data () {
    return {
      signup: [],
      signin: []
    }
  },
  methods: {
    signUp (){
      const data = {
        name: this.signup.name,
        email: this.signup.mail,
        password: this.signup.pass,
        password_confirmation: this.signup.pass_conf
      }
      this.$store.dispatch('user/signUp', data)
    },
    signIn () {
      const data = {
        email: this.signin.mail,
        password: this.signin.pass
      }
      this.$store.dispatch('user/signIn', data)
    }
  }
}
</script>