/* eslint-disable @typescript-eslint/no-unused-vars */
import { ref, onMounted, reactive, computed, type Ref } from "vue"
import {
  getPositions as getPositionsService,
  getToken as getTokenService,
  signUp as signUpService
} from '@/api/services'
import type { IFormFields, IPosition, PositionResponse, SignUpRespoonse, TokenResponse } from "../types"
import { useUsersStore } from '@/stores/users'
import { createFormData } from "@/utils/createFormData"

const formFieldModel = {
  name: '',
  email: '',
  phone: '',
  position_id: 0,
  photo: null
}

export const useFormSection = ({ errors }: { errors: { [key: string]: Ref<string> } }) => {
  const usersStore = useUsersStore()
  const formFields: IFormFields = reactive(structuredClone(formFieldModel))
  const positionsList: Ref<IPosition[]> = ref([])

  const isActiveSubmitBtn = computed(() => {
    return Object.entries(errors).reduce((acc, [key, value]) => {
      if (value.value.length) acc = false
      return acc
    }, true) && JSON.stringify(formFields) !== JSON.stringify(formFieldModel)
  })

  const getPositions = () => {
    getPositionsService()
      .then((res: PositionResponse) => positionsList.value = res.data.positions)
  }

  const submit = (event: SubmitEvent) => {
    if ((event.submitter as HTMLButtonElement).type !== 'submit') return
    getTokenService()
      .then((res: TokenResponse) => {
        signUpService({
          token: res.data.token,
          data: createFormData(formFields)
        })
          .then(() => {
            usersStore.setUsers([])
            usersStore.setPage(1)
            usersStore.getUsers()
          })
      })
  }

  onMounted(getPositions)

  return {
    formFields,
    positionsList,
    submit,
    isActiveSubmitBtn
  }
}