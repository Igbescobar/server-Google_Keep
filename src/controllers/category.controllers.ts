import { NextFunction, Response } from 'express'
import Category from '../model/Category.model'
import { PayloadReq } from '../middlewares/verifyToken.middleware'

export const getOneCategory = async (req: PayloadReq, res: Response, next: NextFunction): Promise<void> => {
  const userId = req.payload?.id

  try {
    const todos = await Category.find({ owner: userId })
    res.status(200).json(todos)
  } catch (error) {
    next(error)
  }
}

export const createCategory = async (req: PayloadReq, res: Response, next: NextFunction): Promise<void> => {
  const userId = req.payload?.id
  const { title } = req.body

  try {
    const userTasks = await Category.find({ owner: userId })
    if (userTasks === null) {
      throw new Error('Error: User does not exist')
    }

    const createdTask = await Category.create({ title, owner: userId })
    if (createdTask === null) {
      throw new Error('Error: Task could not be created')
    }

    res.status(200).json({ message: 'Task created' })
  } catch (error) {
    next(error)
  }
}
