class AddPauseIdleUserActionUseCase {
  constructor({ analyticsRepository }) {
    this.analyticsRepository = analyticsRepository
  }

  async execute(userId) {
    return await this.analyticsRepository.addUserAction(userId, 10)
  }
}

export default AddPauseIdleUserActionUseCase
