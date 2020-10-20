import HttpResponse from '../core/http-response'

class AnalyticsController {
  constructor(useCases) {
    this.useCases = useCases
  }

  async getUserCycles(req) {
    const { userId } = req.props
    const { startDate, endDate } = req.query

    try {
      const { getUserCyclesUseCase } = this.useCases
      const userCycles = await getUserCyclesUseCase.execute({
        userId,
        startDate,
        endDate,
      })

      if (!userCycles) {
        return HttpResponse.serverError()
      } else {
        return HttpResponse.ok({
          message: 'User cycles retrieved',
          userCycles,
        })
      }
    } catch (error) {
      console.error(error)
      return HttpResponse.serverError()
    }
  }

  async getAllUserActions(_req) {
    try {
      const { getAllUserActionsUseCase } = this.useCases
      const userActions = await getAllUserActionsUseCase.execute()

      if (!userActions) {
        return HttpResponse.serverError()
      } else {
        return HttpResponse.ok({
          message: 'User actions retrieved',
          userActions,
        })
      }
    } catch (error) {
      console.error(error)
      return HttpResponse.serverError()
    }
  }

  async getUserActions(req) {
    const { userId } = req.props

    if (!userId) {
      return HttpResponse.serverError()
    }

    try {
      const { getUserActionsUseCase } = this.useCases
      const userActions = await getUserActionsUseCase.execute(userId)

      if (!userActions) {
        return HttpResponse.serverError()
      } else {
        return HttpResponse.ok({
          message: 'User actions retrieved',
          userActions,
        })
      }
    } catch (error) {
      console.error(error)
      return HttpResponse.serverError()
    }
  }

  async addBreakIdleUserAction(req) {
    const { userId } = req.props

    if (!userId) {
      return HttpResponse.serverError()
    }

    try {
      const { addBreakIdleUserActionUseCase } = this.useCases
      const userAction = await addBreakIdleUserActionUseCase.execute(userId)

      if (!userAction) {
        return HttpResponse.serverError()
      } else {
        return HttpResponse.ok({
          message: 'User action added',
          userAction,
        })
      }
    } catch (error) {
      console.error(error)
      return HttpResponse.serverError()
    }
  }

  async addBreakUserAction(req) {
    const { userId } = req.props

    if (!userId) {
      return HttpResponse.serverError()
    }

    try {
      const { addBreakUserActionUseCase } = this.useCases
      const userAction = await addBreakUserActionUseCase.execute(userId)

      if (!userAction) {
        return HttpResponse.serverError()
      } else {
        return HttpResponse.ok({
          message: 'User action added',
          userAction,
        })
      }
    } catch (error) {
      console.error(error)
      return HttpResponse.serverError()
    }
  }

  async addFinishUserAction(req) {
    const { userId } = req.props

    if (!userId) {
      return HttpResponse.serverError()
    }

    try {
      const { addFinishUserActionUseCase } = this.useCases
      const userAction = await addFinishUserActionUseCase.execute(userId)

      if (!userAction) {
        return HttpResponse.serverError()
      } else {
        return HttpResponse.ok({
          message: 'User action added',
          userAction,
        })
      }
    } catch (error) {
      console.error(error)
      return HttpResponse.serverError()
    }
  }

  async addInactiveUserAction(req) {
    const { userId } = req.props

    if (!userId) {
      return HttpResponse.serverError()
    }

    try {
      const { addInactiveUserActionUseCase } = this.useCases
      const userAction = await addInactiveUserActionUseCase.execute(userId)

      if (!userAction) {
        return HttpResponse.serverError()
      } else {
        return HttpResponse.ok({
          message: 'User action added',
          userAction,
        })
      }
    } catch (error) {
      console.error(error)
      return HttpResponse.serverError()
    }
  }

  async addLoginUserAction(req) {
    const { userId } = req.props

    if (!userId) {
      return HttpResponse.serverError()
    }

    try {
      const { addLoginUserActionUseCase } = this.useCases
      const userAction = await addLoginUserActionUseCase.execute(userId)

      if (!userAction) {
        return HttpResponse.serverError()
      } else {
        return HttpResponse.ok({
          message: 'User action added',
          userAction,
        })
      }
    } catch (error) {
      console.error(error)
      return HttpResponse.serverError()
    }
  }

  async addPauseIdleUserAction(req) {
    const { userId } = req.props

    if (!userId) {
      return HttpResponse.serverError()
    }

    try {
      const { addPauseIdleUserActionUseCase } = this.useCases
      const userAction = await addPauseIdleUserActionUseCase.execute(userId)

      if (!userAction) {
        return HttpResponse.serverError()
      } else {
        return HttpResponse.ok({
          message: 'User action added',
          userAction,
        })
      }
    } catch (error) {
      console.error(error)
      return HttpResponse.serverError()
    }
  }

  async addPauseUserAction(req) {
    const { userId } = req.props

    if (!userId) {
      return HttpResponse.serverError()
    }

    try {
      const { addPauseUserActionUseCase } = this.useCases
      const userAction = await addPauseUserActionUseCase.execute(userId)

      if (!userAction) {
        return HttpResponse.serverError()
      } else {
        return HttpResponse.ok({
          message: 'User action added',
          userAction,
        })
      }
    } catch (error) {
      console.error(error)
      return HttpResponse.serverError()
    }
  }

  async addResumeUserAction(req) {
    const { userId } = req.props

    if (!userId) {
      return HttpResponse.serverError()
    }

    try {
      const { addResumeUserActionUseCase } = this.useCases
      const userAction = await addResumeUserActionUseCase.execute(userId)

      if (!userAction) {
        return HttpResponse.serverError()
      } else {
        return HttpResponse.ok({
          message: 'User action added',
          userAction,
        })
      }
    } catch (error) {
      console.error(error)
      return HttpResponse.serverError()
    }
  }

  async addStartCycleUserAction(req) {
    const { userId } = req.props

    if (!userId) {
      return HttpResponse.serverError()
    }

    try {
      const { addStartCycleUserActionUseCase } = this.useCases
      const userAction = await addStartCycleUserActionUseCase.execute(userId)

      if (!userAction) {
        return HttpResponse.serverError()
      } else {
        return HttpResponse.ok({
          message: 'User action added',
          userAction,
        })
      }
    } catch (error) {
      console.error(error)
      return HttpResponse.serverError()
    }
  }

  async addWorkIdleUserAction(req) {
    const { userId } = req.props

    if (!userId) {
      return HttpResponse.serverError()
    }

    try {
      const { addWorkIdleUserActionUseCase } = this.useCases
      const userAction = await addWorkIdleUserActionUseCase.execute(userId)

      if (!userAction) {
        return HttpResponse.serverError()
      } else {
        return HttpResponse.ok({
          message: 'User action added',
          userAction,
        })
      }
    } catch (error) {
      console.error(error)
      return HttpResponse.serverError()
    }
  }

  async addWorkUserAction(req) {
    const { userId } = req.props

    if (!userId) {
      return HttpResponse.serverError()
    }

    try {
      const { addWorkUserActionUseCase } = this.useCases
      const userAction = await addWorkUserActionUseCase.execute(userId)

      if (!userAction) {
        return HttpResponse.serverError()
      } else {
        return HttpResponse.ok({
          message: 'User action added',
          userAction,
        })
      }
    } catch (error) {
      console.error(error)
      return HttpResponse.serverError()
    }
  }
}

export default AnalyticsController
