import { Model, Schema, model } from 'mongoose'
import bcrypt from 'bcrypt'
import jwt, { type Secret } from 'jsonwebtoken'
import { IUser } from './Types/User.Types'
import { type ReqPayload } from './Types/ReqPayload.Type'

interface IUserModel extends Model<IUser> {
  checkOwnerForUser: (userId: string, profileId: string) => Promise<number>
}

export interface UserPayload {
  _id: string
  username: string
}

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, 'Username is super duper required.'],
      trim: true
    },
    email: {
      type: String,
      required: [true, 'Email is required.'],
      unique: true,
      lowercase: true,
      trim: true
    },
    password: {
      type: String,
      trim: true,
      required: [true, 'Password is required.']
    }
  },
  {
    timestamps: true
  }
)

userSchema.pre<IUser>('save', function (next) {
  const saltRounds = 10
  const salt = bcrypt.genSaltSync(saltRounds)
  const hashedPassword = bcrypt.hashSync(this.password, salt)
  this.password = hashedPassword
  next()
})
userSchema.methods.validatePassword = function (plainPassword: string) {
  return bcrypt.compareSync(plainPassword, this.password)
}

userSchema.methods.signToken = function () {
  const { _id, username } = this
  const payload: ReqPayload = { _id, username }
  const authToken: string = jwt.sign(
    payload,
    process.env.TOKEN_SECRET as Secret,
    { algorithm: 'HS256', expiresIn: '6h' }
  )
  return authToken
}

const User = model<IUser, IUserModel>('User', userSchema)

export default User
