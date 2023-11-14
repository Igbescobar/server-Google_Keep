import { NextFunction, Response } from 'express'
import { PayloadRequest } from '../middlewares/verifyToken.middleware'
import Task from '../model/Tasks.model'
import { TaskBodyCreation, TaskBodyUpdate } from '../schemas/task.schema'

export const getAllTasks = async (req: PayloadRequest, res: Response, next: NextFunction): Promise<void> => {
  const userId = req.payload?._id

  try {
    const todos = await Task.find({ owner: userId })
    res.status(200).json(todos)
  } catch (error) {
    next(error)
  }
}

export const createTask = async (req: PayloadRequest<unknown, unknown, TaskBodyCreation>, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { title, description, categoryId } = req.body

    const userId = req.payload?._id

    const userTasks = await Task.find({ owner: userId })
    if (userTasks === null) {
      throw new Error('Error: User does not exist')
    }

    const createdTask = await Task.create({ title, description, owner: userId, categoryId })
    if (createdTask === null) {
      throw new Error('Error: Task could not be created')
    }

    res.status(200).json({ message: 'Task created' })
  } catch (error) {
    next(error)
  }
}

export const updatedTask = async (req: PayloadRequest<unknown, unknown, TaskBodyUpdate>, res: Response, next: NextFunction): Promise<void> => {
  const { _id, title, description, completed } = req.body

  try {
    const updatedTask = await Task.findByIdAndUpdate(_id, { $set: { title, description, completed: !completed } }, { new: true })
    res.status(200).json({ updatedTask })
  } catch (error) {
    next(error)
  }
}

export const deleteTask = async (req: PayloadRequest, res: Response, next: NextFunction): Promise<void> => {
  const { id } = req.params

  try {
    await Task.findByIdAndDelete(id)
    res.status(204).json({ message: 'Task deleted' })
  } catch (error) {
    next(error)
  }
}
