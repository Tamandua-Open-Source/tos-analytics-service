import { Router } from 'express'
import ExpressRouterAdapter from '../../../interfaces/express-adapters/express-router-adapter'
import ExpressMiddlewareAdapter from '../../../interfaces/express-adapters/express-middleware-adapter'
import AnalyticsControllerComposer from '../../../interfaces/controllers/composers/analytics-controller-composer'
import AuthMiddlewareComposer from '../../../interfaces/middlewares/composers/auth-middleware-composer'

const analyticsController = AnalyticsControllerComposer.compose()
const authMiddleware = AuthMiddlewareComposer.compose()

const router = Router()

router.get(
  '/',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    analyticsController.getAllUserActions(req)
  )
)

router.get(
  '/:actionId',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    analyticsController.getUserActionsByActionId(req)
  )
)

router.get(
  '/users/:userId',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    analyticsController.getUserActionsByUserId(req)
  )
)

router.post(
  '/breakIdle',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    analyticsController.addBreakIdleUserAction(req)
  )
)

router.post(
  '/break',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    analyticsController.addBreakUserAction(req)
  )
)

router.post(
  '/finish',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    analyticsController.addFinishUserAction(req)
  )
)

router.post(
  '/inactive',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    analyticsController.addInactiveUserAction(req)
  )
)

router.post(
  '/login',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    analyticsController.addLoginUserAction(req)
  )
)

router.post(
  '/pauseIdle',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    analyticsController.addPauseIdleUserAction(req)
  )
)

router.post(
  '/pause',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    analyticsController.addPauseUserAction(req)
  )
)

router.post(
  '/resume',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    analyticsController.addResumeUserAction(req)
  )
)

router.post(
  '/startCycle',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    analyticsController.addStartCycleUserAction(req)
  )
)

router.post(
  '/workIdle',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    analyticsController.addWorkIdleUserAction(req)
  )
)

router.post(
  '/work',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    analyticsController.addWorkUserAction(req)
  )
)

export default router
