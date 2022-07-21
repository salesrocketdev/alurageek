<template>
  <div class="hero">
    <header class="pl-20 p-10 flex flex-col items-start justify-end">
      <h1 class="text-[#fff] text-[32px] font-[700] p-5">Dezembro Promocional</h1>
      <h2 class="text-[#fff] text-[24px] font-[500] pl-5 pb-3">Produtos selecionados com 33% de desconto</h2>
      
      <button class="primary-button ml-5"
        @click="store.state.productStore.category = 'diversos', toCategory()">
        Ver promoções
      </button>
    </header>
  </div>
</template>

<script setup>
  import { useRouter } from 'vue-router';
  import { useStore } from 'vuex';

  const router = useRouter();
  const store = useStore();
  
  function toCategory() {
    router.push('../list/' + store.state.productStore.category);
  }
</script>

<style>
.hero header {
  background-image: url('../assets/img/hero.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 350px;
}
</style>