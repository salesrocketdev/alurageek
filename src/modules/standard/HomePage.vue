<template>
  <TheHeader></TheHeader>      
  <div class="content-box">
    <div class="content">
      <h1 class="title">Lista de produtos</h1>
    </div>

    <div class="product-list">
      <TheCard></TheCard>
    </div>
  </div>

</template>

<script setup>
  import TheHeader from '../../components/TheHeader.vue';
  import TheCard from '../../components/TheCard.vue';
</script>

<style>

</style>