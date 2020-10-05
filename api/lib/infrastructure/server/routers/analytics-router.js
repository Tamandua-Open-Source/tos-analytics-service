import { Router } from 'express'
import ExpressRouterAdapter from '../../../interfaces/express-adapters/express-router-adapter'
import ExpressMiddlewareAdapter from '../../../interfaces/express-adapters/express-middleware-adapter'
import AnalyticsControllerComposer from '../../../interfaces/controllers/composers/analytics-controller-composer'
import AuthMiddlewareComposer from '../../../interfaces/middlewares/composers/auth-middleware-composer'

const analyticsController = AnalyticsControllerComposer.compose()
const authMiddleware = AuthMiddlewareComposer.compose()

const router = Router()

router.get(
  '/actions',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    analyticsController.getAllUserActions(req)
  )
)

router.get(
  '/actions/me',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) => analyticsController.getUserActions(req))
)

router.post(
  '/actions/breakIdle',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    analyticsController.addBreakIdleUserAction(req)
  )
)

router.post(
  '/actions/break',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    analyticsController.addBreakUserAction(req)
  )
)

router.post(
  '/actions/finish',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    analyticsController.addFinishUserAction(req)
  )
)

router.post(
  '/actions/inactive',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    analyticsController.addInactiveUserAction(req)
  )
)

router.post(
  '/actions/login',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    analyticsController.addLoginUserAction(req)
  )
)

router.post(
  '/actions/pauseIdle',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    analyticsController.addPauseIdleUserAction(req)
  )
)

router.post(
  '/actions/pause',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    analyticsController.addPauseUserAction(req)
  )
)

router.post(
  '/actions/resume',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    analyticsController.addResumeUserAction(req)
  )
)

router.post(
  '/actions/startCycle',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    analyticsController.addStartCycleUserAction(req)
  )
)

router.post(
  '/actions/workIdle',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    analyticsController.addWorkIdleUserAction(req)
  )
)

router.post(
  '/actions/work',
  ExpressMiddlewareAdapter.adapt((req) => authMiddleware.verifyToken(req)),
  ExpressRouterAdapter.adapt((req) =>
    analyticsController.addWorkUserAction(req)
  )
)

export default router
