<template>
  <div class="content-box">
    <div class="content">
      <h1 class="title w-[250px]">Lista de produtos</h1>
      <TheSearch @handlerForm="add()"></TheSearch>
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
  import { onMounted } from 'vue';

  const store = useStore();

  function add() {
    store.commit('productStore/storeProduct', {});
    store.commit('formStore/storeIsOpen', true);
    store.commit('formStore/storeIsNew', true);
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
      store.dispatch('productStore/post', store.state.productStore.product).then((response) => {
        console.log(response)

        get();
      });
    }else{
      console.log('editou')
      store.dispatch('productStore/put', store.state.productStore.product).then((response) => {
        console.log(response);
        
        get();
      });
    }
  }
  function get(){
    store.dispatch("productStore/get");
  }
  onMounted(() => {
    get();
  });
</script>