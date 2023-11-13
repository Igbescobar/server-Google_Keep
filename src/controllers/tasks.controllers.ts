import { NextFunction, Response } from 'express'
import { PayloadRequest } from '../middlewares/verifyToken.middleware'
import Task from '../model/Tasks.model'

export const getAllTasks = async (req: PayloadRequest, res: Response, next: NextFunction): Promise<void> => {
  const userId = req.payload?._id

  try {
    const todos = await Task.find({ owner: userId })
    res.status(200).json(todos)
  } catch (error) {
    next(error)
  }
}

export const createTask = async (req: PayloadRequest, res: Response, next: NextFunction): Promise<void> => {
  const userId = req.payload?._id
  const { title } = req.body
  const { categoryId } = req.params
  try {
    const userTasks = await Task.find({ owner: userId })
    if (userTasks === null) {
      throw new Error('Error: User does not exist')
    }

    const createdTask = await Task.create({ title, owner: userId, categoryId })
    if (createdTask === null) {
      throw new Error('Error: Task could not be created')
    }

    res.status(200).json({ message: 'Task created' })
  } catch (error) {
    next(error)
  }
}

export const updatedTask = async (req: PayloadRequest, res: Response, next: NextFunction): Promise<void> => {
  const { _id, completed }: { _id: string, completed: boolean } = req.body
  console.log(_id, completed)
  console.log(req.body)

  try {
    const updatedTask = await Task.findByIdAndUpdate(_id, { $set: { completed: !completed } }, { new: true })
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
