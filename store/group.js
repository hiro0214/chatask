import axios from "axios"

export const state = {
  currentGroup: ''
}

export const mutations = {
}

export const actions = {
  async create({ dispatch }, payload) {
    await axios.post('http://localhost:8000/group_create', payload)
      .then(() => {
        const that = this
        that.$router.push('/top')
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
