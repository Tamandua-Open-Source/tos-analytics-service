import { Router } from 'express'
import ExpressRouterAdapter from '../../../interfaces/express-adapters/express-router-adapter'
import ExpressMiddlewareAdapter from '../../../interfaces/express-adapters/express-middleware-adapter'
import AuthMiddlewareComposer from '../../../interfaces/middlewares/composers/auth-middleware-composer'
import UserTimerActionControllerComposer from '../../../interfaces/controllers/composers/user-timer-action-controller-composer'

const userTimerActionController = UserTimerActionControllerComposer.compose()
const authMiddleware = AuthMiddlewareComposer.compose()

const router = Router()

router.get(
  '/timerActions',
  ExpressRouterAdapter.adapt((req) =>
    userTimerActionController.getAllTimerActions(req)
  )
)

router.get(
  '/users/:userId/timerActions',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyApiKey(req)),
  ExpressRouterAdapter.adapt((req) =>
    userTimerActionController.getUserTimerActionsByUserId(req)
  )
)

router.post(
  '/users/:userId/timerActions/:timerActionId',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyApiKey(req)),
  ExpressRouterAdapter.adapt((req) =>
    userTimerActionController.addUserTimerAction(req)
  )
)

export default router
