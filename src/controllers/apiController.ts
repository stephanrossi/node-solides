import { RequestHandler } from "express"

export const Home: RequestHandler = (req, res) => {
  res.render("Home")
}
