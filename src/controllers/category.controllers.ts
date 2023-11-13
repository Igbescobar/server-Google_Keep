import { NextFunction, Response } from 'express'
import Category from '../model/Category.model'
import { PayloadRequest } from '../middlewares/verifyToken.middleware'

export const getOneCategory = async (req: PayloadRequest, res: Response, next: NextFunction): Promise<void> => {
  const { categoryId } = req.params

  try {
    const todos = await Category.findById(categoryId)
    res.status(200).json(todos)
  } catch (error) {
    next(error)
  }
}

export const createCategory = async (req: PayloadRequest, res: Response, next: NextFunction): Promise<void> => {
  const _id = req.payload?._id
  const { title, description } = req.body

  try {
    const createdCategory = await Category.create({ title, description, owner: _id })
    if (createdCategory === null) {
      throw new Error('Error: Category could not be created')
    }

    res.status(200).json({ message: 'Category created' })
  } catch (error) {
    next(error)
  }
}

export const updateCategory = async (req: PayloadRequest, res: Response, _next: NextFunction): Promise<void> => {
  const { categoryId } = req.params
  const { title } = req.body

  try {
    const updatedCategory = await Category.findByIdAndUpdate(categoryId, { title }, { new: true })

    if (updatedCategory === null) {
      res.status(404).json({ success: false, error: 'Category not found' })
      return
    }

    res.status(200).json({ success: true, updatedCategory })
  } catch (error) {
    console.error(error) // Log the error for debugging purposes
    res.status(500).json({ success: false, error: 'Internal Server Error' })
  }
}
