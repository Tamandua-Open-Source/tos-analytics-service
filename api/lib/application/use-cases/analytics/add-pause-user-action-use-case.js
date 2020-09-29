class AddPauseUserActionUseCase {
  constructor({ analyticsRepository }) {
    this.analyticsRepository = analyticsRepository
  }

  async execute(userId) {
    return await this.analyticsRepository.addUserAction(userId, 4)
  }
}

export default AddPauseUserActionUseCase
