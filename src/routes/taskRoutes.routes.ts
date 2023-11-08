/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express'
import { createTask, deleteTask, getAllTasks, updatedTask } from '../controllers/tasks.controllers'

const router = express.Router()

router.get('/allTasks', getAllTasks)
router.post('/createTask', createTask)
router.put('/updateTask', updatedTask)
router.delete('/:id/deleteTask', deleteTask)

export default router
