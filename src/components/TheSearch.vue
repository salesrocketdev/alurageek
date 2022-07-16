<template>
  <input class="form-input" title="Pesquisar Produto" type="text" placeholder="Pesquisar produto..." />

  <button
    title="Pesquisar" type="button" 
    class="geek-circle-button">
    <i class="fa fa-search" aria-hidden="true"></i>
  </button>

  <button
    v-on:click="emit('handlerForm')"
    title="Adicionar Produto" type="button"
    class="geek-circle-button">
    <i class="fa fa-plus" aria-hidden="true"></i>
  </button>
</template>

<script setup>
  import { defineEmits } from 'vue';

  const emit = defineEmits([
    'handlerForm'
  ]);
</script>

<style scoped>
.form-input {
  width: 100%;
  border-radius: 5px;
}
</style>