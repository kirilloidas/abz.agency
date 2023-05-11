import { api } from ".."

export const getToken = () => {
  return api().get('/token')
}

export const getUsers = ({ page, count = 6 }: { page: number; count?: number }) => {
  return api().get(`/users?page=${page}&count=${count}`)
}

export const getCurrentUser = (id: number) => {
  return api().get(`users/${id}`)
}

export const getPositions = () => {
  return api().get('/positions')
}