
<template>
<div>
  <b-button v-b-toggle.sidebar-backdrop>Menu</b-button>

    <b-sidebar
      id="sidebar-backdrop"
      title="Menu"
      backdrop-variant="dark"
      backdrop
      shadow
    >
      <div class="px-3 py-2">
        <b-list-group>
          <b-list-group-item><router-link :to="{ path: '/dashboard/marcas'}" replace>Marcas</router-link></b-list-group-item>
          <b-list-group-item><router-link :to="{ path: '/dashboard/categorias'}" replace>Categorias</router-link></b-list-group-item>
          <b-list-group-item> <router-link :to="{ path: '/dashboard/veiculos'}" replace>Veículos</router-link></b-list-group-item>
          <b-list-group-item> <b-button @click="logout" replace>Sair</b-button></b-list-group-item>

        </b-list-group>

      </div>
    </b-sidebar>

<b-container>
   <router-view />
</b-container>
</div>
</template>
<script>
import { logoutUser } from '@/auth/service/auth-service'
export default {
  name: 'Dashboard',
  methods: {
    logout () {
      logoutUser()
      this.$router.push('/')
    }
  }
}
</script>
