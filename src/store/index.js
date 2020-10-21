import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  title: undefined,
  load: false,
  message: { show: false, message: null, color: 'red' },
  userName: undefined
}

const types = {
  SET_TITLE: 'SET_TITLE',
  SET_LOAD: 'SET_LOAD',
  SET_MESSAGE: 'SET_MESSAGE',
  SET_NOMEUSUARIO: 'SET_USERNAME'
}

const mutations = {
  [types.SET_TITLE]: (state, { title }) => {
    state.title = title
  },
  [types.SET_LOAD]: (state, { load }) => {
    state.load = load
  },
  [types.SET_MESSAGE]: (state, { message }) => {
    state.message = message
  },
  [types.SET_USERNAME]: (state, { nomeUsuario }) => {
    state.userName = nomeUsuario
  }
}

const actions = {
  setTitle: ({ commit }, payload) => {
    commit(types.SET_TITLE, payload)
  },
  setLoad: ({ commit }, payload) => {
    // console.log('payload: ', payload)
    commit(types.SET_LOAD, payload)
  },
  setMessage: ({ commit }, payload) => {
    // console.log('payload: ', payload)
    commit(types.SET_MESSAGE, payload)
  },
  setUserName: ({ commit }, payload) => {
    commit(types.SET_USERNAME, payload)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
