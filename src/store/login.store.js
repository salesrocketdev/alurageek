import { http } from "../shared/http";

export default {
  namespaced: true,
  state () {
    return {
      login: "",
      isLogged: false
    }
  },
  mutations: {
    storeIsLogged (state, payload) {
      state.isLogged = payload;
    },
    storeLogin(state, payload) {      
      state.login = payload;
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