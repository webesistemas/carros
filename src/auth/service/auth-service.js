import decode from 'jwt-decode' // To install it, you can run: npm install --save jwt-decode
// import http from '../../config/HTTP'
import config from '../../config/config'
import axios from 'axios'

export async function loginUser (username, password) {
  const response = { status: null, response: null }
  await axios.post(config.loginUrl, { email: username, password: password })
    .then(resp => {
      setAuthToken(resp.data.token)
      response.status = 'ok'
      response.response = resp
    })
    .catch(e => {
      response.status = 'error'
      response.response = e
    })
  return response
}

export function logoutUser () {
  clearAuthToken()
}

export function setAuthToken (token) {
  localStorage.setItem(config.TOKEN_CODIUB, token)
}

export function getAuthToken () {
  return localStorage.getItem(config.TOKEN_CODIUB)
}

export function clearAuthToken () {
  // http.defaults.headers.common.Authorization = ''
  localStorage.removeItem(config.TOKEN_CODIUB)
}

export function isLoggedIn () {
  const authToken = getAuthToken()
  return !!authToken && !isTokenExpired(authToken)
}

export function getUserInfo () {
  if (isLoggedIn()) {
    return decode(getAuthToken())
  }
}

function getTokenExpirationDate (encodedToken) {
  const token = decode(encodedToken)
  if (!token.exp) {
    return null
  }

  const date = new Date(0)
  date.setUTCSeconds(token.exp)

  return date
}

function isTokenExpired (token) {
  const expirationDate = getTokenExpirationDate(token)
  console.log('expira em ', expirationDate)
  return expirationDate < new Date()
}
