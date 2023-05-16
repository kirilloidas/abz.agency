<template>
  <div class="upload-file-wrapper">
    <button class="upload-file-wrapper__btn p1" type="button" @click="selectFile">Upload</button>
      <input 
        class="upload-file-wrapper__input-name" 
        disabled
        :value="modelValue?.name"
        placeholder="Upload your photo"
      />
    <input 
      class="upload-file-wrapper__input-file" 
      ref="fileRef"
      name="photo"
      type="file"
      @change="handleFileChange"
    />
    <span 
      v-if="error"
      class="upload-file-wrapper__error p1"
    >{{ error }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface IProps {
  modelValue: File;
  error: string;
}
interface IEmits {
  (e: 'update:modelValue', value: File): void
  (e: 'setError', value: File): void
}
defineProps<IProps>()
const emit = defineEmits<IEmits>()

const fileRef = ref()

const handleFileChange = (event: Event) => {
  const fileInput = event.target as HTMLInputElement
  const file = fileInput.files?.[0] as File
  emit('setError', file)
  emit('update:modelValue', file)
}

const selectFile = () => {
  fileRef.value.click()
}
</script>

<style scoped lang="scss">
.upload-file-wrapper {
  display: flex;
  margin-top: 50px;

  &__btn {
    padding: 13px 15px;
    border: 1px solid rgba(0, 0, 0, 0.87);
    border-radius: 4px 0px 0px 4px;
    cursor: pointer;
  }
  &__input-name {
    border: 1px solid #D0CFCF;
    border-radius: 0 4px 4px 0;
    padding: 13px 0 13px 16px;
    width: 100%;
  }
  &__input-file {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }
  &__error {
    color: red;
  }
}
</style>