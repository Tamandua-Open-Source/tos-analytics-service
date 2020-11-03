import { Router } from 'express'
import ExpressRouterAdapter from '../../../interfaces/express-adapters/express-router-adapter'
import ExpressMiddlewareAdapter from '../../../interfaces/express-adapters/express-middleware-adapter'
import AuthMiddlewareComposer from '../../../interfaces/middlewares/composers/auth-middleware-composer'
import AnalyticsControllerComposer from '../../../interfaces/controllers/composers/analytics-controller-composer'

const analyticsController = AnalyticsControllerComposer.compose()
const authMiddleware = AuthMiddlewareComposer.compose()

const router = Router()

//LEGACY
router.get(
  '/analytics/cycles/me',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) => analyticsController.getUserCycles(req))
)

router.get(
  '/users/me/timerActions',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    analyticsController.getUserTimerActionsByUserId(req)
  )
)

router.get(
  '/users/me/timerActions/cycles',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    analyticsController.getUserTimerActionCyclesByUserId(req)
  )
)

export default router
