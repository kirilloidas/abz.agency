<template>
  <label class="custom-input-label">
    <input
      class="custom-input-label__input p1"
      :value="modelValue"
      @input="value => $emit('update:modelValue', value)"
    />
    <span class="custom-input-label__label-text">{{ label }}</span>
  </label>
</template>

<script setup lang="ts">
interface IProps {
  modelValue: string;
  placeholder?: string;
  label?: string;
}
interface IEmits {
  (e: 'update:modelValue', value: string): void
}

withDefaults(defineProps<IProps>(), {
  placeholder: '',
  label: '',
})

defineEmits<IEmits>()
</script>

<style scoped lang="scss">
.custom-input-label {
  &__input {
    border: 1px solid #D0CFCF;
    border-radius: 4px;
    padding: 14px auto 14px 16px;
  }

  &__label-text {
    margin-top: 4px;
    margin-left: 16px;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #7E7E7E;
  }
}
</style>