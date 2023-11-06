import express from 'express'
import taskRouter from './taskRoutes.routes'
import authRouter from './authRoutes.route'

const router = express.Router()

router.use('/tasks', taskRouter)
router.use('/auth', authRouter)

export default router
