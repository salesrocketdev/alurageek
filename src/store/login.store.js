import { http } from "../shared/http";

export default {
  namespaced: true,
  state () {
    return {
      isLogged: false,
    }
  },
  mutations: {
    storeIsLogged (state, payload) {
      state.isLogged = payload;
    },
  },
  actions: {
    async post(state, payload) {
      return new Promise((resolve, reject) => {
        http.post("v1/authentication", payload).then(response => {
          resolve(response.data);
        }, error => {
          reject(error);
        });
      });
    },
  },
}