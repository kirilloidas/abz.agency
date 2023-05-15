import { ref, computed, type Ref } from "vue"
import { getUsers as getUsersService } from '@/api/services/index'
import type { IUser, UserServiceResponse } from "@/types/users"
import { defineStore } from "pinia"

export const useUsersStore = defineStore('users', () => {
  const users: Ref<IUser[]> = ref([])
  const page = ref(1)
  const totalPages = ref(1)

  const isAllUsers = computed(() => page.value === totalPages.value)

  const getUsers = () => {
    getUsersService({ page: page.value })
      .then((res: UserServiceResponse) => {
        users.value = [...users.value, ...res.data.users]
        totalPages.value = res.data.total_pages
      })
  }

  const setPage = (pageNum: number) => {
    page.value = pageNum
  }

  const showMore = () => {
    if (!isAllUsers.value) {
      ++page.value
      getUsers()
    }
  }

  return {
    users,
    isAllUsers,
    showMore,
    getUsers,
    setPage,
  }
})