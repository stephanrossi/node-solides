import axios from "axios"
import dotenv from "dotenv"

dotenv.config()

const api = axios.create({
  baseURL: process.env.BASE_URL,
})

api.defaults.headers.common["Authorization"] =
  "Token token=" + process.env.TOKEN

export default api
