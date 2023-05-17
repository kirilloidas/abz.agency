<template>
  <component
    :is="tag"
    class="btn p1"
    :class="{disabled}"
  >
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
interface IProps {
  disabled?: boolean;
  tag?: string;
}
withDefaults(defineProps<IProps>(), {
  disabled: false,
  tag: 'a'
})
</script>

<style scoped lang="scss">
@import '@/assets/variables.scss';
.btn {
  cursor: pointer;
  border-radius: 80px;
  background: $btn-bg-color;
  transition: all .3s ease-in-out;
  text-decoration: none;
  color: #000;
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