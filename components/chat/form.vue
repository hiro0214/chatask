<template>
  <div v-if="($store.state.group.currentGroup.group_id) ? true : false " class="chat-form">
    <form action="" ref="chat-form">
      <div class="chat-form-top">

        <div>
          <label for="img_upload">
            <v-icon size="28">panorama</v-icon>
          </label>
          <template v-if="this.send.img">
            <span>{{ this.send.img.name }}</span>
            <v-btn icon color="red" @click="imgDel">
              <v-icon>delete_sweep</v-icon>
            </v-btn>
          </template>
          <input id="img_upload" type="file" @change="imgChose">
        </div>

        <div>
          <v-btn icon @click="textBold">
            <v-icon size="32">format_bold</v-icon>
          </v-btn>
          <v-menu top>
            <template v-slot:activator="{ on: {click} }">
              <v-btn icon @click="click">
                <v-icon>colorize</v-icon>
              </v-btn>
            </template>
            <v-list class="py-0" width="70">
              <v-list-item v-for="(item, index) in coloritems" :key="index" @click="textColor(index)" class="px-1">
                <v-list-item-content :class=item></v-list-item-content>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>

      </div>

      <div class="chat-form-bottom">
        <input ref="form" type="text" name="message" placeholder="チャットを入力" v-model="send.message" class="form-message">
        <button @click="submit" class="form-send">送信</button>
      </div>
    </form>
  </div>
</template>


<style lang="scss" scoped>

.chat {
  &-form {
    padding:5px 10px;
    margin-top:20px;
    background:rgb(228, 228, 228);
    &-top {
      background:#fff;
      padding:0 10px;
      border-bottom:solid 1px;
      display:flex;
      justify-content:space-between;
      align-items:center;
      label {
        cursor:pointer;
        margin-right:10px;
      }
      input {
        display:none;
      }
    }
    &-bottom {
      height:45px;
      .form-message {
        width:85%;
        height:90%;
        background:#fff;
        margin-right:10px;
        padding:10px 15px;
        border-radius:5px;
      }
      .form-send {
        background:rgb(76, 198, 255);
        color:#fff;
        padding:7px 15px;
        font-weight:600;
      }
    }
  }
}
</style>

<script>
export default {
  data () {
    return {
      send: {
        message: '',
        img: '',
        color: '',
      },
      decoInfo: "false",
      coloritems : ['red', 'blue', 'green', 'orange', 'purple']
    }
  },
  methods: {
    submit (e) {
      e.preventDefault();
      const sendData = {
        user_id: this.$store.state.user.loginUser.id,
        group_id: this.$store.state.group.currentGroup.group_id,
        text: this.send.message,
        text_bold: this.decoInfo,
        text_color: this.send.color
        // img: this.send.img,
      }
      this.$store.dispatch('chat/createMessage', sendData).then(() => {
        const data = {
          group_id: this.$store.state.group.currentGroup.group_id
        }
        this.$store.dispatch('chat/initMessage', data)

      })
      this.formReset();
    },
    imgChose (e) {
      this.send.img = e.target.files[0];
    },
    imgDel () {
      this.send.img = ''
    },
    textBold () {
      if (this.decoInfo == "true") {
        this.decoInfo = "false"
        this.$refs.form.style.fontWeight = "normal"
      } else {
        this.decoInfo = "true"
        this.$refs.form.style.fontWeight = 600
      }
    },
    textColor (i) {
      this.send.color = this.coloritems[i]
      this.$refs.form.style.color = this.coloritems[i]
    },
    formReset () {
      this.send.message = ''
      this.send.img = ''
      if (this.decoInfo == "true") {
        this.decoInfo = "false"
        this.$refs.form.style.fontWeight = "normal"
      }
      if (this.send.color) {
        this.send.color = ''
        this.$refs.form.style.color = null
      }
    }
  }
}
</script>