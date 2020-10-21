<template>
  <div>
    <p>Lista de Categorias</p>
    <hr />

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
