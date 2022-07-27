<template>
  <nav id="myTopNav">     
    <div class="header-logo flex flex-column items-center justify-between mr-3">
      <img class="header-icon" src="../assets/img/logo.svg" alt="Alura Geek">

      <a @click="toogleSearch()" id="searchToggle" title="Pesquisar" class="ml-auto mr-3 text-end text-[28px]" v-if="!store.state.loginStore.isLogged"><i class="fa fa-search p-[10px] text-[#2a7ae4]" aria-hidden="true"></i></a>
      <a @click="toogleMenu()" id="menuToggle" title="Menu" class="text-end text-[28px]"><i class="fa fa-bars p-[10px] text-[#2a7ae4]" aria-hidden="true"></i></a>
    </div>

    <div id="header-search" class="header-search hidden" v-if="!store.state.loginStore.isLogged">
      <form class="bg-[#F5F5F5] rounded-[25px] flex" v-on:submit.prevent>
        <input class="bg-[#F5F5F5] text-[#A2A2A2] h-[46px] w-full pl-3 rounded-l-[25px]" title="O que deseja encontrar?" type="search" placeholder="O que deseja encontrar?" v-model="inputValue"/>

        <button @click="searchButtonPressed()" title="Pesquisar" class="text-[#a2a2a2] hover:bg-[#2A7AE4] hover:text-[#fff] rounded-r-[25px] w-[56px]" type="submit"><i class="fa fa-search"></i></button>
      </form>
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

      <router-link to="" logout v-slot="{ toLogOut }" v-if="store.state.loginStore.isLogged">
        <li @click="logOut()" @keypress.enter="toLogOut" role="link">Sair</li>
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

      <router-link to="" v-if="store.state.loginStore.isLogged">
        <button @click="logOut()" title="Sair" class="secondary-button" type="button">Sair</button>
      </router-link>
    </div>
  </nav>
  <div id="myOutsideNav" class="outsideNav bg-gray-900/50 hidden" @click="toogleMenu()"></div>
</template>

<script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { useStore } from 'vuex';

  let inputValue = ref('');

  const router = useRouter();
  const store = useStore();

  function logOut() {
    localStorage.clear();
    store.commit('loginStore/storeIsLogged', false);

    console.log('Usuário desconectado.');
    router.push('/login');
  }

  function searchButtonPressed(){
    if (inputValue.value <= 0) {
      alert('Insira uma informação para pesquisar');
    } else {
      store.dispatch("productStore/getByTitle", inputValue.value).then(response => {
        store.commit('productStore/storeProducts', response.data);
        store.commit('searchStore/storeIsFiltering', false);
        store.commit('searchStore/storeIsSearching', true);

        if (response.data <= 0) {
          store.commit('searchStore/storeNotFound', true);
        } else {
          store.commit('searchStore/storeNotFound', false);
        }
      }).finally( () => {
        router.push('../list/' + inputValue.value.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''));      
        inputValue.value = '';
      });  
    }
  }

  function toogleSearch() {
    const headerList = document.querySelector('#header-search');

    if (headerList.classList == "header-search hidden") {
      headerList.classList = "header-search block";
    } else {
      headerList.classList = "header-search hidden";
    }
  }

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