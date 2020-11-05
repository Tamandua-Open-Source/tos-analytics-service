import HttpResponse from '../core/http-response'
import ServerError from '../core/server-error'
import ClientError from '../core/client-error'

class UserActionController {
  constructor(useCases) {
    this.useCases = useCases
  }

  async getAllActions(_req) {
    const { getAllActionsUseCase } = this.useCases
    const actions = await getAllActionsUseCase.execute()

    if (!actions) throw ServerError.internal()

    return HttpResponse.ok({
      message: 'Actions Retrieved',
      actions,
    })
  }

  async getUserActionsByUserId(req) {
    const { userId } = req.params

    if (!userId) throw ClientError.badRequest("Missing 'userId' Path Parameter")

    const { getUserActionsByUserIdUseCase } = this.useCases
    const userActions = await getUserActionsByUserIdUseCase.execute(userId)

    if (!userActions) throw ServerError.internal()

    return HttpResponse.ok({
      message: 'User Actions Retrieved',
      userActions,
    })
  }

  async addUserTimerAction(req) {
    const { userId, actionId } = req.params
    const { latitude, longitude } = req.body

    if (!userId) throw ClientError.badRequest("Missing 'userId' Path Parameter")
    if (!actionId)
      throw ClientError.badRequest("Missing 'actionId' Path Parameter")

    const { addUserActionUseCase } = this.useCases
    const userAction = await addUserActionUseCase.execute(
      userId,
      actionId,
      latitude,
      longitude
    )

    if (!userAction) return HttpResponse.noContent()

    return HttpResponse.created({
      message: 'User Action Created',
      userAction,
    })
  }
}

export default UserActionController
