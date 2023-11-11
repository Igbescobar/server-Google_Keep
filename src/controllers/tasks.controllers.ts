import { Response } from 'express'
import { PayloadRequest } from '../middlewares/verifyToken.middleware'
import Task from '../model/Tasks.model'
import { AsyncRequestHandler } from './Types/AsyncRequestHandler.Type'

export const getAllTasks: AsyncRequestHandler = async (req, res) => {
  const userId = req.payload?._id

  try {
    const todos = await Task.find({ owner: userId })
    res.status(200).json(todos)
  } catch (error) {
    res.status(500).json({ success: false, error })
  }
}

export const createTask: AsyncRequestHandler = async (req, res) => {
  const userId = req.payload?._id
  const { title } = req.body
  console.log(userId, req.payload)

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
    res.status(500).json({ success: false, error })
  }
}

export const updatedTask = async (req: PayloadRequest, res: Response): Promise<void> => {
  const { _id, completed }: { _id: string, completed: boolean } = req.body
  console.log(_id, completed)
  console.log(req.body)

  try {
    const updatedTask = await Task.findByIdAndUpdate(_id, { $set: { completed: !completed } }, { new: true })
    res.status(200).json({ updatedTask })
  } catch (error) {
    res.status(500).json({ success: false, error })
  }
}

export const deleteTask: AsyncRequestHandler = async (req, res) => {
  const { id } = req.params

  try {
    await Task.findByIdAndDelete(id)
    res.status(204).json({ message: 'Task deleted' })
  } catch (error) {
    res.status(500).json({ success: false, error })
  }
}
