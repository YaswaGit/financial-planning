import { createStore } from 'vuex'
import loginSignUpLogoutModule from './modules/loginSignUpLogout.module'

export default createStore({
  state: {
    loginSignUpLogoutState: loginSignUpLogoutModule.state
  },
  getters: {
    getLoginSignUpLogoutState (state) {
      return state.loginSignUpLogoutState.loginSignUpLogout
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    loginSignUpLogoutModule
  }
})
