<template>
  <the-form @handlerConfirmForm="handlerTrip">
    <template v-slot:title>
      {{store.state.formStore.title}}
    </template>

    <template v-slot:content>
      <template v-if="store.state.formStore.isLoading">
        <!-- Loading... -->
      </template>

      <template v-if="!store.state.formStore.isLoading">
        <div class="dialog-form h-2/3 mb-5">
          <label class="" for="title">URL da imagem</label>
          <input class="form-input w-full mt-[5px] mb-[5px] placeholder-[#8b8b8b]" id="title" type="text" placeholder="URL da imagem" />

          <label class="" for="vacanciesAvailable">Categoria</label>
          <input class="form-input w-full mt-[5px] mb-[5px] placeholder-[#8b8b8b]" id="vacanciesAvailable" type="text" placeholder="Categoria" />

          <label class="" for="city">Nome do Produto</label>
          <input class="form-input w-full mt-[5px] mb-[5px] placeholder-[#8b8b8b]" id="city" type="text" placeholder="Nome do Produto" />

          <label class="" for="limitInstallment">Preço do Produto</label>
          <input class="form-input w-full mt-[5px] mb-[5px] placeholder-[#8b8b8b]" id="limitInstallment" type="text" placeholder="Preço do Produto" />

          <label class="" for="description">Descrição do Produto</label>
          <textarea id="description" class="form-input w-full mt-[5px] mb-[5px] placeholder-[#8b8b8b]" placeholder="Descrição do Produto" cols="30" rows="10" ></textarea>                  
        </div>
      </template>
    </template>
  </the-form> 
</template>

<script setup>
  import TheForm from '../../../../components/TheForm.vue';

  import { defineEmits } from 'vue';
  import { useStore } from 'vuex';
  const store = useStore();

  const emit = defineEmits([
    'handlerConfirmForm'
  ]);

  function handlerTrip(){
    store.commit('formStore/storeIsOpen', false);
    emit('handlerConfirmForm', store.state.formStore.isNew);
  }
</script>

<style>
.dialog-form input, textarea {
  width: 100%;
}
</style>