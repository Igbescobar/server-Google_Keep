import { z } from 'zod'

export const categorySchema = z.object({
  body: z.object({
    title: z.string().min(5, 'Title requires a minimum of 5 characters').trim(),
    description: z.string().min(15, 'Description requires a minimum of 15 characters').trim()
  }),
  params: z.object({
    categoryId: z.string()
  })
})

export const createCategoryShema = z.object({
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

export type CategoryParamsType = z.infer<typeof categorySchema>['params']
export type CategoryBodyType = z.infer<typeof categorySchema>['body']
export type CreateCategoryParamsType = z.infer<typeof categorySchema>['params']
