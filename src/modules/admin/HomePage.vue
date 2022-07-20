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
  
  import { useStore } from 'vuex';
  import { onMounted } from 'vue';

  const store = useStore();
  
  function get(){
    store.commit('productStore/storeProduct', {});
    store.dispatch("productStore/get");
  }

  onMounted(() => {
    get();
  });
</script>

<style>

</style>