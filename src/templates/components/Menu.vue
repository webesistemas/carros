<template>
   <div>
      <b-navbar
        toggleable="lg"
        type="dark"
        variant="info"
      >
        <b-navbar-brand href="#">Treinamento Vue</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse
          id="nav-collapse"
          is-nav
        >
          <b-navbar-nav>
            <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item to="/about">About</b-nav-item>
            <b-nav-item to="/veiculos">Veículos</b-nav-item>
             <b-nav-item to="/contato">Contato</b-nav-item>
            <b-nav-item to="/login">Login</b-nav-item>

          </b-navbar-nav>

        </b-collapse>
      </b-navbar>
    </div>
</template>
<script>
import { logoutUser } from '@/auth/service/auth-service'

export default {
  name: 'Menu',
  methods: {
    logout () {
      logoutUser()
      this.$router.push('/home')
    }
  }
}
</script>
