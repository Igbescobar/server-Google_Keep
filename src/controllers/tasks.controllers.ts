import Task from '../model/Tasks.model'
import { AsyncRequestHandler } from './Types/AsyncRequestHandler.Type'

export const getAllTasks: AsyncRequestHandler = async (req, res) => {
  const userId = req.payload?.id

  try {
    const todos = await Task.find({ owner: userId })
    res.status(200).json(todos)
  } catch (error) {
    res.status(500).json({ success: false, error })
  }
}

export const createTask: AsyncRequestHandler = async (req, res) => {
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
    res.status(500).json({ success: false, error })
  }
}

export const updatedTask: AsyncRequestHandler = async (req, res) => {
  const { id, completed }: { id: string, completed: boolean } = req.body

  try {
    const updatedTask = await Task.findByIdAndUpdate(id, { $set: { completed: !completed } }, { new: true })
    res.status(200).json(updatedTask)
  } catch (error) {
    res.status(500).json({ success: false, error })
  }
}

export const deleteTask: AsyncRequestHandler = async (req, res) => {
  const { taskId } = req.params

  try {
    await Task.findByIdAndDelete(taskId)
    res.status(204).json({ message: 'Task deleted' })
  } catch (error) {
    res.status(500).json({ success: false, error })
  }
}
