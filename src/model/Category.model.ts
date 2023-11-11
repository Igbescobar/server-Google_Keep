import { type ObjectId, Schema, model } from 'mongoose'

export interface ICategory extends Document {
  title: string
  description: string
  owner: ObjectId
}

// export interface CategoryParamsType {

// }

const categorySchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required.'],
      trim: true,
      unique: true
    },
    description: {
      type: String,
      trim: true
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

const Category = model<ICategory>('Category', categorySchema)

export default Category
