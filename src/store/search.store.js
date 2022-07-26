export default {
  namespaced: true,
  state () {
    return {
      title: '',
      notFound: false,
      isFiltering: false,
      isSearching: false,
    }
  },
  mutations: {
    storeTitle (state, payload) {
      state.title = payload;
    },
    storeNotFound (state, payload) {
      state.notFound = payload;
    },
    storeIsLoading (state, payload) {
      state.isLoading = payload;
    },
    storeIsFiltering (state, payload) {
      state.isFiltering = payload;
    },
    storeIsSearching (state, payload) {
      state.isSearching = payload;
    },
  },
}