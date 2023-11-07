import User from '../model/User.model'
import { AsyncRequestHandler } from './Types/AsyncRequestHandler.Type'

export class StatusError extends Error {
  statusCode: number
  // eslint-disable-next-line @typescript-eslint/space-before-function-paren
  constructor(message: string, statusCode: number) {
    super(message)
    this.name = 'StatusError'
    this.statusCode = statusCode
  }
}

export const signup: AsyncRequestHandler = async (req, res) => {
  const { userName, email, password } = req.body

  try {
    const createUser = await User.create({ userName, email, password })
    if (createUser === null) {
      throw new StatusError('Error: Unable to create user', 422)
    } else {
      res.status(201).json({ message: 'User created' })
    }
  } catch (error) {
    res.status(400).json({ success: false, error })
  }
}

export const login: AsyncRequestHandler = async (req, res) => {
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
      res.status(401).json({ errorMessages: ['Unable to authenticate the user'] })
    }
  } catch (error) {
    res.status(400).json({ success: false, error })
  }
}

export const verify: AsyncRequestHandler = async (req, res) => {
  res.status(200).json(req.payload)
}
