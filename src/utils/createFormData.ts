export function createFormData(data: Record<string, any>): FormData {
  const formData = new FormData()

  for (const key in data) {
    const value = data[key]
    formData.append(key, value)
  }

  return formData
}
