<template>
  <div class="item-info mb-5">
    <div class="item-image mb-2">
      <img class="w-full" :src="props.product.url" alt="">        
    </div>

    <div class="item-desc">
      <p class="font-[500] text-[16px]">{{props.product.title}}</p>
      <p class="font-[700] text-[16px]">R$ {{props.product.price}}</p>
      <p class="font-[500] text-[16px]">{{props.product.description}}</p>
    </div>

    <div class="item-action flex flex-col" v-if="!store.state.loginStore.isLogged">
      <router-link to="info">
        <button class="w-full primary-button" @click="seeProduct()">ver produto</button>
      </router-link>
    </div>
  </div>
</template>

<script setup>
  import { useStore } from 'vuex';
  import { defineProps } from 'vue';

  const store = useStore();
  const props = defineProps({
    product: {
      id: String,
      url: String,
      title: String,
      price: Number,
      description: String
    }
  });

  function seeProduct() {
    //router.push('info/' + props.product.id);
  }
</script>

<style scoped>
.item-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 170px;
  margin-right: 10px;
}

.item-info .item-title {
  display: flex;
  width: 100%;
}

.item-info .item-title p, .item-desc p {
  padding: 5px;
  padding-left: 0px;
  color: var(--main-primary-text-color);
}

.item-info .item-title p:nth-child(2){
  margin-left: auto;
}
.item-info .item-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  font-weight: 600;
  padding: 10px 10px 0px 10px;
  color: var(--main-primary-text-color);
}
</style>