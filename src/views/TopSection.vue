<template>
  <section class="top-section">

    <div class="section-content">
      <h1 class="section-content__title h1">
        Test assignment for front-end developer
      </h1>

      <p class="section-content__text p1">
        What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.
      </p>

      <CustomButton class="section-content__btn">
        Sign up
      </CustomButton>
    </div>

  </section>
</template>

<script setup lang="ts">
import CustomButton from '@/components/CustomButton.vue'
</script>

<style scoped lang="scss">
.top-section {
  background-image: url('@/assets/img/top-section-bg.png');
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 164px 0;

  .section-content {
    width: 380px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: #FFFFFF;

    &__title {
      margin-bottom: 21px;
    }

    &__text {
      margin-bottom: 32px;
    }

    &__btn {
      padding: 4px 22px 4px 23px;
    }
  }
}

@media (max-width: 1023px) {
  .top-section {
    padding: 88px 0;
  }
}

@media (max-width: 767px) {
  .top-section {
    padding: 40px 0 71px 0;
    .section-content {
      width: 328px;
    }
  }
}
</style>