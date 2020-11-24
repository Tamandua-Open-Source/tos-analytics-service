import UserActionRepository from '../../../infrastructure/repositories/user-action-repository'
import UserActionController from '../user-action-controller'
import {
  GetAllActionsUseCase,
  GetUserActionsByUserIdUseCase,
  AddUserActionUseCase,
} from '../../../application/use-cases/user-action'

class UserActionControllerComposer {
  static compose() {
    const userActionRepository = new UserActionRepository()

    const getAllActionsUseCase = new GetAllActionsUseCase({
      userActionRepository,
    })
    const getUserActionsByUserIdUseCase = new GetUserActionsByUserIdUseCase({
      userActionRepository,
    })
    const addUserActionUseCase = new AddUserActionUseCase({
      userActionRepository,
    })

    return new UserActionController({
      getAllActionsUseCase,
      getUserActionsByUserIdUseCase,
      addUserActionUseCase,
    })
  }
}

export default UserActionControllerComposer
