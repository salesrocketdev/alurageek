<template>
  <nav id="myTopNav">     
    <div class="header-logo flex flex-column items-center justify-between">
      <img class="header-icon" src="../assets/img/logo.svg" alt="Alura Geek">
      <a @click="toogleMenu()" id="menuToggle" title="Menu" class="w-full text-end text-[28px]"><i class="fa fa-bars text-[#2a7ae4]" aria-hidden="true"></i></a>
    </div>

    <ul id="header-list" class="header-list hidden" @click="toogleMenu()">
      <router-link to="/home" ref="li" home v-slot="{ navigate }" v-if="!store.state.loginStore.isLogged">
        <li @click="navigate" @keypress.enter="navigate" role="link">Home</li>
      </router-link>

      <router-link to="/admin/panel" panel v-slot="{ toPanel }" v-if="store.state.loginStore.isLogged">
        <li @click="toPanel" @keypress.enter="toPanel" role="link">Vitrine de Produtos</li>
      </router-link>

      <router-link to="/admin/list" list v-slot="{ toTable }" v-if="store.state.loginStore.isLogged">
        <li @click="toTable" @keypress.enter="toTable" role="link">Painel Administrativo</li>
      </router-link>

      <router-link to="/login" login v-slot="{ toLogIn }" v-if="!store.state.loginStore.isLogged">
        <li @click="toLogIn" @keypress.enter="toLogIn" role="link">Login</li>
      </router-link>

      <router-link to="/login" logout v-slot="{ toLogOut }" v-if="store.state.loginStore.isLogged">
        <li @click="toLogOut" @keypress.enter="toLogOut" role="link">Sair</li>
      </router-link>
    </ul>        

    <div class="header-action">
      <router-link to="/home" v-if="!store.state.loginStore.isLogged">
        <button class="primary-button" type="button">Home Page</button>
      </router-link>

      <router-link to="/admin/panel" v-if="store.state.loginStore.isLogged">
        <button class="primary-button" type="button">Vitrine de Produtos</button>
      </router-link>
              
      <router-link to="/admin/list" v-if="store.state.loginStore.isLogged">
        <button title="Painel" class="secondary-button" type="button">Painel Administrativo</button>
      </router-link>

      <router-link to="/login" v-if="!store.state.loginStore.isLogged">
        <button title="Login" class="secondary-button" type="button">Login</button>
      </router-link>

      <router-link to="/login" v-if="store.state.loginStore.isLogged">
        <button title="Sair" class="secondary-button" type="button" @click="store.state.loginStore.isLogged = false">Sair</button>
      </router-link>
    </div>
  </nav>
  <div id="myOutsideNav" class="outsideNav bg-gray-900/50 hidden" @click="toogleMenu()"></div>
</template>

<script setup>
  import { useStore } from 'vuex';
  
  const store = useStore();

  function toogleMenu() {
    const outside = document.querySelector('#myOutsideNav');
    const headerList = document.querySelector('#header-list');

    if (headerList.classList == "header-list hidden") {
      headerList.classList = "header-list flex";
      outside.classList = "outsideNav bg-gray-900/50 block";
    } else {
      headerList.classList = "header-list hidden";
      outside.classList = "outsideNav bg-gray-900/50 hidden";
    }
  }
</script>

<style scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header-list {
  background-color: var(--main-nav-bg-color);
  width: 100%;
}
.header-list a li {
  padding: 15px 0px;
  text-align: center;
  margin: 10px;
}
</style>