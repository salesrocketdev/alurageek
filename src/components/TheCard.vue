<template>
  <div class="item-info mb-5 shadow-lg">
    <div class="item-image p-[5px] min-w-[180px] min-h-[180px]">
      <img class="w-full" :src="props.product.url" alt="">        
    </div>

    <div class="item-desc p-3">
      <p class="font-[500] text-[16px]">{{props.product.title}}</p>
      <p class="font-[700] text-[16px]">R$ {{props.product.price}}</p>
      <p class="font-[400] text-[13px]">1x de R$ {{props.product.price}} sem juros no cartão de crédito</p>
    </div>

    <div class="item-action flex flex-col" v-if="!store.state.loginStore.isLogged">
      <button class="w-full primary-button" @click="handlerOpen(product)">ver produto</button>
    </div>
  </div>
</template>

<script setup>
  import { useRouter } from 'vue-router';
  import { useStore } from 'vuex';
  import { defineProps } from 'vue';

  const router = useRouter();
  const store = useStore();
  const props = defineProps({
    product: {
      id: String,
      url: String,
      title: String,
      price: Number,
      category: String
    }
  });

  function handlerOpen(product) {
    store.commit('productStore/storeProduct', product);

    router.push('info/' + props.product.id);
  }
</script>

<style scoped>

</style>