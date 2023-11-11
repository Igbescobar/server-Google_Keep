import { NextFunction, Response } from 'express'
import Category from '../model/Category.model'
import { PayloadRequest } from '../middlewares/verifyToken.middleware'

export const getOneCategory = async (req: PayloadRequest, res: Response, next: NextFunction): Promise<void> => {
  const userId = req.payload?._id

  try {
    const todos = await Category.find({ owner: userId })
    res.status(200).json(todos)
  } catch (error) {
    next(error)
  }
}

export const createCategory = async (req: PayloadRequest, res: Response, next: NextFunction): Promise<void> => {
  const _id = req.payload?._id
  const { title } = req.body
  console.log(_id, req.payload)

  try {
    const createdCategory = await Category.create({ title, owner: _id })
    if (createdCategory === null) {
      throw new Error('Error: Category could not be created')
    }

    res.status(200).json({ message: 'Category created' })
  } catch (error) {
    next(error)
  }
}
