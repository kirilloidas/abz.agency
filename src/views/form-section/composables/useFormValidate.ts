import { ref } from 'vue';

export const useFormValidate = () => {
  const nameError = ref('')
  const emailError = ref('')
  const phoneError = ref('')
  const positionError = ref('')
  const photoError = ref('')

  const nameValidate = (name: string) => {
    console.log(name)
    nameError.value = name.length < 2 || name.length > 60 ? 'Incorrect length' : ''
  }

  const emailValidate = (email: string) => {
    if (email.length < 2 || email.length > 100) return emailError.value = 'Incorrect length'

    const emailRegex = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/.test(email)
    if (email && !emailRegex) {
      return emailError.value = 'Incorrect email format'
    }
    emailError.value = ''
  }

  const phoneValidate = (phone: string) => {
    if (!phone.length) return phoneError.value = 'Enter phone'

    const phoneRegex = /^[\+]{0,1}380([0-9]{9})$/.test(phone)
    if (!phoneRegex) return phoneError.value = 'Incorrect phone format'
    phoneError.value = ''
  }

  const positionValidate = (id: number) => {
    positionError.value = !id ? 'Select position' : ''
  }

  const photoValidate = (file: File) => {
    if (!file) return photoError.value = 'Select file'
    const fileType = file.type;
    const fileSize = file.size;
    const image = new Image();

    image.src = URL.createObjectURL(file);

    image.onload = () => {
      const imageWidth = image.width;
      const imageHeight = image.height;

      if (fileType !== 'image/jpeg' && fileType !== 'image/jpg') {
        photoError.value = 'Photo must be in JPEG/JPG format';
      } else if (imageWidth < 70 || imageHeight < 70) {
        photoError.value = 'Minimum photo size 70x70 pixels';
      } else if (fileSize > 5 * 1024 * 1024) {
        photoError.value = 'Photo size should not exceed 5 MB';
      } else {
        photoError.value = '';
      }
    };
  }

  return {
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
  }
}