/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express'
import { createTask, deleteTask, getAllTasks, updatedTask } from '../controllers/tasks.controllers'

const router = express.Router()

router.get('/all', getAllTasks)
router.post('/create', createTask)
router.put('/update', updatedTask)
router.delete('/:id/delete', deleteTask)

export default router
