<template>
  <div class="outside bg-gray-900/50" v-if="store.state.dialogStore.isOpen" @click="closeDialog()"></div>    
  <dialog class="base-dialog" v-bind:style="{ width: props.widthValue + '%' }" v-if="store.state.dialogStore.isOpen" open>
    <div class="dialog">
      <div class="dialog-header">
        <h2>Deseja deletar o produto?</h2>
      </div>
      
      <div class="dialog-content">
        <p class="text-[#a6a6a6] p-3">{{store.state.dialogStore.message}}</p>
      </div>  

      <div class="dialog-action">
        <button 
          title="Sim" 
          type="button" 
          class="btn w-2/5"
          @click="emit('handlerConfirm', true)">
          Sim
        </button>

        <button 
          title="Não" 
          type="button" 
          class="btn w-2/5"
          @click="closeDialog()">
          Não
        </button>
      </div>
    </div>
  </dialog>
</template>

<script setup>
  import { defineProps, defineEmits } from 'vue';
  import { useStore } from 'vuex';
  const store = useStore();
  const props = defineProps({
    widthValue: String,
  })

  const emit = defineEmits([
    'handlerConfirm'
  ])

  function closeDialog() {
    store.commit('dialogStore/storeIsOpen', false);
  }
</script>

<style scoped>
</style>
