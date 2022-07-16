<template>
  <div class="content-box">
    <div class="content">
      <h1 class="title">Product List</h1>
      <TheSearch @handlerForm="add()"></TheSearch>
    </div>

    <!--Edit/Add Side Form-->
    <ProductForm></ProductForm>
  </div>
</template>

<script setup>
  import TheSearch from '@/components/TheSearch.vue';
  import ProductForm from '../components/ProductForm.vue';

  import { useStore } from 'vuex';

  const store = useStore();

  function add() {
    store.commit('formStore/storeIsOpen', true);
    console.log('abriu form')
    store.commit('formStore/storeIsNew', true);
  }
</script>