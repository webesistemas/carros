
// https://github.com/axios/axios#response-schema
import axios from 'axios'
import config from '../../config/config'

const read = async () => {
  return await axios.get(`${config.apiUrl}/marcas`)
    .then((response) => {
      return response.data
    })
    .catch(error => {
      return error.response.data.error
    })
}

const filterMarcas = async nome => {
  return await axios.get(`${config.apiUrl}/marcas/?nome_like=${nome}`)
    .then((response) => {
      return response.data
    })
    .catch(error => {
      return error.response.data.error
    })
}

const update = async item => {
  return await axios.put(`${config.apiUrl}/marcas/${item.id}`, item)
    .then((response) => {
      return response.data
    })
    .catch(error => {
      return error.response.data.error
    })
}

const create = async item => {
  return await axios.post(`${config.apiUrl}/marcas/`, item)
    .then((response) => {
      return response.data
    })
    .catch(error => {
      return error.response.data.error
    })
}

const del = async id => {
  return await axios.delete(`${config.apiUrl}/marcas/${id}`)
    .then((response) => {
      return response
    })
    .catch(error => {
      return error.response
    })
}

export default {
  read,
  filterMarcas,
  update,
  create,
  del
}
