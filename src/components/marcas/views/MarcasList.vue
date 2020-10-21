<template>
  <div>
    <p>Lista de Marcas</p>
    <hr />

     <div>
      <b-table
        striped
        hover
        :items="marcas"
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
  name: 'ListaMarcas',
  data () {
    return {
      sortBy: 'id',
      fields: [
        { key: 'id', label: 'Código', sortable: true },
        { key: 'nome', label: 'Nome', sortable: true },
        { key: 'Opcoes', label: 'Opções', sortable: true }
      ]
    }
  },
  props: {
    marcas: {
      type: Array,
      required: true
    },
    form: null
  },
  methods: {
    editar (item) {
      this.$emit('editar', item)
    },
    excluir (item) {
      this.$emit('excluir', item)
    }

  }
}
</script>
