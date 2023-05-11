<template>
  <button 
    class="btn p1"
    :class="{disabled}"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
interface IProps {
  disabled?: boolean;
}
withDefaults(defineProps<IProps>(), {
  disabled: false
})
</script>

<style scoped lang="scss">
@import '@/assets/variables.scss';
.btn {
  padding: 4px 29px;
  cursor: pointer;
  border-radius: 80px;
  background: $btn-bg-color;
  transition: all .3s ease-in-out;
  border: none;

  &:hover {
    background: $btn-hover-bg-color;
  }

  &.disabled {
    pointer-events: none;
    background: $disabled;
    color: $text-disabled;
  }
}
</style>