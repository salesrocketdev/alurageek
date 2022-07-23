<template>
  <div class="content-box">
    <h1 class="title w-[250px]">Olá, {{username}}</h1>

    <div class="content">

      <h1 class="title w-[250px]">Lista de Produtos</h1>
      <TheSearch @handlerForm="add()" @handlerSearch="searchByTitle()"></TheSearch>
    </div>

    <div class="filter-info">
      <h2 v-if=!store.state.searchStore.isFiltering class="text-[#bbb] text-end p-3"><i class="fa fa-filter mr-3"></i>Filtrando todos os registros</h2>
      <h2 v-if=store.state.searchStore.isFiltering class="text-[#bbb] text-end p-3"><i class="fa fa-filter mr-3"></i>Filtrando por "{{store.state.searchStore.title}}"</h2>
    </div>
    
    <TheTable :products="store.products" @handlerEdit="edit" @handlerRemove="del"></TheTable>
    
    <!--Edit/Add Side Form-->
    <ProductForm @handlerConfirmForm="handler"></ProductForm>

    <!--Dialog-->
    <TheDialog @handlerConfirm="confirmDel"></TheDialog>
  </div>
</template>

<script setup>
  import TheSearch from '@/components/TheSearch.vue';
  import TheTable from '../../../../components/TheTable.vue';
  import ProductForm from '../components/ProductForm.vue';
  import TheDialog from '../../../../components/TheDialog.vue';

  import { useStore } from 'vuex';
  import { onMounted, ref } from 'vue';
  
  const store = useStore();
  let username = ref(localStorage.getItem("username"));

  function add() {
    store.commit('productStore/storeProduct', {});
    store.commit('formStore/storeIsOpen', true);
    store.commit('formStore/storeIsNew', true);
  }
  function searchByTitle(){
    if (store.state.searchStore.title == '') {
      store.commit('searchStore/storeIsFiltering', false);
      get();
    } else {
      store.dispatch("productStore/getByTitle", store.state.searchStore.title).then(response => {
        store.commit('productStore/storeProducts', response);
        store.commit('searchStore/storeIsFiltering', true);
      });
    }    
  }

  function edit(id){    
    store.dispatch('productStore/getById', id).then(() => {
      store.commit('formStore/storeIsLoading', false);
    });
  }
  function del() {
    store.dispatch("productStore/delete", store.state.productStore.product.id).then(() => {

      get();
    });
  }
  function confirmDel(isConfirmed){
    if(isConfirmed){
      store.commit('dialogStore/storeIsOpen', false);
      del();
    }else{
      store.commit('dialogStore/storeIsOpen', false);
    }
  }
  function handler(novo){
    if(novo){
      store.dispatch('productStore/post', store.state.productStore.product).then(() => {

        get();
      });
    }else{
      store.dispatch('productStore/put', store.state.productStore.product).then(() => {
        
        get();
      });
    }
  }
  function get(){
    store.commit('productStore/storeProduct', {});
    store.dispatch("productStore/get");
  }
  onMounted(() => {
    get();
  });
</script>