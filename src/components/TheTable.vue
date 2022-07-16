<template>
  <div class="content-box">
    <div class="bg-[#fff] relative overflow-x-auto h-5/6 sm:rounded-[5px] ml-5 mr-5">
      <table class="w-full text-sm text-left text-[#6D6D6D]">
        <thead class="text-xs bg-[#2a7ae4] text-gray-100 uppercase">
          <tr>
            <th scope="col" class="px-6 py-3">ID</th>
            <th scope="col" class="px-6 py-3">Título</th>
            <th scope="col" class="px-6 py-3">Descrição</th>
            <th scope="col" class="px-6 py-3">Categoria</th>
            <th scope="col" class="px-6 py-3">Preço</th>
            <th scope="col" class="px-6 py-3">Ações</th>
          </tr>
        </thead>

        <tbody>
          <tr class="border-b hover:bg-[#2a7ae420] border-t">
            <th scope="row" class="px-6 py-4">1</th>
            <th scope="row" class="px-6 py-4 whitespace-nowrap">Nome do produto</th>
            <th scope="row" class="px-6 py-4 whitespace-nowrap">Descrição do produto</th>
            <td class="px-6 py-4">Categoria</td>
            <td class="px-6 py-4">Preço do produto</td>
            <td class="px-6 py-4 text-start flex space-x-4">
              <a class="font-medium text-blue-600 cursor-pointer" title="Editar" @click="handlerEdit()">
                <i class="p-3 bg-gray-200 rounded-[25px] text-gray-500 hover:bg-[#2a7ae4] hover:text-gray-200 fa-solid fa-pen"></i>
              </a>

              <a class="font-medium text-blue-600 cursor-pointer" title="Deletar" @click="handlerDelete()">
                <i class="p-3 bg-gray-200 rounded-[25px] text-gray-500 hover:bg-[#2a7ae4] hover:text-gray-200 fa-solid fa-trash-can"></i>
              </a>
            </td>
          </tr>
          <tr class="border-b hover:bg-[#2a7ae420] border-t">
            <th scope="row" class="px-6 py-4">2</th>
            <th scope="row" class="px-6 py-4 whitespace-nowrap">Nome do produto</th>
            <th scope="row" class="px-6 py-4 whitespace-nowrap">Descrição do produto</th>
            <td class="px-6 py-4">Categoria</td>
            <td class="px-6 py-4">Preço do produto</td>
            <td class="px-6 py-4 text-start flex space-x-4">
              <a class="font-medium text-blue-600 cursor-pointer" title="Editar" @click="handlerEdit()">
                <i class="p-3 bg-gray-200 rounded-[25px] text-gray-500 hover:bg-[#2a7ae4] hover:text-gray-200 fa-solid fa-pen"></i>
              </a>

              <a class="font-medium text-blue-600 cursor-pointer" title="Deletar" @click="handlerDelete()">
                <i class="p-3 bg-gray-200 rounded-[25px] text-gray-500 hover:bg-[#2a7ae4] hover:text-gray-200 fa-solid fa-trash-can"></i>
              </a>
            </td>
          </tr>
          <tr class="border-b hover:bg-[#2a7ae420] border-t">
            <th scope="row" class="px-6 py-4">3</th>
            <th scope="row" class="px-6 py-4 whitespace-nowrap">Nome do produto</th>
            <th scope="row" class="px-6 py-4 whitespace-nowrap">Descrição do produto</th>
            <td class="px-6 py-4">Categoria</td>
            <td class="px-6 py-4">Preço do produto</td>
            <td class="px-6 py-4 text-start flex space-x-4">
              <a class="font-medium text-blue-600 cursor-pointer" title="Editar" @click="handlerEdit()">
                <i class="p-3 bg-gray-200 rounded-[25px] text-gray-500 hover:bg-[#2a7ae4] hover:text-gray-200 fa-solid fa-pen"></i>
              </a>

              <a class="font-medium text-blue-600 cursor-pointer" title="Deletar" @click="handlerDelete()">
                <i class="p-3 bg-gray-200 rounded-[25px] text-gray-500 hover:bg-[#2a7ae4] hover:text-gray-200 fa-solid fa-trash-can"></i>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

</template>

<script setup>
  import { useStore } from 'vuex';

  const store = useStore();
  
  function handlerEdit() {
    store.commit('formStore/storeIsOpen', true);
    store.commit('formStore/storeIsNew', true);
  }
  function handlerDelete() {
    store.commit('dialogStore/storeIsOpen', true);
  }
</script>

<style>

</style>