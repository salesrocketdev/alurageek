<template>
  <TheHeader></TheHeader>      
  <div class="content-box">

    <template v-if="store.state.productStore.IsLoading">
      <TheLoading></TheLoading>
    </template>

    <template v-if="!store.state.productStore.IsLoading">
      <!-- SECTION STAR WARS-->
      <section class="content flex justify-between">
        <h1 v-if="store.state.searchStore.isFiltering == false && store.state.searchStore.isSearching == false" class="title">Todos os produtos</h1>
        <h1 v-if=store.state.searchStore.isFiltering class="title">Filtrando por "{{route.params.category}}"</h1>
        <h1 v-if="store.state.searchStore.isFiltering == false && store.state.searchStore.isSearching == true" class="title">Filtrando por "{{route.params.category}}"</h1>
      </section>
      
      <h2 v-if=store.state.searchStore.notFound class="text-[#bbb] text-center p-5 w-full">Nenhum registro encontrado :(</h2>

      <section class="product-list">
        <TheCard v-for="products in store.state.productStore.products" :key="products.id" :product="products"></TheCard>
      </section>
    </template>
  </div>
</template>

<script setup>
  import TheHeader from '@/components/TheHeader.vue';
  import TheCard from '@/components/TheCard.vue';
  import TheLoading from '@/components/TheLoading.vue';

  import { useRoute, useRouter } from 'vue-router';
  import { useStore } from 'vuex';
  import { onBeforeMount, onMounted } from 'vue';

  const route = useRoute();
  const router = useRouter();
  const store = useStore();

  function getByCategory(){
    store.commit('productStore/storeIsLoading', true);

    store.dispatch("productStore/getByCategory", route.params.category).then(response => {

      store.commit('productStore/storeProducts', response.data);
    }).finally( () => {
      store.commit('productStore/storeIsLoading', false);
    });
  }

  function get(){
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
      router.push('/admin/panel');
    } else if (store.state.searchStore.isSearching == true) {
      store.commit('searchStore/storeIsFiltering', false);
    }
    else {
      console.log('Usuário não autenticado | STANDARD.');
    }
  });

  onMounted(() => {
    if (route.params.category == 'diversos') {
      store.commit('searchStore/storeNotFound', false);

      get();
    } else if (store.state.searchStore.isSearching == true) {
      store.commit('searchStore/storeIsSearching', true);
    }
    else {
      getByCategory();
    }
  });
</script>

<style>

</style>