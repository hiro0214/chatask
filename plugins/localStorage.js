import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  window.onNuxtReady(() => {
    createPersistedState({
      paths: ['user.loginUser', 'group.currentGroup', 'group.currentGroupUserList']
    })(store)
  })
}
