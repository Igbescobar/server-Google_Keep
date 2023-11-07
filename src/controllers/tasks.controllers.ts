import { NextFunction, Response } from 'express'
import Task from '../model/Tasks.model'
import { PayloadReq } from '../middlewares/verifyToken.middleware'

export const getAllTasks = async (req: PayloadReq, res: Response, next: NextFunction): Promise<void> => {
  const userId = req.payload?.id

  try {
    const todos = await Task.find({ owner: userId })
    res.status(200).json(todos)
  } catch (error) {
    next(error)
  }
}

export const createTask = async (req: PayloadReq, res: Response, next: NextFunction): Promise<void> => {
  const userId = req.payload?.id
  const { title } = req.body

  try {
    const userTasks = await Task.find({ owner: userId })
    if (userTasks === null) {
      throw new Error('Error: User does not exist')
    }

    const createdTask = await Task.create({ title, owner: userId })
    if (createdTask === null) {
      throw new Error('Error: Task could not be created')
    }

    res.status(200).json({ message: 'Task created' })
  } catch (error) {
    next(error)
  }
}
