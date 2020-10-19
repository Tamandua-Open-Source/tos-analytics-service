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

    for (const i in cycle) {
      if (cycle[i].Action.name === 'start cycle') onStartCycleCount += 1
      if (cycle[i].Action.name === 'work') onWorkCount += 1
      if (cycle[i].Action.name === 'work idle') onWorkIdleCount += 1
      if (cycle[i].Action.name === 'break') onBreakCount += 1
      if (cycle[i].Action.name === 'break idle') onBreakIdleCount += 1
      if (cycle[i].Action.name === 'pause') onPauseCount += 1
      if (cycle[i].Action.name === 'pause idle') onPauseIdleCount += 1
      if (cycle[i].Action.name === 'resume') onResumeCount += 1
      if (cycle[i].Action.name === 'finish') onFinishCount += 1
      if (cycle[i].Action.name === 'inactive') onInactiveCount += 1
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
    }
  }
}

export default GetUserCyclesUseCase
