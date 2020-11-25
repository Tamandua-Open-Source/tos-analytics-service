import { Router } from 'express'
import ExpressRouterAdapter from '../../../interfaces/express-adapters/express-router-adapter'
import ExpressMiddlewareAdapter from '../../../interfaces/express-adapters/express-middleware-adapter'
import AuthMiddlewareComposer from '../../../interfaces/middlewares/composers/auth-middleware-composer'
import UserActionControllerComposer from '../../../interfaces/controllers/composers/user-action-controller-composer'

const userActionController = UserActionControllerComposer.compose()
const authMiddleware = AuthMiddlewareComposer.compose()

const router = Router()

router.get(
  '/actions',
  ExpressRouterAdapter.adapt((req) => userActionController.getAllActions(req))
)

router.get(
  '/users/:userId/actions',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyApiKey(req)),
  ExpressRouterAdapter.adapt((req) =>
    userActionController.getUserActionsByUserId(req)
  )
)

router.post(
  '/users/me/actions/:actionId',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    userActionController.addUserTimerActionByActionId(req)
  )
)

router.post(
  '/users/:userId/actions/:actionId',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyApiKey(req)),
  ExpressRouterAdapter.adapt((req) =>
    userActionController.addUserTimerAction(req)
  )
)

export default router
