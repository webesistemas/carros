<template>
  <div class="about">
    <Titulo  :titulo="titulo"/>
    <Contato />
  </div>
</template>

<script>
import Contato from './Contato.vue'
import Titulo from './Titulo.vue'
export default {
  name: 'About',
  data () {
    return {
      titulo: 'Nome da pagina About'
    }
  },
  components: {
    Contato, Titulo
  }
}
</script>

<style scoped>
h1{color:red}
</style>>
