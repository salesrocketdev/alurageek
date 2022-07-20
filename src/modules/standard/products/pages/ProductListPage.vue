<template>
  <TheHeader></TheHeader>      
  <div class="content-box">

    <!-- SECTION STAR WARS-->
    <section class="content flex justify-between">
      <h1 class="title">Seção: {{route.params.category}}</h1>
    </section>

    <section class="product-list">
      <TheCard v-for="products in store.state.productStore.products" :key="products.id" :product="products"></TheCard>
    </section>
  </div>
</template>

<script setup>
  import TheHeader from '@/components/TheHeader.vue';
  import TheCard from '@/components/TheCard.vue';

  import { useRoute } from 'vue-router';
  import { useStore } from 'vuex';
  import { onMounted } from 'vue';

  const route = useRoute();
  const store = useStore();

  function getByCategory(){
    store.dispatch("productStore/getByCategory", route.params.category).then(response => {

      store.commit('productStore/storeProducts', response);
    });    
  }

  function get(){
    store.dispatch("productStore/get");
  }

  onMounted(() => {
    if (route.params.category == 'diversos') {
      get();
    } else {
      getByCategory();
    }
  });
</script>

<style>

</style>