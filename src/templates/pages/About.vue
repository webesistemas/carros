<template>
  <div class="about">
    <Titulo  :titulo="titulo"/>
  </div>
</template>

<script>

import Titulo from './../components/Titulo.vue'
export default {
  name: 'About',
  data () {
    return {
      titulo: 'Nome da pagina About'
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
