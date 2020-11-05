import UserTimerActionRepository from '../../../infrastructure/repositories/user-timer-action-repository'
import UserActionRepository from '../../../infrastructure/repositories/user-action-repository'
import AnalyticsController from '../analytics-controller'
import {
  //user timer action
  GetUserTimerActionsByUserIdUseCase,
  GetUserTimerActionCyclesByUserIdUseCase,
  //user action
  GetUserActionsByUserIdUseCase,
  GetUserActionsByActionIdBetweenUseCase,
  //LEGACY
  GetUserCyclesUseCase,
} from '../../../application/use-cases/analytics'

class AnalyticsControllerComposer {
  static compose() {
    const userTimerActionRepository = new UserTimerActionRepository()
    const userActionRepository = new UserActionRepository()

    //user timer action
    const getUserTimerActionsByUserIdUseCase = new GetUserTimerActionsByUserIdUseCase(
      { userTimerActionRepository }
    )
    const getUserTimerActionCyclesByUserIdUseCase = new GetUserTimerActionCyclesByUserIdUseCase(
      { userTimerActionRepository }
    )

    //user action
    const getUserActionsByUserIdUseCase = new GetUserActionsByUserIdUseCase({
      userActionRepository,
    })
    const getUserActionsByActionIdBetweenUseCase = new GetUserActionsByActionIdBetweenUseCase(
      { userActionRepository }
    )

    //LEGACY
    const getUserCyclesUseCase = new GetUserCyclesUseCase({
      userTimerActionRepository,
    })

    return new AnalyticsController({
      //user timer action
      getUserTimerActionsByUserIdUseCase,
      getUserTimerActionCyclesByUserIdUseCase,
      //user action
      getUserActionsByUserIdUseCase,
      getUserActionsByActionIdBetweenUseCase,
      //LEGACY
      getUserCyclesUseCase,
    })
  }
}

export default AnalyticsControllerComposer
