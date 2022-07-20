<template>
  <template v-if="store.state.productStore.IsLoading">
    <div title="Carregando informações..." class="flex flex-wrap h-[250px] content-center relative h-5/6 sm:rounded-lg m-5">
      <svg class="animate-spin m-auto mt-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4335 4335" width="50" height="50">
        <path fill="#ddd" d="M3346 1077c41,0 75,34 75,75 0,41 -34,75 -75,75 -41,0 -75,-34 -75,-75 0,-41 34,-75 75,-75zm-1198 -824c193,0 349,156 349,349 0,193 -156,349 -349,349 -193,0 -349,-156 -349,-349 0,-193 156,-349 349,-349zm-1116 546c151,0 274,123 274,274 0,151 -123,274 -274,274 -151,0 -274,-123 -274,-274 0,-151 123,-274 274,-274zm-500 1189c134,0 243,109 243,243 0,134 -109,243 -243,243 -134,0 -243,-109 -243,-243 0,-134 109,-243 243,-243zm500 1223c121,0 218,98 218,218 0,121 -98,218 -218,218 -121,0 -218,-98 -218,-218 0,-121 98,-218 218,-218zm1116 434c110,0 200,89 200,200 0,110 -89,200 -200,200 -110,0 -200,-89 -200,-200 0,-110 89,-200 200,-200zm1145 -434c81,0 147,66 147,147 0,81 -66,147 -147,147 -81,0 -147,-66 -147,-147 0,-81 66,-147 147,-147zm459 -1098c65,0 119,53 119,119 0,65 -53,119 -119,119 -65,0 -119,-53 -119,-119 0,-65 53,-119 119,-119z"/>
      </svg>
    </div>
  </template>
  
  <template v-if="!store.state.productStore.IsLoading">
    <div class="item-info mb-5 shadow-lg">
      <div class="item-image p-[5px] min-w-[170px] min-h-[150px]">
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

    router.push('../info/' + props.product.id);
  }
</script>

<style scoped>

</style>