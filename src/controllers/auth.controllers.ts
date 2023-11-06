import { NextFunction, Request, Response } from 'express'
import User from '../model/User.model'

export class StatusError extends Error {
  statusCode: number
  // eslint-disable-next-line @typescript-eslint/space-before-function-paren
  constructor(message: string, statusCode: number) {
    super(message)
    this.name = 'StatusError'
    this.statusCode = statusCode
  }
}

export const signup = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { userName, email, password } = req.body

  try {
    const createUser = await User.create({ userName, email, password })
    if (createUser === null) {
      throw new StatusError('Error: Unable to create user', 422)
    } else {
      res.status(201).json({ message: 'User created' })
    }
  } catch (error) {
    next(error)
  }
}

export const login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { email, password } = req.body

  try {
    const foundUser = await User.findOne({ email })
    if (foundUser === null) {
      throw new StatusError('User not found', 401)
    }

    if (foundUser.validatePassword(password)) {
      const authToken = foundUser.signToken()
      res.status(200).json({ authToken })
    } else {
      throw new StatusError('Password incorrect', 401)
    }
  } catch (error) {
    next(error)
  }
}
