export default {
  namespaced: true,
  state () {
    return {
      isLoading: false,
      isOpen: false,
      isNew: false,
      title: '',
      id: 0,
    }
  },
  mutations: {
    storeIsOpen (state, payload) {
      state.isOpen = payload;
      state.isLoading = true;
    },
    storeIsNew (state, payload) {
      state.isNew = payload;
      state.title = 'inserir produto';
      state.isLoading = false;
    },
    storeId (state, payload) {
      state.id = payload;
      state.title = 'editar produto';      
    },
    storeIsLoading (state, payload) {
      state.isLoading = payload;
    },
  },
}