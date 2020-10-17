<template>
  <div>
    <p>Lista de Categorias</p>
    <hr />

    <div class="mb-4" v-if="form">
      <hr>
      <b-form-input readonly  v-model="categoriaSelected.id" placeholder="Código da Categoria"></b-form-input>
      <b-form-input v-model="categoriaSelected.nome" class="mt-2 mb-2" placeholder="Digite o nome da Categoria"></b-form-input>
      <b-form-input v-model="categoriaSelected.descricao" class="mt-2 mb-2" placeholder="Digite a descrição da Categoria"></b-form-input>
      <b-button variant="primary" class=" mb-4" @click="$emit('addOrUpdate',categoriaSelected)">{{categoriaSelected.id > 0 ? 'Editar' : 'Salvar'}}</b-button>
      <b-button variant="danger" class=" ml-3 mb-4" @click="cancel">Cancelar</b-button>
    </div>

     <div>
      <b-table
        striped
        hover
        :items="categorias"
        :fields="fields"
        :sort-by.sync="sortBy"
      >
    <template v-slot:cell(Opcoes)="{ item }"> <!-- `item` -->
      <b-button variant="primary" class="mr-4" @click="editar(item)">Editar</b-button>
      <b-button variant="danger" @click="excluir(item)">Excluir</b-button>
    </template>
      </b-table>
    </div>

  </div>
</template>
<script>
export default {
  name: 'Lista',
  data () {
    return {

      sortBy: 'id',
      categoriaSelected: {
        id: 0,
        nome: null,
        descricao: null
      },
      fields: [
        { key: 'id', label: 'Código', sortable: true },
        { key: 'nome', label: 'Nome', sortable: true },
        { key: 'descricao', label: 'Descrição', sortable: true },
        { key: 'Opcoes', label: 'Opções', sortable: true }
      ]

    }
  },
  props: {
    categorias: {
      type: Array,
      required: true
    },
    form: null
  },
  watch: {
    form: function (newValue, oldValue) { // verificar alterações nesta variavel
      if (newValue !== true) { this.categoriaSelected = { id: 0, nome: null, descricao: null } }
    }
  },
  methods: {
    editar (item) {
      this.categoriaSelected = item
      this.$emit('editar')
    },
    excluir (item) {
      this.$emit('excluir', item)
    },
    cancel () {
      this.categoriaSelected = { id: 0, nome: null, descricao: null }
      this.$emit('cancel')
    }

  }
}
</script>
