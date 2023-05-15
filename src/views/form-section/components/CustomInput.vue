<template>
  <label class="custom-input-label">
    <input
      class="custom-input-label__input p1"
      :placeholder="placeholder"
      :value="modelValue"
      @input="e => $emit('update:modelValue', e.target.value)"
      @blur="$emit('setError', modelValue)"
    />
    <span class="custom-input-label__label-text">{{ label }}</span>
    <span 
      v-if="error"
      class="custom-input-label__label-text custom-input-label__label-error"
    >{{ error }}</span>
  </label>
</template>

<script setup lang="ts">
interface IProps {
  modelValue: string;
  placeholder?: string;
  label?: string;
  error: string;
}
interface IEmits {
  (e: 'update:modelValue', value: string): void
  (e: 'setError', value: string): void
}

withDefaults(defineProps<IProps>(), {
  placeholder: '',
  label: '',
})

defineEmits<IEmits>()

const inputHandler = value => console.log(value)
</script>

<style scoped lang="scss">
.custom-input-label {
  &__input {
    border: 1px solid #D0CFCF;
    border-radius: 4px;
    padding: 14px 0 14px 16px;
    width: 100%;
  }

  &__label-text {
    margin-top: 4px;
    margin-left: 16px;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #7E7E7E;
  }

  &__label-error {
    color: red;
  }
}
</style>