export default {
  namespaced: true,
  state () {
    return {
      isOpen: false,
      confirmed: false,
      message: ''
    }
  },
  mutations: {
    storeIsOpen (state, payload) {
      state.isOpen = payload;
    },
    storeConfirmed (state, payload) {
      state.confirmed = payload;
    },
    storeMessage (state, payload) {
      state.message = payload;
    },
    storeId (state, payload) {
      state.id = payload;
    },
  },
}