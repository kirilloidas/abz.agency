<template>
  <div v-if="modalMsg.length" class="modal-wrap">
    <div class="modal">
      <h2 class="title">You have error:</h2>
      <div class="content">
        {{ modalMsg }}
      </div>
      <div class="btn-container">
        <button @click="clearModalMsg" class="btn">Close</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useModalStore } from '@/stores/modal'
const { 
  modalMsg,
  clearModalMsg 
 } = useModalStore()
</script>

<style scoped lang="scss">
.modal-wrap {
  position: absolute;
  width: 100%;
  height: 100%;
  transition: all 1s;
  z-index: 10000;
  color: var(--font-panel);
}

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
  background: var(--bgc_main);
  box-shadow: 0 16px 20px rgba(0, 0, 0, 0.5);
  border-radius: 16px;
  max-width: 380px;
  width: 25%;
  min-height: 25%;
  z-index: 9999;
  min-width: 380px;
}

.title {
  padding: 5px 10px 10px 5px;

}

.content {
  padding: 5px 10px;
  text-align: center;
}

.btn-container {
  margin: 0 auto;
  padding: 26px 0 0;
}

.btn {
  background: var(--light-blue);
  padding: 8px 36px;
  color: var(--white);
  font-size: 18px;
  font-weight: 500;
  border: none;
  width: 170px;
  height: 52px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.5s ease-out;
  opacity: 0.7;
}

.btn:hover {
  opacity: 1;
}

</style>