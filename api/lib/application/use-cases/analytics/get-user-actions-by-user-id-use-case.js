class GetUserActionsByUserIdUseCase {
  constructor({ analyticsRepository }) {
    this.analyticsRepository = analyticsRepository
  }

  async execute(userId) {
    return await this.analyticsRepository.getUserActionsByUserId(userId)
  }
}

export default GetUserActionsByUserIdUseCase
