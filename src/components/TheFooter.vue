<template>
  <footer>
    <p class="p-3">Desenvolvido com <i class="fa fa-heart text-red-700"></i> por Caio Sales</p>

    <p class="">2022</p>
  </footer>
  <h1 v-if="store.state.loginStore.isLogged" class="text-center p-5">Conectado como: {{username}}</h1>
</template>

<script setup>
  import { ref } from 'vue';
  import { useStore } from 'vuex';
  
  const store = useStore();

  let username = ref(localStorage.getItem("username"));
</script>

<style>

</style>