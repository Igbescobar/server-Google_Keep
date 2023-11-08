import { type Response, type NextFunction, type Request } from 'express'
import { ReqPayload } from '../../model/Types/ReqPayload.Type'

interface CustomeRequest extends Request {
  payload?: ReqPayload
}

export type AsyncRequestHandler = (req: CustomeRequest, res: Response, next: NextFunction) => Promise<void>
