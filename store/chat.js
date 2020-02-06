import axios from "axios"

export const state = {
  messages: []
}

export const mutations = {
  initMessage(state, payload) {
    state.messages = payload
  }
}

export const actions = {
  async initMessage({ commit }, payload) {
    await axios.post('http://localhost:8000/chat_init', payload)
      .then((res) => {
        commit('initMessage', res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  async createMessage({dispatch}, payload) {
    await axios.post('http://localhost:8000/chat_create', payload)
      .then(() => {
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
