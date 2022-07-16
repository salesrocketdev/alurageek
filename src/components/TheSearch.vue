<template>
  <input class="form-input w-full" title="Pesquisar Produto" type="text" placeholder="Pesquisar produto..." />

  <button
    title="Pesquisar" type="button" 
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
  import { defineEmits } from 'vue';

  const emit = defineEmits([
    'handlerForm',
  ]);
</script>

<style scoped>
</style>