<template>
  <!-- SECTION PRODUTOS RELACIONADOS-->
  <section class="content mt-10">
    <h1 class="title">Produtos Similares</h1>
  </section>

  <section class="product-list">
    <TheCard v-for="related in store.state.productStore.related.slice(0,6)" :key="related.id" :product="related"></TheCard>
  </section>
</template>

<script setup>
  import TheCard from '@/components/TheCard.vue';
  
  import { useStore } from 'vuex';
  import { onMounted } from 'vue';

  const store = useStore();

  function getByCategoryConsoles(){
    store.dispatch("productStore/getByRelated", store.state.productStore.category).then(response => {

      store.commit('productStore/storeProductsRelated', response);
    });    
  }

  onMounted(() => {
    setTimeout(getByCategoryConsoles, 1000);
  });
</script>