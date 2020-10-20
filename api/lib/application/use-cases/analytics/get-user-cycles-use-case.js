class GetUserCyclesUseCase {
  constructor({ analyticsRepository }) {
    this.analyticsRepository = analyticsRepository
  }

  async execute({ userId, startDate, endDate }) {
    const userActions = await this.analyticsRepository.getUserActionsBetween(
      userId,
      startDate,
      endDate
    )

    let cycles = []
    let currentCycle = []

    for (const i in userActions) {
      if (userActions[i].Action.name === 'start cycle') {
        if (currentCycle.length > 0) {
          cycles.push(this.mapToCycle(currentCycle))
        }
        currentCycle = []
      }

      currentCycle.push(userActions[i])

      if (i == userActions.length - 1) {
        cycles.push(this.mapToCycle(currentCycle))
      }
    }

    return cycles
  }

  mapToCycle(cycle) {
    const startCycleAction = cycle.find(
      (userAction) => userAction.Action.name === 'start cycle'
    )
    const startedAt = startCycleAction ? startCycleAction.createdAt : null

    const finishAction = cycle.find(
      (userAction) => userAction.Action.name === 'finish'
    )
    const endedAt = finishAction ? finishAction.createdAt : null

    let onStartCycleCount = 0
    let onWorkCount = 0
    let onWorkIdleCount = 0
    let onBreakCount = 0
    let onBreakIdleCount = 0
    let onPauseCount = 0
    let onPauseIdleCount = 0
    let onResumeCount = 0
    let onFinishCount = 0
    let onInactiveCount = 0

    let userStates = []
    let currentUserState = {}

    for (const i in cycle) {
      if (i == cycle.length - 1) {
        onFinishCount += 1
        break
      }

      currentUserState.startedAt = cycle[i].createdAt
      currentUserState.endedAt = cycle[parseInt(i) + 1].createdAt

      switch (cycle[i].Action.name) {
        case 'start cycle':
          onStartCycleCount += 1
          break
        case 'work':
          onWorkCount += 1
          currentUserState.state = 'WORK'
          userStates.push(currentUserState)
          currentUserState = {}
          break
        case 'work idle':
          onWorkIdleCount += 1
          currentUserState.state = 'WORK IDLE'
          userStates.push(currentUserState)
          currentUserState = {}
          break
        case 'break':
          onBreakCount += 1
          currentUserState.state = 'BREAK'
          userStates.push(currentUserState)
          currentUserState = {}
          break
        case 'break idle':
          onBreakIdleCount += 1
          currentUserState.state = 'BREAK IDLE'
          userStates.push(currentUserState)
          currentUserState = {}
          break
        case 'pause':
          onPauseCount += 1
          currentUserState.state = 'PAUSE'
          userStates.push(currentUserState)
          currentUserState = {}
          break
        case 'pause idle':
          onPauseIdleCount += 1
          currentUserState.state = 'PAUSE IDLE'
          userStates.push(currentUserState)
          currentUserState = {}
          break
        case 'resume':
          onResumeCount += 1
          break
        case 'finish':
          onFinishCount += 1
          break
        case 'inactive':
          onInactiveCount += 1
          break
        default:
          break
      }
    }

    return {
      startedAt: startedAt,
      endedAt: endedAt,
      onStartCycleCount,
      onWorkCount,
      onWorkIdleCount,
      onBreakCount,
      onBreakIdleCount,
      onPauseCount,
      onPauseIdleCount,
      onResumeCount,
      onFinishCount,
      onInactiveCount,
      userActions: cycle,
      userStates,
    }
  }
}

export default GetUserCyclesUseCase
