import App from './App.vue'

import { createApp } from 'vue'
import { createStore } from 'vuex'
import { createRouter, createWebHashHistory } from "vue-router";

import HomePage from "./modules/admin/HomePage.vue";
import ProductListPage from "./modules/admin/products/pages/ProductListPage.vue";
import MainPage from "./modules/admin/MainPage.vue";

import FormStore from "./store/form.store";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    {
      path: "/",
      component: MainPage,
      children: [
        {
          path: "home",
          component: HomePage,
        },    
        {
          path: "product",
          component: ProductListPage,
        },  
      ],
    },
  ],
});

const app = createApp(App);

const store = createStore({
  modules: {
    //tripStore: TripStore,
    formStore: FormStore,
  }
})

app.use(store);
app.use(router);
app.mount("#app");