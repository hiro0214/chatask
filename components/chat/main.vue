<template>
  <div class="chat-main">
    <ul>
      <li>
        <div class="chat-main-top">
          <p><v-icon>textsms</v-icon>　田中</p>
          <span>2020年 2月 3日 (月) 12:34</span>
        </div>
        <div class="chat-main-bottom">
          <p>テキストテキスト</p>
        </div>
      </li>
      <li>
        <div class="chat-main-top">
          <p>田中</p>
          <span>2020年 2月 3日 (月) 12:34</span>
        </div>
        <div class="chat-main-bottom">
          <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
        </div>
      </li>
      <li>
        <div class="chat-main-top">
          <p>田中</p>
          <span>2020年 2月 3日 (月) 12:34</span>
        </div>
        <div class="chat-main-bottom">
          <p>テキストテキスト</p>
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
    // -webkit-overflow-scrolling:touch;
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
    }
  }
}

</style>