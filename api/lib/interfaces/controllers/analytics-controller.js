import HttpResponse from '../core/http-response'
import ServerError from '../core/server-error'
import ClientError from '../core/client-error'

class AnalyticsController {
  constructor(useCases) {
    this.useCases = useCases
  }

  //LEGACY
  async getUserCycles(req) {
    const { userId } = req.props
    const { startDate, endDate } = req.query

    if (!userId) throw ServerError.internal()

    const { getUserCyclesUseCase } = this.useCases
    const userCycles = await getUserCyclesUseCase.execute({
      userId,
      startDate,
      endDate,
    })

    if (!userCycles) return HttpResponse.noContent()

    return HttpResponse.ok({
      message: 'User Cycles Retrieved',
      userCycles,
    })
  }

  async getUserTimerActionsByUserId(req) {
    const { userId } = req.props

    if (!userId) throw ServerError.internal()

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

  async getUserTimerActionCyclesByUserId(req) {
    const { userId } = req.props
    const { startDate, endDate } = req.query

    if (!userId) throw ServerError.internal()

    const { getUserTimerActionCyclesByUserIdUseCase } = this.useCases
    const userCycles = await getUserTimerActionCyclesByUserIdUseCase.execute({
      userId,
      startDate,
      endDate,
    })

    if (!userCycles) return HttpResponse.noContent()

    return HttpResponse.ok({
      message: 'User Cycles Retrieved',
      userCycles,
    })
  }
}

export default AnalyticsController
