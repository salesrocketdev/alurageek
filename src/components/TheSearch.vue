<template>
  <input class="form-input w-full" title="Pesquisar Produto" type="search" placeholder="Pesquisar produto..." v-model="inputValue"/>
  <button
    @click="commit()"
    v-on:click="emit('handlerSearch')"
    title="Pesquisar" type="submit" 
    class="base-circle-button hover:text-[#212121]">
    <i class="fa fa-search" aria-hidden="true"></i>
  </button>

  <button
    v-on:click="emit('handlerForm')"
    title="Adicionar Produto" type="button"
    class="base-circle-button">
    <i class="fa fa-plus" aria-hidden="true"></i>
  </button>
</template>

<script setup>
  import { defineEmits, ref } from 'vue';
  import { useStore } from 'vuex';

  let inputValue = ref();

  const store = useStore();
  const emit = defineEmits([
    'handlerForm',
    'handlerSearch'
  ]);

  function commit() {
    store.commit('searchStore/storeTitle', inputValue.value);
    inputValue.value = '';
  }
</script>

<style scoped>
</style>