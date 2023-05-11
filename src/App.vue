<script setup lang="ts">
import Header from './views/Header.vue';
import TopSection from './views/TopSection.vue';
import UsersSection from './views/users-section/UsersSection.vue';
</script>

<template>
  <Header/>

  <main class="page-main">
    <TopSection/>
    <UsersSection/>
  </main>
</template>

<style scoped lang="scss">
@import '@/assets/variables.scss';
.page-main {
  width: 1170px;
  margin: 0 auto;
}
</style>
