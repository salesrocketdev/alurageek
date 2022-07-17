<template>
  <div class="content-box">
    <div class="content">
      <h1 class="title w-[250px]">Lista de produtos</h1>
      <TheSearch @handlerForm="add()" @handler-dialog="del()"></TheSearch>
    </div>

    <div class="bg-[#fff] relative overflow-x-auto h-5/6 sm:rounded-[5px]">
      <table class="w-full text-sm text-left text-[#6D6D6D]">
        <thead class="text-xs bg-[#2a7ae4] text-gray-100 uppercase">
          <tr>
            <th scope="col" class="px-6 py-3">ID</th>
            <th scope="col" class="px-6 py-3">Título</th>
            <th scope="col" class="px-6 py-3">Categoria</th>
            <th scope="col" class="px-6 py-3">Preço</th>
            <th scope="col" class="px-6 py-3">Ações</th>
          </tr>
        </thead>

        <tbody>
          <tr class="border-b hover:bg-[#2a7ae420] border-t" v-for="product in store.state.productStore.products" :key="product" :product="product">
            <th scope="row" class="px-6 py-4">{{product.id}}</th>
            <th scope="row" class="px-6 py-4 whitespace-nowrap">{{product.title}}</th>
            <td class="px-6 py-4">{{product.category}}</td>
            <td class="px-6 py-4">R$ {{product.price}}</td>
            <td class="px-6 py-4 text-start flex space-x-4">
              <a class="font-medium text-blue-600 cursor-pointer" title="Editar">
                <i class="p-3 bg-gray-200 rounded-[25px] text-gray-500 hover:bg-[#2a7ae4] hover:text-gray-200 fa-solid fa-pen"></i>
              </a>

              <a class="font-medium text-blue-600 cursor-pointer" title="Deletar">
                <i class="p-3 bg-gray-200 rounded-[25px] text-gray-500 hover:bg-[#2a7ae4] hover:text-gray-200 fa-solid fa-trash-can"></i>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
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
  import { onMounted } from 'vue';

  const store = useStore();

  function add() {
    store.commit('formStore/storeIsOpen', true);
    store.commit('formStore/storeIsNew', true);
  }
  function del() {
    store.commit('dialogStore/storeIsOpen', true);
  }
  function get(){
    store.dispatch("productStore/get");
  }
  onMounted(() => {
    get();
  });
</script>