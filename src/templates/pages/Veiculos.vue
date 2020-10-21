<template>
  <div class="about">
    <Titulo  :titulo="titulo"/>
  </div>
</template>

<script>

import Titulo from './../components/Titulo.vue'
export default {
  name: 'Veiculos',
  data () {
    return {
      titulo: 'Lista de Veiculos'
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
