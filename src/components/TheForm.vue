<template>
    <div class="outside" v-if="store.state.formStore.isOpen" @click="closeForm()"></div>    
    <dialog class="base-sideform" v-if="store.state.formStore.isOpen" open>
      <div class="sideform">
        <div class="sideform-header">
          <h2><slot name="title"></slot></h2>
        </div>

        <div class="sideform-content">
          <slot name="content"></slot>  
        </div>

        <div class="sideform-action">
          <button 
            title="Salvar" 
            type="button" 
            class="btn w-2/5"
            @click="emit('handlerConfirmForm')">
            Salvar
          </button>

          <button
            title="Cancelar" 
            type="button" 
            class="btn w-2/5"
            @click="closeForm()">
            Cancelar
          </button>
        </div>
      </div>
    </dialog>
</template>

<script setup>
  import { defineEmits } from 'vue';
  import { useStore } from 'vuex';
  
  const store = useStore();
  const emit = defineEmits([
    'handlerConfirmForm'
  ]);

  function closeForm() {
    store.commit('formStore/storeIsOpen', false);    
  }

</script>

<style scoped>
</style>
