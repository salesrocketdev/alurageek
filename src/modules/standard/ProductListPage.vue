<template>
  <div class="content-box">
      <TheHeader></TheHeader>      

    <div class="content">
      <h1 class="title w-[150px]">product list page</h1>
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