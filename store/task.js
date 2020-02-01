import axios from "axios"

export const state = {
  tasks: []
}

export const mutations = {
  init(state, payload) {
    state.tasks = payload
  }
}

export const actions = {
  async init({commit}) {
    await axios.get('http://localhost:8000/task')
      .then((res) => {
        const tasks = []
        res.data.forEach((doc) => {
          tasks.push(doc)
          commit('init', tasks)
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
