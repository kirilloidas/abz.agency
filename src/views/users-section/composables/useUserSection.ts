import { onMounted, ref, computed } from "vue"
import { getUsers as getUsersService } from '@/api/services/index'

import type { UserServiceResponse } from "../types"

export const useUsersSection = () => {
  const users = ref([])
  const page = ref(1)
  const totalPages = ref(1)

  const isAllUsers = computed(() => page.value === totalPages.value)

  const getUsers = () => {
    getUsersService({ page: page.value })
      .then((res: UserServiceResponse) => {
        console.log(res)
      })
  }

  const showMore = () => {
    if (!isAllUsers.value) {
      ++page.value
      getUsers()
    }
  }

  onMounted(getUsers)

  return {
    users,
    isAllUsers,
    showMore,
  }
}