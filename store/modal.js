export const state = () => ({
  open: false,
  content: null,
  html: null
});

export const mutations = {
  SET_MODAL(state, value) {
    state.open = !!value
  },
  SET_MODAL_CONTENT(state, value) {
    state.content = value
  },
  SET_MODAL_HTML(state, value) {
    state.html = value
  },
};

export const actions = {
  openModal({ commit }, { html, content }) {
    
    if (html) {
      commit('SET_MODAL_HTML', html)
      commit('SET_MODAL_CONTENT', false)
      commit('SET_MODAL', true)
    } else if (content) {
      commit('SET_MODAL_HTML', false)
      commit('SET_MODAL_CONTENT', content)
      commit('SET_MODAL', true)
    } else {
      commit('SET_MODAL', false)
    }
  },
  closeModal({ commit }) {
    commit('SET_MODAL', false)
    commit('SET_MODAL_HTML', null)
    commit('SET_MODAL_CONTENT', null)
  }
};