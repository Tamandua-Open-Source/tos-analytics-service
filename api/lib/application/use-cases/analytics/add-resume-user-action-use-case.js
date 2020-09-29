class AddResumeUserActionUseCase {
  constructor({ analyticsRepository }) {
    this.analyticsRepository = analyticsRepository
  }

  async execute(userId) {
    return await this.analyticsRepository.addUserAction(userId, 5)
  }
}

export default AddResumeUserActionUseCase
