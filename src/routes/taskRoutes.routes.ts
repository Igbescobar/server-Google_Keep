/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express'
import { createTask, deleteTask, getAllTasks, updatedTask } from '../controllers/tasks.controllers'
import { schemaValidation } from '../middlewares/schemaValidation.middleware'
import { createTaskSchema, updateTaskSchema } from '../schemas/task.schema'

const router = express.Router()

router.get('/allTasks', getAllTasks)
router.post('/createTask', schemaValidation(createTaskSchema), createTask)
router.put('/updateTask', schemaValidation(updateTaskSchema), updatedTask)
router.delete('/deleteTask', deleteTask)

export default router
