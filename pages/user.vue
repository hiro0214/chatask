<template>
  <div class="user-page">
    <v-card>
      <v-list class="user-page-list">
        <v-subheader>
          <v-icon size="18" class="pr-2" color="white">menu</v-icon>Menu
        </v-subheader>
        <v-list-item-group>
          <v-list-item v-for="(menu, index) in menus" :key="index" @click="changeComp(menu.comp)">
            <v-list-item-content>
              <v-list-item-title>
                <v-icon>{{ menu.icon }}</v-icon>
                <span>{{ menu.title }}</span>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>

      <div class="user-page-main">
        <component :is="currentComp" />
      </div>

    </v-card>
  </div>
</template>

<style lang="scss">

.user-page {
  height:100%;
  padding-top:40px;
  background:rgb(235, 254, 255);
  .v-card {
    width:80%;
    height:680px;
    margin:0 auto;
    background:#fff;
    display:flex;
  }
  &-list {
    width:250px;
    margin-left:40px;
    padding-top:30px;
    .v-subheader {
      background:rgb(23, 49, 122);
      color:#fff;
      font-size:20px;
    }
    .v-item--active {
      background:rgb(255, 217, 173);
    }
    .v-item-group {
      border:solid 1px rgb(200, 200, 200);
      border-radius:0 0 5px 5px;
    }
  }
  &-main {
    padding:40px 60px;
    width: calc(100% - 250px );
    .comp-header {
      font-size:20px;
      font-weight:600;
      padding:0 0 10px 20px;
      border-bottom:solid 1px;
    }
  }
}
</style>

<script>
import Home from '~/components/user/home.vue'
import Group from '~/components/user/group.vue'
import Task from '~/components/user/task.vue'
import Logout from '~/components/user/logout.vue'

export default {
  components: {
    Home,
    Group,
    Task,
    Logout
  },
  data () {
    return {
      menus: [
        { title: 'プロフィール', icon: 'person', comp: 'Home' },
        { title: 'グループ一覧', icon: 'group_work', comp: 'Group' },
        { title: 'タスク一覧', icon: 'event', comp: 'Task' },
        { title: 'ログアウト', icon: 'report_off', comp: 'Logout' }
      ],
      currentComp: ''
    }
  },
  methods: {
    changeComp(comp) {
      this.currentComp = comp
    }
  }
}
</script>