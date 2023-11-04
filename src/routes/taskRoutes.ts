import express, { Request, Response } from 'express'

const router = express.Router()

router.get('/', (req: Request, res: Response) => {
    return res.send('hello there')
})

router.post('/', (req: Request, res: Response) => {
    return res.send('task created')
})

export { router as taskRouter }

