<template>
  <div class="content-box">
    <div class="content">
      <h1 class="title w-[200px]">Lista de Produtos</h1>
      <TheSearch @handlerForm="add()" @handler-dialog="openDialog()"></TheSearch>
    </div>

    <!--Edit/Add Side Form-->
    <ProductForm></ProductForm>

    <!--Dialog-->
    <TheDialog></TheDialog>
  </div>
</template>

<script setup>
  import TheSearch from '@/components/TheSearch.vue';
  import ProductForm from '../components/ProductForm.vue';
  import TheDialog from '../../../../components/TheDialog.vue';

  import { useStore } from 'vuex';

  const store = useStore();

  function add() {
    store.commit('formStore/storeIsOpen', true);
    store.commit('formStore/storeIsNew', true);
  }
  function openDialog() {
    store.commit('dialogStore/storeIsOpen', true);
  }
</script>