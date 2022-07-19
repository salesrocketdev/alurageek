import App from './App.vue'

import { createApp } from 'vue'
import { createStore } from 'vuex'
import { createRouter, createWebHistory } from "vue-router";

//Standard Module
import MainPage from "./modules/standard/MainPage.vue";
import HomePage from "./modules/standard/HomePage.vue";
import ProductInfoPage from "./modules/standard/ProductInfoPage.vue";
import LoginPage from "./modules/standard/LoginPage.vue";

//Admin Module
import AdminMainPage from "./modules/admin/MainPage.vue";
import AdminHomePage from "./modules/admin/HomePage.vue";
import AdminProductListPage from "./modules/admin/products/pages/ProductListPage.vue";

import FormStore from "./store/form.store";
import ProductStore from "./store/product.store";
import DialogStore from "./store/dialog.store";
import LoginStore from "./store/login.store";
import SearchStore from "./store/search.store";

const router = createRouter({
  history: createWebHistory(),
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
          path: "info/:id",
          component: ProductInfoPage,
        },
      ],
    },
    {
      path: "/admin",
      redirect: "/admin/panel",
      component: AdminMainPage,
      children: [
        {
          path: "panel",
          component: AdminHomePage,
        },
        {
          path: "list",
          component: AdminProductListPage,
        }
      ],
    },
    {
      path: "/login",
      component: LoginPage,
    },
  ],
});

const app = createApp(App);

const store = createStore({
  modules: {
    formStore: FormStore,
    productStore: ProductStore,
    dialogStore: DialogStore,
    loginStore: LoginStore,
    searchStore: SearchStore,
  }
})

app.use(store);
app.use(router);
app.mount("#app");
