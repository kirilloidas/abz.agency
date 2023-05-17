<template>
  <section class="form-section" id="form-section">
    <div v-if="!successfullyRegister" class="form-section__block">
      <h2 class="form-section__title h1">Working with POST request</h2>

      <form class="form" @submit.prevent="submit">
        <CustomInput
          class="form__input"
          v-model="formFields.name"
          placeholder="Your name"
          :error="nameError"
          @set-error="nameValidate"
        />

        <CustomInput
          class="form__input"
          v-model="formFields.email"
          placeholder="Email"
          :error="emailError"
          @set-error="emailValidate"
        />

        <CustomInput
          class="form__input"
          v-model="formFields.phone"
          placeholder="Phone"
          label="+38 (XXX) XXX - XX - XX"
          :error="phoneError"
          @set-error="phoneValidate"
        />

        <SelectPosition
          v-model="formFields.position_id"
          :positions="positionsList"
          :error="positionError"
          @set-error="positionValidate"
        />

        <UploadFileInput
          v-model="formFields.photo"
          :error="photoError"
          @set-error="photoValidate"
        />

        <CustomButton 
          class="form__submit-btn"
          type="submit"
          tag="button"
          :disabled="!isActiveSubmitBtn"
        >Sign up</CustomButton>
      </form>
    </div>

    <div v-else class="form-section__block">
      <h2 class="form-section__title h1">Working with POST request</h2>
      <img class="form-section__success-image" src="@/assets/img/success-image.svg"/>
    </div>
  </section>
</template>

<script setup lang="ts">
import CustomButton from '@/components/CustomButton.vue'
import CustomInput from './components/CustomInput.vue'
import SelectPosition from './components/SelectPosition.vue'
import UploadFileInput from './components/UploadFileInput.vue'
import { useFormSection } from './composables/useFormSection'
import { useFormValidate } from './composables/useFormValidate'

const {
  nameError,
  emailError,
  phoneError,
  positionError,
  photoError,

  nameValidate,
  emailValidate,
  phoneValidate,
  positionValidate,
  photoValidate
} = useFormValidate()

const {
  formFields,
  positionsList,
  submit,
  isActiveSubmitBtn,
  successfullyRegister
} = useFormSection({
  errors: {
    nameError,
    emailError,
    phoneError,
    positionError,
    photoError,
  }
})

</script>

<style scoped lang="scss">
.form-section {
  margin-top: 140px;

  &__block {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__title {
    text-align: center;
  }

  &__success-image {
    margin-top: 50px;
  }

  .form {
    display: flex;
    flex-direction: column;
    width: 380px;

    &__input {
      margin-top: 50px;
      width: 100%;
    }

    &__submit-btn {
      width: 100px;
      margin: 50px auto;
      padding: 4px 22px 4px 23px;
    }
  }
}

@media (max-width: 767px) {
  .form-section {

    &__title {
      width: 328px;
    }
    .form {
      width: 328px;
    }
  }
}
</style>