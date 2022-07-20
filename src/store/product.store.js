import { http } from "../shared/http";

export default {
  namespaced: true,
  state() {
    return {
      starWars: [],
      consoles: [],
      related: [],
      products: [],
      product: {
        id: "",
        url: "",
        title: "",
        category: "",
        price: 0,
        description: "",
      },
      category: '',
      IsLoading: false
    }
  },
  mutations: {
    storeIsLoading(state, payload) {
      state.IsLoading = payload;
    },
    storeProducts(state, payload) {
      state.products = payload;
    },
    storeCategory(state, payload) {
      state.category = payload;
    },
    storeProductsStarWars(state, payload) {      
      state.starWars = payload;
    },
    storeProductsConsoles(state, payload) {      
      state.consoles = payload;
    },
    storeProductsRelated(state, payload) {      
      state.related = payload;
    },
    storeProduct(state, payload) {      
      state.product = payload;
    },
    storeProductId(state, payload) {      
      state.id = payload;
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

    async getByTitle({ commit }, payload) {
      return new Promise((resolve, reject) => {
        http.get("v1/products/Filter/Title/" + payload, {
          headers: { 'Authorization': localStorage.getItem('token') }
        }).then(response => {
          commit("storeProduct", response.data);
          resolve(response.data);
        }, error => {
          reject(error);
        })
      });
    },

    async getByCategory({ commit }, payload) {
      return new Promise((resolve, reject) => {
        http.get("v1/products/Filter/Category/" + payload, {
          headers: { 'Authorization': localStorage.getItem('token') }
        }).then(response => {
          commit("storeProduct", response.data);
          resolve(response.data);
        }, error => {
          reject(error);
        })
      });
    },

    async getByRelated({ commit }, payload) {
      return new Promise((resolve, reject) => {
        http.get("v1/products/Filter/Category/" + payload, {
          headers: { 'Authorization': localStorage.getItem('token') }
        }).then(response => {
          commit("storeProductsRelated", response.data);
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
        http.put("v1/products/" + payload.id, payload, {
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