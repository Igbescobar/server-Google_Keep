import { type ObjectId, Schema, model } from 'mongoose'
import { ICategory } from './Category.model'

export interface IToDo extends Document {
  title: string
  description: string
  completed: boolean
  categoryId: ICategory
  owner: ObjectId
}

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true
    },
    description: {
      type: String,
      trim: true
    },
    completed: {
      type: Boolean,
      default: false
    },
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: 'Category'
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  {
    timestamps: true
  }
)

const Task = model('Task', taskSchema)

export default Task
