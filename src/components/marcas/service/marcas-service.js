
// https://github.com/axios/axios#response-schema
import axios from 'axios'
import config from '@/config/config'
const uri = `${config.apiUrl}/marcas/`

const read = async () => {
  return await axios.get(uri)
    .then((response) => {
      return response.data
    })
    .catch(error => {
      return error.response.data.error
    })
}

const filter = async nome => {
  return await axios.get(`${uri}?nome_like=${nome}`)
    .then((response) => {
      return response.data
    })
    .catch(error => {
      return error.response.data.error
    })
}

const update = async item => {
  return await axios.put(`${uri}${item.id}`, item)
    .then((response) => {
      return response.data
    })
    .catch(error => {
      return error.response.data.error
    })
}

const create = async item => {
  return await axios.post(uri, item)
    .then((response) => {
      return response.data
    })
    .catch(error => {
      return error.response.data.error
    })
}

const del = async id => {
  return await axios.delete(`${uri}${id}`)
    .then((response) => {
      return response
    })
    .catch(error => {
      return error.response
    })
}

export default {
  read,
  filter,
  update,
  create,
  del
}
