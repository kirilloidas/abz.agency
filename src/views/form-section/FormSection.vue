<template>
  <section class="form-section">
    <h2 class="form-section__title h1">Working with POST request</h2>

    <CustomInput
      v-model="name"
      placeholder="Your name"
    />

    <CustomInput
      v-model="email"
      placeholder="Email"
    />

    <CustomInput
      v-model="phone"
      placeholder="Phone"
    />

  </section>
</template>

<script setup lang="ts">
import CustomInput from './components/CustomInput.vue';
import { useFormSection } from './composables/useFormSection'

const {
  name,
  email,
  phone,
  position,
  avatar,
  positionsList
} = useFormSection()

</script>

<style scoped lang="scss">
.form-section {
  margin-top: 140px;
}
</style>