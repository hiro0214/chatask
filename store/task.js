import axios from "axios"

export const state = {
  taskInfo: 'taskList',
  taskShow: [],
  taskContainer: [
    { containerName: 'Todoリスト', list: [] },
    { containerName: '実行中', list: [] },
    { containerName: '完了', list: [] }
  ]
}

export const mutations = {
  init(state, payload) {
    state.taskContainer[0].list = payload.todo
    state.taskContainer[1].list = payload.doing
    state.taskContainer[2].list = payload.fin
  },
  show(state, payload) {
    state.taskInfo = 'taskShow'
    state.taskShow = payload
  },
  stateChange(state, payload) {
    state.taskShow.state = payload
  },
  backList(state) {
    state.taskInfo = 'taskList'
  }
}

export const actions = {
  async init({commit}, payload) {
    await axios.post('http://localhost:8000/task', payload)
      .then((res) => {
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
  },
  show({ commit }, payload) {
    commit('show', payload)
  },
  stateChange({ commit }, payload) {
    commit('stateChange', payload)
  },
  backList({ commit }) {
    commit('backList')
  }
}
