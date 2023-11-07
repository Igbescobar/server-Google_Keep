import { UserPayload } from '../model/User.model'
import { type ParamsDictionary, type Query } from 'express-serve-static-core'
import { Request } from 'express'

export type PayloadReq<
  P = ParamsDictionary,
  ResBody = any,
  ReqBody = any,
  ReqQuery = Query,
> = Request<P, ResBody, ReqBody, ReqQuery> & {
  payload?: UserPayload
}
