<template>
  <div class="mb-4">
    <p v-if="categoria.id > 0" >Editar Categoria : {{ categoria.nome }}</p>
    <p v-else>Cadastrar nova Categoria </p>

      <hr>

      <b-form-input readonly  v-model="categoriaSelected.id" placeholder="Código da Categoria"></b-form-input>
      <b-form-input v-model="categoriaSelected.nome" class="mt-2 mb-2" placeholder="Digite o nome da Categoria"></b-form-input>
      <b-form-input v-model="categoriaSelected.descricao" class="mt-2 mb-2" placeholder="Digite a descrição da Categoria"></b-form-input>

      <b-button variant="primary" class=" mb-4" @click="$emit('addOrUpdate',categoria)">{{categoria.id > 0 ? 'Editar' : 'Salvar'}}</b-button>
      <b-button variant="danger" class=" ml-3 mb-4" @click="$emit('cancel')">Cancelar</b-button>
    </div>
</template>
<script>
export default {
  name: 'CategoriasForm',
  props: {
    categoria: {
      type: Object,
      required: false
    }
  }

}
</script>
