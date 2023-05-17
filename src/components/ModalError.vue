<template>
  <div v-if="modalMsg.length" class="modal-wrap">
    <div class="modal">
      <h2 class="modal__title h1">You have error:</h2>
      <div class="modal__content p1">
        {{ modalMsg }}
      </div>
      <div class="btn-container">
        <CustomButton
          class="btn-container__btn"
          @click="modalStore.clearModalMsg"
          tag="button"
        >Close</CustomButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useModalStore } from '@/stores/modal'
import CustomButton from './CustomButton.vue';

const modalStore = useModalStore()
const modalMsg = computed(() => modalStore.modalMsg)
</script>

<style scoped lang="scss">
@import '@/assets/variables.scss';
.modal-wrap {
  position: absolute;
  width: 100%;
  height: 100%;
  transition: all 1s;
  z-index: 10000;
  background: $modal-wrap;
  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px 15px 25px 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: $modal-bg;
    box-shadow: 0 16px 20px rgba(0, 0, 0, 0.5);
    border-radius: 16px;
    max-width: 380px;
    width: 25%;
    min-height: 25%;
    z-index: 9999;
    min-width: 380px;

    &__title {
      padding: 5px 10px 10px 5px;
    }

    &__content {
      padding: 5px 10px;
      text-align: center;
    }
  }

  .btn-container {
    margin: 0 auto;
    padding: 26px 0 0;

    &__btn {
      padding: 4px 29px;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);
    }
  }
}
</style>