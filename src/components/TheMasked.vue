<template>
  <input class="form-input w-full mt-[5px] mb-[5px] placeholder-[#8b8b8b]" ref="inputRef" type="text" />
</template>

<script>
import { useCurrencyInput } from 'vue-currency-input'

export default {
  name: 'CurrencyInput',
  props: {
    modelValue: Number, // Vue 2: value
    options: Object
  },
  setup(props) {
    const { inputRef } = useCurrencyInput(props.options)

    return { inputRef }
  }
}
</script>