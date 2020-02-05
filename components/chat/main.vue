<template>
  <div class="chat-main">
    <ul>
      <li v-for="(message,index) in $store.state.chat.messages" :key="index">
        <div class="chat-main-top">
          <p><v-icon size="15">textsms</v-icon>田中</p>
          <span>{{ message.created_at }}</span>
        </div>
        <div class="chat-main-bottom">
          <p :class="(message.text_bold == 'true') ? 'text-bold': ''" :style="{color: message.text_color}">{{ message.text }}</p>
        </div>
      </li>
    </ul>
  </div>

</template>


<style lang="scss" scoped>

.chat {
  &-main {
    height:560px;
    background:#fff;
    border:solid 1px gray;
    padding:20px 30px;
    overflow:scroll;
    ul {
      list-style-type: none;
      padding:0;
      li {
        margin-bottom:20px;
      }
    }
    &-top {
      display:flex;
      justify-content:space-between;
      padding-right:20px;
      p {
        margin:0;
        font-weight:600;
      }
      span {
        color:gray;
        font-size:14px;
      }
      i {
        margin-right:10px;
      }
    }
    &-bottom {
      width:90%;
      height:45px;
      margin:5px 0 0 10px;
      p {
        margin:0;
        font-size:15px;
        color:rgb(80, 80, 80);
      }
      .text-bold {
        font-weight:600;
      }
    }
  }
}

</style>

<script>
export default {
  methods: {
    textColor(color) {
      console.log(color)
    }
  }
}
</script>