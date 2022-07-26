<template>
  <the-form @handlerConfirmForm="handlerProduct">
    <template v-slot:title>
      {{store.state.formStore.title}}
    </template>

    <template v-slot:content>
      <template v-if="store.state.formStore.isLoading">
        <TheLoading></TheLoading>
      </template>

      <template v-if="!store.state.formStore.isLoading">
        <div class="dialog-form h-2/3 mb-5">
          <label class="form-label" for="url">URL da imagem *</label>
          <input class="form-input w-full mt-[5px] mb-[5px] placeholder-[#8b8b8b]" id="url" type="text" placeholder="URL da imagem" v-model="store.state.productStore.product.url"/>

          <label class="form-label" for="title">Nome do Produto *</label>
          <input class="form-input w-full mt-[5px] mb-[5px] placeholder-[#8b8b8b]" id="title" type="text" placeholder="Nome do Produto" v-model="store.state.productStore.product.title"/>

          <label class="form-label" for="category">Categoria *</label>
          <input class="form-input w-full mt-[5px] mb-[5px] placeholder-[#8b8b8b]" id="category" type="text" placeholder="Categoria" v-model="store.state.productStore.product.category"/>          

          <label class="form-label" for="price">Preço do Produto *</label>             
          <the-masked id="price" placeholder="Preço do Produto" :options="{ currency: 'BRL', locale: 'pt-br', autoDecimalDigits: true }" v-model="store.state.productStore.product.price"/>

          <label class="form-label" for="description">Descrição do Produto *</label>
          <textarea id="description" class="form-input w-full mt-[5px] mb-[5px] placeholder-[#8b8b8b]" placeholder="Descrição do Produto" cols="30" rows="10" v-model="store.state.productStore.product.description"></textarea>                  
        </div>
      </template>
    </template>
  </the-form> 
</template>

<script setup>
  import TheForm from '../../../../components/TheForm.vue';
  import TheMasked from '@/components/TheMasked.vue';
  import TheLoading from '@/components/TheLoading.vue';

  import { defineEmits } from 'vue';
  import { useStore } from 'vuex';
  
  const store = useStore();

  const emit = defineEmits([
    'handlerConfirmForm'
  ]);

  function handlerProduct(){
    store.commit('formStore/storeIsOpen', false);
    emit('handlerConfirmForm', store.state.formStore.isNew);
  }
</script>

<style>

</style>