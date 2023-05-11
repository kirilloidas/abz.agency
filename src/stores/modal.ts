import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', () => {
  const modalMsg = ref('')

  const setModalMsg = (msg: string) => {
    modalMsg.value = msg
  }

  const clearModalMsg = () => {
    modalMsg.value = ''
  }

  return { modalMsg, setModalMsg, clearModalMsg }
})
