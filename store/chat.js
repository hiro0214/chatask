import axios from "axios"

export const state = {
  messages: [],
  coloritems : ['red', 'blue', 'green', 'orange', 'purple']
}

export const mutations = {
  initMessage(state, payload) {
    state.messages = payload
  },
  signOut(state) {
    state.messages = []
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
  async createMessage({}, payload) {
    await axios.post('http://localhost:8000/chat_create', payload)
      .then(() => {
      })
      .catch((err) => {
        console.log(err)
      })
  },
  signOut({ commit }) {
    commit('signOut')
  }
}
