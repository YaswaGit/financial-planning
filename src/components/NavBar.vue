<template>
  <nav class="navbar navbar-dark bg-success navbar-expand-sm">
    <div class="container">
        <router-link class="navbar-brand" to="/">Vuex</router-link>
        <div class="collapse navbar-collapse">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link class="nav-link" to="/FinancialPlanning">Financial Planning</router-link>
                </li>
            </ul>
        </div>
    </div>

  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>
