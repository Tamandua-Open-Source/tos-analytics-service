class AddInactiveUserActionUseCase {
  constructor({ analyticsRepository }) {
    this.analyticsRepository = analyticsRepository
  }

  async execute(userId) {
    return await this.analyticsRepository.addUserAction(userId, 11)
  }
}

export default AddInactiveUserActionUseCase
