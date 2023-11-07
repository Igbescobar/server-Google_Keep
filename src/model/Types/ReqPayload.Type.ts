import { type ObjectId } from 'mongoose'

export interface ReqPayload {
  id: ObjectId
  username: string
}
