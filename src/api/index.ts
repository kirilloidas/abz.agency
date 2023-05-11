import axios from 'axios'
import errorHandler from '@/api/errorHandler'
import { useModalStore } from '@/stores/modal'

export const api = () => {
  const instance = axios.create({
    baseURL: import.meta.env.VITE_AXIOS_BASE_URL,
  })
  instance.interceptors.response
    .use(
      (response) => {
        return response
      },
      (error) => {
        useModalStore().setModalMsg(errorHandler(error))
        return Promise.reject(error)
      }
    )

  return instance
}

