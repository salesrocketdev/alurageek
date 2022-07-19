export default {
  namespaced: true,
  state () {
    return {
      title: '',
      isFiltering: false,
    }
  },
  mutations: {
    storeTitle (state, payload) {
      state.title = payload;
    },
    storeIsLoading (state, payload) {
      state.isLoading = payload;
    },
    storeIsFiltering (state, payload) {
      state.isFiltering = payload;
    },
  },
}