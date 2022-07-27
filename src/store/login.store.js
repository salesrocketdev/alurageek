import { http } from "../shared/http";

export default {
  namespaced: true,
  state () {
    return {
      login: "",
      loginWarning: "",
      isInvalid: false,
      isLogged: false,
      isLoginLoading: false
    }
  },
  mutations: {
    storeLoginWarning(state, payload) {      
      state.loginWarning = payload;
    },
    storeLogin(state, payload) {      
      state.login = payload;
    },
    storeIsLoginInvalid (state, payload) {
      state.isInvalid = payload;
    },
    storeIsLogged (state, payload) {
      state.isLogged = payload;
    },
    storeIsLoginLoading (state, payload) {
      state.isLoginLoading = payload;
    },
  },
  actions: {
    async post({ commit }, payload) {
      return new Promise((resolve, reject) => {
        http.post("v1/users/login", payload).
        then(response => {
          commit("storeLogin", {});
          resolve(response.data);
        }, error => {
          reject(error);
        });
      });
    },
    
  },
  getters: {

  }
}