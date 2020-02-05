import axios from "axios"

export const state = {
  loginUser: ''
}

export const mutations = {
  setUser(state, payload) {
    state.loginUser = payload
  },
  signOut(state) {
    state.loginUser = ''
  }
}

export const actions = {
  async signUp({ dispatch }, payload) {
    await axios.post('http://localhost:8000/signup', payload)
      .then(() => {
        const data = {
          email: payload.email,
          password: payload.password
        }
        console.log(data)
        dispatch('signIn', data)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  async signIn({commit}, payload) {
    await axios.post('http://localhost:8000/signin', payload)
      .then((res) => {
        if (res.data == 'error') {
          alert('ログインに失敗しました')
        } else {
          commit('setUser', res.data)
          const that = this
          that.$router.push('/top')
        }
      })
      .catch((err) => {
        console.log(err)
      })
  },
  signOut({ commit }) {
    commit('signOut')
  }
}
