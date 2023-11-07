import { AsyncRequestHandler } from '../controllers/Types/AsyncRequestHandler.Type'
import User from '../model/User.model'

const checkUserOwner: AsyncRequestHandler = async (req, res, next) => {
  try {
    const { id: userId } = req.payload
    const { id: profileId } = req.params

    const count = await User.checkOwnerForUser(userId, profileId)

    if (count === 0) {
      next()
    } else {
      res.status(401).json({ errorMessages: ['No eres el dueño de este perfil'] })
    }
  } catch (err) {
    console.error(err)
    res.status(500).json({ errorMessages: ['Error interno del servidor'] })
  }
}

export { checkUserOwner }
