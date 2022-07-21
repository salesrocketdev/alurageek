<template>
  <TheHeader></TheHeader>      
  <div class="content-box">

    <!-- SECTION STAR WARS-->
    <section class="content flex justify-between">
      <h1 class="title">Star Wars</h1>
      <button @click="store.state.productStore.category = 'star wars', toCategory()"
        class="p-3 text-[13px] font-[600] text-[#464646] hover:text-[#2a7ae4]">
        Ver tudo
        <i class="fa fa-arrow-right"></i>
      </button>
    </section>

    <section class="product-list">
      <TheCard v-for="starwars in store.state.productStore.starWars.slice(0, 6)" :key="starwars.id" :product="starwars"></TheCard>
    </section>

    <!-- SECTION CONSOLES-->
    <section class="content flex justify-between">
      <h1 class="title">Consoles</h1>
      <button @click="store.state.productStore.category = 'consoles', toCategory()"
        class="p-3 text-[13px] font-[600] text-[#464646] hover:text-[#2a7ae4]">
        Ver tudo
        <i class="fa fa-arrow-right"></i>
      </button>
    </section>

    <section class="product-list">
      <TheCard v-for="consoles in store.state.productStore.consoles.slice(0, 6)" :key="consoles.id" :product="consoles"></TheCard>
    </section>

    <!-- SECTION Diversos-->
    <section class="content flex justify-between">
      <h1 class="title">Diversos</h1>
      <button @click="store.state.productStore.category = 'diversos', toCategory()"
        class="p-3 text-[13px] font-[600] text-[#464646] hover:text-[#2a7ae4]">
        Ver tudo
        <i class="fa fa-arrow-right"></i>
      </button>
    </section>

    <section class="product-list">
      <TheCard v-for="products in store.state.productStore.products" :key="products.id" :product="products"></TheCard>
    </section>
  </div>

</template>

<script setup>
  import TheHeader from '../../components/TheHeader.vue';
  import TheCard from '../../components/TheCard.vue';
  
  import { useRouter } from 'vue-router';
  import { useStore } from 'vuex';
  import { onMounted } from 'vue';

  const router = useRouter();
  const store = useStore();

  function toCategory() {
    store.commit('searchStore/storeIsSearching', false);
    router.push('list/' + store.state.productStore.category);
  }

  function getByCategoryStarWars(){
    store.dispatch("productStore/getByCategory", 'Star Wars').then(response => {

      store.commit('productStore/storeProductsStarWars', response);
      store.commit('searchStore/storeIsFiltering', true);
    });    
  }  

  function getByCategoryConsoles(){
    store.dispatch("productStore/getByCategory", 'Consoles').then(response => {

      store.commit('productStore/storeProductsConsoles', response);
      store.commit('searchStore/storeIsFiltering', true);
    });    
  }

  function get(){
    store.dispatch("productStore/get").then( () => {
      store.commit('productStore/storeIsLoading', true);
    }).finally( () => {
      store.commit('productStore/storeIsLoading', false);
    });
  }

  onMounted(() => {
    getByCategoryStarWars();
    getByCategoryConsoles();
    get();
  });
</script>

<style>

</style>