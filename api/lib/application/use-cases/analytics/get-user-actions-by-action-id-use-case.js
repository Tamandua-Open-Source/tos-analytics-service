class GetUserActionsByActionIdUseCase {
  constructor({ analyticsRepository }) {
    this.analyticsRepository = analyticsRepository
  }

  async execute(actionId) {
    return await this.analyticsRepository.getUserActionsByActionId(actionId)
  }
}

export default GetUserActionsByActionIdUseCase
