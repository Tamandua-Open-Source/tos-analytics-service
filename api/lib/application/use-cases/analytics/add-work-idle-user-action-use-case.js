class AddWorkIdleUserActionUseCase {
  constructor({ analyticsRepository }) {
    this.analyticsRepository = analyticsRepository
  }

  async execute(userId) {
    return await this.analyticsRepository.addUserAction(userId, 8)
  }
}

export default AddWorkIdleUserActionUseCase
