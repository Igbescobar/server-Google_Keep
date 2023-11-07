/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express'
import { createTask, getAllTasks } from '../controllers/tasks.controllers'

const router = express.Router()

router.get('/:id/all', getAllTasks)
router.post('/:id/create', createTask)

export default router