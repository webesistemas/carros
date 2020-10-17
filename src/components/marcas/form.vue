<template>
  <div class="mb-4">
    <p v-if="marca.id > 0" >Editar Marca : {{ marca.nome }}</p>
    <p v-else>Cadastrar nova Marca </p>

      <hr>
      <b-form-input readonly  v-model="marca.id" placeholder="Código da marca"></b-form-input>
      <b-form-input v-model="marca.nome" class="mt-2 mb-2" placeholder="Digite o nome da marca"></b-form-input>
      <b-button variant="primary" class=" mb-4" @click="$emit('addOrUpdate',marca)">{{marca.id > 0 ? 'Editar' : 'Salvar'}}</b-button>
      <b-button variant="danger" class=" ml-3 mb-4" @click="$emit('cancel')">Cancelar</b-button>
    </div>
</template>
<script>
export default {
  name: 'FormMarca',
  props: {
    marca: {
      type: Object,
      required: false
    }
  }

}
</script>
