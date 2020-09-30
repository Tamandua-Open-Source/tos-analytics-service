class AddBreakIdleUserActionUseCase {
  constructor({ analyticsRepository }) {
    this.analyticsRepository = analyticsRepository
  }

  async execute(userId) {
    return await this.analyticsRepository.addUserAction(userId, 9)
  }
}

export default AddBreakIdleUserActionUseCase
