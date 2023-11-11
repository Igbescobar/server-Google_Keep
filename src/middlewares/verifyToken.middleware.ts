import { type Request } from 'express'
import { type TokenGetter, expressjwt } from 'express-jwt'
import { type Secret } from 'jsonwebtoken'
import { type ParamsDictionary, type Query } from 'express-serve-static-core'
import { UserPayload } from '../model/User.model'

export type PayloadRequest<
  P = ParamsDictionary,
  ResBody = any,
  ReqBody = any,
  ReqQuery = Query
> = Request<P, ResBody, ReqBody, ReqQuery> & {
  payload?: UserPayload
}

const isAuthenticated = expressjwt({
  secret: process.env.TOKEN_SECRET as Secret,
  algorithms: ['HS256'],
  requestProperty: 'payload',
  getToken: getTokenFromHeaders as TokenGetter
})

// eslint-disable-next-line @typescript-eslint/space-before-function-paren
function getTokenFromHeaders(req: Request): string | undefined | null {
  if (req?.headers?.authorization?.split(' ')[0] === 'Bearer') {
    const token = req.headers.authorization.split(' ')[1]
    return token
  }
  return null
}

export { isAuthenticated }
