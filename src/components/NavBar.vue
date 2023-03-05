<template>
  <!-- <nav class="navbar navbar-dark bg-success navbar-expand-sm">
    <div class="container">
        <router-link to="/FinancialPlanning">
          <a class="navbar-brand" href="#">
            <img src="@/assets/LogoFinancialPlanning.png" alt="Logo" width="30" height="24">
          </a>
        </router-link>
        <div class="collapse navbar-collapse">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link class="nav-link" to="/FinancialPlanning">Financial Planning</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/Login">Login</router-link>
                </li>
            </ul>
            <form class="d-flex">
              <router-link class="nav-link" to="/Login">
                <button class="btn" type="submit">Login</button>
              </router-link>
            </form>
        </div>
    </div>
  </nav> -->

  <nav class="navbar navbar-expand-lg navbar-light sticky-top  bg-success">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="@/assets/LogoFinancialPlanning.png" alt="Logo" width="30" height="24">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-white">
        <li class="nav-item">
          <router-link class="nav-link text-white" to="/FinancialPlanning">Financial Planning</router-link>
        </li>
        <!-- <li class="nav-item">
          <a href="#" class="nav-link text-white">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>Action</li>
            <li>Another action</li>
            <li><hr class="dropdown-divider"></li>
            <li>Something else here</li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li> -->
      </ul>
      <form class="d-flex justify-content-center">
            <router-link class="nav-link" to="/Login" v-if="loginSignUpLogoutToggleState.toggle">
              <button class="btn text-white" type="submit">Login</button>
            </router-link>

            <router-link class="nav-link" to="/SignUp" v-if="loginSignUpLogoutToggleState.toggle">
              <button class="btn text-white" type="submit">SignUp</button>
            </router-link>

            <router-link class="nav-link" to="/FinancialPlanning" v-if="!loginSignUpLogoutToggleState.toggle">
              <button class="btn text-white" type="submit" @click="logoutToggle()">Logout</button>
            </router-link>
      </form>
    </div>
  </div>
</nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'NavBar',
  methods: {
    logoutToggle () {
      this.$store.dispatch('loginSignUpLogoutModule/updateLoginSignUpLogoutToggle')
    }
  },
  computed: mapGetters({
    loginSignUpLogoutToggleState: 'getLoginSignUpLogoutState'
  })
}
</script>
