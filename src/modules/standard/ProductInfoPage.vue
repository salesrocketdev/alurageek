<template>
  <div class="content-box">
    <div class="product-info">
      <div class="product-image">
        <img :src="store.state.productStore.product.url" alt="">
      </div>
      <div class="product-desc">
        <h1 class="text-[48px] font-[600] text-[#464646] pb-3">{{store.state.productStore.product.title}}</h1>
        <p class="text-[18px] font-[600] text-[#464646] pb-3">R$ {{store.state.productStore.product.price}}</p>
        <p class="text-[13px] font-[400] text-[#464646] pb-3">1x de R$ {{store.state.productStore.product.price}} sem juros no cartão de crédito</p>

        <p class="text-[14px] font-[400] text-[#464646] pb-3">{{store.state.productStore.product.description}}</p>
        <button title="Adicionar ao carrinho" class="primary-button w-full mb-3 hover:bg-[#f15ada]">Adicionar ao carrinho</button>
      </div>
    </div>
  </div>

</template>

<script setup>
  import { useRoute } from 'vue-router';  
  import { useStore } from 'vuex';
  import { onMounted } from 'vue';

  const route = useRoute();
  const store = useStore();

  function get(){
    store.dispatch("productStore/getById", route.params.id);
  }

  onMounted(() => {
    get();
  });
</script>

<style scoped>

</style>