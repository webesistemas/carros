<template>
  <div>
    <h1>Categorias</h1>
    <hr>
    <b-button v-if="!form" variant="primary" class=" ml-3 mb-4" @click="form = !form">Cadastrar</b-button>
    <CategoriasForm v-if="form" :categoria="categoria" @cancel="cancelar" @addOrUpdate="addOrUpdate" />
    <b-form-input v-if="!form" v-model="nome" @keyup.enter="filterCategorias" class="mt-2 mb-2" placeholder="Digite o termo para busca e tecle enter"></b-form-input>
    <CategoriasList v-if="!form" :categorias="categorias"  @excluir="deleteItem"  @editar="editar" />
  </div>
</template>
<script>

import CategoriasList from './CategoriasList.vue'
import CategoriasForm from './CategoriasForm.vue'
import CategoriasService from './../service/categorias-service.js'

export default {
  name: 'Marcas',
  components: {
    CategoriasList, CategoriasForm
  },
  data () {
    return {
      nome: null,
      categorias: [],
      categoria: {
        id: 0,
        nome: null,
        descricao: null
      },
      form: null
    }
  },
  created () {
    this.readCategorias()
  },
  methods: {
    async readCategorias () {
      const response = await CategoriasService.read()
      this.categorias = response
    },
    async filterCategorias () {
      if (this.nome.trim != null && this.nome.trim !== '') {
        const response = await CategoriasService.filter(this.nome)
        this.categorias = response
      } else {
        this.readCategorias()
      }
    },
    async addOrUpdate (item) {
      if (item.id > 0) {
        const response = await CategoriasService.update(item)
        if (response.id > 0) {
          const indice = this.marcas.findIndex(t => t.id === item.id)
          this.marcas.splice(indice, 1, item)
          this.hideForm()
        }
      } else {
        const response = await CategoriasService.create(item)
        if (response.id > 0) {
          this.marcas.push(response)
          this.hideForm()
        }
      }
    },
    async deleteItem (item) {
      const confirmar = window.confirm('Deseja realmente excluir ?')
      if (confirmar) {
        const response = await CategoriasService.del(item.id)
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
