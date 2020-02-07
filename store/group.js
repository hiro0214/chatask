import axios from "axios"

export const state = {
  currentGroup: {},
  groupList: []
}

export const mutations = {
  groupListInit(state, payload) {
    state.groupList = payload
  },
  changeGroup(state, payload) {
    state.currentGroup = payload
  },
  signOut(state) {
    state.currentGroup = {}
  }
}

export const actions = {
  async groupListInit({ commit }, payload) {
    await axios.post('http://localhost:8000/group_list', payload)
      .then((res) => {
        const groupData = []
        res.data.forEach((doc) => {
          groupData.push({
            group_id: doc.group.id,
            group_name: doc.group.group_name,
          })
        })
        commit('groupListInit', groupData)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  async create({}, payload) {
    await axios.post('http://localhost:8000/group_create', payload)
      .then(() => {
        const that = this
        that.$router.push('/top')
      })
      .catch((err) => {
        console.log(err)
      })
  },
  changeGroup({ commit }, payload) {
    commit('changeGroup', payload)
  },
  signOut({ commit }) {
    commit('signOut')
  }
}
