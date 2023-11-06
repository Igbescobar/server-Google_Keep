import express, { Request, Response } from 'express'

const router = express.Router()

router.get('/', (_req: Request, res: Response) => {
  return res.send('hello there')
})

router.post('/', (_req: Request, res: Response) => {
  return res.send('task created')
})

export default router
