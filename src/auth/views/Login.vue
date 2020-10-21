<template>
  <div>
    <h1>Página de login</h1>
    <hr>
    <b-form-input v-model="usuario" class="mt-2 mb-2" placeholder="Usuário"></b-form-input>
    <b-form-input v-model="senha" class="mt-2 mb-2" placeholder="Senha"></b-form-input>
      <b-button variant="primary" class=" mb-4" @click="login">Acessar</b-button>
    <b-alert v-if="erro" show variant="danger">{{erro}}</b-alert>

  </div>
</template>
<script>
import { loginUser } from '../service/auth-service'
export default {
  name: 'Login',
  data () {
    return {
      usuario: 'airton@oliveira.com',
      senha: 'senha123',
      erro: null

    }
  },
  methods: {
    async login () {
      await loginUser(this.usuario, this.senha)
        .then(response => {
          if (response.status === 'ok') { this.$router.push('/marcas') } else {
            this.erro = 'Login inválido'
            setTimeout(() => {
              this.erro = null
            }, 2500)
          }
        })
    }
  }
}
</script>
