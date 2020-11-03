import UserTimerActionRepository from '../../../infrastructure/repositories/user-timer-action-repository'
import AnalyticsController from '../analytics-controller'
import {
  GetUserTimerActionsByUserIdUseCase,
  GetUserTimerActionCyclesByUserIdUseCase,
  //LEGACY
  GetUserCyclesUseCase,
} from '../../../application/use-cases/analytics'

class AnalyticsControllerComposer {
  static compose() {
    const userTimerActionRepository = new UserTimerActionRepository()

    const getUserTimerActionsByUserIdUseCase = new GetUserTimerActionsByUserIdUseCase(
      { userTimerActionRepository }
    )
    const getUserTimerActionCyclesByUserIdUseCase = new GetUserTimerActionCyclesByUserIdUseCase(
      { userTimerActionRepository }
    )

    //LEGACY
    const getUserCyclesUseCase = new GetUserCyclesUseCase({
      userTimerActionRepository,
    })

    return new AnalyticsController({
      getUserTimerActionsByUserIdUseCase,
      getUserTimerActionCyclesByUserIdUseCase,
      //LEGACY
      getUserCyclesUseCase,
    })
  }
}

export default AnalyticsControllerComposer
