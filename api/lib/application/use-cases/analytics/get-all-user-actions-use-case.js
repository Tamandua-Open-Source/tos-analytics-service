class GetAllUserActionsUseCase {
  constructor({ analyticsRepository }) {
    this.analyticsRepository = analyticsRepository
  }

  async execute() {
    return await this.analyticsRepository.getAllUserActions()
  }
}

export default GetAllUserActionsUseCase
