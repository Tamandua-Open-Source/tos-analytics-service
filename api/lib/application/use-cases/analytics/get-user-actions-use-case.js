class GetUserActionsUseCase {
  constructor({ analyticsRepository }) {
    this.analyticsRepository = analyticsRepository
  }

  async execute(userId) {
    return await this.analyticsRepository.getUserActions(userId)
  }
}

export default GetUserActionsUseCase
