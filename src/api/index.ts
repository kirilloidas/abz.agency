import axios from 'axios'
import { useModalStore } from '@/stores/modal'

export const api = (token?: string) => {
  const authorization = token ? { Token: token, } : {}
  const instance = axios.create({
    baseURL: import.meta.env.VITE_AXIOS_BASE_URL,
    headers: {
      ...authorization
    }
  })
  instance.interceptors.response
    .use(
      (response) => {
        return response
      },
      (error) => {
        useModalStore().setModalMsg(error.message)
        return Promise.reject(error)
      }
    )

  return instance
}

