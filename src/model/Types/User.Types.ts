export interface IUser extends Document {
  username: string
  email: string
  password: string
  signToken: () => Promise<string>
  validatePassword: (plainPassword: string) => boolean
}
