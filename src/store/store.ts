import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state() {
    return {
      userData: {}
    }
  },
  mutations: {
    SET_USER(state: { userData: {} }, userData: {}) {
      state.userData = userData
    }
  },
  actions: {
    setUser({ commit }, userData: {}) {
      commit('SET_USER', userData)
    }
  },
  getters: {
    getUser(state: any) {
      return state.userData
    }
  }
})

export default store
