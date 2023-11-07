import express from 'express'
import taskRouter from './taskRoutes.routes'
import authRouter from './authRoutes.routes'
// import projectRouter from './projectRoutes.routes'

const router = express.Router()

router.use('/auth', authRouter)
// router.use('/projects', projectRouter)
router.use('/tasks', taskRouter)

export default router
