<template>
  <header class="page-header">

    <div class="header-content">
      <img 
        class="page-header__logo"
        src="@/assets/img/Logo.svg"
      />

      <div class="btns-block">
        <CustomButton 
          class="btns-block__btn btns-block__btn_left"
          href="#users-section"
        >
          Users
        </CustomButton>
        <CustomButton 
          class="btns-block__btn btns-block__btn_right"
          href="#form-section"
        >
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

        &_left {
          padding: 4px 29px;
        }

        &_right {
          padding: 4px 22px 4px 23px;
        }
      }
    }
  }
}

@media (max-width: 1170px) {
  .page-header {
    .header-content {
      width: 100%;
      padding: 0 60px;
    }
  }
}

@media (max-width: 1023px) {
  .page-header {
    .header-content {
      padding: 0 32px;
    }
  }
}

@media (max-width: 1023px) {
  .page-header {
    .header-content {
      padding: 0 32px;
    }
  }
}

@media (max-width: 767px) {
  .page-header {
    .header-content {
      padding: 0 16px;
    }
  }
}
</style>