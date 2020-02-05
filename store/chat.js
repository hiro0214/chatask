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
  async initMessage({commit}) {
    await axios.get('http://localhost:8000/chat_init')
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
        dispatch('initMessage')
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
