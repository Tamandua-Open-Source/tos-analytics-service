class AddFinishUserActionUseCase {
  constructor({ analyticsRepository }) {
    this.analyticsRepository = analyticsRepository
  }

  async execute(userId) {
    return await this.analyticsRepository.addUserAction(userId, 6)
  }
}

export default AddFinishUserActionUseCase
