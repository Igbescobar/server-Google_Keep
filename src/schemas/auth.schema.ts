import { z } from 'zod'

export const signUpSchema = z.object({
  body: z.object({
    username: z.string().min(3, 'Username has to be atleast 3 characters long').trim(),
    email: z.string().email('Not a valid email').trim(),
    password: z.string().min(4, 'Password has to be atleast 4 characters long').trim()
  })
})

export type SignUpDataType = z.infer<typeof signUpSchema>['body']

export const loginSchema = z.object({
  body: z.object({
    email: z.string().email('Not a valid email').trim(),
    password: z.string().min(4, 'Password has to be atleast 4 characters long').trim()
  })
})

export type LoginDataType = z.infer<typeof loginSchema>['body']
