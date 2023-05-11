import { ref, onMounted } from "vue"
import { getPositions as getPositionsService } from '@/api/services'
import type { PositionResponse } from "../types"

export const useFormSection = () => {
  const name = ref('')
  const email = ref('')
  const phone = ref('')
  const position = ref()
  const avatar = ref()
  const positionsList = ref([])

  const getPositions = () => {
    getPositionsService()
      .then((res: PositionResponse) => console.log(res))
  }

  onMounted(getPositions)

  return {
    name,
    email,
    phone,
    position,
    avatar,
    positionsList
  }
}