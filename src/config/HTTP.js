import axios from 'axios'
import config from './config'

const http = axios.create({
  baseURL: config.apiUrl
})

http.interceptors.request.use(config => {
  config.headers.common.Autorization = `Bearer ${window.localStorage.getItem(config.TOKEN_CODIUB)}`
  return config
})
export default {
  http
}
