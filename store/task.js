import axios from "axios"

export const state = {
  taskContainer: [
    { containerName: 'Todo', list: [] },
    { containerName: '実行中', list: [] },
    { containerName: '完了', list: [] }
  ]
}

export const mutations = {
  init(state, payload) {
    state.taskContainer[0].list = payload.todo
    state.taskContainer[1].list = payload.doing
    state.taskContainer[2].list = payload.fin
  }
}

export const actions = {
  async init({commit}, payload) {
    await axios.post('http://localhost:8000/task', payload)
      .then((res) => {
        console.log(res.data)
        commit('init', res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  async create({ dispatch }, payload) {
    await axios.post('http://localhost:8000/task_create', payload)
      .then(() => {
        const groupId = {
          group_id: payload.group_id
        }
        dispatch('init', groupId)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
