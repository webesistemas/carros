<template>
  <div>
    <h1>Categorias</h1>
    <hr>
     <b-button variant="primary" class=" ml-3 mb-4" @click="form = !form">{{ form ? 'Cancelar' : 'Cadastrar' }}</b-button>
    <lista :categorias="categorias" :form="form" @addOrUpdate="addOrUpdate" @editar="editar" @excluir="deleteItem" @cancel="hideForm" />
  </div>
</template>
<script>
import config from './../../config/config'
import Lista from './lista.vue'
import axios from 'axios'
// https://github.com/axios/axios#response-schema
export default {
  name: 'Categorias',

  components: {
    Lista
  },
  data () {
    return {
      uri: `${config.apiUrl}/categorias/`,
      categorias: [],
      form: null
    }
  },
  created () {
    axios.get(this.uri)
      .then((response) => {
        console.log(response)
        this.categorias = response.data
      })
      .catch(error => {
        console.log(error.response.data.error)
      })
  },
  methods: {
    addOrUpdate (item) {
      if (item.id > 0) {
        axios.put(`${this.uri}${item.id}`, item)
          .then((response) => {
            console.log(response)
            const indice = this.categorias.findIndex(t => t.id === item.id)
            this.categorias.splice(indice, 1, item)
            this.hideForm()
          })
          .catch(error => {
            console.log(error.response.data.error)
          })
      } else {
        axios.post(`${this.uri}`, item)
          .then((response) => {
            console.log(response)
            this.categorias.push(response.data)
            this.hideForm()
          })
          .catch(error => {
            console.log(error.response.data.error)
          })
      }
    },
    deleteItem (item) {
      const confirmar = window.confirm('Deseja realmente excluir ?')
      if (confirmar) {
        axios.delete(`${this.uri}${item.id}`)
          .then((response) => {
            const indice = this.categorias.findIndex(t => t.id === item.id)
            this.categorias.splice(indice, 1)
          })
      }
    },
    hideForm () {
      this.form = null
    },
    editar () {
      this.form = true
    }

  }
}
</script>
