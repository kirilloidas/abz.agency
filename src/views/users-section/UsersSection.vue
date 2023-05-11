<template>
  <section class="users-section">
    <h2 class="h1">Working with GET request</h2>
  </section>
</template>

<script setup lang="ts">
import { useUsersSection } from './composables/useUserSection';

const {
  users,
  isAllUsers,
  showMore,
} = useUsersSection()
</script>

<style scoped lang="scss">
.users-section {
  margin-top: 140px;
}
</style>