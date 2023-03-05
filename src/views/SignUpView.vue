<template>
  <div class="popup">
    <div class="popup-inner">
      <form class="container" @submit.prevent="signUpToggle">
        <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input type="text" class="form-control" id="name" required>
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email address</label>
          <input type="email" class="form-control" id="email" aria-describedby="emailHelp" required>
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input type="password" class="form-control" id="password" required>
        </div>
        <div class="mb-3">
          <label for="confirm-password" class="form-label">Confirm Password</label>
          <input type="password" class="form-control" id="confirm-password" required>
        </div>
        <button type="submit" class="btn btn-primary">Sign Up</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignUpView',
  methods: {
    signUpToggle () {
      this.$store.dispatch('loginSignUpLogoutModule/updateLoginSignUpLogoutToggle')
      this.$router.push('/FinancialPlanning')
    }
  }
}
</script>

<style scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: center;
  justify-content: center;
}
.popup-inner {
  background: #eee;
  padding: 32px;
  border: 2px solid black;
  border-radius: 5px;
}
</style>
