<template>
  <header class="page-header">

    <div class="header-content">
      <img 
        class="page-header__logo"
        src="@/assets/img/Logo.svg"
      />

      <div class="btns-block">
        <CustomButton class="btns-block__btn">
          Users
        </CustomButton>
        <CustomButton class="btns-block__btn">
          Sign up
        </CustomButton>
      </div>
    </div>

  </header>
</template>

<script setup lang="ts">
import CustomButton from '@/components/CustomButton.vue';
</script>

<style scoped lang="scss">
.page-header {
  background: #FFFFFF;
  width: 100%;

  .header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    width: 1170px;
     margin: 0 auto;
    .btns-block {
      display: flex;
      align-items: center;
      gap: 10px;

      &__btn {
        padding: 4px 29px;
      }
    }
  }
}
</style>