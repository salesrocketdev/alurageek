import { http } from "../shared/http";

export default {
  namespaced: true,
  state() {
    return {
      products: [],
      product: {
        url: "",
        title: "",
        category: "",
        price: 0,  
        description: "",
      }
    }
  },
  mutations: {
    storeProducts(state, payload) {
      state.products = payload;
    },
    storeProduct(state, payload) {      
      state.product = payload;
    },
  },
  actions: {
    async get({ commit }) {
      return new Promise((resolve, reject) => {
        http.get("v1/products", {
          headers: { 'Authorization': localStorage.getItem('token') }
        }).then(response => {
          commit("storeProducts", response.data);
          resolve(response.data);
        }, error => {
          reject(error);
        })
      });
    },

    async getById({ commit }, payload) {
      return new Promise((resolve, reject) => {
        http.get("v1/products/" + payload, {
          headers: { 'Authorization': localStorage.getItem('token') }
        }).then(response => {
          commit("storeProduct", response.data);
          resolve(response.data);
        }, error => {
          reject(error);
        })
      });
    },

    async post({ commit }, payload) {
      return new Promise((resolve, reject) => {
        http.post("v1/products", payload, {
          headers: { 'Authorization': localStorage.getItem('token') }
        }).then(response => {
          commit("storeProduct", {});
          resolve(response.data);
        }, error => {
          reject(error);
        });
      });
    },

    async put({ commit }, payload) {
      return new Promise((resolve, reject) => {
        http.put("v1/products", payload, {
          headers: { 'Authorization': localStorage.getItem('token') }
        }).then(response => {
          commit("storeProduct", {});
          resolve(response.data);
        }, error => {
          reject(error);
        })
      });
    },

    async delete({ commit }, payload) {
      return new Promise((resolve, reject) => {
        http.delete("v1/products/" + payload, {
          headers: { 'Authorization': localStorage.getItem('token') }
        }).then(response => {
          commit("storeProduct", {});
          resolve(response.data);
        }, error => {
          reject(error);
        })
      });
    },
  },
}