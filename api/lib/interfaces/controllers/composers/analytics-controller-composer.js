import AnalyticsRepository from '../../../infrastructure/repositories/analytics-repository'
import AnalyticsController from '../analytics-controller'
import {
  AddBreakIdleUserActionUseCase,
  AddBreakUserActionUseCase,
  AddFinishUserActionUseCase,
  AddInactiveUserActionUseCase,
  AddLoginUserActionUseCase,
  AddPauseIdleUserActionUseCase,
  AddPauseUserActionUseCase,
  AddResumeUserActionUseCase,
  AddStartCycleUserActionUseCase,
  AddWorkIdleUserActionUseCase,
  AddWorkUserActionUseCase,
  GetAllUserActionsUseCase,
  GetUserActionsUseCase,
  GetUserCyclesUseCase,
} from '../../../application/use-cases/analytics'

class AnalyticsControllerComposer {
  static compose() {
    const analyticsRepository = new AnalyticsRepository()

    const addBreakIdleUserActionUseCase = new AddBreakIdleUserActionUseCase({
      analyticsRepository,
    })
    const addBreakUserActionUseCase = new AddBreakUserActionUseCase({
      analyticsRepository,
    })
    const addFinishUserActionUseCase = new AddFinishUserActionUseCase({
      analyticsRepository,
    })
    const addInactiveUserActionUseCase = new AddInactiveUserActionUseCase({
      analyticsRepository,
    })
    const addLoginUserActionUseCase = new AddLoginUserActionUseCase({
      analyticsRepository,
    })
    const addPauseIdleUserActionUseCase = new AddPauseIdleUserActionUseCase({
      analyticsRepository,
    })
    const addPauseUserActionUseCase = new AddPauseUserActionUseCase({
      analyticsRepository,
    })
    const addResumeUserActionUseCase = new AddResumeUserActionUseCase({
      analyticsRepository,
    })
    const addStartCycleUserActionUseCase = new AddStartCycleUserActionUseCase({
      analyticsRepository,
    })
    const addWorkIdleUserActionUseCase = new AddWorkIdleUserActionUseCase({
      analyticsRepository,
    })
    const addWorkUserActionUseCase = new AddWorkUserActionUseCase({
      analyticsRepository,
    })

    const getAllUserActionsUseCase = new GetAllUserActionsUseCase({
      analyticsRepository,
    })
    const getUserActionsUseCase = new GetUserActionsUseCase({
      analyticsRepository,
    })
    const getUserCyclesUseCase = new GetUserCyclesUseCase({
      analyticsRepository,
    })

    return new AnalyticsController({
      addBreakIdleUserActionUseCase,
      addBreakUserActionUseCase,
      addFinishUserActionUseCase,
      addInactiveUserActionUseCase,
      addLoginUserActionUseCase,
      addPauseIdleUserActionUseCase,
      addPauseUserActionUseCase,
      addResumeUserActionUseCase,
      addStartCycleUserActionUseCase,
      addWorkIdleUserActionUseCase,
      addWorkUserActionUseCase,
      getAllUserActionsUseCase,
      getUserActionsUseCase,
      getUserCyclesUseCase,
    })
  }
}

export default AnalyticsControllerComposer
