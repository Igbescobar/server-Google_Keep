import { z } from 'zod'

export const taskSchema = z.object({
  body: z.object({
    title: z.string().min(5, 'Title requires a minimum of 5 characters').trim(),
    description: z.string().min(15, 'Description requires a minimum of 15 characters').trim(),
    categoryId: z.string(),
    completed: z.boolean({
      required_error: 'completed is required',
      invalid_type_error: 'completed must be a boolean'
    }),
    _id: z.string()
  })
})

export const createTaskSchema = z.object({
  body: z.object({
    title: z.string().min(5, 'Title requires a minimum of 5 characters').trim(),
    description: z.string().min(15, 'Description requires a minimum of 15 characters').trim(),
    categoryId: z.string()
  })
})

export const updateTaskSchema = z.object({
  body: z.object({
    _id: z.string(),
    title: z.string().min(5, 'Title requires a minimum of 5 characters').trim().optional(),
    description: z.string().min(15, 'Description requires a minimum of 15 characters').trim().optional(),
    completed: z.boolean().optional()
  })
})

export type TaskBody = z.infer<typeof taskSchema>['body']
export type TaskSchemaType = z.infer<typeof taskSchema>

export type TaskBodyCreation = Omit<TaskBody, '_id' | 'completed'>
export type TaskBodyUpdate = z.infer<typeof updateTaskSchema>['body']
