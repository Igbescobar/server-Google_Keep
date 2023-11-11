import express from 'express'
import taskRouter from './taskRoutes.routes'
import authRouter from './authRoutes.routes'
import categoryRouter from './categoryRoutes.routes'
import { isAuthenticated } from '../middlewares/verifyToken.middleware'

const router = express.Router()

router.use('/auth', authRouter)
router.use('/category', isAuthenticated, categoryRouter)
router.use('/tasks', isAuthenticated, taskRouter)

export default router
