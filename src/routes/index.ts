import express from 'express'
import taskRouter from './taskRoutes.routes'
import authRouter from './authRoutes.routes'

const router = express.Router()

router.use('/auth', authRouter)
router.use('/tasks', taskRouter)

export default router
