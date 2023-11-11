import { type ObjectId } from 'mongoose'

export interface ReqPayload {
  _id: ObjectId
  username: string
}
