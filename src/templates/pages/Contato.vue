<template>
  <div class="about">
    <Titulo  :titulo="titulo"/>
    <p>Entre em contato por algum lugar menos por aqui</p>
  </div>
</template>

<script>

import Titulo from './../components/Titulo.vue'
export default {
  name: 'Contato',
  data () {
    return {
      titulo: 'Nome da pagina Contato'
    }
  },
  components: {
    Titulo
  }
}
</script>

<style scoped>
h1{color:red}
</style>>
