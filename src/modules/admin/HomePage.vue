<template>
  <div class="content-box">
    <div class="content">
      <h1 class="title w-full">Produtos Cadastrados</h1>
    </div>

    <div class="product-list">
      <TheCard v-for="product in store.state.productStore.products" :key="product" :product="product"></TheCard>
    </div>
  </div>

</template>

<script setup>
  import TheCard from '../../components/TheCard.vue';
  
  import { useRouter } from 'vue-router';
  import { useStore } from 'vuex';
  import { onBeforeMount, onMounted } from 'vue';

  const router = useRouter();
  const store = useStore();
  
  function get(){
    store.commit('productStore/storeProduct', {});
    store.commit('productStore/storeIsLoading', true);

    store.dispatch("productStore/get").then( response => {
      store.commit('productStore/storeProducts', response.data);
    }).finally( () => {
      store.commit('productStore/storeIsLoading', false);
    });
  }

  onBeforeMount(() => {
    store.state.loginStore.isLogged = localStorage.getItem('isAuthenticated');
    if (store.state.loginStore.isLogged == "true") {
      console.log('Usuário autenticado | ADMIN.');
    } else {
      console.log('Usuário não autenticado | ADMIN.');
      router.push('/home');
    }
  });

  onMounted(() => {
    get();
  });
</script>

<style>

</style>