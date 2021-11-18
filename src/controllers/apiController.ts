import { RequestHandler } from "express"
import dotenv from "dotenv"
import api from "../helpers/api"

dotenv.config()

export const Home: RequestHandler = async (req, res) => {
  const { data } = await api.get("/profiler/19441", {
    headers: {
      Authorization: "Token token=" + process.env.TOKEN,
    },
  })
  console.log(data.name)

  res.render("pages/Home", data)
}
