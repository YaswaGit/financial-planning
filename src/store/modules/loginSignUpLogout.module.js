export default {
  namespaced: true,
  state: {
    loginSignUpLogout: {
      toggle: true
    }
  },
  mutations: {
    UPDATE_LOGINSIGNUPLOGOUT_TOGGLE (state) {
      state.loginSignUpLogout.toggle = !state.loginSignUpLogout.toggle
    }
  },
  actions: {
    updateLoginSignUpLogoutToggle ({ commit }) {
      return commit('UPDATE_LOGINSIGNUPLOGOUT_TOGGLE')
    }
  }
}
