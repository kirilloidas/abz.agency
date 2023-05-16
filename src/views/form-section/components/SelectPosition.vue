<template>
  <div class="select-position-wrapper">
    <h4 class="select-position-wrapper__title p1">Select your position</h4>

    <div class="radio-list">
      <label
        v-for="item of positions"
        :key="item.id"
        class="radio-list__item"
      >
        <input 
          type="radio" 
          name="contact" 
          :value="item.id"
          v-model="selectedOption"
          @blur="$emit('setError', modelValue)"
          class="radio-list__input"
        >
        <span class="radio-list__label p1">{{ item.name }}</span>
        <span 
          v-if="error"
          class="radio-list__label p1 radio-list__error"
        >{{ error }}</span>
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { IPosition } from '../types';

interface IProps {
  modelValue: number;
  positions: IPosition[];
  error: string;
}
interface IEmits {
  (e: 'update:modelValue', value: number): void
  (e: 'setError', value: number): void
}
const props = defineProps<IProps>()
const emit = defineEmits<IEmits>()

const selectedOption = computed({
  get: () => props.modelValue,
  set: (value: number) => emit('update:modelValue', value) 
})
</script>

<style scoped lang="scss">
.select-position-wrapper {
  margin-top: 25px;

  &__title {
    color: rgba(0, 0, 0, 0.87);
  }

  .radio-list {
    display: flex;
    flex-direction: column;
    margin-top: 3px;
    gap: 6px;

    &__item {
      display: flex;
      align-items: center;
    }

    &__input {
      margin-right: 12px;
      width: 20px;
      height: 20px;
    }

    &__error {
      color: red;
    }
  }
}
</style>