<template>
  <div>
    <h1>Marcas</h1>
    <hr>
    <b-button v-if="!form" variant="primary" class=" ml-3 mb-4" @click="form = !form">Cadastrar</b-button>
    <formMarca v-if="form" :marca="marca" @cancel="cancelar" @addOrUpdate="addOrUpdate" />
    <b-form-input v-if="!form" v-model="nome" @keyup.enter="filterMarcas" class="mt-2 mb-2" placeholder="Digite o nome para busca e tecle enter"></b-form-input>
    <listaMarcas v-if="!form" :marcas="marcas"  @excluir="deleteItem"  @editar="editar" />
  </div>
</template>
<script>

import ListaMarcas from './lista.vue'
import FormMarca from './form.vue'
import MarcasService from './service.js'

export default {
  name: 'Marcas',
  components: {
    ListaMarcas, FormMarca
  },
  data () {
    return {
      nome: null,
      marcas: [],
      marca: {
        id: 0,
        nome: null
      },
      form: null
    }
  },
  created () {
    this.readMarcas()
  },
  methods: {
    async readMarcas () {
      const response = await MarcasService.read()
      this.marcas = response
    },
    async filterMarcas () {
      if (this.nome.trim != null && this.nome.trim !== '') {
        const response = await MarcasService.filterMarcas(this.nome)
        this.marcas = response
      } else {
        this.readMarcas()
      }
    },
    async addOrUpdate (item) {
      if (item.id > 0) {
        const response = await MarcasService.update(item)
        if (response.id > 0) {
          const indice = this.marcas.findIndex(t => t.id === item.id)
          this.marcas.splice(indice, 1, item)
          this.hideForm()
        }
      } else {
        const response = await MarcasService.create(item)
        if (response.id > 0) {
          this.marcas.push(response)
          this.hideForm()
        }
      }
    },
    async deleteItem (item) {
      const confirmar = window.confirm('Deseja realmente excluir ?')
      if (confirmar) {
        const response = await MarcasService.del(item.id)
        if (response.status === 200) {
          const indice = this.marcas.findIndex(t => t.id === item.id)
          this.marcas.splice(indice, 1)
        }
      }
    },
    editar (item) {
      this.form = true
      this.marca = item
    },
    cancelar () {
      this.hideForm()
    },
    hideForm () {
      this.form = null
      this.marca = { id: 0, nome: null }
    }
  }
}
</script>
