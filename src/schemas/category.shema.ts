import { z } from 'zod'

export const categorySchema = z.object({
  body: z.object({
    title: z.string().min(5, 'Title requires a minimum of 5 characters').trim(),
    description: z.string().min(15, 'Description requires a minimum of 15 characters').trim()
  })
})

export const updateCategorySchema = z.object({
  body: z.object({
    title: z.string().min(5, 'Title requires a minimum of 5 characters').trim()
  }),
  params: z.object({
    categoryId: z.string()
  })
})
