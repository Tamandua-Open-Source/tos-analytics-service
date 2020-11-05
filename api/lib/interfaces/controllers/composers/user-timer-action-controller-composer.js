import UserTimerActionRepository from '../../../infrastructure/repositories/user-timer-action-repository'
import UserTimerActionController from '../user-timer-action-controller'
import {
  GetAllTimerActionsUseCase,
  GetUserTimerActionsByUserIdUseCase,
  AddUserTimerActionUseCase,
} from '../../../application/use-cases/user-timer-action'

class UserTimerActionControllerComposer {
  static compose() {
    const userTimerActionRepository = new UserTimerActionRepository()

    const getAllTimerActionsUseCase = new GetAllTimerActionsUseCase({
      userTimerActionRepository,
    })
    const getUserTimerActionsByUserIdUseCase = new GetUserTimerActionsByUserIdUseCase(
      { userTimerActionRepository }
    )

    const addUserTimerActionUseCase = new AddUserTimerActionUseCase({
      userTimerActionRepository,
    })

    return new UserTimerActionController({
      getAllTimerActionsUseCase,
      getUserTimerActionsByUserIdUseCase,
      addUserTimerActionUseCase,
    })
  }
}

export default UserTimerActionControllerComposer
