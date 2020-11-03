import HttpResponse from '../core/http-response'
import ServerError from '../core/server-error'
import ClientError from '../core/client-error'

class UserTimerActionController {
  constructor(useCases) {
    this.useCases = useCases
  }

  async getAllTimerActions(_req) {
    const { getAllTimerActionsUseCase } = this.useCases
    const timerActions = await getAllTimerActionsUseCase.execute()

    if (!timerActions) return HttpResponse.noContent()

    return HttpResponse.ok({
      message: 'Timer Actions Retrieved',
      timerActions,
    })
  }

  async getUserTimerActionsByUserId(req) {
    const { userId } = req.params

    if (!userId) throw ClientError.badRequest("Missing 'userId' Path Parameter")

    const { getUserTimerActionsByUserIdUseCase } = this.useCases
    const userTimerActions = await getUserTimerActionsByUserIdUseCase.execute(
      userId
    )

    if (!userTimerActions) return HttpResponse.noContent()

    return HttpResponse.ok({
      message: 'User Timer Actions Retrieved',
      userTimerActions,
    })
  }

  async addUserTimerAction(req) {
    const { userId, timerActionId } = req.params

    if (!userId) throw ClientError.badRequest("Missing 'userId' Path Parameter")
    if (!timerActionId)
      throw ClientError.badRequest("Missing 'timerActionId' Path Parameter")

    const { addUserTimerActionUseCase } = this.useCases
    const userTimerAction = await addUserTimerActionUseCase.execute(
      userId,
      timerActionId
    )

    if (!userTimerAction) return HttpResponse.noContent()

    return HttpResponse.created({
      message: 'User Timer Action Created',
      userTimerAction,
    })
  }
}

export default UserTimerActionController
