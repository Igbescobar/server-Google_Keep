import { type Response, type NextFunction, type Request } from 'express'
import { type ReqPayload } from '../../model/User.model'

interface CustomeRequest extends Request {
  payload?: ReqPayload
}

export type AsyncRequestHandler = (req: CustomeRequest, res: Response, next: NextFunction) => Promise<void>
