import type { AxiosResponse } from "axios"

const errorHandler = ({ response }: { response: AxiosResponse }) => {
    return response.data.message
}

export default errorHandler
