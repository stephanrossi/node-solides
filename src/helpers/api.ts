import axios from "axios"
import dotenv from "dotenv"

dotenv.config()

type AxiosTypes = {
  baseURL: string
  headers: {}
}

const api = axios.create({
  baseURL: process.env.BASE_URL,
})

export default api
