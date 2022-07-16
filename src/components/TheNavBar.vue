<template>
  <header class="header" id="myTopnav">
    <nav>     
      <div class="header-logo">
        <img class="header-icon" src="../assets/img/logo.svg" alt="Alura Geek">
      </div>

      <ul class="header-list">
        
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
  </header>
</template>

<script setup>
  import { useStore } from 'vuex';
  
  const store = useStore();
</script>

<style scoped>
header {
  padding: 20px;
}
nav {
  padding: 0px 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>