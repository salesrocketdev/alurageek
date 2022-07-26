<template>
  <!-- SECTION PRODUTOS RELACIONADOS-->
  <section class="content mt-10">
    <h1 class="title">Produtos Similares</h1>
  </section>

  <template v-if="store.state.productStore.IsLoadingRelated">
    <TheLoading></TheLoading>
  </template>
  
  <template v-if="!store.state.productStore.IsLoadingRelated">  
    <section class="product-list">
      <TheCard v-for="related in store.state.productStore.related" :key="related.id" :product="related"></TheCard>
    </section>
  </template>
</template>

<script setup>
  import TheCard from '@/components/TheCard.vue';
  import TheLoading from '@/components/TheLoading.vue';
  
  import { useStore } from 'vuex';
  import { onMounted } from 'vue';

  const store = useStore();

  function getByRelated(){
    store.dispatch("productStore/getByRelated", store.state.productStore.category).then(response => {
      store.commit('productStore/storeProductsRelated', response.data.slice(0,6));
    }).finally( () => {
      store.commit('productStore/storeIsRelatedLoading', false);
      store.commit('productStore/storeIsLoading', false);
    });
  }

  onMounted(() => {
    store.commit('productStore/storeIsRelatedLoading', true);
    store.commit('productStore/storeProductsRelated', {});

    setTimeout(() => getByRelated(), 4000);
  });
</script>