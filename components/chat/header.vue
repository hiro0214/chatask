<template>
  <div class="chat-header">
    <div class="chat-header-title">
      <span>グループ名 :  <b>メルカリチームC</b></span>
    </div>
    <div class="chat-header-info">
      <v-btn icon>
        <v-icon>library_books</v-icon>
      </v-btn>
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