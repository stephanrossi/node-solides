import { RequestHandler } from "express"
import dotenv from "dotenv"
import api from "../helpers/api"

dotenv.config()

export const Home: RequestHandler = async (req, res) => {
  const response = await api.get("/profiler", {
    headers: {
      Authorization: "Token token=" + process.env.TOKEN,
    },
  })
  // console.log(data)

  res.render("pages/Home", { response })
}
