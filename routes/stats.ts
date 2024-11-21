import express, { Request, Response } from 'express'

const route = express.Router()

route.get('/hello-world', (req: Request, res: Response) => {
  res.json('hello world!')
})

export default route
